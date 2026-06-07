const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "12 Angry Men",
    director: "Sidney Lumet",
    releaseYear: 1957,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=12+Angry+Men",
    theGood: "A masterclass in tension, blocking, and dialogue. It proves that a single room and twelve brilliant actors are all you need for an epic.",
    theBad: "The somewhat idealized view of the justice system might feel slightly naive to modern, cynical viewers.",
    review: "Sidney Lumet’s directorial debut is a towering achievement in dramatic storytelling. Set almost entirely within the claustrophobic confines of a sweltering New York jury room, 12 Angry Men follows a dozen jurors as they deliberate the fate of a young man accused of murder. What begins as an open-and-shut case slowly unravels as Juror 8 (Henry Fonda) introduces reasonable doubt, forcing his peers to confront their own deep-seated prejudices, apathy, and personal demons.\n\nThe genius of the film lies in its visual dynamism. Lumet masterfully utilizes camera angles and focal lengths to heighten the psychological tension. As the deliberations grow more heated and the room literally heats up, the camera descends from high-angle, wide shots to tight, suffocating close-ups, creating a palpable sense of entrapment. Every juror is a distinct archetype of mid-century American masculinity, and the dialogue crackles with intelligence and moral urgency.\n\nMore than a courtroom drama, 12 Angry Men is a profound meditation on the fragility of justice. It argues that the system works not because humans are infallible, but because the requirement of unanimity forces us to transcend our worst impulses. It is an electrifying, deeply humane masterpiece."
  },
  {
    title: "Schindler's List",
    director: "Steven Spielberg",
    releaseYear: 1993,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Schindler's+List",
    theGood: "An emotionally shattering, visually astonishing historical document. Liam Neeson and Ralph Fiennes deliver the performances of a lifetime.",
    theBad: "It is an incredibly grueling, emotionally exhausting watch that offers no easy catharsis.",
    review: "Steven Spielberg’s Schindler's List is perhaps the most definitive cinematic confrontation of the Holocaust. Filmed in stark, documentary-style black-and-white by cinematographer Janusz Kamiński, the film traces the transformation of Oskar Schindler (Liam Neeson), a vain, opportunistic Nazi Party member and war profiteer, into a desperate savior who expends his entire fortune to rescue over a thousand Polish-Jewish refugees from the gas chambers.\n\nSpielberg abandons his usual sentimentality for unflinching, terrifying realism. The liquidation of the Kraków ghetto is one of the most horrifying sequences ever committed to film—a relentless, chaotic depiction of absolute evil. Contrasting Schindler is Amon Göth (Ralph Fiennes), a psychotic SS commandant who represents the banality and arbitrary cruelty of the Nazi regime. Göth is not a cartoon villain; he is a terrifyingly human monster who shoots prisoners from his balcony as casually as taking a morning stretch.\n\nThe film’s emotional weight is anchored by John Williams’ mournful, devastating violin score. While the film ultimately focuses on survival and the 'list is life,' it never lets the audience forget the six million who did not survive. Schindler’s List is a monumental testament to both the darkest depths of human depravity and the profound impact of a single righteous conscience."
  },
  {
    title: "The Shawshank Redemption",
    director: "Frank Darabont",
    releaseYear: 1994,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Shawshank+Redemption",
    theGood: "A beautifully structured, life-affirming fable about resilience and the enduring power of hope.",
    theBad: "Its deliberate pacing and earnestness may border on overly sentimental for viewers seeking gritty realism.",
    review: "Adapted from a Stephen King novella, The Shawshank Redemption is a quiet, unassuming miracle of a film that has slowly cemented its place as one of the most beloved movies of all time. It tells the decades-spanning story of Andy Dufresne (Tim Robbins), a mild-mannered banker wrongly convicted of murder, and his enduring friendship with Ellis 'Red' Redding (Morgan Freeman), the prison's seasoned contraband smuggler.\n\nThe film is not about the horrors of incarceration, though it certainly does not shy away from the brutality, corruption, and systemic crushing of the human spirit inside Shawshank. Rather, it is a meticulous study of psychological survival. Andy’s quiet rebellion—whether it is locking himself in the warden's office to broadcast Mozart across the prison yard or spending decades carving chess pieces—is rooted in his absolute refusal to let the institution extinguish his inner life.\n\nMorgan Freeman's iconic narration elevates the film from a simple prison drama into a profound fable about institutionalization and redemption. The climax, revealing Andy’s incredible, meticulous escape, is one of the most profoundly satisfying payoffs in cinematic history. The Shawshank Redemption argues that hope is not a dangerous thing; it is the only thing that keeps us alive."
  },
  {
    title: "Forrest Gump",
    director: "Robert Zemeckis",
    releaseYear: 1994,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Forrest+Gump",
    theGood: "A sweeping, technically groundbreaking American odyssey. Tom Hanks is endlessly charming.",
    theBad: "Its implicit political conservatism and simplistic moral framing of complex historical events can feel overly reductive.",
    review: "Forrest Gump is a sprawling, wildly ambitious modern fairy tale that charts a half-century of turbulent American history through the eyes of a gentle, slow-witted man from Alabama. Directed with immense technical bravura by Robert Zemeckis, the film is a masterclass in tone, seamlessly blending broad comedy, profound tragedy, and groundbreaking visual effects that insert Tom Hanks into historical archive footage.\n\nHanks’ performance as Forrest is legendary, imbuing the character with absolute sincerity and unwavering decency. As Forrest inadvertently influences everything from the Watergate scandal to the creation of the smiley face, the film paints a picture of an America torn apart by war, civil rights struggles, and cultural upheaval. His constant anchor is his childhood love, Jenny (Robin Wright), whose tragic, self-destructive path through the counterculture movement stands in stark contrast to Forrest’s passive, charmed existence.\n\nWhile critics often debate the film’s thematic meaning—whether it celebrates willful ignorance or simply advocates for kindness in a chaotic world—its emotional resonance is undeniable. Alan Silvestri’s soaring score and the film’s iconic feather motif remind us that life is a delicate balance of destiny and the breeze. Forrest Gump is a deeply moving, indelible piece of pop cinema."
  },
  {
    title: "Inception",
    director: "Christopher Nolan",
    releaseYear: 2010,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Inception",
    theGood: "A staggering feat of imagination and architectural world-building. The practical effects and action set pieces are mind-bending.",
    theBad: "The emotional core is sometimes buried beneath endless layers of exposition and rule-explaining.",
    review: "Christopher Nolan’s Inception is the rare blockbuster that dares to treat its audience like intelligent adults. It is a wildly original, structurally complex heist movie that takes place not in a vault, but within the architecture of the human mind. Leonardo DiCaprio stars as Cobb, an 'extractor' who steals corporate secrets by infiltrating his targets' dreams, who is given the impossible task of 'inception'—planting an idea in a target's subconscious.\n\nThe film is a masterclass in escalating tension. Nolan constructs a meticulously logical ruleset for his dreamscapes, and then stretches those rules to their absolute limits. The simultaneous execution of the heist across four nested levels of dreaming—each moving at a drastically different speed—is a triumph of editing (by Lee Smith) and directing. The zero-gravity hallway fight sequence, achieved using massive practical rotating sets, remains one of the most breathtaking action scenes of the 21st century.\n\nBeneath the spectacle, Inception is fundamentally a movie about filmmaking itself. Cobb is the director, Arthur is the producer, Ariadne is the production designer, and the target is the audience. It is also a haunting story of grief, as Cobb is continually tormented by the projection of his deceased wife, Mal (Marion Cotillard). Hans Zimmer's iconic, blaring score anchors the massive scale of the film. It is a thrilling, cerebral masterpiece that demands multiple viewings."
  },
  {
    title: "Se7en",
    director: "David Fincher",
    releaseYear: 1995,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Se7en",
    theGood: "A relentlessly grim, stylistically flawless procedural. The tension builds to an utterly devastating, unforgettable climax.",
    theBad: "The pervasive nihilism and disturbing imagery make it a difficult film to revisit frequently.",
    review: "David Fincher’s Se7en is a rain-slicked, suffocating descent into absolute moral decay. It is a serial killer procedural that transcends the genre through its overwhelming atmosphere and philosophical weight. The film pairs the weary, retiring Detective Somerset (Morgan Freeman) with the hot-headed, idealistic Detective Mills (Brad Pitt) as they track a meticulous psychopath known only as John Doe, who is using the Seven Deadly Sins as a gruesome motif for his murders.\n\nFincher’s direction is masterful in its restraint and suggestion. The film rarely shows the murders themselves, instead focusing on the horrifying, meticulously staged aftermaths. Darius Khondji’s cinematography uses a process called bleach bypass to strip the image of bright colors, leaving a world composed entirely of oppressive shadows, sickly yellows, and perpetual rain. The unnamed city feels like a literal manifestation of purgatory.\n\nThe true brilliance of Se7en lies in its terrifying antagonist, whose identity is kept hidden until the final act. When John Doe finally appears, his chilling, disturbingly coherent worldview challenges the detectives' own justifications for fighting evil. The film’s climax in a barren desert—a stark contrast to the claustrophobic city—is a masterstroke of tension and inevitability. Se7en is a bleak, uncompromising masterpiece of modern horror-thriller cinema."
  },
  {
    title: "Gladiator",
    director: "Ridley Scott",
    releaseYear: 2000,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Gladiator",
    theGood: "A triumphant revival of the sword-and-sandal epic. Russell Crowe commands the screen, and the Colosseum battles are legendary.",
    theBad: "Historical accuracy is completely jettisoned in favor of Hollywood melodrama, though the spectacle makes it easy to forgive.",
    review: "Ridley Scott’s Gladiator single-handedly resurrected the Roman epic for the modern era. It is a massive, blood-soaked spectacle fueled by a profoundly emotional core of grief and vengeance. Russell Crowe delivers a career-defining performance as Maximus Decimus Meridius, a brilliant Roman general who is betrayed, stripped of his rank, and sold into slavery after the emperor is murdered by his own corrupt son, Commodus (Joaquin Phoenix).\n\nThe film’s production design is staggering, seamlessly blending immense practical sets with pioneering CGI to recreate the awe-inspiring scale of ancient Rome. The combat sequences are visceral and brutal, shot with a frenetic, shutter-speed manipulation that makes every sword strike feel bone-shattering. Yet, amidst the spectacular violence of the Colosseum, the film never loses sight of Maximus's deeply personal motivation: not a desire for glory, but a desperate yearning to reunite with his murdered family in the afterlife.\n\nJoaquin Phoenix is terrifyingly pathetic as Commodus, a villain driven entirely by massive insecurity and a desperate need for the love of the mob. Hans Zimmer and Lisa Gerrard’s ethereal, soaring score perfectly captures the tragedy and triumph of the narrative. Gladiator is a monumental piece of cinematic entertainment that perfectly balances massive scale with intimate emotional stakes."
  },
  {
    title: "The Prestige",
    director: "Christopher Nolan",
    releaseYear: 2006,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Prestige",
    theGood: "A meticulously crafted puzzle box of a film. The rivalry is gripping, and the final twists re-contextualize the entire story.",
    theBad: "The emotional coldness of both protagonists makes it difficult to fully empathize with either man's destructive obsession.",
    review: "Christopher Nolan’s The Prestige is a film constructed exactly like the magic tricks it portrays: the pledge, the turn, and the prestige. Set in Victorian London, it chronicles the escalating, deeply destructive rivalry between two magicians, Robert Angier (Hugh Jackman) and Alfred Borden (Christian Bale). What begins as professional sabotage rapidly spirals into a deadly obsession with discovering the ultimate illusion: 'The Transported Man.'\n\nNolan uses the fractured narrative structure to brilliant effect, relying on stolen diaries to nest flashbacks within flashbacks. The film explores the profound sacrifices required for true artistic devotion. Borden is a brilliant technician who lacks showmanship, while Angier is a consummate showman who lacks original genius. Their desperate attempts to outdo one another push them into the realm of actual science fiction, aided by a brief, electrifying appearance by David Bowie as Nikola Tesla.\n\nThe film’s dark, gaslit atmosphere perfectly complements its themes of deception, duality, and the blurring line between illusion and reality. The Prestige is incredibly dense, rewarding multiple viewings with hidden clues and double meanings that are plainly visible from the start. It is one of Nolan’s tightest, most conceptually fascinating films—a tragic testament to the cost of absolute obsession."
  },
  {
    title: "The Departed",
    director: "Martin Scorsese",
    releaseYear: 2006,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Departed",
    theGood: "A razor-sharp, violently entertaining cat-and-mouse thriller. The ensemble cast is universally phenomenal, guided by Scorsese's manic energy.",
    theBad: "It lacks the profound historical and thematic depth of Scorsese's earlier mob epics like Goodfellas.",
    review: "A remake of the Hong Kong thriller Infernal Affairs, Martin Scorsese’s The Departed is a blood-soaked, adrenaline-fueled masterpiece of paranoia and deception. Relocating the story to the gritty streets of South Boston, the film follows two men living identical lies: Billy Costigan (Leonardo DiCaprio), an undercover cop infiltrating the Irish mob, and Colin Sullivan (Matt Damon), a mob mole who has infiltrated the Massachusetts State Police.\n\nThe tension in the film is practically unbearable. Both men are constantly on the verge of being exposed, and the psychological toll of their double lives is palpable. DiCaprio is brilliantly manic as a man losing his mind under immense pressure, while Damon is chillingly composed as a slick, ambitious sociopath. At the center of it all is Jack Nicholson as mob boss Frank Costello, delivering a wildly unpredictable, Shakespearean performance of absolute villainy.\n\nScorsese’s direction is kinetic and ruthless, propelled by Thelma Schoonmaker’s rapid-fire editing and a blistering rock-and-roll soundtrack. The dialogue, courtesy of William Monahan’s Oscar-winning script, is incredibly profane, hilarious, and sharp. The Departed is a brutal exploration of identity, loyalty, and the corrupting nature of power, culminating in one of the most shockingly abrupt and violent finales in modern cinema. It is pure, unadulterated cinematic electricity."
  },
  {
    title: "Memento",
    director: "Christopher Nolan",
    releaseYear: 2000,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Memento",
    theGood: "A brilliant, completely unique structural gimmick that perfectly forces the audience to experience the protagonist's disorientation.",
    theBad: "The emotional engagement is occasionally sacrificed in service of the complex narrative mechanics.",
    review: "Memento is the film that announced Christopher Nolan as a major cinematic visionary. It is a neo-noir thriller built on a staggeringly original premise: the protagonist, Leonard Shelby (Guy Pearce), suffers from anterograde amnesia, meaning he cannot form new memories. Desperate to find the man who raped and murdered his wife, Leonard navigates the world using a complex system of Polaroid photographs, frantic notes, and facts tattooed directly onto his body.\n\nNolan mirrors Leonard’s condition by presenting the narrative in reverse chronological order. The film begins at the end of the story and moves backward in short, distinct segments, intercut with chronological black-and-white sequences. This forces the audience into Leonard's terrifying reality: we always know what he is doing, but we never know *why* he is doing it or what happened ten minutes ago. It is a profound manipulation of narrative perspective.\n\nBeyond the gimmick, Memento is a deeply cynical exploration of the lies we tell ourselves to survive. As the narrative pieces finally click together in the film's devastating conclusion, it reveals the terrifying lengths to which humanity will go to manufacture purpose and avoid painful truths. Guy Pearce delivers a heartbreaking, grounded performance that anchors the twisting logic of the plot. Memento remains a triumph of independent filmmaking and structural ingenuity."
  }
