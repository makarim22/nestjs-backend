import { PrismaClient } from '@prisma/client'
import { PrismaLibSql } from '@prisma/adapter-libsql'
import * as bcrypt from 'bcrypt'

const url = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.TURSO_AUTH_TOKEN;

const adapter = new PrismaLibSql({
  url,
  ...(authToken ? { authToken } : {}),
});
const prisma = new PrismaClient({ adapter })

// ─── Movie Data ────────────────────────────────────────────────────────────────
// Poster images via TMDB public CDN (no API key required for direct CDN access)
const movies = [
  {
    title: "Mulholland Drive",
    director: "David Lynch",
    releaseYear: 2001,
    rating: 10,
    watchDate: new Date("2024-01-14"),
    posterUrl: "https://image.tmdb.org/t/p/w500/gg3lgh7bnWOSz4lWWBpjDtZr0ck.jpg",
    theGood: "A hypnotic labyrinth of identity, desire, and Hollywood's devouring machinery.",
    theBad: "Deliberately opaque — those seeking linear narrative will find themselves unmoored.",
    review: "David Lynch's Mulholland Drive is not a film to be decoded — it is a film to be inhabited. Opening with a jitterbug contest bathed in golden light and ending in the grim darkness of the Winkie's diner, Lynch inverts the dream of Los Angeles with surgical, surrealist precision.\n\nNaomi Watts delivers a performance of extraordinary duality as Betty Elms, the bright-eyed ingenue arriving in Hollywood with wide-open hope, and Diane Selwyn, the hollowed-out wreck she becomes when the dream turns predatory. Laura Harring matches her every step as the amnesiac Rita, a figure who is simultaneously every classic film noir femme fatale and an act of radical subversion of that archetype.\n\nAngelo Badalamenti's score is the film's spine: lush, ominous, suffused with longing. It tells you everything Lynch refuses to say aloud. The Club Silencio sequence — one of the most devastating scenes in cinema — strips illusion down to its bones and dares you to feel something anyway.\n\nThis is cinema as psychoanalysis. It excavates obsession, failure, and the violence that Hollywood commits daily against the people who love it most. A genuine masterpiece.",
  },
  {
    title: "There Will Be Blood",
    director: "Paul Thomas Anderson",
    releaseYear: 2007,
    rating: 9,
    watchDate: new Date("2024-02-08"),
    posterUrl: "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
    theGood: "Daniel Day-Lewis commands every frame; an operatic portrait of American greed.",
    theBad: "At nearly three hours, it demands complete surrender — and offers no easy comfort in return.",
    review: "There Will Be Blood is an American epic drenched in the smell of oil and ambition. Paul Thomas Anderson adapts Upton Sinclair's Oil! into something far stranger and more personal: a character study of Daniel Plainview, a man who has sublimated every human impulse into the pure machinery of acquisition.\n\nDaniel Day-Lewis gives the most physically inhabited performance of the 21st century. His Daniel Plainview is a creature assembled from the raw materials of the frontier — cunning, contemptuous, magnificent. He speaks to community whilst despising it, adopts a son as a business prop, and ultimately cannot tolerate the company of anyone who might equal him.\n\nJohnny Greenwood's score is the film's dark heart — atonal, violent, mechanical. It refuses all sentimentality, just as Plainview refuses all sentiment. The final sequence in the bowling alley is both grotesque and cathartic, the logical endpoint of everything Anderson has been building.\n\nThis is a film about the founding myth of American capitalism: that the man willing to do anything will win everything. Anderson examines that myth without flinching.",
  },
  {
    title: "Chinatown",
    director: "Roman Polanski",
    releaseYear: 1974,
    rating: 10,
    watchDate: new Date("2023-11-20"),
    posterUrl: "https://image.tmdb.org/t/p/w500/bLHBh91MOSSPlrqelEkuvS1mU3j.jpg",
    theGood: "The definitive neo-noir. Faye Dunaway and Jack Nicholson are flawless.",
    theBad: "The bleak ending, while perfect, offers no catharsis — only recognition.",
    review: "Robert Towne's screenplay for Chinatown is the gold standard of Hollywood writing. Roman Polanski's direction is the gold standard of neo-noir filmmaking. Jack Nicholson plays J.J. Gittes with a confidence that curdles into helplessness as the conspiracy widens. Faye Dunaway is extraordinary as Evelyn Mulwray — withholding, wounded, finally tragic.\n\nThe film works as a detective story on its surface — water rights, land corruption, murder — but its true subject is the impossibility of doing good in a world structured by power. Gittes is a competent man who believes competence is enough. Polanski shows us exactly how wrong that assumption is.\n\nJerry Goldsmith's trumpet theme is aching, beautiful, inevitable. The period recreation of 1930s Los Angeles is immaculate. But what stays with you is the ending: a single, irrevocable act of violence, and the command to forget it. Polanski knows we cannot. Neither should we.",
  },
  {
    title: "The Godfather",
    director: "Francis Ford Coppola",
    releaseYear: 1972,
    rating: 10,
    watchDate: new Date("2023-09-05"),
    posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHzr4d4lc.jpg",
    theGood: "A seamless marriage of commerce and art. Every performance is definitive.",
    theBad: "None. This is cinema at its absolute apex.",
    review: "Fifty years on, The Godfather remains not simply a great film but an act of cultural geology — something so foundational that it is difficult to see it freshly, because it has become the lens through which we see everything else. Coppola's achievement is the complete translation of a pulp novel into Shakespearean tragedy.\n\nMarlon Brando's Don Corleone is one of cinema's great performances precisely because it is so withholding. He is a man who speaks quietly because he never needs to speak loudly. Al Pacino's Michael is the film's true subject: the transformation of an innocent into exactly the kind of man he swore never to become.\n\nThe baptism sequence — intercutting Michael's godfather ceremony with the orchestrated murders of every rival family — is the supreme montage in American cinema. Gordon Willis's cinematography is darkness used as meaning. Nino Rota's score is grief made audible.\n\nThe Godfather is not about the mafia. It is about America: the dream of safety, the price of power, the family as both refuge and prison.",
  },
  {
    title: "Blade Runner 2049",
    director: "Denis Villeneuve",
    releaseYear: 2017,
    rating: 9,
    watchDate: new Date("2024-03-12"),
    posterUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
    theGood: "Roger Deakins shoots the future as a fever dream of beautiful desolation.",
    theBad: "Its meditative pacing will lose viewers expecting a thriller; it demands patience.",
    review: "Denis Villeneuve does the impossible: he makes a sequel to Blade Runner that honors the original's melancholy without merely imitating it. Blade Runner 2049 is a film about what it means to have a story — to believe you are the protagonist of your own life — and about what happens when that belief is dismantled.\n\nRyan Gosling plays K with magnificent stillness. He is a replicant who hunts other replicants, a man without guaranteed interiority, who discovers a memory that might be real. Villeneuve spends 163 minutes with that question, refusing easy answers.\n\nRoger Deakins' cinematography rightfully won every award available to it. Each frame is a composition of desolate beauty: the orange dust storms over the ruins of Las Vegas, the cold grey of K's apartment, the white nothingness of the protein farm.\n\nThis is science fiction that trusts its audience to sit with loneliness and call it beauty.",
  },
  {
    title: "Rashomon",
    director: "Akira Kurosawa",
    releaseYear: 1950,
    rating: 9,
    watchDate: new Date("2023-12-01"),
    posterUrl: "https://image.tmdb.org/t/p/w500/kYAOlBHOXKR4YV8njkusTGgCfRV.jpg",
    theGood: "The invention of subjective narrative in cinema. Absolutely essential.",
    theBad: "The theatrical acting style of the period may initially create distance for modern viewers.",
    review: "Akira Kurosawa's Rashomon is the film that taught cinema how to lie, and in doing so, revealed the deepest truth about human nature: we are all the heroes of our own stories, and we will reshape reality to maintain that position.\n\nA samurai is dead. A bandit is accused. A wife is shamed. A woodcutter witnessed something. Over the course of 88 razor-precise minutes, Kurosawa presents four versions of a single event — each one internally consistent, each one self-serving, each one incompatible with the others. The film does not resolve the contradiction. It insists on it.\n\nToshiro Mifune's bandit is a force of nature — all sweat and laughter and animal energy. Kazuo Miyagawa's cinematography, particularly the sequences of sunlight through forest canopy, remains among the most beautiful in the medium.\n\nRashomon is not nihilistic about truth — it is realistic about self-deception. The final image is an act of faith in humanity that the rest of the film makes genuinely earned.",
  },
  {
    title: "Parasite",
    director: "Bong Joon-ho",
    releaseYear: 2019,
    rating: 10,
    watchDate: new Date("2024-05-10"),
    posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    theGood: "A cinematic miracle of tonal shifting. It effortlessly transitions from biting comedy to unbearable thriller, and finally to devastating tragedy.",
    theBad: "Its mechanical precision is so absolute that it can occasionally feel like observing a brilliant physics demonstration rather than a chaotic human story.",
    review: "Bong Joon-ho’s Parasite is a cinematic miracle: a film that functions simultaneously as a razor-sharp social satire, a Hitchcockian thriller, and a heartbreaking tragedy. The architecture of the film—both literal and narrative—is flawless, using the spatial divide of an ultra-modern mansion and a subterranean semi-basement to map the brutal, vertical inequalities of modern capitalism. It is a film about the geometry of class, where the wealthy live elevated above the city, enjoying the sunshine through massive glass windows, while the poor exist in a suffocating half-underground space, literally looking up at the feet of the people passing by on the street.\n\nEvery performance in the ensemble cast is perfectly calibrated, but Song Kang-ho stands out as Ki-taek, the patriarch of the Kim family. He plays a man whose easygoing grift slowly calcifies into desperate, world-shattering rage. The way Song's face changes during the climax—from subservient obedience to a terrifying realization of his own utter dehumanization—is one of the most haunting pieces of acting captured in the 21st century. His smell becomes the ultimate dividing line, an invisible barrier that no amount of clever grifting can wash away.\n\nThe famous 'peach sequence' is a masterclass in montage, scoring a hostile, parasitic takeover of a household to sweeping classical music with the precision of a Swiss watch. Bong Joon-ho edits this sequence like an action movie, turning the simple act of rubbing peach fuzz onto a housekeeper's back into an assassination. The pacing is utterly relentless, seducing the audience into cheering for the Kim family's ascent before violently ripping the rug out from under them—and us.\n\nThen comes the rainstorm. What is merely a minor inconvenience for the wealthy Park family—a ruined camping trip that leads to a cozy night sleeping in the living room—becomes an apocalyptic deluge for the Kims. The sequence where they are forced to flee down endless flights of stairs in the pouring rain, descending back into their flooded basement, visualizes social mobility as gravity. The water always flows downward, carrying the city's filth into the homes of those who have nowhere lower to go.\n\nUltimately, Parasite does not preach. It merely observes the terrifying reality that in a world structured by artificial scarcity, solidarity among the poor is the first casualty. The film posits that the true parasites are not the poor feeding off the rich, nor the rich feeding off the labor of the poor, but the capitalist system itself, which requires this eternal, bloody cycle to sustain it. A definitive masterpiece of our time.",
  },
  {
    title: "2001: A Space Odyssey",
    director: "Stanley Kubrick",
    releaseYear: 1968,
    rating: 10,
    watchDate: new Date("2024-06-01"),
    posterUrl: "https://image.tmdb.org/t/p/w500/ve72VxNqjGM69Uky4WTo2bK6rfq.jpg",
    theGood: "The most ambitious visual and philosophical experience ever put to film. It entirely rewrites the grammar of science fiction and transcends traditional narrative.",
    theBad: "The deliberate, glacial pacing and utter lack of conventional dialogue can be deeply alienating for those expecting a standard plot-driven thriller.",
    review: "Stanley Kubrick’s 2001: A Space Odyssey is less a traditional narrative film than a pure, overwhelming sensory experience, a monument of cinematic ambition that attempts to map the entire trajectory of human evolution. From the dawn of man in the African desert to the cold, sterile expanse of Jupiter, Kubrick entirely rewrites the grammar of science fiction. The famous match cut—from a bone thrown into the air by a prehistoric ape to an orbiting nuclear satellite millions of years later—compresses the entirety of human history into a single frame. It argues that all of human civilization, despite its technological majesty, is merely a continuation of that first violent impulse.\n\nThe film’s central conflict occurs in its middle act, a terrifyingly quiet struggle between the astronauts Dave Bowman and Frank Poole, and the flawlessly polite, perfectly terrifying HAL 9000 supercomputer. This segment remains the definitive exploration of artificial intelligence in cinema. HAL's slow descent into paranoia and murder is paradoxically the most 'human' element in a film that often feels as cold and vast as the vacuum of space it depicts. When HAL pleads, 'I'm afraid, Dave. My mind is going,' it evokes a profound, unsettling tragedy. We built machines in our own image, only to give them our neuroses and our capacity for violence.\n\nKubrick’s insistence on scientific accuracy—the absolute silence of space, the terrifying reality of zero gravity, the isolation of deep space travel—creates a sense of dread that is palpable. The sequence where Bowman must retrieve Poole’s body in complete silence, save for the sound of his own breathing inside his suit, is a masterclass in tension. It is a horror movie where the monster is the indifferent void of the universe itself.\n\nDouglas Trumbull's practical visual effects remain astonishing more than half a century later. They do not merely hold up; they surpass modern CGI because they possess a tangible, photographic reality. This culminates in the hallucinatory 'Star Gate' sequence, an incomprehensible journey through time, space, and consciousness that defies rational explanation. It is abstract art on a monumental scale.\n\nTo watch 2001 is to surrender to Kubrick’s absolute, uncompromising control. It is a film that refuses to explain itself, offering no easy answers and no comfortable resolutions. Instead, it demands to be felt, experienced, and debated. It ends not with an answer, but with a question: the Star Child looking back at Earth, an infant deity waiting to be born. It is the ultimate cinematic achievement.",
  },
  {
    title: "Spirited Away",
    director: "Hayao Miyazaki",
    releaseYear: 2001,
    rating: 10,
    watchDate: new Date("2024-04-18"),
    posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
    theGood: "A boundless flight of pure imagination grounded in deep emotional truth, featuring exquisite hand-drawn animation and a profoundly moving score.",
    theBad: "None. It is a perfect fairy tale that speaks equally to the child and the adult in every viewer.",
    review: "Spirited Away is the undisputed pinnacle of Studio Ghibli’s achievement, a film that bursts with such overwhelming, chaotic visual imagination that it constantly threatens to spill out of the frame. Hayao Miyazaki crafts a coming-of-age story wrapped in the logic of a dream, where a sullen, fearful young girl named Chihiro must navigate a terrifying and wondrous bathhouse for spirits in order to save her parents, who have been transformed into pigs by their own gluttony.\n\nThe world-building is staggering in its density and detail. Every background is a painted masterpiece of impossible architecture. Every creature design—from the grotesque, pulsating Radish Spirit to the haunting, incredibly lonely No-Face—feels both entirely original and deeply rooted in ancient Japanese folklore. The bathhouse itself is a bustling, hierarchical nightmare of labor and consumption, serving as a brilliant allegory for the crushing weight of modern capitalism and the commodification of the soul. Yubaba, the tyrannical witch who runs the bathhouse, controls her workers by stealing their names, literalizing the loss of identity in the modern workforce.\n\nYet beneath the fantastical trappings and the biting social commentary, Spirited Away is a deeply empathetic and tender story about resilience, finding one's courage, and the supreme importance of remembering who you are. Chihiro does not succeed by becoming a warrior; she succeeds through empathy, hard work, and a stubborn refusal to let the cruel world harden her heart. Her interactions with Haku, the mysterious boy who helps her, form the emotional spine of the film—a pure, platonic love story that is genuinely moving.\n\nThe animation itself is a marvel of the hand-drawn medium. Miyazaki pays obsessive attention to the physics of his world: the heavy, squishy weight of the enchanted food, the terrifying fluidity of water when the river spirit is cleansed, the painstaking effort Chihiro exerts simply to walk down a steep flight of stairs. This physical grounding makes the magic feel real.\n\nJoe Hisaishi’s score is the final, perfect ingredient, a sweeping, melancholic masterpiece that elevates every scene. The iconic train sequence, moving silently across a flooded, endless ocean track under a blue sky, is perhaps the most beautiful and melancholy moment Miyazaki has ever put to film. It is a moment of pure cinematic poetry, a pause for breath in a chaotic world. A true, enduring work of art.",
  },
  {
    title: "The Matrix",
    director: "The Wachowskis",
    releaseYear: 1999,
    rating: 10,
    watchDate: new Date("2024-06-05"),
    posterUrl: "https://image.tmdb.org/t/p/w500/aOIuZAjPaRIE6CMzbazvcHuHXDc.jpg",
    theGood: "A paradigm-shifting fusion of high-concept philosophy, groundbreaking visual effects, and kinetic Hong Kong martial arts that permanently altered pop culture.",
    theBad: "The sheer ubiquity of its parodies and imitators can sometimes obscure the absolute brilliance and originality of the film itself.",
    review: "In 1999, The Matrix did not merely release in theaters; it exploded into the global consciousness, permanently rewiring the DNA of blockbuster cinema. The Wachowskis achieved an impossible alchemy, fusing the dizzying wire-fu choreography of Hong Kong action cinema, the cyberpunk aesthetics of William Gibson, the anime influences of Ghost in the Shell, and the philosophical inquiries of Jean Baudrillard into a sleek, leather-clad masterpiece. It is the rare action film that is as thrilling intellectually as it is viscerally.\n\nThe narrative brilliance of The Matrix lies in its central conceit: that the drab, cubicle-bound reality of 1999 is actually a massive multiplayer simulation designed to keep humanity docile while machines harvest our bio-electricity. It tapped directly into a profound end-of-the-millennium anxiety, a collective feeling that the modern world was artificial and suffocating. Keanu Reeves is perfectly cast as Thomas Anderson/Neo; his inherent stillness and blank-slate confusion make him the ideal avatar for the audience's awakening.\n\nVisually, the film established a language that defined the following decade. The sickly, oppressive green tint of the Matrix contrasts sharply with the cold, harsh blue and industrial grime of the real world. The invention of 'bullet time'—using a rig of dozens of still cameras to rotate around a subject moving in extreme slow motion—was not just a cheap gimmick, but a narrative necessity. It visually communicated the moment Neo began to perceive, and thus manipulate, the code of his reality. When he dodges bullets on the rooftop, cinema itself felt like it had learned a new trick.\n\nBeyond the action, the performances anchor the film's philosophical weight. Laurence Fishburne's Morpheus brings a towering, gravitas-laden presence, operating with the unwavering conviction of a religious zealot. Hugo Weaving's Agent Smith is the film's dark triumph—a sentient computer program whose seething hatred for humanity is so palpable and intensely petty that he transcends his programming to become the ultimate nemesis.\n\nThe Matrix is more than just a stylish action movie; it is an enduring modern myth about self-actualization, rebellion, and the terrifying price of truth. Taking the red pill remains one of the most potent metaphors in modern storytelling. It is a masterwork of commercial cinema that actually had something profound to say.",
  },
  {
    title: "Seven Samurai",
    director: "Akira Kurosawa",
    releaseYear: 1954,
    rating: 10,
    watchDate: new Date("2024-05-20"),
    posterUrl: "https://image.tmdb.org/t/p/w500/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
    theGood: "The blueprint for the modern action epic. Kurosawa’s mastery of movement, characterization, and editing remains unsurpassed in cinematic history.",
    theBad: "The three-and-a-half-hour runtime requires dedication, but it is necessary for the immense emotional payoff of the final battle.",
    review: "There is cinema before Seven Samurai, and there is cinema after it. Akira Kurosawa’s 1954 epic is the undisputed blueprint for the modern ensemble action film, laying the groundwork for everything from The Magnificent Seven to The Avengers. Yet, despite decades of imitation, Kurosawa's masterpiece remains completely unrivaled in its emotional depth, kinetic energy, and profound understanding of human nature in the face of violence.\n\nThe premise is famously simple: a desperate farming village, facing certain devastation by heavily armed bandits after the harvest, hires seven masterless samurai (ronin) for the meager price of three meals of rice a day. From this setup, Kurosawa constructs a towering 207-minute narrative that dedicates its entire first half to meticulous, patient character building. We don't just learn who these samurai are; we learn how they fight, why they fight, and the profound tragedy of their obsolescence in a changing Japan. Takashi Shimura’s Kambei is the weary but unbroken tactical center, while Toshiro Mifune’s Kikuchiyo—a volatile, screaming, deeply insecure farmer-turned-warrior—delivers a performance of such explosive, animalistic energy that he threatens to tear the screen apart.\n\nKurosawa's true genius lies in his absolute mastery of motion. The film is intensely kinetic. Rain, wind, dust, and galloping horses are captured with a dynamic multi-camera setup that was revolutionary for its time. When the violence finally erupts, it is not stylized or glorious; it is desperate, chaotic, and muddy. The final battle, fought in a torrential downpour, is a masterclass in spatial geography. Kurosawa always ensures the audience knows exactly where every character is, how many bandits are left, and what the strategic stakes are. It is the greatest action sequence ever filmed, precisely because we care so deeply about the men fighting it.\n\nBeneath the swords and arrows, Seven Samurai is a searing exploration of class barriers. The samurai and the farmers need each other, but they do not understand each other. Kikuchiyo’s famous, blistering monologue about the hypocrisy of the samurai and the cunning deceit of the farmers bridges this gap, exposing the ugly truth of their feudal society. They are united only by survival.\n\nThe ending of Seven Samurai is profoundly melancholy. The village is saved, the planting season begins with joyous song, but the surviving samurai stand apart, staring at the graves of their fallen comrades. As Kambei wisely notes, the farmers are the true victors; the samurai have lost again. It is a perfectly bittersweet conclusion to a flawless film. A mandatory viewing experience for anyone who loves the art of moving pictures.",
  }
]

