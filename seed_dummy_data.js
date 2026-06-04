const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  // Clean old seeded data (keep any user-created reviews)
  console.log('Cleaning old seeded data...');
  await prisma.comment.deleteMany({});
  await prisma.movieReview.deleteMany({});
  await prisma.bookReview.deleteMany({});

  // Find or create the editor user
  let user = await prisma.user.findFirst();
  if (!user) {
    user = await prisma.user.create({
      data: {
        email: 'editor@literarynoir.com',
        password: 'hashed_dummy_password',
        name: 'Noir Editor',
        role: 'EDITOR'
      }
    });
  }
  const userId = user.id;

  // ──────────────────────────────────────────────
  // MOVIES — Real posters from TMDB image CDN
  // ──────────────────────────────────────────────
  const movies = [
    {
      title: "Blade Runner 2049",
      director: "Denis Villeneuve",
      releaseYear: 2017,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
      theGood: "Roger Deakins' cinematography is nothing short of transcendent",
      theBad: "The 163-minute runtime may test the patience of casual viewers",
      review: "Denis Villeneuve accomplished something many thought impossible: he made a sequel to Ridley Scott's 1982 masterpiece that stands entirely on its own merits. **Blade Runner 2049** is a film of staggering visual beauty, where every frame feels like a painting hung in some future museum of human sorrow.\n\nRyan Gosling's Officer K is a revelation — a replicant who discovers that the line between programmed obedience and genuine longing is thinner than anyone dared imagine. His journey through the irradiated wastelands of Las Vegas and the towering monoliths of a drowned Los Angeles is both a detective story and an existential meditation.\n\n> \"Sometimes to love someone, you got to be a stranger.\"\n\nRoger Deakins' cinematography deserves its own paragraph. The way he bathes scenes in amber light, the silhouettes against toxic orange skies, the sterile blue of Wallace's corporate temple — each environment tells its own story before a single word is spoken. His Oscar for this film was decades overdue.\n\nHans Zimmer and Benjamin Wallfisch's score pulses with a deep, unsettling beauty that echoes Vangelis while finding its own voice. It's not background music; it's the film's heartbeat.\n\nWhat elevates this above mere spectacle is its emotional core. The relationship between K and Joi (Ana de Armas) — a holographic AI who may or may not truly love him — is one of the most poignant explorations of artificial consciousness in modern cinema."
    },
    {
      title: "The Godfather",
      director: "Francis Ford Coppola",
      releaseYear: 1972,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      theGood: "Marlon Brando and Al Pacino deliver career-defining performances",
      theBad: "Nearly impossible to find any flaw worth mentioning",
      review: "There is a particular kind of film that transcends its medium and becomes mythology. **The Godfather** is such a film. Francis Ford Coppola, working from Mario Puzo's novel, created not merely a gangster picture but a Shakespearean tragedy set against the amber-lit parlors and sun-drenched gardens of mid-century America.\n\nMarlon Brando's Don Vito Corleone is cinema's greatest patriarch — a man of terrifying power who speaks in whispers, who holds a cat while deciding the fates of men. But the true arc belongs to Al Pacino's Michael, whose transformation from decorated war hero to cold-eyed don remains the most compelling character study in American film.\n\nGordon Willis's cinematography — controversially dark for its time — creates a visual language of shadow and complicity. When characters step into darkness, they step into the family's moral void. The famous opening scene, shot almost entirely in shadow while a wedding blazes with light outside, establishes this dichotomy with breathtaking economy.\n\n> \"I'm gonna make him an offer he can't refuse.\"\n\nNino Rota's score, with its mournful trumpet melody, has become so iconic that it's easy to forget how perfectly it serves the film's themes of beauty corrupted by violence. Every note carries the weight of a world where love and murder sleep in the same bed.\n\nFifty years later, nothing has surpassed it. Nothing likely will."
    },
    {
      title: "Parasite",
      director: "Bong Joon-ho",
      releaseYear: 2019,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
      theGood: "A genre-defying masterpiece that works as comedy, thriller, and social commentary simultaneously",
      theBad: "Repeat viewings reveal just how meticulously constructed it is — which can feel almost clinical",
      review: "Bong Joon-ho's **Parasite** is a film that refuses to be one thing. It begins as a dark comedy about a poor family infiltrating the household of a wealthy one, pivots into a tense thriller, then descends into something far more primal and disturbing. Every genre shift feels inevitable in retrospect, which is the mark of a master at work.\n\nThe Kim family's basement apartment — where they fold pizza boxes and steal Wi-Fi from neighbors — is contrasted with the Park family's modernist mansion designed by a fictional architect. Bong uses architecture itself as metaphor: the stairs that separate the two worlds become the film's most potent symbol.\n\nThe ensemble cast is uniformly brilliant, but Song Kang-ho as the father Ki-taek brings a weary dignity to his role that anchors the film's emotional core. His performance in the climactic sequence is devastating.\n\n> \"They are nice because they are rich.\"\n\nWhat makes Parasite essential viewing is its refusal to offer easy answers. The rich aren't villains; they're simply oblivious. The poor aren't heroes; they're desperate and capable of cruelty. Bong's sympathy extends to everyone even as his critique spares no one.\n\nThe film's final image — a letter written to a future that will never arrive — is one of the most heartbreaking endings in modern cinema."
    },
    {
      title: "No Country for Old Men",
      director: "Joel & Ethan Coen",
      releaseYear: 2007,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/bj1v6YKF8yHqA489VFfnQvOJpnc.jpg",
      theGood: "Javier Bardem's Anton Chigurh is one of cinema's most terrifying villains",
      theBad: "The deliberately anticlimactic ending divides audiences",
      review: "The Coen Brothers stripped Cormac McCarthy's novel down to its sun-bleached bones and created what may be the most relentless thriller of the 21st century. **No Country for Old Men** is a film about violence so pure it approaches philosophy.\n\nJavier Bardem's Anton Chigurh — with his pneumatic cattle gun and his unsettling pageboy haircut — is not merely a villain. He's an elemental force, a walking argument about the role of chance in human destiny. His coin-flip scenes are masterclasses in tension, and Bardem earned every molecule of his Oscar.\n\nJosh Brolin's Llewelyn Moss is the perfect everyman caught in an impossible situation. His decision to return to the desert with water for a dying man — the single act of compassion that seals his fate — is the kind of moral complexity that elevates genre filmmaking into art.\n\nRoger Deakins shoots the West Texas landscape as a vast, indifferent cathedral where human concerns are dwarfed by geography. The near-total absence of a musical score only amplifies the silence, making every footstep and every mechanical click of Chigurh's weapon unbearably loud.\n\nTommy Lee Jones's Sheriff Bell, watching the world grow incomprehensible around him, delivers the film's thesis in its final moments — a dream about his father carrying fire through darkness. It's the Coens at their most profound."
    },
    {
      title: "Stalker",
      director: "Andrei Tarkovsky",
      releaseYear: 1979,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/iNiGMbsvAl4bfGjui1lwcCufSvT.jpg",
      theGood: "A profound meditation on faith, desire, and the limits of human understanding",
      theBad: "Glacially paced — this is not a film for the impatient",
      review: "Andrei Tarkovsky's **Stalker** is not a film you watch so much as one you surrender to. Based loosely on the Strugatsky brothers' *Roadside Picnic*, it follows three men — the Stalker, the Writer, and the Professor — as they journey into the Zone, a mysterious area where the normal laws of physics no longer apply, to reach the Room, a place said to fulfill one's innermost desires.\n\nThe journey is the point. Tarkovsky's camera lingers on puddles, on rusted metal, on grass swaying underwater. The sepia-toned world outside the Zone gives way to lush, decaying greens within it. Every frame is a painting that rewards prolonged contemplation.\n\n> \"Weakness is a great thing, and strength is nothing.\"\n\nThe philosophical dialogues between the three travelers — about art, science, faith, and the nature of happiness — are dense but never academic. They feel like conversations you might overhear between brilliant, slightly drunk intellectuals at three in the morning.\n\nWhat makes the film genuinely haunting is its final act, where the characters reach the threshold of the Room and must confront a terrifying question: do you truly want your deepest wish fulfilled, when your deepest wish might not be what you think it is?\n\nTarkovsky made films the way cathedrals were built — slowly, with absolute conviction, for an audience that might not yet exist. **Stalker** found its congregation."
    },
    {
      title: "In the Mood for Love",
      director: "Wong Kar-wai",
      releaseYear: 2000,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/iYypPT4bhqXfq1b6sFBjSLkpbNE.jpg",
      theGood: "Visually intoxicating — every frame drips with longing and restraint",
      theBad: "The elliptical narrative may frustrate viewers who prefer linear storytelling",
      review: "Wong Kar-wai's **In the Mood for Love** is a film about the space between two people who should be together but never will be. Set in 1960s Hong Kong, it follows two neighbors — Chow Mo-wan (Tony Leung) and Su Li-zhen (Maggie Cheung) — who discover that their respective spouses are having an affair. What unfolds is not a story of revenge or passion, but of exquisite, agonizing restraint.\n\nChristopher Doyle and Mark Lee Ping-bing's cinematography transforms narrow hallways and cramped apartments into intimate theaters of desire. The camera lingers in doorways, peers around corners, catches reflections in rain-slicked streets. Every shot feels like a stolen glance.\n\nMaggie Cheung's cheongsam dresses — she wears a different one in nearly every scene — become a visual motif for the passage of time and the armor of propriety. Tony Leung, meanwhile, gives what may be the most understated performance of longing ever committed to film. His face does what most actors need entire monologues to accomplish.\n\n> \"He remembers those vanished years. As though looking through a dusty window pane, the past is something he could see, but not touch.\"\n\nMichael Galasso's waltz theme, recurring throughout the film, transforms from romantic to melancholic to devastating as the story progresses. By the final scene — Chow whispering his secret into a hole in the ruins of Angkor Wat — it has become an elegy for all the loves that propriety and timing conspired to destroy.\n\nThis is cinema at its most poetic. Wong Kar-wai proved that what is *not* shown can be infinitely more powerful than what is."
    },
    {
      title: "There Will Be Blood",
      director: "Paul Thomas Anderson",
      releaseYear: 2007,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
      theGood: "Daniel Day-Lewis delivers perhaps the greatest screen performance of all time",
      theBad: "The final act's tonal shift can feel jarring on first viewing",
      review: "Paul Thomas Anderson's **There Will Be Blood** opens with fifteen wordless minutes of a man clawing silver ore from the earth, breaking his leg at the bottom of a mine shaft, and dragging himself to civilization. It's a perfect prologue for a film about the American id — the relentless, self-destructive drive to conquer, to possess, to win.\n\nDaniel Day-Lewis's Daniel Plainview is not a character so much as a geological force. He speaks in a voice that seems to come from deep underground — a voice modeled on John Huston's, rich with false warmth and genuine menace. His trajectory from scrappy prospector to oil baron to raging misanthrope is the dark mirror of the American Dream.\n\nJonny Greenwood's score is a masterwork of controlled chaos — strings that screech and shudder, percussion that sounds like drilling into the earth's crust. It won no Oscar because the Academy deemed parts of it pre-existing music, which remains one of the most absurd oversights in awards history.\n\n> \"I drink your milkshake. I drink it up!\"\n\nThe battle between Plainview and Paul Dano's Eli Sunday — capitalism versus religion, two forms of American con artistry — builds across the film with the slow inevitability of tectonic plates colliding. Their final confrontation in Plainview's bowling alley is operatic, grotesque, and unforgettable.\n\nAnderson shot on location in Marfa, Texas, and the landscape becomes a character — vast, indifferent, rich with buried treasure and buried sins. Robert Elswit's camera finds beauty in oil derricks silhouetted against burning skies, in the stark geometry of a pipeline cutting across empty desert.\n\nThis is American filmmaking at its most ambitious and uncompromising."
    },
    {
      title: "Mulholland Drive",
      director: "David Lynch",
      releaseYear: 2001,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/tVxGt7uffLVhIIcwuldXOMpFBPX.jpg",
      theGood: "Naomi Watts gives a dual performance that is nothing short of astonishing",
      theBad: "Deliberately resists coherent interpretation — some viewers find this maddening",
      review: "David Lynch's **Mulholland Drive** is the definitive Los Angeles film — not because it captures the city's reality, but because it captures its dream logic. Hollywood as a place where identity dissolves, where ambition curdles into obsession, where the line between fantasy and nightmare is drawn in disappearing ink.\n\nNaomi Watts, in her breakthrough role, plays two women — or one woman split in two — with such conviction that the film's structural puzzle becomes emotionally devastating rather than merely intellectual. Her audition scene, where she transforms generic dialogue into something electrifying, is a metacommentary on acting itself.\n\nThe Club Silencio sequence is Lynch at his most powerful. A performer sings Roy Orbison's 'Crying' in Spanish while the audience weeps, even as they're told everything is an illusion. It's a thesis statement about cinema: we cry at things we know aren't real, and the crying is itself real.\n\nAngelo Badalamenti's score drifts between jazz noir cool and pure dread, perfectly matching a film that shifts from sunny mystery to existential horror. The bass notes alone could soundtrack your nightmares.\n\nLynch originally conceived this as a television pilot, and its transformation into a feature film — with the addition of the devastating final third — resulted in something greater than either medium usually achieves. It's a film that rewards infinite revisitation, revealing new connections and deeper sorrows with each viewing."
    },
    {
      title: "Taxi Driver",
      director: "Martin Scorsese",
      releaseYear: 1976,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
      theGood: "Robert De Niro's Travis Bickle is one of the most complex protagonists in film history",
      theBad: "The film's sympathetic portrayal of a violent loner remains deeply uncomfortable",
      review: "Martin Scorsese's **Taxi Driver** is a film that crawls under your skin and stays there. Travis Bickle, as embodied by a young Robert De Niro at the peak of his powers, is simultaneously pitiable, terrifying, and — most disturbingly — relatable. He is loneliness made flesh, a man so disconnected from the world that his only means of connection is violence.\n\nPaul Schrader's screenplay, written during a period of profound personal crisis, channels that desperation into every line of Travis's narration. *'All the animals come out at night'* — Travis's New York is a neon-lit hell populated by phantoms, and he appoints himself its reluctant, incompetent savior.\n\nBernard Herrmann's final score (he died the day after recording it) is one of cinema's great musical achievements. The saxophone theme is simultaneously seductive and mournful, capturing the film's strange beauty. The contrast between the jazzy, romantic cues and the harsh, percussive violence creates an emotional whiplash that mirrors Travis's fractured psyche.\n\n> \"You talkin' to me? You talkin' to me?\"\n\nThe film's ending — where Travis's massacre is reframed as heroism by the media — is either deeply ironic or genuinely ambiguous, and Scorsese has never clarified. This ambiguity is the film's genius. It forces viewers to confront their own relationship to violence, to examine why they might be rooting for a man who is clearly unhinged.\n\nFour decades later, Travis Bickle remains American cinema's most uncomfortably honest self-portrait."
    },
    {
      title: "Pulp Fiction",
      director: "Quentin Tarantino",
      releaseYear: 1994,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
      theGood: "Revolutionized narrative structure in mainstream cinema and revived multiple careers",
      theBad: "Tarantino's love of violence and profanity can occasionally feel gratuitous",
      review: "**Pulp Fiction** arrived in 1994 like a bomb thrown into the cathedral of American cinema. Quentin Tarantino, working with the confidence of a director who knew exactly what kind of film he wanted to make, shattered linear narrative and reassembled it into something that felt genuinely new.\n\nThe film's genius lies not in its famous set pieces — the adrenaline needle, the gimp, the briefcase — but in its dialogue. Tarantino writes conversations the way jazz musicians play solos: virtuosic, unpredictable, and deeply pleasurable. Jules and Vincent discussing the metric system while en route to a murder remains one of cinema's most perfectly calibrated scenes.\n\nJohn Travolta's resurrection as Vincent Vega is a miracle of casting — a faded star playing a faded hitman with perfect self-awareness. Samuel L. Jackson's Jules Winnfield, meanwhile, became an instant icon, his Ezekiel 25:17 monologue entering the cultural lexicon permanently.\n\n> \"The path of the righteous man is beset on all sides by the inequities of the selfish and the tyranny of evil men.\"\n\nThe non-linear structure isn't gimmickry — it's essential to the film's themes. By placing Vincent's death in the middle and Jules's redemption at the end, Tarantino transforms a crime anthology into a story about the possibility of grace. Jules chooses to walk away. Vincent doesn't. The structure ensures we feel the weight of that difference.\n\nThirty years later, countless imitators have proved that Tarantino's style is inimitable. **Pulp Fiction** didn't just change cinema; it proved that cinema still had the capacity to surprise."
    },
    {
      title: "The Dark Knight",
      director: "Christopher Nolan",
      releaseYear: 2008,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911BTUgMe1nNaD3.jpg",
      theGood: "Heath Ledger's Joker is a once-in-a-generation performance",
      theBad: "The Two-Face subplot feels rushed in the third act",
      review: "Christopher Nolan's **The Dark Knight** accomplished something extraordinary: it made a superhero film that functions as a genuine crime epic. Gotham City, rendered in the steel-and-glass reality of Chicago, feels like a place where consequences matter and violence has weight.\n\nBut let's address the elephant in the room: Heath Ledger's Joker. His performance transcends the film that contains it. Every scene he enters becomes unpredictable, charged with a manic energy that feels genuinely dangerous. The disappearing pencil trick. The nurse's outfit. The way he licks his scars. Ledger created a villain for the ages, and his posthumous Oscar was the least the Academy could do.\n\nThe film's moral architecture is surprisingly sophisticated for a summer blockbuster. The ferry dilemma — civilians versus prisoners, each given the power to destroy the other — is a genuine ethical thought experiment presented with blockbuster urgency. That both groups choose not to detonate is the film's most radical statement.\n\nWally Pfister's IMAX cinematography gives the action sequences a scale and clarity that CGI-heavy films rarely achieve. The truck flip — done practically — remains one of the most visceral stunts in modern cinema.\n\n> \"You either die a hero, or you live long enough to see yourself become the villain.\"\n\nHarvey Dent's tragic arc — from Gotham's white knight to the scarred, coin-flipping Two-Face — mirrors the film's central thesis about how easily order can collapse into chaos. Aaron Eckhart brings genuine pathos to a role that could easily have been cartoonish.\n\n**The Dark Knight** proved that genre filmmaking and serious filmmaking need not be separate categories."
    },
    {
      title: "Zodiac",
      director: "David Fincher",
      releaseYear: 2007,
      rating: 8,
      posterUrl: "https://image.tmdb.org/t/p/w500/sMGCRtVIBTMaFmIiJyCRhlLRtil.jpg",
      theGood: "A meticulous procedural that captures the obsessive nature of true crime investigation",
      theBad: "At 157 minutes, the film's deliberate pacing demands patience",
      review: "David Fincher's **Zodiac** is an anti-thriller — a film about a serial killer case that was never solved, told with the obsessive detail of a man who spent two years researching every available document. It is a film about the investigation, not the crime; about the toll that unsolvable mysteries take on the people who can't stop trying to solve them.\n\nJake Gyllenhaal's Robert Graysmith begins the film as a curious cartoonist and ends it as a haunted man whose marriage and career have been consumed by his need to know. His basement scene — visiting a suspect's house alone, realizing too late that something is very wrong — is one of the most quietly terrifying sequences Fincher has ever directed.\n\nThe film spans decades with an almost documentary precision, tracking the case through the changing technologies and shifting cultural landscapes of the 1970s, '80s, and '90s. Fincher recreates 1970s San Francisco with a production design so detailed you can practically smell the newsprint.\n\nMark Ruffalo and Robert Downey Jr. provide excellent counterpoints as, respectively, a detective who plays by the rules and a journalist who doesn't. Their parallel descents into obsession — Ruffalo's quiet and Downey's chaotic — mirror the film's dual nature as both procedural and character study.\n\nThe digital cinematography, groundbreaking for 2007, gives the film a crisp, slightly hyperreal quality that suits its themes. Fincher films crime scenes with clinical detachment, refusing to sensationalize the violence while never minimizing its horror."
    }
  ];

  const books = [
    {
      title: "1984",
      author: "George Orwell",
      publishYear: 1949,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12648655-L.jpg",
      theGood: "A terrifyingly prescient vision of totalitarian control that grows more relevant every year",
      theBad: "The didactic passages from Goldstein's book slow the narrative momentum",
      review: "George Orwell's **1984** is the rare dystopian novel that has become more frightening with age rather than less. Written in 1948 as both a warning and a prophecy, it describes a world so thoroughly controlled that even the past is mutable, rewritten daily to serve the Party's needs.\n\nWinston Smith, our unlikely rebel, works at the Ministry of Truth — Orwell's most devastating joke — where he *corrects* historical records. His quiet act of defiance, purchasing a blank diary and writing his thoughts, feels genuinely revolutionary in a world where thought itself is policed.\n\nThe love story between Winston and Julia is all the more powerful for its futility. They know, on some level, that they will be caught. Their lovemaking is a political act, their tenderness a form of resistance. When the inevitable betrayal comes, it is shattering precisely because it was always inevitable.\n\n> \"Who controls the past controls the future. Who controls the present controls the past.\"\n\nOrwell's prose is deliberately plain — clear as glass, sharp as a razor. He understood that a book about the corruption of language must itself be written in language of absolute clarity. The appendix on Newspeak, often skipped by readers, is actually one of the most chilling sections: a dry, academic description of a language designed to make complex thought impossible.\n\nThe novel's final line — *He loved Big Brother* — is the most devastating sentence in English literature. It tells us not just that Winston broke, but that he was remade. The Party didn't just defeat him; it convinced him that defeat was victory."
    },
    {
      title: "The Road",
      author: "Cormac McCarthy",
      publishYear: 2006,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/8703092-L.jpg",
      theGood: "McCarthy's prose has never been more stripped-down or more powerful",
      theBad: "The relentless bleakness can be emotionally overwhelming",
      review: "Cormac McCarthy's **The Road** is a novel that reads like a prayer whispered into ashes. A father and son push a shopping cart through a post-apocalyptic America where the sun is blotted out, the trees are dead, and roving bands of cannibals represent the last vestiges of human community.\n\nMcCarthy stripped his already austere prose to its absolute bones for this novel. No quotation marks. Minimal punctuation. Sentences that read like scripture — or epitaphs. *He held the boy close to him. The boy was shaking. They lay there on the cold ground listening.* The simplicity is devastating.\n\nThe relationship between the unnamed father and son is the novel's beating heart. Their conversations — simple, repetitive, achingly tender — create a language of survival. *Are we the good guys?* the boy asks. *Yes, we are.* In a world without morality, without society, without hope, this declaration of goodness is the most radical act imaginable.\n\n> \"You have to carry the fire.\"\n\nMcCarthy refuses to explain the catastrophe that destroyed civilization. It doesn't matter. What matters is the grey ash that coats everything, the cold that never relents, the constant gnawing hunger. The physical details are precise enough to constitute a survival manual — and terrible enough to constitute a horror novel.\n\nThe ending — controversial among McCarthy scholars — offers a sliver of hope so thin it might be an illusion. The boy finds other people. They claim to be good. We want desperately to believe them, just as the boy wants to believe. McCarthy leaves us in that wanting, which is perhaps the most honest place a novel about the end of the world can leave us."
    },
    {
      title: "Blood Meridian",
      author: "Cormac McCarthy",
      publishYear: 1985,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/11505642-L.jpg",
      theGood: "Some of the most powerful and beautiful prose written in the English language",
      theBad: "The violence is so extreme and sustained that many readers simply cannot finish it",
      review: "Cormac McCarthy's **Blood Meridian** is the most violent novel in the American canon, and also one of the most beautiful. This paradox is the book's engine, its reason for existing. McCarthy describes scalping, infanticide, and genocide in prose so gorgeous it forces the reader into a state of moral crisis: why am I finding beauty in this?\n\nSet along the Texas-Mexico borderlands in the 1850s, the novel follows the Kid — a teenage runaway from Tennessee — as he falls in with the Glanton Gang, a band of scalp hunters who murder indiscriminately. Their guide and philosopher is Judge Holden, one of the most terrifying figures in all of literature: a seven-foot-tall, completely hairless polymath who dances, plays violin, speaks multiple languages, and kills with casual pleasure.\n\n> \"Whatever in creation exists without my knowledge exists without my consent.\"\n\nThe Judge's philosophy — that war is the ultimate expression of human nature, that violence is the organizing principle of the universe — is presented with such intellectual force that the reader is compelled to argue back. McCarthy never explicitly refutes the Judge. He simply sets his apocalyptic vision against landscapes of such stark beauty that the reader must decide for themselves whether creation is fundamentally violent or fundamentally beautiful.\n\nMcCarthy's sentences in this novel achieve a Biblical grandeur. Paragraphs unspool like revelations from a blood-soaked Old Testament. The desert itself becomes a character — pitiless, sublime, indifferent to the suffering that crosses its face.\n\nThis is not a book for everyone. It is a book for readers who believe that literature should be capable of confronting the worst in human nature without blinking. Those who can endure it will find something that changes the way they think about fiction, violence, and the American myth."
    },
    {
      title: "Dune",
      author: "Frank Herbert",
      publishYear: 1965,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/13489220-L.jpg",
      theGood: "World-building of unparalleled depth and complexity, relevant ecological themes decades ahead of their time",
      theBad: "The dense political and ecological exposition can be impenetrable on first reading",
      review: "Frank Herbert's **Dune** is less a novel than a world: complete, coherent, and utterly immersive. Set on the desert planet Arrakis, it tells the story of Paul Atreides, a young noble who becomes the messianic leader of the planet's native Fremen. But to describe Dune by its plot is like describing a cathedral by its floor plan.\n\nHerbert's achievement is ecological. He imagined an entire planetary ecosystem — the sandworms, the spice melange, the water discipline of the Fremen — with a scientist's rigor and a poet's imagination. Decades before climate change entered public consciousness, Herbert wrote a novel about humanity's relationship with its environment that doubles as a warning about resource exploitation.\n\nPaul Atreides is a deliberately ambiguous hero. Herbert modeled him partly on T.E. Lawrence, another outsider who became a desert people's leader, and the novel is deeply skeptical of the savior narrative it appears to celebrate. Paul sees the future and knows his ascension will lead to a jihad that kills billions — yet he cannot stop it. Free will and destiny wrestle throughout the novel without resolution.\n\n> \"I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration.\"\n\nThe political machinations of the Great Houses — Atreides, Harkonnen, Corrino — have the complexity and treachery of Renaissance Italy. Herbert understood that politics is not a backdrop to drama but drama itself, and his depiction of feudal power structures in a far-future setting remains unmatched in science fiction.\n\nSixty years after publication, Dune continues to reward rereading. Each pass through the novel reveals new layers — ecological, political, psychological, mystical — that previous readings missed. It is the *Lord of the Rings* of science fiction: foundational, inexhaustible, and still unequaled."
    },
    {
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      publishYear: 1866,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/14544964-L.jpg",
      theGood: "The most penetrating psychological portrait of guilt ever written",
      theBad: "The religious resolution may feel forced to secular readers",
      review: "Fyodor Dostoevsky's **Crime and Punishment** is a novel that reads like a fever dream — claustrophobic, hallucinatory, and impossible to escape once entered. Raskolnikov, a destitute student in St. Petersburg, murders a pawnbroker to prove a philosophical theory about extraordinary men being above moral law. The murder takes eight pages. The punishment — psychological, not legal — takes the remaining five hundred.\n\nDostoevsky understood something that most thriller writers don't: the real tension is not in whether the criminal will be caught, but in watching a human mind consume itself with guilt. Raskolnikov's post-murder wanderings through St. Petersburg — his random acts of generosity, his paranoid encounters, his delirious collapses — constitute the most convincing portrait of a consciousness in crisis that literature has produced.\n\nThe supporting cast is extraordinary. Sonya, the prostitute with the soul of a saint, is Dostoevsky's moral center — a character whose goodness feels earned rather than imposed. Porfiry, the detective who knows Raskolnikov is guilty but prefers psychological torment to arrest, is literature's greatest intellectual cat-and-mouse player.\n\n> \"Pain and suffering are always inevitable for a large intelligence and a deep heart.\"\n\nDostoevsky wrote at furious speed, under crushing debt, and the novel's breathless pacing reflects that urgency. There's no fat on these pages. Every conversation, every dream, every fever-sweat contributes to the relentless psychological pressure.\n\nThe epilogue's religious redemption may divide readers, but even skeptics must acknowledge its structural necessity. Raskolnikov doesn't just need forgiveness; he needs to be rebuilt from scratch. Whether that rebuilding convinces depends on what you bring to the text — which is exactly how great literature should work."
    },
    {
      title: "Neuromancer",
      author: "William Gibson",
      publishYear: 1984,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/14626994-L.jpg",
      theGood: "Invented the cyberpunk genre and predicted the internet with uncanny accuracy",
      theBad: "Gibson's dense, allusive prose can be disorienting, especially in opening chapters",
      review: "William Gibson's **Neuromancer** didn't predict the future so much as *name* it. Published in 1984 — the year of Apple's Macintosh, when most people had never touched a computer — it imagined cyberspace, hacking culture, corporate espionage in virtual reality, and a world where the street finds its own uses for technology. Every one of these predictions came true.\n\nCase, a washed-up hacker in the Sprawl (the Boston-Atlanta Metropolitan Axis), is recruited by a mysterious ex-military officer named Armitage for one last job. The plot involves artificial intelligence, orbital colonies, and the Yakuza, but these are almost incidental to Gibson's real project: building a world.\n\nGibson's prose operates like the technology it describes — fast, allusive, and demanding. *The sky above the port was the color of television, tuned to a dead channel.* That opening line told readers exactly what kind of novel they were entering: one where technology has colonized even our metaphors for nature.\n\n> \"Cyberspace. A consensual hallucination experienced daily by billions of legitimate operators.\"\n\nThe novel's vision of cyberspace as a navigable, three-dimensional space of data — bright geometries of corporate information systems hanging like constellations — predated the World Wide Web by a decade. Gibson wasn't working from technical knowledge; he was working from poetic intuition, which is why his vision aged so much better than harder science fiction of the same period.\n\nMolly, the razorgirl with retractable blades beneath her fingernails and surgically implanted mirrorshades, became the template for every cyberpunk heroine that followed. She's tough without being invulnerable, capable without being superhuman — a character who feels real in a world that's deliberately artificial.\n\n**Neuromancer** won the Hugo, the Nebula, and the Philip K. Dick Award — a triple crown never achieved before or since. It earned every one."
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      publishYear: 1960,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/14350216-L.jpg",
      theGood: "Atticus Finch remains literature's most compelling moral exemplar",
      theBad: "The white savior narrative has been rightfully critiqued by modern readers",
      review: "Harper Lee's **To Kill a Mockingbird** accomplishes something remarkably difficult: it addresses the deepest moral failure in American history through the eyes of a child, and in doing so makes its lessons feel discovered rather than taught. Scout Finch, six years old when the novel begins, narrates with a child's clarity and an adult's retrospective wisdom — a dual perspective that Lee maintains with perfect pitch throughout.\n\nAtticus Finch's defense of Tom Robinson — a Black man falsely accused of rape in 1930s Alabama — is the novel's dramatic spine, but its thematic spine is broader: how do we teach children to be good in a world that isn't? Atticus answers not through lectures but through example, through the daily accumulation of small decencies that add up to a moral life.\n\n> \"You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.\"\n\nBoo Radley, the reclusive neighbor who becomes the children's obsession and ultimately their savior, is Lee's most subtle creation. He is the novel's thesis made flesh: the person we fear and mock is often the person who loves us most. His appearance at the novel's climax is one of literature's most perfectly prepared revelations.\n\nThe courtroom scenes are brilliantly constructed — Lee was the daughter of a lawyer and understood legal procedure intimately. But the real drama is not the trial itself but the community's reaction to it: the way racism functions not as individual malice but as collective delusion, maintained by social pressure and economic power.\n\nLee published only this one novel during her active career, and it's tempting to wonder if she knew she'd said everything she needed to say. **To Kill a Mockingbird** is that rare work of art that is both a perfect novel and a genuine moral education."
    },
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      publishYear: 1925,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/14839332-L.jpg",
      theGood: "Perhaps the most perfectly written novel in American literature — not a word wasted",
      theBad: "The characters are deliberately shallow, which can limit emotional engagement",
      review: "F. Scott Fitzgerald's **The Great Gatsby** is a slim, devastating novel about a large, devastating subject: the corruption of the American Dream. At barely 47,000 words, it accomplishes what most novelists can't manage in three times the length — a complete dissection of desire, class, and the terrible persistence of hope.\n\nJay Gatsby, né James Gatz of North Dakota, reinvented himself for one purpose: to win back Daisy Buchanan, the golden girl he loved as a young officer. His mansion across the bay, his legendary parties, his suspicious fortune — all exist for one purpose: to reverse time, to make the past present again. It is, of course, impossible.\n\nNick Carraway, our narrator, is Fitzgerald's masterstroke. He is simultaneously inside the story and outside it, attracted to Gatsby's dream even as he recognizes its futility. His famous final assessment — *Gatsby believed in the green light, the orgastic future that year by year recedes before us* — is the most quoted passage in American literature for good reason.\n\n> \"So we beat on, boats against the current, borne back ceaselessly into the past.\"\n\nFitzgerald's prose in this novel achieves a lyrical precision that borders on poetry. Every sentence has been polished to a gemstone hardness. The descriptions of Gatsby's parties — the blue gardens, the champagne stars, the laughter rising toward the summer sky — are intoxicating even as they describe intoxication's emptiness.\n\nThe novel was a commercial failure when published. Fitzgerald died in 1940 believing himself forgotten. It was only after World War II, when the novel was distributed to soldiers and then adopted by college curricula, that it achieved its current status. There is something fitting about this: a novel about the American Dream achieving its own belated recognition through persistence."
    },
    {
      title: "Brave New World",
      author: "Aldous Huxley",
      publishYear: 1932,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/14624306-L.jpg",
      theGood: "A prophetic vision of control through pleasure that feels more relevant than Orwell's in today's world",
      theBad: "Huxley's characters are deliberately flat, serving as vehicles for ideas rather than fully realized people",
      review: "If Orwell imagined a future where we're destroyed by what we fear, Aldous Huxley imagined one where we're destroyed by what we love. **Brave New World** is the cheerful dystopia — a society of engineered happiness where suffering has been abolished along with art, religion, family, and everything else that makes life meaningful.\n\nThe World State's citizens are grown in bottles, conditioned from birth to love their predetermined social roles, and kept pacified by soma — a perfect drug with no hangover. There are no books, no monogamy, no solitude. Everyone belongs to everyone else. It sounds like paradise, and that's precisely the horror.\n\nBernard Marx, the misfit Alpha who suspects something is missing, and John the Savage, raised outside civilization on a Reservation, serve as complementary lenses on the World State. Bernard's discontent is shallow — he wants status, not truth. John's is genuine but doomed: his Shakespeare-soaked idealism cannot survive contact with a world that has no use for tragedy.\n\n> \"But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin.\"\n\nHuxley's satirical eye is razor-sharp. The Solidarity Services, where citizens work themselves into pseudo-religious ecstasy, parody both religious revival meetings and corporate team-building exercises simultaneously. The feelies — movies with added tactile sensation — predict virtual reality entertainment with eerie precision.\n\nWhat makes the novel's vision so disturbing is how voluntary the servitude is. No one in the World State is forced to take soma or attend orgies or abandon their children. They *want* to. They've been engineered to want to. The question Huxley poses — can freedom exist in a world where no one wants it? — remains unanswered and perhaps unanswerable."
    },
    {
      title: "Fahrenheit 451",
      author: "Ray Bradbury",
      publishYear: 1953,
      rating: 8,
      coverUrl: "https://covers.openlibrary.org/b/id/11603930-L.jpg",
      theGood: "A passionate, lyrical defense of the power of literature",
      theBad: "The characterization beyond Montag is relatively thin",
      review: "Ray Bradbury's **Fahrenheit 451** — the temperature at which paper burns — is less a novel about censorship than a novel about apathy. The firemen who burn books in Bradbury's future America aren't imposing their will on a resistant populace. They're giving people what they want: a world without difficult ideas, without challenging emotions, without the discomfort of genuine thought.\n\nGuy Montag, a fireman who begins to question his profession after meeting a peculiar teenage neighbor named Clarisse, undergoes a transformation that is part awakening and part breakdown. When he reads his first book — Dover Beach by Matthew Arnold — he weeps, and it's unclear whether he's crying at the beauty of the poem or at the realization of everything he's been denied.\n\nBradbury was a poet who happened to write prose, and his language in this novel has a feverish, incantatory quality. The opening line — *It was a pleasure to burn* — is one of the great first sentences, simultaneously seductive and horrifying. The Mechanical Hound, an eight-legged predator that hunts by scent, is described with such visceral precision that it haunts the imagination long after the book is closed.\n\n> \"A book is a loaded gun in the house next door. Burn it.\"\n\nThe most prescient aspect of the novel isn't the book-burning — it's the parlor walls. Bradbury imagined enormous flat-screen televisions that broadcast interactive soap operas, keeping citizens in a permanent state of passive engagement. He imagined earbuds (\"Seashells\") that pump constant entertainment directly into the ear. He imagined, in 1953, the attention economy.\n\nThe novel's final image — of Book People, each one a living library, walking the roads and preserving literature in memory — is Bradbury's act of faith. Books may burn, but stories survive. They survive because they are not paper and ink but the architecture of human consciousness."
    },
    {
      title: "Moby-Dick",
      author: "Herman Melville",
      publishYear: 1851,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/14703692-L.jpg",
      theGood: "An encyclopedic, genre-defying masterwork that contains entire worlds within its pages",
      theBad: "The cetology chapters will test even devoted readers' patience",
      review: "Herman Melville's **Moby-Dick** is the great American novel that America wasn't ready for. Published in 1851 to poor sales and hostile reviews, it was rediscovered in the 1920s and has been growing ever since — a white whale of a book that cannot be fully captured by any single reading.\n\n*Call me Ishmael.* Three words, and we are aboard. Ishmael is one of literature's great narrators — philosophical, self-deprecating, endlessly digressive, and deeply human. His friendship with Queequeg, the Polynesian harpooner he meets in a shared bed at the Spouter-Inn, is one of the most tender relationships in 19th-century fiction.\n\nAnd then there is Ahab. Melville's one-legged captain, lashed to his obsession with the white whale that maimed him, is simultaneously a tragic hero, a mad tyrant, and a metaphysical investigator. His quarrel with Moby Dick is a quarrel with the universe itself — with the inscrutable malice (or indifference) that lurks behind creation's mask.\n\n> \"I know not all that may be coming, but be it what it will, I'll go to it laughing.\"\n\nThe novel is famously baggy — chapters on the whiteness of the whale, on the anatomy of the sperm whale's head, on the process of rendering blubber. Modern readers may skip these chapters, but they do so at their peril. Melville is building something larger than a narrative: he is constructing a complete world, a floating civilization, a system of knowledge that encompasses theology, biology, economics, and art.\n\nThe final three chapters — the three-day chase of Moby Dick — are among the most thrilling passages in all of literature. Melville's prose rises to a Shakespearean pitch of intensity. The destruction of the Pequod and its crew has the grandeur and inevitability of classical tragedy. Only Ishmael survives, floating on Queequeg's coffin — life preserved by death, story preserved by the storyteller."
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      publishYear: 1951,
      rating: 8,
      coverUrl: "https://covers.openlibrary.org/b/id/12951439-L.jpg",
      theGood: "Holden Caulfield's voice is one of the most distinctive and influential in American fiction",
      theBad: "Holden's relentless cynicism can become grating for adult readers",
      review: "J.D. Salinger's **The Catcher in the Rye** captures something that most novels about adolescence miss: the way teenage unhappiness feels not like a phase but like a permanent revelation about the nature of existence. Holden Caulfield, expelled from yet another prep school, wanders New York City for three days in a state of grief, rage, and tenderness that he cannot name.\n\nHolden's voice — slangy, digressive, simultaneously sophisticated and naïve — is the novel's great achievement. Every sentence sounds *spoken*, with the rhythms and contradictions of actual speech. His favorite word, 'phony,' is both his most useful analytical tool and his biggest blind spot. He sees phoniness everywhere except in himself, which is the most authentic kind of phoniness there is.\n\nThe novel's emotional core is Holden's dead brother, Allie, whose red-hair and left-handed baseball mitt represent everything pure and good that Holden has lost. Holden's fantasy of being the catcher in the rye — standing at the edge of a cliff, catching children before they fall into adulthood — is the most poignant articulation of adolescent idealism in American fiction.\n\n> \"Don't ever tell anybody anything. If you do, you start missing everybody.\"\n\nSalinger's New York is rendered with a specificity that makes the city feel like a character: the ducks in Central Park, the nuns at Grand Central, the lobby of the Edmont Hotel. These details ground Holden's existential crisis in physical reality, preventing the novel from floating away into abstraction.\n\nThe novel has been loved and hated in equal measure — adopted by rebels and assassins, banned and assigned, analyzed to death and still somehow alive. Its persistence suggests that Holden's question — how do you grow up without becoming a phony? — remains unanswered."
    }
  ];

  console.log('Cleaning existing reviews...');
  await prisma.comment.deleteMany({});
  await prisma.movieReview.deleteMany({});
  await prisma.bookReview.deleteMany({});

  console.log('Seeding Movies...');
  for (const m of movies) {
    await prisma.movieReview.create({
      data: {
        title: m.title,
        director: m.director,
        releaseYear: m.releaseYear,
        rating: m.rating,
        posterUrl: m.posterUrl,
        theGood: m.theGood,
        theBad: m.theBad,
        review: m.review,
        authorId: userId
      }
    });
    console.log(`  ✓ ${m.title}`);
  }

  console.log('\nSeeding Books...');
  for (const b of books) {
    await prisma.bookReview.create({
      data: {
        title: b.title,
        author: b.author,
        publishYear: b.publishYear,
        rating: b.rating,
        coverUrl: b.coverUrl,
        theGood: b.theGood,
        theBad: b.theBad,
        review: b.review,
        authorId: userId
      }
    });
    console.log(`  ✓ ${b.title}`);
  }

  console.log('\n🎬📚 All data seeded successfully!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