,
  {
    title: "WALL·E",
    director: "Andrew Stanton",
    releaseYear: 2008,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=WALL-E",
    theGood: "A visually breathtaking, nearly silent masterpiece of animation in its first half, delivering a profound environmental warning.",
    theBad: "The transition into a more conventional sci-fi chase movie in the second half feels slightly jarring compared to the poetic opening.",
    review: "Pixar’s WALL·E is a towering achievement in modern cinema, disguised as a children’s movie. For the first forty minutes, it operates as a practically silent film, relying entirely on the exquisite, soulful animation of its titular character—a solitary, trash-compacting robot left behind on a completely ruined, garbage-choked Earth. WALL·E's tender curiosity, finding beauty in discarded human trinkets while faithfully executing his impossible task, makes him one of the most endearing protagonists ever put to film.\n\nThe film’s environmental and anti-consumerist themes are startlingly bleak for an animated feature. When WALL·E meets EVE, a sleek probe searching for signs of life, the narrative shifts to the Axiom—a luxurious spaceship where the remnants of humanity have devolved into helpless, hovering blobs sustained entirely by automated consumption. The visual contrast between the sterile, pastel dystopia of the Axiom and the desolate, sun-scorched poetry of Earth is striking.\n\nYet, at its core, WALL·E is an achingly beautiful romance. The delicate, wordless courtship between the rusty, outdated WALL·E and the technologically advanced EVE transcends its robotic medium, culminating in a deeply moving climax that reminds us that humanity’s greatest trait is not our technology, but our capacity for love and stewardship."
  },
  {
    title: "Spider-Man: Into the Spider-Verse",
    director: "Bob Persichetti, Peter Ramsey, Rodney Rothman",
    releaseYear: 2018,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Spider-Verse",
    theGood: "A revolutionary leap forward in animation style. It is the most emotionally resonant, stylistically daring comic book movie ever made.",
    theBad: "The sheer visual density and rapidly shifting framerates can be overwhelming upon first viewing.",
    review: "In an era saturated by comic book adaptations, Spider-Man: Into the Spider-Verse arrived as an absolute revelation. It did not merely adapt a comic book; it fundamentally reimagined what a comic book movie could look and feel like. By abandoning photorealism in favor of a vibrant, halftone-dotted, pop-art explosion that mimics the texture of printed pages, the film established an entirely new visual language for Western animation.\n\nThe narrative brilliance lies in its focus on Miles Morales, a Brooklyn teenager struggling to find his identity and live up to the immense legacy of Peter Parker. When a multiverse collider brings multiple alternate-universe Spider-heroes into his world—including a schlubby, depressed Peter B. Parker and the black-and-white noir Spider-Man—Miles must learn that the mask does not make the hero; the leap of faith does.\n\nEvery frame of Into the Spider-Verse bursts with creative energy, from its dynamic use of split screens and visible sound effects to its hip-hop-infused soundtrack. The 'Leap of Faith' sequence, where Miles finally embraces his destiny, is one of the most exhilarating, emotionally triumphant moments in modern cinema. It is a masterpiece of style, heart, and storytelling."
  },
  {
    title: "Avengers: Infinity War",
    director: "Anthony and Joe Russo",
    releaseYear: 2018,
    rating: 8,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Infinity+War",
    theGood: "A massive, miraculously balanced crossover event that delivers a truly terrifying, complex villain in Thanos.",
    theBad: "It functions less as a standalone film and more as the climax of a sprawling television series, requiring deep prior knowledge of the universe.",
    review: "Avengers: Infinity War is less a traditional film and more an unprecedented logistical triumph—the culmination of ten years and eighteen films of interconnected storytelling. What makes Infinity War work so spectacularly is its bold narrative decision to frame Thanos (Josh Brolin) not as the villain, but as the actual protagonist of the story. It is his Hero's Journey to collect the six Infinity Stones and enact his twisted, Malthusian vision of universal balance.\n\nThe Russo brothers manage the sprawling, massive cast with incredible precision, pairing off beloved characters into smaller, dynamic groups that journey across the cosmos. The pacing is absolutely relentless, moving from a devastating opening on a refugee ship to massive, planet-cracking battles on Titan and Wakanda. Despite the scale, the emotional stakes remain deeply personal, anchored by the agonizing sacrifices Thanos is willing to make for his terrifying cause.\n\nThe film’s climax—the infamous 'Snap'—remains one of the most shocking, genuinely traumatizing moments in blockbuster history. Watching half of the cinematic universe slowly turn to ash in utter silence was a staggering subversion of audience expectations. Infinity War proved that the Marvel machine was capable of delivering profound consequences and overwhelming dread."
  },
  {
    title: "Alien",
    director: "Ridley Scott",
    releaseYear: 1979,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Alien",
    theGood: "A flawless exercise in claustrophobic terror. H.R. Giger's creature design and the 'used future' aesthetic changed sci-fi forever.",
    theBad: "Its deliberate, slow-burn pacing in the first act requires patience that modern audiences might lack.",
    review: "Ridley Scott’s Alien is a haunted house movie set in the cold, uncaring void of space. It fundamentally reshaped the science fiction genre by stripping away the polished, utopian optimism of Star Trek and Star Wars, replacing it with a 'used future' populated by underpaid, blue-collar space truckers complaining about bonus pay while hauling ore back to Earth. The Nostromo is not a sleek starship; it is a dark, dripping, industrial nightmare.\n\nThe horror of Alien is incredibly patient. Scott spends nearly forty minutes establishing the mundane reality of the crew before unleashing the nightmare. When the nightmare does arrive—courtesy of the infamous, terrifying chestburster sequence—the film pivots into a masterclass of survival horror. H.R. Giger’s design for the Xenomorph is a masterpiece of psychosexual dread, a perfect killing machine that blends biomechanical horror with primal violation.\n\nSigourney Weaver’s Ellen Ripley emerges not as a typical action hero, but as the only competent survivor in a corporate system that views her crew as entirely expendable. The film’s quiet, suffocating use of shadow and silence makes the Nostromo’s air ducts feel like a tomb. Alien remains the absolute pinnacle of sci-fi horror."
  },
  {
    title: "Terminator 2: Judgment Day",
    director: "James Cameron",
    releaseYear: 1991,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Terminator+2",
    theGood: "The definitive action sequel. It flawlessly blends groundbreaking CGI with incredible practical stunts and a surprising emotional core.",
    theBad: "Some of the early 90s colloquialisms and the teenage John Connor's dialogue have aged somewhat poorly.",
    review: "James Cameron’s Terminator 2: Judgment Day is the rare sequel that completely transcends its predecessor. Taking the gritty, low-budget slasher premise of the original and scaling it up to an explosive, big-budget sci-fi action epic, T2 revolutionized Hollywood filmmaking. Its introduction of the liquid metal T-1000 (Robert Patrick) was a watershed moment for computer-generated imagery, creating an incredibly terrifying, relentless antagonist that could flow through prison bars and form blades from its own limbs.\n\nHowever, the film’s true brilliance lies in its subversion of the first film's dynamics. Arnold Schwarzenegger’s terrifying T-800 is reprogrammed from a relentless killer into a hyper-violent, deeply loyal surrogate father figure for young John Connor (Edward Furlong). Linda Hamilton’s transformation of Sarah Connor—from a terrified waitress into a hardened, traumatized paramilitary warrior desperate to prevent a nuclear apocalypse—is one of the greatest character arcs in action cinema.\n\nThe action sequences—particularly the legendary truck chase through the Los Angeles aqueduct and the shootout at Cyberdyne Systems—are masterclasses in practical staging and explosive geography. Yet, beneath the spectacular destruction, T2 is ultimately a deeply humanist film about free will, arguing that if a machine can learn the value of human life, perhaps we can too."
  },
  {
    title: "The Lion King",
    director: "Roger Allers, Rob Minkoff",
    releaseYear: 1994,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Lion+King",
    theGood: "A grand, Shakespearean animated epic with some of the most iconic music and breathtaking hand-drawn animation in Disney history.",
    theBad: "The narrative structure sags slightly during Simba's prolonged, comedic 'Hakuna Matata' exile.",
    review: "The Lion King represents the absolute zenith of the Disney Renaissance. Heavily borrowing from Shakespeare’s Hamlet and the biblical story of Moses, it is a grand, sweeping tragedy centered on Simba, a young lion prince who is manipulated into exile after the murder of his father, King Mufasa (voiced with majestic gravity by James Earl Jones), by his treacherous uncle Scar (Jeremy Irons).\n\nThe animation is overwhelmingly beautiful, from the awe-inspiring opening sequence set to the soaring vocals of 'Circle of Life' to the terrifying, fascist imagery of Scar’s 'Be Prepared' musical number. The film does not shy away from the brutal realities of the natural world and the heavy burden of responsibility. Mufasa’s death in the wildebeest stampede remains one of the most traumatizing and emotionally resonant sequences ever animated.\n\nHans Zimmer’s Oscar-winning score, combined with Elton John and Tim Rice’s legendary songs, elevates the film into a transcendent cinematic experience. While the comedic relief of Timon and Pumbaa slows the film’s dramatic momentum, it provides necessary levity before the explosive, fiery climax at Pride Rock. The Lion King is a timeless masterpiece of storytelling."
  },
  {
    title: "Back to the Future",
    director: "Robert Zemeckis",
    releaseYear: 1985,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Back+to+the+Future",
    theGood: "The most perfectly structured screenplay in Hollywood history. Every setup has a flawless payoff in this incredibly charming adventure.",
    theBad: "If you analyze the temporal mechanics too closely, the timeline logic begins to fray—but the film is too fun for it to matter.",
    review: "Robert Zemeckis and Bob Gale’s Back to the Future is widely taught in film schools as the quintessential example of a perfect screenplay. It is an endlessly inventive, incredibly charming sci-fi comedy that relies heavily on a brilliant 'ticking clock' narrative and the electric chemistry between Michael J. Fox’s effortlessly cool Marty McFly and Christopher Lloyd’s manic, bug-eyed Doc Brown.\n\nThe film’s premise—a teenager accidentally traveling thirty years into the past and inadvertently preventing his own parents from falling in love—is executed with Swiss-watch precision. Every single line of dialogue and background detail in the first act, from the save-the-clock tower flyer to the mayor's election campaign, is a meticulous setup for a massive payoff in 1955. The film moves at a breakneck pace, juggling the grandfather paradox, an Oedipal nightmare, and an action-packed lightning storm sequence without ever losing its sense of fun.\n\nBeyond its clever mechanics, the film is a fascinating exploration of generational empathy. By forcing Marty to see his parents not as boring adults, but as awkward, vulnerable teenagers, it bridges the cultural gap between the 1980s and the 1950s. Back to the Future is pure, undeniable movie magic."
  },
  {
    title: "The Pianist",
    director: "Roman Polanski",
    releaseYear: 2002,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Pianist",
    theGood: "An unflinching, agonizingly personal account of survival in the Warsaw Ghetto. Adrien Brody's performance is incredibly haunting.",
    theBad: "Its objective, detached directorial style makes for a deeply alienating and incredibly difficult viewing experience.",
    review: "Roman Polanski’s The Pianist is a stark, devastating counterpoint to the more overtly emotional storytelling of Schindler’s List. Based on the memoirs of Władysław Szpilman, a Polish-Jewish concert pianist who survived the destruction of Warsaw, the film is an agonizing study of survival stripped of all Hollywood heroism. Szpilman (Adrien Brody) does not survive through cunning or bravery; he survives through a grueling combination of sheer luck, the kindness of strangers, and an overwhelming instinct to simply keep breathing.\n\nBrody’s physical and emotional transformation is astonishing. As the film progresses and the Warsaw Ghetto is slowly liquidated, Szpilman is reduced from a celebrated artist to a starving, skeletal scavenger hiding in the ruins of a bombed-out city. Polanski’s direction is incredibly objective and detached; violence happens suddenly, arbitrarily, and without dramatic musical cues. The camera lingers on the senseless executions with horrifying mundanity.\n\nThe film’s climax, where a starving Szpilman plays Chopin for a German officer in the frozen ruins of a house, is one of the most sublime and tragic moments in cinema. It is a profound testament to the enduring power of art in the face of total annihilation. The Pianist is a brutal, essential masterpiece."
  },
  {
    title: "Psycho",
    director: "Alfred Hitchcock",
    releaseYear: 1960,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Psycho",
    theGood: "The film that invented the modern slasher genre. It violently subverted audience expectations and features a legendary score by Bernard Herrmann.",
    theBad: "The final psychiatric explanation scene feels overly didactic and halts the terrifying momentum of the climax.",
    review: "Alfred Hitchcock’s Psycho fundamentally changed the trajectory of American cinema. By taking the aesthetics of a cheap, B-movie exploitation film and applying the meticulous, masterful craftsmanship of the world's most famous director, Hitchcock created a cultural shockwave. The film's most brilliant trick is its narrative bait-and-switch: establishing Marion Crane (Janet Leigh) as the protagonist of a tense embezzlement thriller, only to brutally murder her in a motel shower barely a third of the way through the movie.\n\nThe shower scene remains one of the most analyzed sequences in film history. Hitchcock used over seventy camera setups and rapid-fire editing to imply horrifying violence without ever showing a knife puncturing flesh, all set to Bernard Herrmann’s shrieking, iconic string score. From that moment on, the audience is left entirely untethered, forced into a deeply uncomfortable psychological alignment with Norman Bates (Anthony Perkins), a polite, deeply disturbed young man entirely dominated by his 'Mother.'\n\nPsycho shattered the strict moral codes of 1950s Hollywood, introducing a new era of psychological horror where monsters were not supernatural creatures, but the quiet, unassuming boy next door. It is a masterclass in suspense, manipulation, and Freudian terror."
  },
  {
    title: "12 Years a Slave",
    director: "Steve McQueen",
    releaseYear: 2013,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=12+Years+a+Slave",
    theGood: "An uncompromising, agonizingly brutal depiction of American slavery. Chiwetel Ejiofor’s performance is profoundly moving and dignified.",
    theBad: "Its unflinching portrayal of horrific physical and psychological abuse makes it incredibly difficult to watch.",
    review: "Steve McQueen’s 12 Years a Slave is an essential, devastating corrective to Hollywood’s long history of romanticizing or softening the institution of American slavery. Based on the 1853 memoir of Solomon Northup, a free Black man from New York who was kidnapped and sold into slavery in the Deep South, the film is an unrelenting, brutally honest depiction of total dehumanization.\n\nChiwetel Ejiofor delivers a towering performance as Northup, conveying a profound sense of dignity as he is forced to suppress his intelligence and identity simply to survive. McQueen, utilizing his background in visual art, employs long, static takes to force the audience to confront the horror without looking away. The infamous hanging sequence, where Solomon struggles on his tiptoes for hours while the plantation life continues mundanely in the background, is one of the most chilling indictments of systemic complicity ever filmed.\n\nMichael Fassbender is terrifying as Edwin Epps, a sadistic plantation owner who twists scripture to justify his monstrous cruelty, while Lupita Nyong'o’s heartbreaking performance as Patsey exposes the horrific intersection of racial and sexual violence. 12 Years a Slave is not a movie about triumph; it is a grueling endurance test that demands we witness the true, unvarnished horror of America's original sin."
  }