// ─── Book Data ─────────────────────────────────────────────────────────────────
// Cover images via Open Library Covers API — free, no API key required
// Format: https://covers.openlibrary.org/b/isbn/{ISBN}-L.jpg
const books = [
  {
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    publishYear: 1985,
    rating: 10,
    readDate: new Date("2024-01-30"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/0679722342-L.jpg",
    theGood: "The most uncompromising novel in the American canon. McCarthy at his absolute apex.",
    theBad: "The violence is relentless and purposeful — not for the faint-hearted or the incurious.",
    review: "Blood Meridian is the great American novel that no one wants to name as such, because to do so is to confront what it says about America. Cormac McCarthy's 1985 masterwork recounts the exploits of the Glanton Gang — a historical band of mercenaries hired to scalp Apache along the US-Mexico border in 1849 — and renders this history as something between an Old Testament epic and a philosophical nightmare.\n\nThe Judge is one of literature's supreme villains and one of its supreme ideas: a seven-foot albino polymath who dances, plays the fiddle, speaks every language, and articulates a philosophy of war as the supreme human sacrament. He is terrifying not because he is irrational but because he is entirely too coherent. His arguments are difficult to refute. That difficulty is the point.\n\nMcCarthy's prose in Blood Meridian is biblical in its cadence and geological in its patience. He describes violence with the same attention he gives to landscape — without horror, without extenuation. The scalping scenes are not worse than the sunrise scenes. Both are described with the same unstinting clarity.\n\nThis is a book that believes the capacity for violence is not aberrant but central to human nature, and it presents that belief with such extraordinary artistry that you cannot dismiss it. You can only survive it.",
  },
  {
    title: "Middlemarch",
    author: "George Eliot",
    publishYear: 1871,
    rating: 10,
    readDate: new Date("2023-10-15"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/0141439548-L.jpg",
    theGood: "The most psychologically precise portrait of human failing and grace in the English language.",
    theBad: "Its length demands sustained attention that the algorithmic era conspires against.",
    review: "Virginia Woolf called Middlemarch one of the few English novels written for grown-up people. After repeated readings across two decades, I find myself unable to improve on that assessment. George Eliot's novel of provincial English life in the 1830s is not merely a great book — it is a complete account of human moral experience.\n\nDorothea Brooke wants to do good in the world and discovers, repeatedly, that the world is not structured to reward that impulse. Lydgate arrives with scientific ambitions and is slowly consumed by financial anxiety and a fatal marriage. Bulstrode, the town's pious banker, holds his respectability together with compounding lies until the weight becomes insupportable.\n\nEven Casaubon — the dried-out pedant Dorothea wrongly marries — is given an interior life Eliot refuses to ridicule. Her famous Finale describes Dorothea's unhistoric acts — the small kindnesses, the personal sacrifices, the moments of grace — as the cumulative stuff of the growing good of the world.\n\nThis is moral philosophy in novelistic form, and it remains the most convincing version of that form I have encountered.",
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishYear: 1851,
    rating: 9,
    readDate: new Date("2024-02-20"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/0142437247-L.jpg",
    theGood: "The ocean as metaphysics. Ahab as the apotheosis of American obsessive individualism.",
    theBad: "The cetological chapters require a tolerance for digression that not all readers possess.",
    review: "Call me Ishmael. Three words, and you are already inside one of the strangest, most capacious novels in the language. Melville's Moby-Dick is not a whaling adventure with philosophical pretensions — it is a philosophical treatise that uses whaling as its vehicle, its symbol, its object of obsessive, encyclopedic love.\n\nCaptain Ahab is the great American archetype: the man whose singular purpose has curdled into madness, who has converted personal grievance into cosmic principle, and who will drag everyone around him toward destruction in service of his private war with the universe. He is magnificent. He is insane. He is impossible to look away from.\n\nThe cetological chapters — on the whiteness of the whale, on the taxonomy of cetaceans, on the try-works — are not the novel's flaw. They are where Melville builds the whale into something larger than narrative can contain. They are essays in wonder.\n\nThis is the novel that invented American ambition as literary subject. Everything from Blood Meridian to contemporary literary fiction stands in its enormous shadow.",
  },
  {
    title: "In Search of Lost Time",
    author: "Marcel Proust",
    publishYear: 1913,
    rating: 10,
    readDate: new Date("2023-08-10"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/0812972325-L.jpg",
    theGood: "The most complete examination of memory, time, and consciousness in literary history.",
    theBad: "It is seven volumes long and absolutely uninterested in accommodating the impatient.",
    review: "Marcel Proust's novel is not a novel one reads so much as one inhabits. Over the course of seven volumes — approximately 1.5 million words in French — Proust builds an entire civilization of consciousness, a complete account of what it is to be a self in time.\n\nThe famous madeleine scene, in which the taste of a small cake dipped in tea triggers a cascade of involuntary memory, is rightly iconic — but it is only the first note of a symphony. Proust's great subject is the gap between what we experience and what we remember, between who we are and who we imagine ourselves to be.\n\nThe social world of the novel — the Faubourg Saint-Germain, the salons, the seaside at Balbec — is rendered with a sociological precision that rivals Balzac. But Proust is ultimately uninterested in society as spectacle. He is interested in society as the medium through which the self encounters and misunderstands other selves.\n\nThe tragedy of Swann's love for Odette — loving an illusion, discovering the reality too late — is the pattern that repeats throughout, always with different names, never with different conclusions.",
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    publishYear: 1987,
    rating: 10,
    readDate: new Date("2024-04-05"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/1400033411-L.jpg",
    theGood: "Morrison's prose is incantatory, devastating. The most necessary novel about American slavery.",
    theBad: "It demands emotional courage that not all readers arrive with — and that is entirely appropriate.",
    review: "Toni Morrison's Beloved is the novel that made the ghost story into moral history. Published in 1987, it tells the story of Sethe, a former enslaved woman living in Cincinnati in 1873, haunted by the malevolent spirit of her dead infant daughter — a daughter she killed herself, to spare her from slavery.\n\nMorrison does not explain this act, mitigate it, or sentimentalize it. She places it at the center of her novel and asks us to inhabit its logic. Slavery, she argues, is not merely a historical institution but a violence against the self — against one's capacity to love, to remember, to be known.\n\nThe prose is unlike any other American novelist's: incantatory, circling, moving through time with a logic that is emotional rather than chronological. The novel's famous last pages are an act of formal genius that enacts in language what the novel argues about memory: we cannot pass it on; we cannot not pass it on.\n\nBeloved won the Pulitzer Prize in 1988. Morrison won the Nobel Prize in 1993. Both awards were insufficient.",
  },
  {
    title: "The Master and Margarita",
    author: "Mikhail Bulgakov",
    publishYear: 1967,
    rating: 9,
    readDate: new Date("2024-03-28"),
    coverUrl: "https://covers.openlibrary.org/b/isbn/0140455044-L.jpg",
    theGood: "A satirical masterpiece of astonishing range — funny, tragic, metaphysically wild.",
    theBad: "The dual narrative requires patience to bridge; the novel rewards but demands full commitment.",
    review: "Mikhail Bulgakov began The Master and Margarita in 1928 and worked on it until his death in 1940, knowing it would never be published in his lifetime. It was finally published in censored form in 1966. That gap between creation and revelation is not incidental — it is part of the novel's meaning.\n\nThe Devil visits Soviet Moscow in the form of Professor Woland, accompanied by a naked witch, a giant talking black cat, and a hitman who moonlights as a choirmaster. The chaos they unleash on the literary and bureaucratic establishment of 1930s Moscow is savage satire.\n\nIntercut with this Satanic farce is a parallel narrative: Pontius Pilate's encounter with Yeshua Ha-Nozri — a version of the Passion that is neither hagiography nor debunking, but something stranger and more honest.\n\nThe love story between the Master — a writer whose novel about Pilate has been destroyed by Soviet critics — and Margarita, who makes a bargain with the Devil to save him, gives the novel its heart. This is a novel that believes in art as the one power that outlasts all systems of power.",
  },
]

async function main() {
  console.log("Seeding database...")

  const hashedPassword = await bcrypt.hash("password123", 10)

  const user = await prisma.user.upsert({
    where: { email: "admin@example.com" },
    update: { password: hashedPassword },
    create: {
      email: "admin@example.com",
      password: hashedPassword,
      name: "The Editor",
      role: "ADMIN",
    },
  })

  console.log("Admin user ready:", user.email)

  // Clear existing reviews before re-seeding
  await prisma.movieReview.deleteMany({ where: { authorId: user.id } })
  await prisma.bookReview.deleteMany({ where: { authorId: user.id } })
  console.log("Cleared previous reviews")

  for (const movie of movies) {
    const created = await prisma.movieReview.create({
      data: { ...movie, authorId: user.id, status: 'APPROVED' },
    })
    console.log("Movie:", created.title, "->", created.posterUrl)
  }

  for (const book of books) {
    const created = await prisma.bookReview.create({
      data: { ...book, authorId: user.id, status: 'APPROVED' },
    })
    console.log("Book:", created.title, "->", created.coverUrl)
  }

  console.log("\nSeed complete: 6 movies (TMDB CDN) + 6 books (Open Library)")
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
