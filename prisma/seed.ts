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
  },
  {
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    releaseYear: 1994,
    rating: 10,
    watchDate: new Date("2024-05-25"),
    posterUrl: "https://image.tmdb.org/t/p/w500/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    theGood: "A virtuosic explosion of dialogue, pop culture referencing, and non-linear storytelling that redefined independent cinema in the 1990s.",
    theBad: "Its gleeful deployment of extreme violence and offensive language makes it inherently abrasive and divisive for some audiences.",
    review: "When Pulp Fiction premiered at Cannes in 1994, it did not just win the Palme d'Or; it completely reshaped the landscape of independent cinema. Quentin Tarantino took the trashy, disposable tropes of mid-century pulp magazines and B-movies—the hitman, the gangster's moll, the rigged boxing match, the botched robbery—and elevated them into something bordering on high art through sheer, unadulterated cinematic verve and linguistic acrobatics.\n\nThe structural genius of Pulp Fiction lies in its non-linear narrative. By presenting three interwoven stories out of chronological order, Tarantino fundamentally alters how the audience experiences tension and resolution. Characters who die in the middle of the film walk out of a diner alive in the final scene. This circularity suggests a world where narrative itself is a playground, where the inevitability of death can be circumvented simply by rewinding the reel. It forces the audience to pay attention not to what happens next, but to how it is happening right now.\n\nThe dialogue is the film's true special effect. It is a hyper-stylized, endlessly quotable blend of mundane observations and profound philosophical inquiries. The opening conversation between hitmen Jules (Samuel L. Jackson) and Vincent (John Travolta) about European fast-food nomenclature is revolutionary precisely because it gives interiority to characters who, in any other movie, would merely be silent instruments of death. Samuel L. Jackson’s performance as Jules, a hitman experiencing an aggressive spiritual awakening, remains the terrifying, magnetic core of the film.\n\nFurthermore, the soundtrack functions as a secondary script, reviving forgotten surf-rock and soul tracks to dictate the emotional tenor of every scene. The iconic twist contest at Jack Rabbit Slims, set to Chuck Berry, is a masterclass in staging and mood, a moment of pure, joyous cinematic release before the ensuing chaos.\n\nPulp Fiction is loud, violent, and utterly unapologetic. It spawned a decade of pale imitators attempting to capture its lightning in a bottle, but none succeeded because none possessed Tarantino's encyclopedic love of cinema. It is a postmodern masterpiece that proves that even the cheapest cultural trash can be spun into gold.",
  },
  {
    title: "Goodfellas",
    director: "Martin Scorsese",
    releaseYear: 1990,
    rating: 10,
    watchDate: new Date("2024-06-02"),
    posterUrl: "https://image.tmdb.org/t/p/w500/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    theGood: "The most kinetic, visceral, and unsentimental gangster film ever made. The pacing is utterly relentless, fueled by immaculate editing and a flawless soundtrack.",
    theBad: "The moral absolute vacuum inhabited by its protagonists can be suffocating; it refuses to offer any redemption or traditional catharsis.",
    review: "Martin Scorsese’s Goodfellas opens with a brutal murder in the trunk of a car, followed immediately by Henry Hill’s famously sociopathic declaration: 'As far back as I can remember, I always wanted to be a gangster.' From that moment on, the film never stops moving. It is a terrifying, exhilarating, three-decade rush through the blood-soaked veins of the American Mafia, entirely stripped of the operatic romanticism found in The Godfather.\n\nGoodfellas is an anthropological study of a closed society. Scorsese is obsessed with the rituals of mob life—how they eat, how they dress, how they spend money, and how casually they kill. The film captures the terrifying seduction of a life without rules, where walking through the back door of the Copacabana club feels like ascending to Olympus. The famous unbroken Steadicam shot following Henry (Ray Liotta) and Karen (Lorraine Bracco) into the club is not just a technical flex; it is a visual representation of the intoxicating power and privilege that draws them into the abyss.\n\nThe performances are unanimously towering. Ray Liotta is perfectly cast as the ambitious, permanently sweating outsider trying to belong. Robert De Niro’s Jimmy Conway is a masterclass in quiet menace, a man whose paranoia eventually overrides his loyalty. But it is Joe Pesci’s Tommy DeVito who steals the film. Pesci plays Tommy as a terrifying force of nature—hilarious one second and homicidally enraged the next. The 'How am I funny?' scene is a brilliant distillation of the terrifying tightrope walk of mob social dynamics.\n\nThelma Schoonmaker’s editing is the film’s heartbeat. She aggressively utilizes freeze-frames, jump cuts, and a blistering pop-music soundtrack to simulate the manic, cocaine-fueled paranoia of Henry's eventual downfall. The sequence detailing May 11, 1980—the day Henry is busted—is a masterpiece of escalating anxiety, perfectly capturing the frantic collapse of a life built entirely on adrenaline.\n\nGoodfellas refuses to apologize for its protagonists. It presents them as greedy, violent, and ultimately pathetic rats who turn on each other the moment the pressure gets too high. It is a searing indictment of the American Dream, achieved through some of the most dynamic filmmaking of the 20th century.",
  },
  {
    title: "Stalker",
    director: "Andrei Tarkovsky",
    releaseYear: 1979,
    rating: 10,
    watchDate: new Date("2024-05-15"),
    posterUrl: "https://image.tmdb.org/t/p/w500/A31sXEC1R2K2iZWe71o0W952o6w.jpg",
    theGood: "A profound, meditative journey into the human soul. The cinematography is bleakly gorgeous, and its philosophical depth is completely unparalleled in the genre.",
    theBad: "Extremely slow, demanding, and utterly devoid of conventional sci-fi spectacle. It requires the viewer's absolute patience and full spiritual engagement.",
    review: "Andrei Tarkovsky’s Stalker is science fiction stripped of all its conventional mechanics. There are no lasers, no spaceships, no alien monsters. The special effects consist entirely of wind moving through grass, water flowing over rusted machinery, and a dog walking silently through a ruined landscape. It is a deeply spiritual, incredibly demanding film that functions less as a narrative and more as an act of cinematic meditation.\n\nThe premise is deceptively simple: a guide, known as the Stalker, leads two clients—a cynical Writer and a pragmatic Professor—into a heavily guarded, mysterious territory called the 'Zone.' Deep within the Zone is the 'Room,' a place that supposedly grants a person's deepest, most innermost desire. To reach it, they must navigate invisible, deadly traps by throwing nuts tied with strips of cloth. The journey is an externalization of an internal crisis.\n\nTarkovsky’s visual language is unmistakable. The world outside the Zone is shot in a sickly, monochromatic sepia tone, representing the soul-crushing despair of modern life. When they cross the threshold into the Zone, the film blooms into color. But the Zone is not a paradise; it is an overgrown, post-industrial wasteland of decaying tanks, ruined factories, and endless, flowing water. The cinematography is hauntingly beautiful, lingering on incredibly long, unbroken takes that force the audience to confront the silence and the weight of time passing.\n\nThe dialogue between the three men forms the philosophical core of the film. It is a relentless interrogation of faith, art, science, and the terrifying nature of desire. The Stalker argues that human weakness and vulnerability are our greatest strengths, while the Writer and Professor are paralyzed by their own intellects. When they finally reach the threshold of the Room, they are confronted with a horrifying realization: they do not actually know what their deepest desires are, and they are terrified to find out.\n\nStalker is a film about the agony of hope. It was filmed under brutal, toxic conditions that eventually claimed Tarkovsky's life, lending the film an almost religious sense of sacrifice. It is a dense, difficult masterpiece that rewards patience with a profound sense of melancholy and awe. It is not a film you merely watch; it is a film you endure and internalize.",
  },
  {
    title: "The Shining",
    director: "Stanley Kubrick",
    releaseYear: 1980,
    rating: 9,
    watchDate: new Date("2024-06-03"),
    posterUrl: "https://image.tmdb.org/t/p/w500/b6ko0IKC8MdYBBPkkA1aBPLe2k5.jpg",
    theGood: "The ultimate exercise in atmospheric dread. The Steadicam work and production design create a deeply unsettling, inescapable nightmare of isolation.",
    theBad: "Stephen King famously hated the cold, unfeeling nature of the adaptation, which sacrifices the novel's emotional tragedy for sheer, suffocating terror.",
    review: "Stanley Kubrick’s adaptation of Stephen King’s The Shining is arguably the most analyzed, dissected, and obsessed-over horror film in cinematic history. Where King’s novel was a deeply personal tragedy about a good man destroyed by alcoholism, Kubrick’s film is something much colder and more terrifying: an exploration of the absolute hostility of isolation, and a portrait of a man who was perhaps always waiting for an excuse to murder his family.\n\nThe true star of the film is the Overlook Hotel itself. Kubrick’s legendary production design creates a space that is physically impossible—doors that lead nowhere, windows that shouldn't exist, and endlessly sprawling corridors bathed in aggressive, nauseating patterns. The revolutionary use of the newly invented Steadicam turns the hotel into a predatory labyrinth. When the camera glides behind young Danny on his tricycle, alternating between the roar of the wooden floorboards and the dead silence of the carpets, the tension becomes almost unbearable without a single scare occurring.\n\nJack Nicholson’s performance as Jack Torrance is notoriously untethered. He does not undergo a slow descent into madness; he arrives at the hotel already vibrating with contempt and barely suppressed rage. The isolation merely strips away his social conditioning. Conversely, Shelley Duvall’s performance as Wendy is a grueling marathon of pure, unadulterated terror. The psychological toll of the shoot on Duvall is well-documented, and that very real exhaustion bleeds onto the screen, making her desperation agonizingly palpable.\n\nKubrick utilizes horror tropes—creepy twins, elevators full of blood, rotting ghosts—but frames them with clinical detachment. The lighting is bright; there are almost no shadows in the Overlook. The horror happens in plain sight. The dissonant, terrifying score by Wendy Carlos and Rachel Elkind, combined with the screeching strings of Penderecki, ensures the audience is constantly on edge.\n\nThe Shining remains a monolith of the genre because it refuses to provide comfort or closure. Its ambiguous ending and dense, confusing symbolism invite endless interpretation. It is a film that gets under your skin and stays there, echoing in the empty hallways of the mind long after the credits roll.",
  },
  {
    title: "Everything Everywhere All at Once",
    director: "Daniel Kwan and Daniel Scheinert",
    releaseYear: 2022,
    rating: 10,
    watchDate: new Date("2024-05-28"),
    posterUrl: "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
    theGood: "A miraculous tightrope walk between absurd maximalist sci-fi comedy and deeply affecting family drama. It is bursting with sheer, unbridled creativity.",
    theBad: "The sheer volume of visual and narrative chaos in the second act can be overwhelming and exhausting for viewers unaccustomed to hyper-kinetic pacing.",
    review: "Everything Everywhere All at Once is a cinematic anomaly—a film that attempts to compress the infinite, terrifying chaos of the multiverse into a story about a middle-aged Chinese immigrant woman trying to finish her taxes. Directors Daniel Kwan and Daniel Scheinert (the Daniels) have crafted a masterpiece of maximalist storytelling, successfully marrying the absurd, juvenile humor of the internet age with a profound, tear-jerking exploration of generational trauma, existential dread, and the radical power of kindness.\n\nMichelle Yeoh delivers the performance of a lifetime as Evelyn Wang, a laundromat owner crushed by the weight of her own unrealized potential and her strained relationships with her husband, Waymond (Ke Huy Quan), and her daughter, Joy (Stephanie Hsu). When Evelyn is thrust into a multiverse-spanning conflict against an omnipotent nihilist named Jobu Tupaki (who is a fractured version of her own daughter), the film explodes into a dizzying array of martial arts, hot dog fingers, sentient rocks, and raccoon chefs. The editing is nothing short of miraculous, managing to keep dozens of chaotic parallel universes emotionally and narratively coherent.\n\nHowever, the multiverse in this film is not a corporate playground for IP cameos; it is a philosophical metaphor for the overwhelming anxiety of the modern condition. The central antagonist, Jobu Tupaki, represents the black hole of millennial nihilism—the feeling that because we can see every possible life we could have lived, and because nothing truly matters on a cosmic scale, we should simply surrender to the void. The 'Everything Bagel' is the ultimate symbol of depression: an accretion disk of overwhelming information that crushes the soul.\n\nThe film’s brilliant counter-argument is delivered by Ke Huy Quan’s Waymond, whose gentle optimism is revealed not as naivety, but as an active, courageous choice in the face of a cruel universe. The climax of the film rejects the traditional violent resolution of an action movie; Evelyn wins not by defeating her enemies, but by radically accepting them, understanding their pain, and choosing empathy over apathy.\n\nEverything Everywhere All at Once is chaotic, loud, weird, and incredibly beautiful. It takes the most absurd, ridiculous concepts imaginable and uses them to drill directly into the human heart. It is a profound statement that even in an infinite universe where nothing matters, we can choose to make the people right in front of us matter. A monumental achievement.",
  },
  {
    title: "In the Mood for Love",
    director: "Wong Kar-wai",
    releaseYear: 2000,
    rating: 10,
    watchDate: new Date("2024-06-06"),
    posterUrl: "https://placehold.co/500x750/3a0000/ffcc00/png?text=In+the+Mood+for+Love",
    theGood: "The most visually intoxicating and emotionally devastating romance of the 21st century. Every frame is a painting of repressed desire.",
    theBad: "The deliberately languid pacing and lack of traditional plot resolution can frustrate viewers seeking conventional romantic catharsis.",
    review: "Wong Kar-wai’s In the Mood for Love is not a film about an affair; it is a film about the devastating, suffocating space that exists just before one begins. Set in 1962 Hong Kong, it follows two neighbors, Mr. Chow (Tony Leung) and Mrs. Chan (Maggie Cheung), who discover that their respective spouses are cheating on them with each other. Bound by shared grief and a stubborn, tragic adherence to propriety, they begin a deeply intimate friendship that slowly, painfully inches toward love, even as they vow, 'We won't be like them.'\n\nVisually, the film is an absolute masterpiece of atmosphere and longing. Cinematographers Christopher Doyle and Mark Lee Ping-bin shoot the film entirely in cramped, claustrophobic spaces—narrow hallways, rain-slicked alleyways, the backs of taxis, and dimly lit noodle stands. The camera often watches the characters through mirrors, doorways, and windows, mimicking the oppressive, judgmental gaze of their conservative society. The color palette is overwhelmingly saturated with blood reds, mustard yellows, and deep shadows, externalizing the intense, unexpressed passions of the protagonists.\n\nMaggie Cheung and Tony Leung deliver performances of almost unbearable restraint. So much of the film's emotional weight is carried in unspoken glances, the brush of a hand, or the slow exhalation of cigarette smoke. Cheung’s astonishing array of high-collared cheongsams act as both armor and prison, physically restricting her movement while highlighting her devastating elegance. Leung’s Mr. Chow is a portrait of quiet, agonizing decency; his eyes convey a universe of sadness that he refuses to speak aloud.\n\nThe film’s soundtrack is equally iconic, particularly Shigeru Umebayashi’s 'Yumeji’s Theme,' a mournful, waltzing violin piece that loops relentlessly throughout the film, locking the characters in a cycle of desire and denial. Nat King Cole’s Spanish-language ballads provide a lush, romantic counterpoint to the characters' rigid emotional control.\n\nIn the Mood for Love is a tragedy of timing and morality. It is a haunting exploration of memories, missed connections, and the secrets we whisper into the hollows of trees. It is arguably the most beautiful film ever made about the things people choose not to do.",
  },
  {
    title: "Blade Runner",
    director: "Ridley Scott",
    releaseYear: 1982,
    rating: 10,
    watchDate: new Date("2024-05-15"),
    posterUrl: "https://placehold.co/500x750/001f3f/00ffff/png?text=Blade+Runner",
    theGood: "A foundational text of modern science fiction. Its rain-soaked, neon-lit cyberpunk aesthetic permanently redefined how we visualize the future.",
    theBad: "The narrative is notoriously disjointed depending on which of the many cuts you watch, and Harrison Ford's character can feel shockingly passive.",
    review: "Ridley Scott’s Blade Runner was a commercial failure upon its release in 1982, misunderstood by critics and audiences alike. Decades later, its influence is so absolute and pervasive that it is nearly impossible to imagine the modern science fiction genre without it. Adapting Philip K. Dick’s 'Do Androids Dream of Electric Sheep?', Scott abandoned much of the novel’s philosophical plotting in favor of creating a staggering, overwhelming visual poem about mortality, memory, and what it fundamentally means to be human.\n\nThe film’s vision of Los Angeles in 2019 is a masterpiece of world-building. It is a suffocating, rain-drenched megalopolis where towering pyramids of corporate wealth cast long shadows over incredibly dense, multicultural slums. The juxtaposition of massive neon Coca-Cola advertisements against the decaying, garbage-strewn streets birthed the cyberpunk aesthetic—a future defined by 'high tech and low life.' Vangelis's legendary synthesizer score is the lifeblood of this city, oscillating between sweeping, romantic melancholy and cold, synthetic dread.\n\nAt the center of this world is Rick Deckard (Harrison Ford), a weary ex-cop tasked with hunting down four rogue 'replicants'—bio-engineered androids indistinguishable from humans, who have returned to Earth seeking a way to extend their four-year lifespans. Ford plays Deckard not as a traditional action hero, but as a burned-out, deeply compromised exterminator. His romance with Rachael (Sean Young), a replicant who believes she is human, is fraught, morally ambiguous, and deeply tragic.\n\nHowever, the true heart of Blade Runner belongs to Rutger Hauer’s Roy Batty, the leader of the rogue replicants. Batty is a genetically engineered super-soldier designed for violence, yet he is the only character in the film who displays genuine passion, grief, and an overwhelming desire simply to live. His final confrontation with Deckard is not a triumph of law over crime, but a terrifying display of physical superiority that ends in an act of profound, unexpected grace. Batty’s legendary 'Tears in Rain' monologue—partially improvised by Hauer on set—remains one of the most beautiful and heartbreaking moments in cinematic history.\n\nBlade Runner is a messy, complicated, and utterly brilliant film. It poses questions it refuses to answer, lingering in the dark, smoky corners of its own universe. It is a neo-noir masterpiece that proves the future is just as tragic and beautiful as the past.",
  },
  {
    title: "City of God",
    director: "Fernando Meirelles and Kátia Lund",
    releaseYear: 2002,
    rating: 10,
    watchDate: new Date("2024-06-04"),
    posterUrl: "https://placehold.co/500x750/8b0000/ffffff/png?text=City+of+God",
    theGood: "A blistering, breathless dive into the favelas of Rio de Janeiro. The editing is kinetic, the performances are incredibly raw, and the energy is unparalleled.",
    theBad: "The sheer volume of casual, brutal violence involving young children makes it an incredibly harrowing and difficult watch.",
    review: "City of God (Cidade de Deus) is a film that grabs you by the throat in its opening frames and refuses to let go until the credits roll. Directed by Fernando Meirelles and Kátia Lund, this Brazilian masterpiece chronicles three decades in the life of a notorious Rio de Janeiro favela, tracking its evolution from a relatively peaceful, working-class neighborhood in the 1960s to a heavily armed, blood-soaked war zone controlled by adolescent drug lords in the 1980s. It is a staggering achievement of kinetic filmmaking and brutal social realism.\n\nThe film’s narrative structure is brilliant, guided by the narration of Rocket (Alexandre Rodrigues), a young man who dreams of escaping the favela not through violence, but through photography. Rocket serves as the audience’s desperately needed moral anchor in a world where morality is a luxury nobody can afford. Through his lens, we are introduced to a sprawling, Dickensian cast of characters, most notably the terrifyingly sociopathic Li'l Zé (Leandro Firmino), who murders his way to the top of the drug trade with terrifying, gleeful abandon.\n\nWhat sets City of God apart from traditional gangster films is its cast. Nearly all the actors were non-professionals, recruited directly from the favelas of Rio. This casting choice imbues the film with an overwhelming, terrifying authenticity. When we see a child holding a gun, the horror is amplified because the children on screen possess a lived-in understanding of the environment they are portraying. The performances are incredibly raw, spontaneous, and devastatingly real.\n\nThe visual style of the film is a masterclass in kinetic energy. The camera is constantly moving, utilizing whip pans, freeze frames, split screens, and rapid-fire montage to match the chaotic, adrenaline-fueled reality of life in the favela. The color grading shifts alongside the timeline: the 1960s are bathed in a warm, nostalgic golden sepia, while the violence of the 1980s is rendered in harsh, washed-out blues and stark, oppressive sunlight. The editing is aggressive and flawless, propelling the narrative forward with terrifying momentum.\n\nCity of God is an exhaustive, exhausting tragedy. It is a searing indictment of systemic poverty and government neglect, showing how a lack of opportunity guarantees an endless cycle of violence. Yet, despite its bleak subject matter, the film is bursting with life, humor, and an undeniable cinematic vitality. It is a masterpiece that demands to be witnessed.",
  },
  {
    title: "Mad Max: Fury Road",
    director: "George Miller",
    releaseYear: 2015,
    rating: 10,
    watchDate: new Date("2024-05-30"),
    posterUrl: "https://placehold.co/500x750/cc5500/000000/png?text=Mad+Max:+Fury+Road",
    theGood: "A total triumph of practical filmmaking and visual storytelling. It is a two-hour chase sequence that doubles as a profound feminist action epic.",
    theBad: "Those looking for traditional, dialogue-heavy plot exposition will find themselves entirely lost in the dust and the roar of the V8 engines.",
    review: "George Miller was seventy years old when he returned to the franchise he created, and he delivered a film that made every other action director in Hollywood look like they were moving in slow motion. Mad Max: Fury Road is a miracle of modern cinema—a relentless, two-hour car chase through a post-apocalyptic wasteland that relies almost entirely on practical effects, jaw-dropping stunt work, and pure visual storytelling to convey a profound narrative of trauma, redemption, and feminist rebellion.\n\nThe genius of Fury Road lies in its structural simplicity. The plot is essentially a straight line out into the desert, followed by a straight line back. Yet, within that relentless forward momentum, Miller builds an incredibly dense, horrifyingly coherent world. We learn everything we need to know about the tyrannical Immortan Joe, his death-cult of War Boys, and the desperate, water-starved populace of the Citadel not through lengthy exposition, but through character design, vehicular architecture, and action. Every spiked tire, every steering wheel shrine, and every chrome-sprayed mouth tells a story.\n\nTom Hardy takes over the titular role of Max Rockatansky, playing him as a feral, traumatized survivor who has been reduced to a mere 'blood bag' by the beginning of the film. However, the true protagonist of Fury Road is Charlize Theron’s Imperator Furiosa. With her shaved head, mechanical arm, and grease-painted eyes, Furiosa instantly became one of the greatest action heroes in cinematic history. Her mission to liberate Immortan Joe’s 'Five Wives'—women kept as breeding stock in a sterile vault—elevates the film from a simple survival story into a literal war for bodily autonomy.\n\nThe action choreography is unparalleled. Miller and his stunt team orchestrated genuine vehicular warfare in the Namibian desert, flipping massive big rigs and swinging polecats between moving cars at fifty miles per hour. Margaret Sixel’s Academy Award-winning editing ensures that, despite the overwhelming chaos of flaming trucks and exploding war rigs, the spatial geography is always perfectly clear. You always know exactly who is fighting whom, and what the stakes are.\n\nMad Max: Fury Road is a symphony of fire and twisted metal, scored by Junkie XL's pounding, operatic soundtrack. It proves that the action genre does not need to be mindless to be thrilling. It is a visceral, breathless masterpiece that will be studied by filmmakers for decades to come. What a lovely day, indeed.",
  },
  {
    title: "Apocalypse Now",
    director: "Francis Ford Coppola",
    releaseYear: 1979,
    rating: 10,
    watchDate: new Date("2024-06-01"),
    posterUrl: "https://placehold.co/500x750/003300/ff0000/png?text=Apocalypse+Now",
    theGood: "A hallucinatory, Wagnerian descent into the madness of the Vietnam War. Its ambition, scale, and philosophical weight are completely staggering.",
    theBad: "The famously chaotic production is occasionally visible in the film's sprawling, unwieldy final act, which abandons traditional narrative for pure surrealism.",
    review: "If The Godfather was Francis Ford Coppola's perfectly controlled studio masterpiece, Apocalypse Now is his brilliant, terrifying descent into madness. Adapting Joseph Conrad's Heart of Darkness and relocating it to the Vietnam War, Coppola did not just make a movie about a war; as he famously stated, 'My film is not a movie. My film is not about Vietnam. It is Vietnam.' It is a hallucinatory, psychedelic journey upriver into the absolute darkest recesses of the human soul, and a searing indictment of American imperial hubris.\n\nThe film follows Captain Willard (Martin Sheen), a burnt-out intelligence officer assigned to travel up the Nùng River into Cambodia to assassinate Colonel Walter Kurtz (Marlon Brando), a highly decorated Green Beret who has gone completely insane and established himself as a demigod among a local tribe. As Willard travels deeper into the jungle, the film slowly strips away the veneer of military order, revealing a war effort that has descended into total, terrifying absurdity.\n\nThe set pieces in Apocalypse Now are among the most famous and visually staggering in cinematic history. The helicopter assault on a Viet Cong village, set to Richard Wagner’s 'Ride of the Valkyries' and led by the surf-obsessed, napalm-loving Lieutenant Colonel Kilgore (Robert Duvall), is a terrifying display of technological supremacy masking moral bankruptcy. Vittorio Storaro’s cinematography captures the jungle not as a physical location, but as a living, breathing psychological entity. The use of smoke, flares, and deeply saturated oranges and greens gives the film the texture of a fever dream.\n\nThe final act of the film, entirely dominated by Marlon Brando's improvised, shadow-drenched performance as Kurtz, shifts the film from a war movie into pure philosophical horror. Kurtz is not a monster in the traditional sense; he is a man who has looked at the hypocrisy of the war—a war that demands men be polite while dropping fire on civilians—and chosen to embrace the horror in its purest, most brutal form. The final sequence, cross-cutting the slaughter of a water buffalo with Willard’s assassination of Kurtz, is incredibly disturbing and primal.\n\nApocalypse Now is an exhausting, overwhelming cinematic experience. It is a sprawling, flawed, and absolutely majestic film that captures the insanity of the 20th century better than almost any other work of art. It is the definitive word on the madness of war.",
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

  // Ensure we don't erase previously added movies by removing deleteMany
  console.log("Preserving existing reviews...")

  for (const movie of movies) {
    const existingMovie = await prisma.movieReview.findFirst({
      where: { title: movie.title, authorId: user.id }
    })
    
    if (!existingMovie) {
      const created = await prisma.movieReview.create({
        data: { ...movie, authorId: user.id, status: 'APPROVED' },
      })
      console.log("Movie:", created.title, "->", created.posterUrl)
    } else {
      console.log("Movie already exists (skipped):", existingMovie.title)
    }
  }
  for (const book of books) {
    const existingBook = await prisma.bookReview.findFirst({
      where: { title: book.title, authorId: user.id }
    })
    
    if (!existingBook) {
      const created = await prisma.bookReview.create({
        data: { ...book, authorId: user.id, status: 'APPROVED' },
      })
      console.log("Book:", created.title, "->", created.coverUrl)
    } else {
      console.log("Book already exists (skipped):", existingBook.title)
    }
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