,
  {
    title: "City Lights",
    director: "Charlie Chaplin",
    releaseYear: 1931,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=City+Lights",
    theGood: "A perfect blend of hilarious physical comedy and deeply moving pathos. The final shot is arguably the greatest in film history.",
    theBad: "Some modern viewers might initially struggle with the silent film format and heightened pantomime acting.",
    review: "Charlie Chaplin’s City Lights is a monumental achievement, made all the more remarkable by the fact that it was released three years after the advent of sound in cinema. Chaplin stubbornly refused to give his iconic Tramp character a voice, resulting in a silent masterpiece that communicates entirely through physical grace, meticulous pantomime, and profound emotional sincerity.\n\nThe story follows the Tramp as he falls in love with a blind flower girl (Virginia Cherrill) and embarks on a series of hilarious, desperate schemes to earn enough money to pay for an operation that could restore her sight. The physical comedy is unparalleled; the boxing match sequence alone is a masterclass in choreographed chaos and comedic timing. Yet, it is the film’s immense heart that elevates it beyond mere slapstick.\n\nThe final scene, where the newly sighted girl touches the Tramp’s hand and realizes the identity of her savior, is an absolute marvel of cinematic acting. With a single, fragile smile, Chaplin conveys a universe of vulnerability, hope, and tragic apprehension. City Lights is a timeless, universally understood testament to the purity of unselfish love."
  },
  {
    title: "Casablanca",
    director: "Michael Curtiz",
    releaseYear: 1942,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Casablanca",
    theGood: "The quintessential Hollywood romance. The screenplay is miraculously witty, and Bogart and Bergman share legendary chemistry.",
    theBad: "Its status as a pop culture monolith means many viewers know the ending and the quotes before they ever watch the film.",
    review: "Casablanca is the happiest accident in Hollywood history. Rushed into production with an unfinished script and a constantly shifting ending, it somehow emerged as the gold standard of romantic cinema. Set in unoccupied Morocco during the early days of World War II, it tells the story of Rick Blaine (Humphrey Bogart), a cynical American expatriate who must choose between his lingering love for Ilsa Lund (Ingrid Bergman) and helping her husband, a Czech resistance leader, escape the Nazis.\n\nBogart’s transition from a bitter isolationist to a noble martyr mirrors America's own entry into the war, giving the film a profound, real-time political resonance. The supporting cast, particularly Claude Rains as the corrupt but charming Captain Renault, delivers some of the sharpest, most endlessly quotable dialogue ever written. The 'La Marseillaise' sequence, where the refugees drown out the singing of German officers, remains incredibly stirring.\n\nUltimately, Casablanca endures because it is a story about sacrifice. It argues that personal desires must sometimes be set aside for the greater good, a theme perfectly encapsulated in the misty, bittersweet finale on the tarmac. It is a flawless, deeply satisfying cinematic experience."
  },
  {
    title: "The Good, the Bad and the Ugly",
    director: "Sergio Leone",
    releaseYear: 1966,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Good+The+Bad+The+Ugly",
    theGood: "A massive, operatic reinvention of the Western genre. Ennio Morricone's score and the climactic Mexican standoff are cinematic perfection.",
    theBad: "Its sprawling runtime and deliberate, drawn-out pacing test the patience of viewers accustomed to faster modern editing.",
    review: "Sergio Leone’s The Good, the Bad and the Ugly is the definitive Spaghetti Western—a sprawling, cynical, deeply stylish epic that fundamentally dismantled the clean-cut morality of the American John Wayne era. Set against the incredibly brutal backdrop of the American Civil War, the film follows three ruthless gunslingers—Blondie (Clint Eastwood), Tuco (Eli Wallach), and Angel Eyes (Lee Van Cleef)—as they double-cross each other in a desperate hunt for buried Confederate gold.\n\nLeone’s visual style is legendary. He relies on extreme, uncomfortably tight close-ups of sweaty, sun-baked faces, juxtaposed with massive, sweeping wide shots of the desolate Spanish landscape acting as the American West. The film is operatic in its execution, driven almost entirely by Ennio Morricone’s iconic, howling score, which elevates dirty, violent men into mythic figures.\n\nThe film’s climax—a three-way Mexican standoff in the center of a massive graveyard—is perhaps the greatest sequence of pure editing and musical tension ever constructed. Leone stretches the silence and the shifting glances to agonizing lengths before the final, explosive gunshot. It is a gritty, magnificent masterpiece of style over substance, where the style is so profound it *becomes* the substance."
  },
  {
    title: "Once Upon a Time in the West",
    director: "Sergio Leone",
    releaseYear: 1968,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Once+Upon+a+Time",
    theGood: "A melancholic, breathtakingly beautiful eulogy for the Wild West. Henry Fonda's casting against type as a cold-blooded killer is brilliant.",
    theBad: "It moves at a glacial, hypnotic pace that requires absolute surrender to its deliberate rhythm.",
    review: "If The Good, the Bad and the Ugly was Sergio Leone’s raucous celebration of the Western, Once Upon a Time in the West is his mournful, operatic eulogy for the genre. It is a film about the death of the mythic West, crushed beneath the unstoppable, mechanized advance of the railroad and the onset of modern capitalism.\n\nThe film's opening sequence—a nearly fifteen-minute wordless masterpiece of tension involving three assassins waiting for a train, scored only to the squeaking of a windmill and the buzzing of a fly—establishes a hypnotic, glacial pace. Leone subverts decades of Hollywood history by casting Henry Fonda, America's quintessential noble hero, as Frank, one of the most chilling, cold-blooded villains ever put to film. Opposite him is Charles Bronson as 'Harmonica,' a mysterious avenger, and Jason Robards as the romantic outlaw Cheyenne.\n\nAt the center of it all is Claudia Cardinale as Jill, a former prostitute who inherits the highly coveted land the railroad needs. Her survival represents the transition from the violent era of gunfighters to the civilized, albeit corrupt, era of commerce. Ennio Morricone provides another staggering score, assigning distinct, mournful leitmotifs to each character. It is a slow, majestic, profoundly sad masterpiece."
  },
  {
    title: "Jaws",
    director: "Steven Spielberg",
    releaseYear: 1975,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Jaws",
    theGood: "The birth of the modern blockbuster. A terrifying, perfectly paced thriller that utilizes what you don't see to incredible effect.",
    theBad: "The mechanical shark ('Bruce') looks slightly rubbery when finally revealed in the climax, though the tension still holds.",
    review: "Steven Spielberg’s Jaws did not just create the summer blockbuster; it perfected it on the first try. Plagued by a notoriously disastrous production where the mechanical shark constantly sank or malfunctioned, Spielberg was forced to adopt a Hitchcockian approach: implying the monster’s presence rather than showing it. The result is a film where a floating yellow barrel or John Williams’ primal, two-note musical motif is far more terrifying than the shark itself.\n\nThe first half of the film is a masterful exercise in escalating dread, focusing on Police Chief Brody’s (Roy Scheider) desperate, politically stymied attempts to close the beaches of Amity Island while the greedy mayor refuses to lose summer tourist dollars. It is a surprisingly astute critique of capitalist priorities over public safety.\n\nThe second half pivots into a thrilling, claustrophobic nautical adventure as Brody, the arrogant oceanographer Hooper (Richard Dreyfuss), and the grizzled, Ahab-like shark hunter Quint (Robert Shaw) set out on the Orca. The dynamic between the three men is electric, culminating in Quint’s mesmerizing, terrifying monologue about the sinking of the USS Indianapolis. Jaws remains an unparalleled masterpiece of suspense and character-driven spectacle."
  },
  {
    title: "E.T. the Extra-Terrestrial",
    director: "Steven Spielberg",
    releaseYear: 1982,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=E.T.",
    theGood: "A profoundly magical, emotionally pure exploration of childhood wonder and loneliness. The bicycle flight sequence is iconic.",
    theBad: "It leans heavily into sentimentality, which may be overpowering for more cynical modern viewers.",
    review: "E.T. the Extra-Terrestrial is Steven Spielberg at his most deeply empathetic and wondrous. Far from the terrifying invasion narratives of typical 1950s sci-fi, E.T. frames its alien visitor not as a threat, but as a lost, vulnerable child. The story centers on Elliott (Henry Thomas), a lonely boy struggling with his parents' recent divorce, who discovers and forms a profound, empathetic telepathic bond with the stranded creature.\n\nSpielberg shoots the film almost entirely from a low angle, placing the camera at the eye level of a child. This visual choice renders the adult world—particularly the faceless, key-jangling government scientists—as terrifying, incomprehensible giants. The film perfectly captures the specific, messy reality of 1980s American suburban childhood, grounding the fantastical elements in a completely believable emotional reality.\n\nJohn Williams’ score is perhaps the most unabashedly magical of his career, swelling to emotional heights during the iconic sequence where Elliott’s bicycle lifts off the ground and flies across the face of the moon. E.T. is an achingly beautiful fable about the pain of growing up, the necessity of letting go, and the universal need for connection."
  },
  {
    title: "Raiders of the Lost Ark",
    director: "Steven Spielberg",
    releaseYear: 1981,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Raiders+of+the+Lost+Ark",
    theGood: "The greatest action-adventure film ever made. Harrison Ford is effortlessly charismatic, and the practical stunt work is unmatched.",
    theBad: "The narrative relies heavily on convenient coincidences, and Indy famously has very little impact on the actual outcome of the plot.",
    review: "Conceived by George Lucas and directed by Steven Spielberg, Raiders of the Lost Ark was designed as a loving homage to the breathless, cliffhanging Saturday matinee serials of the 1930s. It succeeded so wildly that it effectively eclipsed its inspirations, creating the definitive, immortal template for the modern cinematic adventure.\n\nHarrison Ford cemented his status as a cinematic icon with his portrayal of Indiana Jones—a rumpled, cynical, snake-fearing archaeologist who is as likely to get punched in the face as he is to win a fight. The film moves at a blistering, unrelenting pace, propelling Indy from the booby-trapped temples of Peru to the snowy taverns of Nepal and the sun-drenched markets of Cairo in a desperate race against the Nazis to recover the biblical Ark of the Covenant.\n\nThe action sequences are masterclasses in practical choreography and spatial geography, particularly the legendary truck chase, which remains one of the greatest vehicular stunts ever filmed. Karen Allen’s Marion Ravenwood provides a fiery, capable foil to Indy’s gruff charm. Raiders of the Lost Ark is an absolute triumph of pure, unadulterated cinematic joy."
  },
  {
    title: "Die Hard",
    director: "John McTiernan",
    releaseYear: 1988,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Die+Hard",
    theGood: "A flawless, incredibly tight action thriller that reinvented the American action hero. Alan Rickman’s Hans Gruber is an all-time great villain.",
    theBad: "It spawned decades of vastly inferior imitators that completely missed the point of the protagonist's vulnerability.",
    review: "Before Die Hard, American action cinema was dominated by the invincible, muscle-bound demi-gods played by Schwarzenegger and Stallone. John McTiernan’s 1988 masterpiece fundamentally shifted the paradigm by casting Bruce Willis—then known primarily as a comedic television actor—as John McClane, a barefoot, exhausted, deeply vulnerable New York cop trapped in a Los Angeles skyscraper with heavily armed European terrorists.\n\nThe brilliance of Die Hard lies in its meticulous, airtight screenplay. The Nakatomi Plaza is established not just as a setting, but as a three-dimensional puzzle box that McClane must desperately navigate. Every tool he uses, from C-4 explosives to the infamous fire hose, is established logically. Furthermore, McClane takes severe physical damage; by the end of the film, he is bleeding, limping, and surviving purely on adrenaline and sheer stubbornness.\n\nOpposite Willis is Alan Rickman in his film debut as Hans Gruber, a suave, impeccably dressed thief masquerading as a political radical. Rickman’s terrifyingly calm, articulate performance set the gold standard for modern action villains. Die Hard is a perfectly executed, thrilling masterwork that remains the undisputed king of the action genre."
  },
  {
    title: "The Matrix",
    director: "Lana and Lilly Wachowski",
    releaseYear: 1999,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Matrix",
    theGood: "A paradigm-shifting fusion of cyberpunk philosophy, Hong Kong martial arts, and revolutionary visual effects.",
    theBad: "The philosophical dialogue can occasionally veer into heavy-handed exposition.",
    review: "The Wachowskis’ The Matrix did not just close out the 1990s; it aggressively kicked the door open to the 21st century. It is a blistering, incredibly stylish synthesis of William Gibson’s cyberpunk literature, Jean Baudrillard’s philosophical treatises on simulation, and the kinetic, wire-fu action of Hong Kong cinema. Keanu Reeves stars as Neo, a restless hacker who discovers the terrifying truth: humanity has been enslaved by artificial intelligence, our bodies harvested for energy while our minds are kept docile in a simulated reality.\n\nThe film’s introduction of 'bullet time'—a visual effect utilizing a massive array of still cameras to allow the viewpoint to move at normal speed while the action is slowed to a crawl—was so revolutionary that it was endlessly parodied and copied for a decade. Yet, the action is anchored by a genuinely compelling hero's journey and Hugo Weaving’s deliciously sneering performance as the relentless, bureaucratic Agent Smith.\n\nBeneath the trench coats, sunglasses, and massive gunfights, The Matrix is a profoundly empowering narrative about self-actualization, queer identity, and breaking free from oppressive, binary systems of control. It remains a massive, influential cornerstone of modern pop culture."
  },
  {
    title: "Seven Samurai",
    director: "Akira Kurosawa",
    releaseYear: 1954,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Seven+Samurai",
    theGood: "The blueprint for the modern action ensemble. Its character work is as deep as its massive, rain-drenched battles are thrilling.",
    theBad: "Its massive three-and-a-half-hour runtime requires a significant commitment, though it earns every minute.",
    review: "Akira Kurosawa’s Seven Samurai is arguably the most influential action film ever made. It established the 'assembling the team' trope that has been utilized by everything from The Magnificent Seven to The Avengers. Set in 16th-century Japan, the film follows a desperate farming village that pools its meager resources to hire a group of masterless samurai (ronin) to protect them from an impending bandit attack after the harvest.\n\nDespite its epic length, the film’s pacing is incredibly tight. Kurosawa spends the first two hours meticulously building the characters, contrasting the rigid, honorable code of the samurai with the fearful, desperate pragmatism of the peasants. Toshiro Mifune’s performance as Kikuchiyo—a manic, erratic wannabe samurai who secretly hails from the peasant class—provides the emotional and thematic bridge between the two distinct worlds.\n\nThe final hour is a sustained, utterly exhausting masterclass in action choreography. The climactic battle, fought in pouring rain and deep mud, strips away the romanticism of samurai combat, revealing it as a brutal, chaotic, and desperately sad affair. The film’s final, melancholic observation—that the farmers are the only true victors, while the samurai are forever destined to lose—elevates Seven Samurai into a profound, tragic masterpiece."
  }
,
  {
    title: "No Country for Old Men",
    director: "Joel and Ethan Coen",
    releaseYear: 2007,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=No+Country+for+Old+Men",
    theGood: "A flawless, terrifyingly tense neo-Western. Javier Bardem's Anton Chigurh is one of the greatest villains in cinema history.",
    theBad: "The abrupt, non-traditional ending frustrates audiences expecting a conventional Hollywood showdown.",
    review: "The Coen Brothers’ adaptation of Cormac McCarthy’s No Country for Old Men is a stark, blood-soaked masterpiece of fatalistic suspense. Set in a desolate 1980s Texas landscape, the film follows three men locked in an inevitable collision course: Llewelyn Moss (Josh Brolin), a welder who stumbles upon two million dollars from a botched drug deal; Anton Chigurh (Javier Bardem), the unstoppable, terrifying hitman hired to recover the money; and Sheriff Ed Tom Bell (Tommy Lee Jones), an aging lawman completely overwhelmed by the senseless violence of the modern world.\n\nBardem’s Chigurh is the chilling, black heart of the film. He operates less as a human being and more as an inevitable force of nature, deciding the fate of his victims with the flip of a coin. The Coen Brothers strip away all extraneous elements—including a traditional musical score—leaving only the excruciating tension of squeaking floorboards, suppressed shotgun blasts, and the relentless ticking of time.\n\nThe film’s brilliance lies in its refusal to offer the audience any comfortable resolution. Sheriff Bell’s final, melancholic monologue about a dream of his father perfectly encapsulates the film’s central theme: the world is chaotic, violent, and indifferent, and we are all simply trying to carry the fire in the dark."
  },
  {
    title: "Fargo",
    director: "Joel and Ethan Coen",
    releaseYear: 1996,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Fargo",
    theGood: "A brilliantly pitch-black comedy disguised as a true crime thriller. Frances McDormand is an absolute delight.",
    theBad: "The extreme violence frequently crashes into the folksy humor, creating a jarring tonal whiplash that isn't for everyone.",
    review: "Fargo is the Coen Brothers at their most delightfully wicked and distinctly Midwestern. It is a film that juxtaposes the brutal, senseless reality of a kidnapping-gone-wrong against the polite, aggressively chipper culture of snowy Minnesota. The plot centers on Jerry Lundegaard (William H. Macy), a desperately pathetic car salesman who hires two bumbling thugs to kidnap his own wife in order to extort a ransom from his wealthy father-in-law.\n\nThe film’s massive, beating heart is Police Chief Marge Gunderson (Frances McDormand). Seven months pregnant, relentlessly polite, and armed with a devastatingly sharp intellect masked by her folksy 'Minnesota nice' accent, Marge is one of cinema's most endearing heroes. Her profound confusion at the senseless violence she uncovers—famously questioning why someone would commit such atrocities 'for a little bit of money' on such a 'beautiful day'—is the moral anchor of the film.\n\nFargo is a masterclass in tonal tightrope walking, balancing gruesome violence (including the infamous woodchipper scene) with absolutely absurd, highly quotable dialogue. It is a bleak, hilarious, and ultimately incredibly warm film about the value of simple decency."
  },
  {
    title: "The Big Lebowski",
    director: "Joel and Ethan Coen",
    releaseYear: 1998,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Big+Lebowski",
    theGood: "A wildly hilarious, completely unique stoner-noir comedy. Jeff Bridges' 'The Dude' is a cultural icon.",
    theBad: "The convoluted kidnapping plot is entirely nonsensical by design, which can confuse viewers looking for a coherent mystery.",
    review: "The Big Lebowski is a film that actively defies explanation, existing less as a coherent narrative and more as a sprawling, deeply hilarious state of mind. It is ostensibly a Raymond Chandler-style noir detective story, but the hard-boiled detective has been replaced by 'The Dude' (Jeff Bridges), a perpetually stoned, White Russian-drinking pacifist whose primary motivation in life is bowling and getting restitution for a soiled rug.\n\nWhen The Dude is mistaken for a millionaire with the exact same name, he is thrust into a wildly convoluted web involving nihilists, avant-garde feminist artists, and a porn kingpin. The Coen Brothers populate this absurd Los Angeles landscape with an incredible roster of eccentric characters, most notably John Goodman as Walter Sobchak, an aggressively volatile Vietnam veteran who treats bowling league rules with the gravity of international law.\n\nThe genius of the film is that the intricate mystery ultimately does not matter at all. The joy of The Big Lebowski is simply existing in its world, listening to its endlessly quotable dialogue, and watching The Dude effortlessly drift through chaos. It is a brilliant, entirely original comedic masterpiece."
  },
  {
    title: "Reservoir Dogs",
    director: "Quentin Tarantino",
    releaseYear: 1992,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Reservoir+Dogs",
    theGood: "A blisteringly cool, profane debut that completely revitalized independent cinema. The dialogue is absolutely magnetic.",
    theBad: "The intense, sadistic violence (particularly the infamous ear-cutting scene) is deeply uncomfortable to watch.",
    review: "With Reservoir Dogs, Quentin Tarantino kicked down the door of the independent film world and permanently altered the landscape of 1990s cinema. It is a heist film that notoriously never actually shows the heist. Instead, the narrative focuses entirely on the bloody, paranoid aftermath in a stark warehouse, as a crew of color-coded criminals try to determine which one of them is the undercover cop who sold them out.\n\nTarantino’s dialogue immediately established his signature style: rapid-fire, highly profane conversations about seemingly mundane pop culture topics—like the meaning of Madonna’s 'Like a Virgin' or the ethics of tipping—that somehow carry immense character weight. The nonlinear narrative structure keeps the audience constantly off-balance, revealing motivations and backstories only when they carry the maximum dramatic impact.\n\nThe film is undeniably violent, anchored by Michael Madsen’s terrifyingly casual performance as the sadistic Mr. Blonde, who tortures a captured police officer to the bouncy tune of 'Stuck in the Middle with You.' Yet, beneath the blood and the bravado, Reservoir Dogs is a surprisingly tragic film about trust, honor among thieves, and betrayal. It remains one of the most explosive, confident directorial debuts in film history."
  },
  {
    title: "Inglourious Basterds",
    director: "Quentin Tarantino",
    releaseYear: 2009,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Inglourious+Basterds",
    theGood: "A magnificent, audaciously entertaining piece of historical revisionism. Christoph Waltz’s Hans Landa is a villain for the ages.",
    theBad: "Its gleeful, hyper-violent rewriting of World War II history can be jarring for those expecting a serious historical drama.",
    review: "Inglourious Basterds is Quentin Tarantino’s masterpiece of cinematic wish fulfillment—a sprawling, wildly entertaining World War II epic that uses the literal power of cinema to rewrite history. The film intertwines two plots to assassinate the Nazi high command: one involving a squad of Jewish-American soldiers led by the drawling Lt. Aldo Raine (Brad Pitt), and the other orchestrated by Shosanna Dreyfus (Mélanie Laurent), a Jewish cinema owner seeking vengeance.\n\nThe film’s greatest asset is undoubtedly Christoph Waltz as SS Colonel Hans Landa, 'The Jew Hunter.' Landa is terrifying not because he is a screaming fanatic, but because he is impeccably polite, frighteningly intelligent, and entirely driven by opportunistic survival. The opening scene—a twenty-minute, agonizingly tense interrogation in a French farmhouse—is perhaps the greatest sequence Tarantino has ever written or directed.\n\nTarantino treats the war not as a solemn historical event, but as a backdrop for a Spaghetti Western. The film is composed of long, incredibly tense dialogue sequences that inevitably explode into sudden, chaotic violence. The fiery climax in the cinema is a profound, albeit deeply twisted, love letter to the medium of film itself. It is a brilliant, audacious masterwork."
  },
  {
    title: "Django Unchained",
    director: "Quentin Tarantino",
    releaseYear: 2012,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Django+Unchained",
    theGood: "A ferociously entertaining, deeply cathartic 'Southern' that tackles the horrors of slavery with Tarantino’s signature hyper-violence and style.",
    theBad: "Its massive runtime sags slightly in the final act, and the tonal shifts between brutal history and pulp action are extreme.",
    review: "Django Unchained applies Quentin Tarantino’s particular brand of historical vengeance to the darkest chapter of American history: the antebellum South. Taking its stylistic cues from the Spaghetti Western, the film follows Django (Jamie Foxx), a freed slave who teams up with eccentric German bounty hunter Dr. King Schultz (Christoph Waltz) to rescue his wife, Broomhilda, from a brutal Mississippi plantation.\n\nThe film does not shy away from the horrific realities of slavery; the violence inflicted on the enslaved characters is presented with agonizing, unvarnished cruelty. However, Tarantino balances this trauma with an incredibly satisfying, highly stylized revenge narrative. Jamie Foxx is effortlessly cool as Django, transforming from a beaten captive into a mythic, blue-suited avenger.\n\nThe true terrors of the film lie within the Candyland plantation, presided over by Leonardo DiCaprio’s Calvin Candie—a foppish, terrifyingly vile Francophile—and Stephen (Samuel L. Jackson), his deeply loyal, fiercely intelligent, and profoundly complicated head house slave. Their tense, explosive dinner sequence is a masterclass in suspense. Django Unchained is a wildly bold, bloody, and cathartic cinematic triumph."
  },
  {
    title: "Taxi Driver",
    director: "Martin Scorsese",
    releaseYear: 1976,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Taxi+Driver",
    theGood: "A terrifying, visually brilliant plunge into urban alienation and madness. Robert De Niro's performance is absolutely iconic.",
    theBad: "Its suffocating atmosphere of paranoia and explosive, bloody climax make it a grueling, deeply uncomfortable watch.",
    review: "Martin Scorsese’s Taxi Driver is a cinematic fever dream, a suffocating and terrifying portrait of isolation and urban decay in post-Vietnam New York City. Robert De Niro delivers a career-defining performance as Travis Bickle, an insomniac, deeply alienated veteran who drives a taxi through the city’s sleaziest districts, growing increasingly disgusted by the 'scum' he sees on the streets.\n\nPaul Schrader’s brilliant screenplay traps the audience entirely within Travis’s warped, paranoid perspective. Michael Chapman’s cinematography presents New York not as a real city, but as a hellish landscape of steam, neon, and perpetual night, perfectly complemented by Bernard Herrmann’s final, mournful jazz score. We watch helplessly as Travis’s desperate attempts at human connection—whether with a political campaign worker (Cybill Shepherd) or a twelve-year-old prostitute (Jodie Foster)—fail catastrophically, pushing him toward a violent, messianic breaking point.\n\nThe film’s bloody, chaotic climax is a terrifying explosion of repressed rage, but its true horror lies in the epilogue, which suggests that a deeply sick society will often celebrate a psychopath if his violence happens to align with their narrative. Taxi Driver is a haunting, monumental masterpiece."
  },
  {
    title: "Raging Bull",
    director: "Martin Scorsese",
    releaseYear: 1980,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Raging+Bull",
    theGood: "A brutally honest, visually staggering character study. The black-and-white cinematography and editing are some of the best ever captured.",
    theBad: "Jake LaMotta is an intensely unsympathetic, violent protagonist, making the film an emotionally punishing experience.",
    review: "Raging Bull is often cited as the greatest film of the 1980s, an incredibly raw, unflinching examination of self-destructive masculinity and jealousy. Directed by Martin Scorsese and starring Robert De Niro in an astonishing, physically transformative performance, the film chronicles the rise and catastrophic fall of middleweight boxing champion Jake LaMotta.\n\nThe boxing sequences are not presented as triumphant athletic contests; they are shot as terrifying, primal rituals. Scorsese films them entirely from inside the ring, using shifting frame rates, flashbulbs, and exaggerated sound design to capture the subjective, animalistic experience of the fight. Yet, the true violence of Raging Bull occurs outside the ring. LaMotta’s crippling paranoia and uncontrollable rage alienate everyone who cares for him, particularly his brother Joey (Joe Pesci) and his young wife Vickie (Cathy Moriarty).\n\nThelma Schoonmaker’s editing is sharp and aggressive, perfectly matching LaMotta’s erratic mental state. The film is a tragedy of a man who only knows how to communicate through violence, eventually leaving him bloated, alone, and literally punching the walls of a jail cell. Raging Bull is a grueling, magnificent work of cinematic art."
  },
  {
    title: "Good Will Hunting",
    director: "Gus Van Sant",
    releaseYear: 1997,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Good+Will+Hunting",
    theGood: "A deeply moving, wonderfully written drama about trauma and potential. Robin Williams delivers a profoundly soulful, Oscar-winning performance.",
    theBad: "The narrative beats occasionally fall into predictable, familiar 'rebellious genius' tropes.",
    review: "Written by its young stars, Matt Damon and Ben Affleck, Good Will Hunting is a classic, deeply earnest American drama that transcends its familiar premise through incredible character work and emotional sincerity. The film follows Will Hunting (Damon), a brilliant, working-class mathematical savant from South Boston who works as a janitor at MIT, hiding his genius behind a defensive wall of arrogance and bar brawls.\n\nWhen his talents are discovered, Will is forced into therapy with Dr. Sean Maguire (Robin Williams), a community college psychology professor who has suffered his own profound losses. The sessions between Will and Sean are the pulsing heart of the film. Williams completely sheds his manic comedic persona, delivering a quiet, immensely powerful performance as a man who refuses to let a damaged kid throw his life away. His monologue on a park bench about the difference between reading about love and actually experiencing it is one of the most beautiful scenes of the decade.\n\nGood Will Hunting is not really about mathematics; it is about the terrifying vulnerability required to move past childhood trauma and accept love. With strong supporting performances by Affleck and Minnie Driver, it remains a surprisingly tender, enduring classic."
  },
  {
    title: "Amadeus",
    director: "Miloš Forman",
    releaseYear: 1984,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Amadeus",
    theGood: "A sweeping, wildly entertaining historical fiction. F. Murray Abraham's portrayal of agonizing jealousy is an absolute masterclass.",
    theBad: "It is highly inaccurate to actual history, serving more as a thematic exploration of mediocrity versus genius than a true biography.",
    review: "Miloš Forman’s Amadeus is a towering cinematic achievement that uses the life of Wolfgang Amadeus Mozart not as a strict historical biography, but as a profound philosophical tragedy about the agonizing pain of recognizing true genius when you possess none yourself. The story is framed as the confession of Antonio Salieri (F. Murray Abraham), a devout, highly respected court composer who is driven to madness and murder by his intense jealousy of the young, incredibly vulgar Mozart (Tom Hulce).\n\nAbraham’s performance is nothing short of legendary. Salieri is a deeply tragic figure; he is the only man in Vienna who truly comprehends the divine perfection of Mozart’s music, but he is cursed to know that he will never be able to create anything close to it. He views Mozart’s talent not as a gift, but as a cruel, mocking joke from God. Hulce perfectly balances Mozart’s obnoxious, giggling immaturity with the profound, exhausting weight of his undeniable talent.\n\nThe production design is lavish, and the integration of Mozart's actual music into the narrative is flawless, often serving to highlight the emotional state of the characters. Amadeus is a grand, operatic masterpiece about the terrifying, unbridgeable gulf between appreciation and creation."
  },
  {
    title: "The Truman Show",
    director: "Peter Weir",
    releaseYear: 1998,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Truman+Show",
    theGood: "Incredibly prescient and surprisingly poignant. Jim Carrey proves his immense dramatic chops in a conceptually brilliant satire.",
    theBad: "Some of the secondary characters within the simulated world feel slightly underwritten, serving primarily as plot devices.",
    review: "Released a year before the explosion of reality television, Peter Weir’s The Truman Show is a film of terrifying, brilliant prescience. It follows Truman Burbank (Jim Carrey), a cheerful, unassuming insurance salesman who is entirely unaware that his entire life—his idyllic hometown, his wife, his best friend—is an elaborate, massive television set, and he is the star of a 24/7 global broadcast controlled by the megalomaniacal creator Christof (Ed Harris).\n\nCarrey restrains his usual manic physical comedy to deliver a performance of profound, quiet desperation. As Truman slowly begins to notice the cracks in his perfectly manufactured reality—a falling stage light, actors repeating dialogue loops—his journey toward truth becomes a thrilling, existential thriller. The film is a brilliant satire of media consumption, corporate control, and the ethics of treating human life as entertainment.\n\nHowever, it is the emotional core of the film that endures. The final sequence, where Truman finally reaches the literal edge of his world, is incredibly powerful. When he decides to step through the painted door into the terrifying, unscripted unknown, it is a massive triumph of the human spirit. The Truman Show is a funny, heartbreaking, and ultimately profoundly uplifting cinematic masterpiece."
  },
  {
    title: "Eternal Sunshine of the Spotless Mind",
    director: "Michel Gondry",
    releaseYear: 2004,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Eternal+Sunshine",
    theGood: "A staggering, wildly inventive exploration of memory and heartbreak. Charlie Kaufman’s script is a work of absolute genius.",
    theBad: "Its non-linear, dream-logic structure can be deeply disorienting and emotionally exhausting.",
    review: "Written by the brilliant Charlie Kaufman and directed with immense visual inventiveness by Michel Gondry, Eternal Sunshine of the Spotless Mind is perhaps the definitive breakup movie of the 21st century. It takes a high-concept science fiction premise—a medical procedure that can selectively erase memories of a specific person—and uses it to explore the profound, messy, unavoidable reality of human heartbreak.\n\nJim Carrey plays Joel, a shy, withdrawn man who discovers that his erratic, vibrant ex-girlfriend Clementine (Kate Winslet) has had him erased from her memory. In a fit of despair, he hires the same firm to erase her. The majority of the film takes place inside Joel’s collapsing mind as the procedure systematically deletes his memories of their relationship, moving backward from their bitter end to their beautiful beginning. Realizing he wants to keep the memories, Joel frantically tries to hide Clementine in hidden corners of his subconscious.\n\nGondry uses incredible in-camera practical effects to visualize the surreal deterioration of Joel's mind, creating a dreamscape that is both whimsical and deeply terrifying. Carrey and Winslet are universally fantastic, flipping their usual typecasting to devastating effect. Eternal Sunshine argues that the pain of a broken relationship is intrinsically tied to the joy it brought, and that to erase the pain is to fundamentally erase yourself. It is a stunning, emotionally overwhelming masterpiece."
  }
,
  {
    title: "Toy Story",
    director: "John Lasseter",
    releaseYear: 1995,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Toy+Story",
    theGood: "A revolutionary landmark in animation. The brilliant script explores profound themes of obsolescence and friendship.",
    theBad: "The early 3D animation, particularly on the human characters like Sid and Andy, has aged noticeably.",
    review: "Pixar’s Toy Story is not merely the first entirely computer-animated feature film; it is a foundational text of modern cinema. Before Toy Story, animation was largely confined to musical fairy tales. John Lasseter and his team revolutionized the medium by delivering a tightly plotted, hilarious buddy-comedy that explored profound anxieties about obsolescence, purpose, and replacement.\n\nThe film centers on Woody (Tom Hanks), a traditional pull-string cowboy who rules Andy’s bedroom until the arrival of Buzz Lightyear (Tim Allen), a deluded, highly advanced space ranger who does not realize he is a toy. Their rivalry forms the emotional core of the film, culminating in a terrifying existential crisis when Buzz discovers the truth of his mass-produced reality.\n\nThe genius of Toy Story lies in its absolute commitment to its premise. Every set piece—from the perilous environment of the Pizza Planet arcade to the terrifying, mutant-filled bedroom of the sadistic neighbor Sid—is designed from a toy's perspective. It is a wildly inventive, perfectly structured masterpiece that changed animation forever."
  },
  {
    title: "Up",
    director: "Pete Docter",
    releaseYear: 2009,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Up",
    theGood: "The opening ten minutes are perhaps the greatest, most emotionally devastating sequence in animated history.",
    theBad: "The second half, involving talking dogs and a blimp chase, struggles to match the profound emotional maturity of the beginning.",
    review: "Pixar’s Up is a film defined almost entirely by its astonishing first ten minutes. In a wordless, beautifully scored montage, the film chronicles the entire relationship of Carl and Ellie, from their childhood meeting to their marriage, their heartbreaking inability to have children, and finally, Ellie’s death. It is a staggeringly mature, emotionally devastating sequence that elevates the entire film into the realm of high art.\n\nThe rest of the narrative follows the elderly, grieving Carl (Ed Asner) as he attempts to fulfill a promise to Ellie by tying thousands of balloons to his house and flying to South America, inadvertently bringing along Russell, an overly eager Wilderness Explorer. The film’s visual design is gorgeous, particularly the surreal, candy-colored balloon canopy contrasting against the South American tepui.\n\nWhile the plot eventually pivots into a more conventional adventure involving a giant bird named Kevin and a pack of talking dogs, the emotional core never wavers. Up is a profound exploration of grief, arguing that the greatest adventure of all is not exploring the unknown, but the quiet, everyday act of loving someone."
  },
  {
    title: "Finding Nemo",
    director: "Andrew Stanton",
    releaseYear: 2003,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Finding+Nemo",
    theGood: "A visually stunning, deeply emotional odyssey about parental anxiety and letting go. Dory is an incredibly poignant character.",
    theBad: "The sheer panic and trauma experienced by Marlin in the first act can make it a surprisingly stressful watch.",
    review: "Finding Nemo is one of Pixar’s most emotionally resonant and visually spectacular achievements. It is an epic oceanic odyssey driven entirely by the profound, universal terror of parental loss. Marlin (Albert Brooks) is a deeply traumatized clownfish who loses his wife and all but one of his children to a barracuda attack, leaving him fiercely overprotective of his surviving son, Nemo.\n\nWhen Nemo is captured by a scuba diver, Marlin embarks on a desperate journey across the ocean, aided by Dory (Ellen DeGeneres), a regal blue tang suffering from short-term memory loss. The film’s rendering of the ocean is breathtaking, moving from the vibrant, sunlit reefs to the terrifying, pitch-black abyss containing an anglerfish. Thomas Newman’s ethereal score perfectly captures the vastness and mystery of the sea.\n\nBeneath the colorful cast of surfer turtles and vegetarian sharks, Finding Nemo is a profound exploration of trauma and trust. Marlin must ultimately learn that to be a good parent is to accept the terrifying reality that you cannot protect your child from the world forever. It is a beautiful, hilarious, and emotionally devastating film."
  },
  {
    title: "Ratatouille",
    director: "Brad Bird",
    releaseYear: 2007,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Ratatouille",
    theGood: "A brilliant, sophisticated ode to the creative process. Anton Ego's final monologue is a masterpiece of writing.",
    theBad: "Its sophisticated themes regarding art, criticism, and class may go slightly over the heads of younger viewers.",
    review: "Brad Bird’s Ratatouille is Pixar’s most sophisticated and overtly philosophical film—a beautiful, surprisingly mature exploration of artistry, ambition, and the true meaning of the phrase 'anyone can cook.' It tells the highly improbable story of Remy (Patton Oswalt), a rat with a highly developed sense of taste and smell who dreams of becoming a chef in Paris.\n\nThe film’s animation is extraordinary, capturing the heat, chaos, and precise choreography of a professional French kitchen. Remy’s synesthetic experience of tasting food—visualized as vibrant, swirling colors set to jazz music—is a brilliant cinematic representation of culinary joy. The dynamic between Remy and the bumbling garbage boy Linguini provides excellent physical comedy, but the film’s true soul lies in its exploration of criticism.\n\nThe terrifying food critic Anton Ego (Peter O’Toole) serves as the ultimate antagonist, representing the cynical, gatekeeping nature of the artistic establishment. The climax, where Remy serves Ego a simple peasant dish that instantly transports the hardened critic back to his childhood, is one of the most profound moments in animation. Ego’s subsequent monologue about the purpose of criticism and the defense of the new is an absolute masterwork."
  },
  {
    title: "The Incredibles",
    director: "Brad Bird",
    releaseYear: 2004,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Incredibles",
    theGood: "A razor-sharp deconstruction of superhero tropes wrapped in a wildly entertaining, mid-century retro-futuristic family drama.",
    theBad: "Its underlying objectivist philosophy—suggesting that society forcibly suppresses exceptional individuals—has sparked significant critical debate.",
    review: "Before the Marvel Cinematic Universe redefined the blockbuster landscape, Brad Bird’s The Incredibles delivered one of the greatest, most emotionally grounded superhero films ever made. It is less a superhero movie and more a mid-life crisis domestic drama wrapped in the aesthetic of a 1960s James Bond film. The story follows Bob Parr (Craig T. Nelson), formerly Mr. Incredible, who has been forced into mundane suburban retirement after a series of public lawsuits outlawed superhero activity.\n\nThe film’s exploration of the crushing weight of mediocrity and the suppression of natural talent is surprisingly dark for an animated feature. The action sequences are phenomenally directed, emphasizing the specific, physics-based applications of each family member's powers. Michael Giacchino’s jazzy, brass-heavy score perfectly captures the film’s retro-futuristic, highly stylized aesthetic.\n\nThe villain, Syndrome (Jason Lee), is a brilliant deconstruction of toxic fandom and entitlement, driven by the belief that 'if everyone is super, no one is.' The Incredibles is a masterpiece of pacing, character design, and kinetic action, maintaining its status as a high-water mark for both animation and the superhero genre."
  },
  {
    title: "Inside Out",
    director: "Pete Docter",
    releaseYear: 2015,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Inside+Out",
    theGood: "An incredibly profound, psychologically astute visualization of human emotion. The ending is devastatingly beautiful.",
    theBad: "It requires a level of emotional maturity and introspection that can be intense for very young children.",
    review: "Pete Docter’s Inside Out is arguably Pixar’s most conceptually daring and psychologically sophisticated film. It takes place entirely within the mind of an eleven-year-old girl named Riley, navigating a cross-country move through the interactions of her personified core emotions: Joy, Sadness, Anger, Fear, and Disgust. When Joy and Sadness are accidentally ejected from the control center, they must navigate the labyrinth of Riley's subconscious to prevent her from shutting down entirely.\n\nThe world-building is staggering, transforming abstract psychological concepts into brilliant visual metaphors—from the literal 'Train of Thought' to the abstract thought processing chamber that reduces the characters to non-objective shapes. The film’s profound insight is its ultimate rejection of the societal pressure to maintain constant, toxic positivity.\n\nJoy’s desperate attempts to suppress Sadness ultimately cause Riley’s emotional collapse. The film’s climax, which reveals that sadness is a necessary, vital emotion required to elicit empathy and process trauma, is an astonishingly mature lesson. Inside Out is a brilliant, empathetic masterpiece that gives children and adults alike a vital vocabulary for understanding their own minds."
  },
  {
    title: "Monsters, Inc.",
    director: "Pete Docter",
    releaseYear: 2001,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Monsters+Inc",
    theGood: "A wildly inventive, incredibly charming workplace comedy with a surprisingly touching surrogate father-daughter relationship at its core.",
    theBad: "The animation, while groundbreaking at the time, shows its age in certain environmental textures compared to later Pixar films.",
    review: "Monsters, Inc. is a testament to Pixar’s unparalleled ability to take a bizarre premise and ground it in relatable, everyday humanity. The film imagines a world where monsters generate power for their city by utilizing closet doors as portals to scare human children. It functions primarily as a buddy-cop workplace comedy, starring the massive, furry Sulley (John Goodman) and his wisecracking, one-eyed partner Mike Wazowski (Billy Crystal).\n\nThe world-building of Monstropolis is incredibly clever, filled with sight gags and intricate bureaucratic details. However, the film finds its emotional anchor when a human toddler, Boo, accidentally crosses over into the monster world. The shifting dynamic, where the terrifying monsters are actually deathly afraid of the child, is brilliant. Sulley’s gradual transition from a professional scarer to a fiercely protective surrogate father is deeply moving.\n\nThe climax, a high-speed chase through a massive, moving warehouse of millions of suspended doors, is an absolute marvel of kinetic animation and spatial geography. The final shot of the film—Sulley’s face reacting to an unseen, off-screen voice—is one of the most perfectly executed, emotionally satisfying endings in the studio's history."
  },
  {
    title: "Coco",
    director: "Lee Unkrich",
    releaseYear: 2017,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Coco",
    theGood: "A visually spectacular, deeply respectful celebration of Mexican culture. The final act is guaranteed to induce profound tears.",
    theBad: "The narrative structure closely follows the predictable Pixar formula, even if the execution is flawless.",
    review: "Lee Unkrich’s Coco is a vibrant, visually overwhelming celebration of life, death, and the enduring power of family memory. Set against the backdrop of the Mexican holiday Día de los Muertos, the film follows Miguel, a young boy who dreams of becoming a musician despite his family’s generations-old ban on music. A magical accident transports him to the Land of the Dead, where he must seek the blessing of his ancestors to return home.\n\nThe visual design of the Land of the Dead is staggering—a massive, glowing, vertically stacked metropolis of neon and marigolds that stands as one of Pixar’s greatest aesthetic achievements. The film is deeply respectful of its cultural roots, filling the frame with alebrijes, traditional ofrendas, and a magnificent soundtrack of acoustic guitar and mariachi music.\n\nWhile the plot features a somewhat predictable twist villain, the thematic resolution is extraordinarily powerful. Coco argues that true death only occurs when the living cease to remember the dead. The film’s climax, featuring Miguel singing 'Remember Me' to his ailing great-grandmother, is an absolutely devastating, beautiful exploration of dementia and the connective tissue of familial love."
  },
  {
    title: "The Avengers",
    director: "Joss Whedon",
    releaseYear: 2012,
    rating: 8,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Avengers",
    theGood: "The film that proved the shared universe concept could work. The character interactions are endlessly entertaining and the action is spectacular.",
    theBad: "The cinematography and costuming often feel slightly flat and television-like compared to later, more stylized MCU entries.",
    review: "In retrospect, it is easy to forget what a massive, unprecedented gamble The Avengers was in 2012. Combining four separate film franchises into a single, cohesive team-up movie had never been attempted on this scale. Joss Whedon’s script manages the impossible, balancing the massive egos and disparate tones of Iron Man, Captain America, Thor, and the Hulk into a functional, incredibly entertaining ensemble.\n\nThe brilliance of the film lies in its understanding that the friction between the heroes is far more interesting than the villains they fight. The middle act, set entirely aboard the SHIELD Helicarrier, is a masterclass in character conflict, allowing the differing ideologies of Tony Stark and Steve Rogers to organically clash. Tom Hiddleston’s Loki provides the perfect catalyst—a theatrical, deeply insecure villain whose primary goal is to divide and conquer.\n\nThe climactic Battle of New York remains one of the greatest extended action sequences in blockbuster history. The iconic 360-degree tracking shot that captures the entire team fighting together for the first time was the definitive moment that solidified the Marvel Cinematic Universe as the dominant cultural force of the decade. It is pure, joyous comic book spectacle."
  },
  {
    title: "Iron Man",
    director: "Jon Favreau",
    releaseYear: 2008,
    rating: 8,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Iron+Man",
    theGood: "The foundational bedrock of the MCU. Robert Downey Jr. delivers one of the most perfect casting alignments in Hollywood history.",
    theBad: "The third act devolves into a generic, clunky CGI battle between two men in identical metal suits.",
    review: "Jon Favreau’s Iron Man is the spark that ignited the largest film franchise in history. Released at a time when the character was considered a B-tier comic book hero, the film succeeded entirely on the back of Robert Downey Jr.’s electrifying, endlessly charismatic performance as Tony Stark. Downey’s portrayal of the arrogant, billionaire weapons manufacturer who experiences a traumatic moral awakening is practically indistinguishable from the actor himself.\n\nThe film’s grounded, practical approach to the creation of the Iron Man suit grounds the fantastical elements in a tangible, believable reality. The sequence where Stark builds the Mark I armor in an Afghan cave using scraps is incredibly tense, emphasizing his engineering genius over brute strength. The film’s tone strikes a perfect balance between serious geopolitical themes regarding the military-industrial complex and breezy, improvisational comedy.\n\nWhile the final confrontation with Obadiah Stane (Jeff Bridges) is somewhat underwhelming, the film’s closing moment—where Stark boldly abandons the secret identity trope and declares 'I am Iron Man'—was a revolutionary rejection of superhero conventions. It is a sleek, wildly entertaining origin story."
  },
  {
    title: "Captain America: The Winter Soldier",
    director: "Anthony and Joe Russo",
    releaseYear: 2014,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=The+Winter+Soldier",
    theGood: "A thrilling, paranoid political spy thriller disguised as a superhero movie. The hand-to-hand combat choreography is visceral and unmatched.",
    theBad: "The massive, CGI-heavy helicarrier climax slightly undermines the grounded, gritty espionage tone of the first two acts.",
    review: "With The Winter Soldier, the Russo brothers proved that the Marvel Cinematic Universe could successfully pivot into distinct genre filmmaking. Drawing heavy inspiration from 1970s political thrillers like Three Days of the Condor (and cleverly casting Robert Redford as the antagonist), the film places Steve Rogers (Chris Evans) in a morally gray modern world where his black-and-white, Greatest Generation morality is constantly challenged by the surveillance state.\n\nThe action sequences are a massive departure from previous MCU entries. The reliance on incredibly fast, brutal, and highly choreographed practical martial arts—particularly in the legendary elevator fight sequence and the street battle with the titular Winter Soldier—gives the film a visceral, bone-crunching weight. The film fundamentally changes the status quo of the universe by systematically dismantling SHIELD from the inside out.\n\nChris Evans perfectly captures the profound isolation of a man out of time, while his dynamic with Scarlett Johansson’s cynical Black Widow provides the emotional anchor. The Winter Soldier is a tight, incredibly effective thriller that remains one of the absolute highest peaks of the franchise."
  },
  {
    title: "Guardians of the Galaxy",
    director: "James Gunn",
    releaseYear: 2014,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Guardians+of+the+Galaxy",
    theGood: "A wildly irreverent, incredibly colorful space opera with a legendary 1970s pop soundtrack. It proves Marvel could make a hit out of anything.",
    theBad: "Ronan the Accuser is an incredibly forgettable, one-note villain who only exists to push the plot forward.",
    review: "James Gunn’s Guardians of the Galaxy was considered a massive risk—a weird, esoteric space comedy featuring a talking raccoon and a walking tree. Instead, it became a cultural phenomenon, injecting a desperately needed dose of vibrant color, profound weirdness, and emotional sincerity into the increasingly self-serious superhero landscape.\n\nThe film’s success lies entirely in its deeply flawed, instantly lovable ensemble. Peter Quill (Chris Pratt), Gamora (Zoe Saldaña), Drax (Dave Bautista), Rocket (Bradley Cooper), and Groot (Vin Diesel) are not noble heroes; they are traumatized, selfish outcasts who stumble into saving the galaxy. The chemistry between the cast is electric, propelled by a script that balances deeply cynical humor with moments of profound vulnerability.\n\nThe film’s aesthetic—a neon-drenched, heavily stylized cosmic playground—is perfectly matched by 'Awesome Mix Vol. 1,' a diegetic soundtrack of 1970s pop hits that serves as Quill’s only connection to Earth. Guardians of the Galaxy is a joyous, wildly inventive space opera that expanded the boundaries of what a comic book movie could be."
  },
  {
    title: "Thor: Ragnarok",
    director: "Taika Waititi",
    releaseYear: 2017,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/500x750/000000/ffffff/png?text=Thor+Ragnarok",
    theGood: "A total, neon-soaked reinvention of the character. It is an absolute riot of a comedy that leans fully into Jack Kirby's psychedelic art style.",
    theBad: "The relentless barrage of jokes occasionally undermines moments of genuine emotional or dramatic weight.",
    review: "After two films that struggled to balance Shakespearean drama with earthly romance, Taika Waititi completely dismantled and rebuilt the Thor franchise with Ragnarok. It is a wildly colorful, deeply absurd, and relentlessly hilarious space adventure that finally allowed Chris Hemsworth to unleash his immense comedic talents. By stripping Thor of his hammer, his hair, and his home, the film forced the character to redefine his identity.\n\nThe visual design is a spectacular homage to the cosmic, psychedelic comic book art of Jack Kirby, particularly on the trash-planet of Sakaar, ruled by Jeff Goldblum’s delightfully unhinged Grandmaster. The film pairs Thor with Mark Ruffalo’s Hulk, resulting in an incredible buddy-comedy dynamic, while Tessa Thompson’s swaggering, alcoholic Valkyrie steals every scene she is in.\n\nBeneath the improvisational humor and Led Zeppelin needle drops, Ragnarok actually contains a surprisingly subversive critique of colonialism. Cate Blanchett’s Hela represents Asgard's dark, violently imperialist past, forcing Thor to realize that his golden civilization was built on blood. It is a brilliant, wildly entertaining triumph of tone and style."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding chunk 50 movies...');
  let added = 0;
  for (const movie of movies) {
    const exists = await prisma.movieReview.findFirst({ where: { title: movie.title } });
    if (!exists) {
      await prisma.movieReview.create({
        data: {
          ...movie,
          status: 'APPROVED',
          authorId: admin.id
        }
      });
      added++;
      console.log('+ Added: ' + movie.title);
    } else {
      console.log('- Skipped (Exists): ' + movie.title);
    }
  }
  console.log('Done. Added ' + added + ' movies.');
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
