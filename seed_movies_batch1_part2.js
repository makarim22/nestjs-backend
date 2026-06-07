const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "Playtime",
    director: "Jacques Tati",
    releaseYear: 1967,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Playtime",
    theGood: "A monumental achievement in physical comedy and set design. Tati built an entire city just to meticulously choreograph the absurdities of modern life in 70mm.",
    theBad: "There is almost no dialogue or central plot. The humor is extremely dry and observational, requiring the viewer to actively scan the massive frames for subtle visual gags.",
    review: `### The City of Glass and Steel
Jacques Tati’s *Playtime* is less a movie and more a staggering feat of architectural engineering. Frustrated by the inability to control the bustling streets of real Paris, Tati famously bankrupted himself to build "Tativille," a massive, fully functioning city set constructed entirely of steel, glass, and concrete. The film follows Tati’s iconic, bumbling alter-ego, Monsieur Hulot, as he navigates this ultra-modern, hyper-sterile vision of Paris. The old, romantic Paris is completely gone, only occasionally visible as a fleeting reflection in the glass doors of towering skyscrapers.

### The Tyranny of the Modern
Tati uses physical comedy not just for laughs, but as a profound critique of modern urban design. In "Tativille," human beings are dwarfed and isolated by their environment. The buildings are confusing mazes of identical grey cubicles, waiting rooms feature chairs that make embarrassing hissing noises when sat upon, and the constant hum of buzzing neon and sterile air conditioning drowns out human conversation. Tati brilliantly highlights how our obsession with efficiency and modernism has ironically created a world that is deeply inefficient and profoundly alienating to the human spirit.

> [No notable dialogue; the film operates entirely on visual gags and sound design.]

---

### The Democratization of Comedy
What makes *Playtime* a unique masterpiece is its revolutionary approach to visual framing. Tati shot the film in massive 70mm, keeping the camera pulled far back to capture the massive scale of the sets. He refused to use close-ups to tell the audience where to look. Instead, he fills the foreground, midground, and background with multiple, simultaneous visual gags. It is a deeply democratic form of comedy; the viewer must actively explore the frame and choose what to watch, meaning that every single viewing of the film yields the discovery of entirely new jokes.

### The Collapse of the Royal Garden
The entire second half of the film is dedicated to a single, chaotic sequence: the opening night of the "Royal Garden" restaurant. It is a masterclass in escalating disaster. The ultra-modern restaurant is not actually finished being built. As the night progresses, the modern architecture literally begins to fall apart—tiles stick to waiters' shoes, the ceiling collapses, and the air conditioning fails. However, as the sterile modern structure breaks down, something magical happens: the rigid social barriers between the rich patrons, the tourists, and the staff also break down. 

### The Dance of the Traffic Jam
In the glorious final sequence, the chaos of the ruined restaurant spills out into the morning streets. As the characters attempt to navigate a massive traffic jam in a giant roundabout, Tati transforms the mechanical gridlock into a beautiful, joyous carousel ride. Set to carnival music, the cars bob up and down like painted horses. Tati’s ultimate message is one of optimistic humanism: no matter how sterile and imposing the modern world tries to be, the chaotic, joyful, and irrepressible nature of humanity will always find a way to break through the concrete.`
  },
  {
    title: "The Rules of the Game",
    director: "Jean Renoir",
    releaseYear: 1939,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Rules+of+the+Game",
    theGood: "A razor-sharp, devastatingly brilliant satire of the French aristocracy right before the outbreak of WWII. The choreography of its ensemble cast is unparalleled in cinema history.",
    theBad: "The sheer volume of characters, romantic entanglements, and rapid-fire dialogue can be overwhelming to track during the frantic first act.",
    review: `### The Dance on the Edge of a Volcano
Released in 1939, just weeks before the outbreak of World War II, Jean Renoir’s *The Rules of the Game* (La Règle du Jeu) is a masterpiece of horrific timing. It is a scathing, satirical portrait of the French upper class, depicted as a group of frivolous, morally bankrupt aristocrats completely oblivious to the impending collapse of their civilization. The film centers on a lavish weekend hunting party at a country chateau hosted by the wealthy Marquis Robert de la Cheyniest. As the aristocrats upstairs and the servants downstairs engage in a chaotic web of secret affairs, the film slowly transforms from a light bedroom farce into a brutal tragedy.

### The Choreography of Deception
Renoir’s directorial mastery is on full display in his revolutionary use of deep focus and fluid camera movement. He refuses to isolate his characters in standard shot-reverse-shot dialogue scenes. Instead, the camera glides effortlessly through the sprawling chateau, capturing multiple layers of action simultaneously. We see a husband making a toast in the foreground, while his wife flirts with a lover in the background, and a servant eavesdrops in the doorway. It is a breathtaking visual representation of a society built entirely on maintaining appearances while hiding terrible secrets in plain sight.

> "The awful thing about life is this: everyone has their reasons." — *Octave*

---

### The Brutality of the Hunt
The most chilling and famous sequence in the film is the rabbit hunt. Renoir drops the comedic tone entirely, filming the systematic slaughter of rabbits and pheasants by the wealthy guests with brutal, documentary-like realism. As the aristocrats casually blast away at the helpless animals driven out of the woods by the servants, it becomes a horrifyingly clear metaphor for the impending carnage of the war. It reveals the casual cruelty and destructive power of a ruling class that views life—both animal and human—as nothing more than a passing amusement.

### The Collapse of the Rules
The title of the film refers to the rigid, unspoken social codes of the aristocracy. You are allowed to cheat on your spouse, lie, and ruin lives, so long as you do it discreetly and never cause a public scene. The climax of the film occurs during a masquerade ball, where the chaotic passions of both the masters and the servants finally boil over, resulting in a series of frantic, farcical chases through the hallways that end in a tragic, accidental murder. The "rules" completely fail to contain the chaotic reality of human emotion.

### A Society that Forgives Itself
The true horror of the film lies in its resolution. Following the murder, the Marquis steps out into the rain and smoothly lies to his guests, writing off the death as a regrettable hunting accident. The guests immediately accept this obvious lie, relieved that a public scandal has been avoided. They return to the warmth of the chateau, completely morally unscathed. The film was met with massive riots upon release and was quickly banned by the French government, proving that Renoir’s mirror was entirely too accurate for a society about to fall to fascism.`
  },
  {
    title: "M",
    director: "Fritz Lang",
    releaseYear: 1931,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=M",
    theGood: "A chilling, masterfully constructed thriller that essentially invented the serial killer genre. Lang’s pioneering use of sound to build tension remains profoundly effective.",
    theBad: "The subject matter—child murder—is inherently disturbing, even though the violence is entirely implied and never shown on screen.",
    review: `### The Shadow on the Poster
Fritz Lang’s *M* is the bridge between the exaggerated shadows of German Expressionism and the gritty realism of the modern police procedural. Made in 1931 as Lang’s first "talkie," the film focuses on the terrifying hunt for a serial child murderer operating in Berlin. Lang brilliantly refuses to show the killings; instead, he uses horrific implication. The opening sequence—a mother waiting for her daughter, the empty stairwell, the balloon caught in the telegraph wires, and the bouncing ball rolling to a stop—is one of the most chilling and masterfully constructed exercises in dread in cinema history.

### The Innovation of Sound
Because sound in film was a brand-new technology, Lang used it not merely for dialogue, but as a primary narrative weapon. The killer, Hans Beckert (played with terrifying vulnerability by Peter Lorre), is not identified by his face, but by his compulsive whistling of Edvard Grieg’s "In the Hall of the Mountain King." The disembodied whistle echoing through the dark, empty streets of Berlin creates a suffocating atmosphere of paranoia. Lang also pioneered the "sound bridge," carrying dialogue from one scene over to the next, connecting the actions of the police and the criminal underworld.

> "I can't help myself! I have no control over this, this evil thing inside of me, the fire, the voices, the torment!" — *Hans Beckert*

---

### The Underworld Mobilizes
The brilliance of *M*’s script lies in its dual narrative. The police are failing to catch the killer, resorting to massive, disruptive raids that are crippling the illegal businesses of Berlin's organized crime syndicates. Infuriated by the disruption and the heavy police presence, the criminal underworld decides to catch the killer themselves. Lang presents the criminals as a highly organized, bureaucratic corporate entity, directly mirroring the meetings of the police chiefs. When the beggar syndicate finally tracks the killer down (marking him with a chalk "M" for Mörder on his back), the film shifts into terrifying vigilante territory.

### The Kangaroo Court
The climax of the film takes place in an abandoned distillery, where the entire criminal underworld holds a massive, terrifying kangaroo court for Beckert. It is here that Peter Lorre delivers one of the greatest monologues in film history. Cornered and terrified, Beckert begs for his life, screaming that the criminals kill for money, but he kills because he is possessed by a horrific compulsion he cannot control. Lang forces the audience into a deeply uncomfortable moral position: feeling genuine pity for a child murderer while confronting the bloodlust of a lynch mob. 

### A Warning in the Dark
The film concludes abruptly just as the real police raid the building. In the final shot, a panel of grieving mothers dressed in black stare directly into the camera. One mother simply says, "This won't bring our children back. We, too, should keep a closer watch on our children." It is a chilling, pragmatic end to a masterpiece that explored the darkest corners of human psychology and the fragile nature of justice in a society teetering on the edge of collapse.`
  },
  {
    title: "Metropolis",
    director: "Fritz Lang",
    releaseYear: 1927,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Metropolis",
    theGood: "The ultimate visual blueprint for the science fiction genre. The staggering scale of its practical effects and visionary set designs remain jaw-dropping nearly a century later.",
    theBad: "The heavy-handed, melodramatic allegorical message ('The mediator between the head and the hands must be the heart') can feel incredibly naïve and simplistic to modern audiences.",
    review: `### The Blueprint of the Future
There is virtually no modern science fiction film that does not owe a massive, direct visual debt to Fritz Lang’s 1927 silent epic, *Metropolis*. From *Blade Runner* to *Star Wars*, Lang’s vision of a towering, vertically segregated mega-city remains the definitive template for cinematic dystopias. The film is a staggering feat of German Expressionist architecture and practical effects, utilizing massive miniatures, the Schüfftan process (using mirrors to combine live action with scale models), and thousands of extras to create a world that feels incredibly vast and oppressive.

### The Machinery of Oppression
The societal structure of *Metropolis* is brutally simple: the wealthy elite live in luxurious skyscrapers above the clouds, playing in idyllic pleasure gardens, while the working class are banished to subterranean depths, operating the massive, dangerous machines that keep the city running. Lang’s choreography of the workers is chilling; they move not as humans, but as synchronized, broken components of the machinery. When one of the massive machines overheats and explodes, the protagonist, Freder, has a terrifying hallucination of the machine transforming into the ancient god Moloch, demanding human sacrifices.

> "The mediator between the head and the hands must be the heart!" — *Maria*

---

### The False Prophet
The narrative ignites when Joh Fredersen, the cold, calculating master of the city, discovers that the workers are gathering in ancient catacombs to listen to Maria, a saintly woman who preaches peace and promises the arrival of a "Mediator." Fearing a strike, Fredersen tasks the mad scientist Rotwang to create a robotic replica of Maria (the iconic *Maschinenmensch*). This False Maria is unleashed upon the workers, using chaotic, erotic dances to incite a violent, suicidal rebellion designed to give Fredersen the excuse he needs to use deadly force against them. 

### The Spectacle of Destruction
The final act of *Metropolis* is a masterclass in massive cinematic spectacle. Spurred by the robotic False Maria, the workers violently destroy the Heart Machine, completely unaware that doing so will flood their own subterranean city and drown their children. The sequence of the real Maria and Freder desperately rescuing the children from the rising waters, juxtaposed with the workers engaging in a frenzied, chaotic dance of destruction above, showcases Lang’s unparalleled ability to direct massive, chaotic crowds.

### A Naïve Resolution
If *Metropolis* has a flaw, it is the simplistic nature of its political resolution. The film concludes with the "Head" (the capitalist master) and the "Hands" (the workers) shaking hands on the steps of the cathedral, brokered by the "Heart" (Freder). While visually triumphant, it is a deeply naïve compromise that ignores the systemic inequalities the film spent two hours so brilliantly exposing. However, the film's legacy is not its politics, but its unparalleled visual imagination. It is a towering monument of silent cinema.`
  },
  {
    title: "The Passion of Joan of Arc",
    director: "Carl Theodor Dreyer",
    releaseYear: 1928,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Joan+of+Arc",
    theGood: "Features arguably the greatest acting performance in the history of cinema. Renée Jeanne Falconetti’s face conveys an agonizing, transcendent spiritual depth that defies description.",
    theBad: "The unrelenting barrage of extreme close-ups and the sheer emotional agony of the subject matter make it an incredibly grueling, exhausting watch.",
    review: `### A Symphony of Faces
Carl Theodor Dreyer’s *The Passion of Joan of Arc* is a silent film that operates with the overwhelming power of a religious experience. Based entirely on the actual historical transcripts of Joan of Arc’s trial for heresy in 1431, the film strips away all the glamorous pageantry, battles, and epic sweeps typical of historical epics. Instead, Dreyer focuses entirely on the grueling, psychological torture of the trial. He achieves this through one of the most radical visual choices in film history: shooting the entire movie almost exclusively in extreme, suffocating close-ups.

### The Agony of Falconetti
The soul of the film rests entirely on the face of Renée Jeanne Falconetti, playing Joan in her only credited film role. It is widely considered one of the greatest—if not *the* greatest—performances ever captured on celluloid. Without the aid of dialogue, Falconetti’s face must convey the entire spectrum of human suffering and divine ecstasy. Her massive, tear-filled eyes reflect profound terror, physical exhaustion, and a sudden, radiant, unshakable faith. Dreyer notoriously pushed Falconetti to the brink of physical and mental collapse during filming, resulting in a performance of terrifying, unvarnished rawness.

> [No spoken dialogue; the emotional weight is entirely visual, supported by silent title cards.]

---

### The Architecture of the Inquisition
Dreyer contrasts the vulnerable, bare face of Joan with the grotesque, highly textured faces of her interrogators. The priests and judges are shot from extreme low angles, making them look like looming, oppressive gargoyles. The set design, though barely visible behind the tight framing, consists of stark, asymmetrical white walls and sharp, imposing angles, creating an environment that feels like an inescapable psychological trap. The camera acts as an instrument of torture, probing and scrutinizing Joan without an ounce of mercy.

### The Breaking of the Will
The central conflict of the film is not a battle of swords, but a brutal war of attrition against a young woman’s spirit. The inquisitors use every tactic available: theological traps, threats of torture (showing her the horrific instruments in the dungeon), and emotional manipulation, exploiting her exhaustion to force a confession. When Joan briefly breaks and signs a recantation out of sheer terror of the fire, the film captures the devastating, hollow realization of her betrayal of her own soul, leading to her immediate retraction and acceptance of her fate. 

### The Fire and the Birds
The climax of the film—Joan’s execution at the stake—is a harrowing, visceral masterpiece of editing. Dreyer intercuts the agonizingly slow preparation of the pyre with the weeping of the crowd, the chaotic rioting of the citizens, and suddenly, a flock of birds taking flight against the sky. As the flames consume her, Joan’s face looks upward, transcending the physical pain. It is a grueling, magnificent testament to the power of human conviction, and a towering achievement of the silent era.`
  },
  {
    title: "A Man Escaped",
    director: "Robert Bresson",
    releaseYear: 1956,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=A+Man+Escaped",
    theGood: "A masterclass in tension and ascetic filmmaking. Bresson turns the meticulous, repetitive mechanics of a prison escape into a profound spiritual meditation.",
    theBad: "The famously flat, emotionless acting style of Bresson's 'models' and the extremely austere presentation can feel cold and detached to viewers expecting dramatic Hollywood theatrics.",
    review: `### The Inevitability of the Title
Robert Bresson deliberately kills any traditional suspense in the very title of his film: *A Man Escaped* (Un condamné à mort s'est échappé). Before the first frame even rolls, the audience knows exactly how the story will end. Based on the true memoirs of André Devigny, a member of the French Resistance imprisoned by the Gestapo during WWII, the film strips away all melodramatic flourishes. By removing the question of *if* he escapes, Bresson forces the audience to focus entirely on the agonizing, meticulous *how*. It is a film about the absolute primacy of process and the sheer force of human will.

### The Ascetic Filmmaker
Bresson’s directorial style is legendary for its severe minimalism. He famously refused to use professional actors, instead using non-actors whom he called "models," forcing them to rehearse lines until all emotion and theatrical inflection were completely drained away. The protagonist, Fontaine (François Leterrier), does not emote; he simply acts. Bresson’s camera is equally disciplined, focusing tightly on Fontaine’s hands as he painstakingly dismantles his cell door using an iron spoon. This intense focus on physical objects and repetitive labor elevates mundane actions to the level of spiritual ritual.

> "I prayed, but I knew God would only help me if I helped myself." — *Fontaine*

---

### The Symphony of Sound
In *A Man Escaped*, sound is arguably more important than the visuals. Because Fontaine is confined to a tiny, bare cell, his entire understanding of the world outside is dictated by the noises he hears. The heavy, rhythmic footsteps of the Nazi guards, the jangling of keys, the distant firing squads, and the scraping of the spoon against the wooden door create a suffocating, terrifying soundscape. Bresson uses sound to define the boundaries of Fontaine’s prison, making the audience hyper-aware of how the slightest noise could mean immediate execution.

### The Arrival of the Other
The spiritual dimension of the film is radically deepened in the final act when a young, frightened, and possibly treacherous teenage boy, Jost, is suddenly placed in Fontaine’s cell. Fontaine has spent months meticulously preparing a solitary escape plan. Now, he faces a terrifying moral dilemma: he must either kill the boy to ensure his own silence, or trust him completely and bring him along. The decision to trust Jost elevates the film from a survival thriller into a profound parable about grace, demonstrating that ultimate salvation requires vulnerability and reliance on another human being.

### The Grace of the Ropes
The final escape sequence is a slow-motion, heart-stopping ballet of tension. Shot almost entirely in the dark, with minimal dialogue and relying purely on ambient sound, the sequence follows Fontaine and Jost as they navigate the rooftops and walls of the fortress. The physical ropes they use to scale the walls become literal lifelines, demanding absolute trust. When they finally drop into the darkness outside the prison walls, the film abruptly ends. It is a stunning, quiet triumph of the human spirit, stripped of all unnecessary artifice.`
  },
  {
    title: "Au Hasard Balthazar",
    director: "Robert Bresson",
    releaseYear: 1966,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Balthazar",
    theGood: "A devastatingly beautiful and formally perfect film that uses the life of a donkey to reflect the absolute cruelty, grace, and suffering of humanity.",
    theBad: "It is an incredibly bleak, relentlessly tragic film. Watching the systemic, unyielding abuse of an innocent animal can be almost unbearable for empathetic viewers.",
    review: `### The Holy Fool
Robert Bresson’s *Au Hasard Balthazar* is widely considered one of the greatest cinematic achievements of the 20th century, yet its premise sounds absurd on paper: it is a film that tracks the life, suffering, and death of a donkey named Balthazar. However, Bresson does not anthropomorphize the animal. Balthazar does not have an internal monologue, nor does he perform clever tricks. He is simply a beast of burden. Through Bresson’s austere lens, the donkey becomes a silent, Christ-like witness to the profound cruelty and occasional grace of the humans who own him. 

### A Mirror to Humanity
The film is structured as an elliptical, episodic journey as Balthazar is passed from owner to owner in a rural French village. Each owner represents a different facet of human failing. There is the cruel, sadistic teenage gang leader Gérard, who beats the donkey for pure pleasure; the alcoholic vagabond Arnold, who exploits Balthazar for labor; and a greedy merchant who works the animal to the bone. Because Balthazar absorbs their abuse with silent, stoic endurance, he acts as a moral mirror, exposing the darkest depths of human depravity.

> [No dialogue from the protagonist; the donkey's silence speaks volumes.]

---

### The Parallel Tragedy of Marie
Running parallel to Balthazar’s life is the tragic arc of Marie (Anne Wiazemsky), the young girl who briefly cared for the donkey when they were both young and innocent. As Balthazar is subjected to physical abuse, Marie is subjected to the psychological and sexual cruelty of the men in the village, particularly the manipulative Gérard. Bresson cross-cuts their trajectories, linking the degradation of the animal with the degradation of the young woman. Both are innocent creatures fundamentally broken by a world that views them merely as property to be consumed.

### The Ascetic Brilliance
Bresson’s signature minimalism is perfectly suited to this material. He avoids all sentimentality. He never uses dramatic music to tell the audience when to feel sad; instead, he uses a recurring, mournful excerpt from a Schubert piano sonata to punctuate moments of transition. The editing is famously elliptical, often cutting away right before an action is completed, forcing the audience to mentally engage with the brutal reality of the events. By refusing to manipulate the viewer's emotions with cheap melodrama, the film achieves a crushing, undeniable authenticity.

### A Transcendent Death
The final sequence of *Au Hasard Balthazar* is one of the most heartbreaking and transcendently beautiful endings in cinema. Having been shot by customs officers while being used to smuggle contraband, Balthazar wanders onto a beautiful, sun-dappled hillside. As he slowly dies, a massive flock of sheep surrounds him, their bells ringing in a gentle, chaotic symphony. It is a moment of profound spiritual grace, offering the innocent creature a final, peaceful communion with nature before his passing. It is a masterpiece that demands we look at the immense weight of suffering in the world.`
  },
  {
    title: "La Dolce Vita",
    director: "Federico Fellini",
    releaseYear: 1960,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=La+Dolce+Vita",
    theGood: "A visually intoxicating, sprawling epic that captures the seductive decay of modern society. It is the ultimate cinematic portrait of glamorous existential emptiness.",
    theBad: "Its massive three-hour runtime and episodic, meandering structure—lacking a traditional, driving plot—can test the patience of viewers looking for a tight narrative arc.",
    review: `### The Helicopter and the Statue
Federico Fellini’s *La Dolce Vita* (The Sweet Life) opens with a visual metaphor so potent it defines the entire film: a helicopter flies over the ancient ruins of Rome, dangling a massive statue of Jesus Christ, while the journalists on board flirt with sunbathing women on a modern apartment rooftop. The sacred is being mechanically transported over the profane. The film follows Marcello Rubini (Marcello Mastroianni), a former serious writer who has surrendered his talent to work as a gossip columnist, floating aimlessly through the hedonistic, decadent high society of post-war Rome over seven nights and days.

### The Illusion of the Sweet Life
Despite its title, the film is a savage critique of the "sweet life." Marcello is surrounded by incredible wealth, beautiful women (including a memorable turn by Anita Ekberg as an American actress), and endless parties, yet he is suffocating from a profound spiritual and intellectual rot. He is disgusted by the shallow world he inhabits, but he lacks the moral courage to leave it. Fellini structures the film as a series of disconnected, night-long episodes, perfectly capturing the exhausting, repetitive cycle of chasing pleasure to avoid dealing with internal emptiness. 

> "You are the first woman on the first day of creation. You are mother, sister, lover, friend, angel, devil, earth, home." — *Marcello Rubini*

---

### The Trevi Fountain and the Paparazzi
*La Dolce Vita* is responsible for generating iconic imagery that permanently altered pop culture. The scene of Anita Ekberg wading into the Trevi Fountain in a black strapless dress, calling out to Marcello, remains one of the most famous and endlessly parodied moments in cinema. The film also literally coined the term "paparazzi," named after Marcello’s relentless, camera-wielding photographer friend, Paparazzo. Fellini brilliantly anticipated the modern era’s obsession with celebrity culture and the aggressive, parasitic nature of mass media.

### The Tragedy of the Intellectual
The emotional turning point of the film revolves around Marcello’s mentor, Steiner, an intellectual who seemingly has a perfect life: a beautiful family, wealth, and an artistic salon. Marcello views Steiner as the man he wishes he could be. However, Steiner’s sudden, horrific murder-suicide of himself and his children shatters Marcello’s last remaining illusion of salvation. Steiner’s desperate fear of the future and the emptiness of the world proves to Marcello that even intellectualism and art offer no true sanctuary from the modern rot.

### The Monster on the Beach
The final sequence cements Marcello’s total defeat. After a chaotic, exhausting, and debauched party in a beachside mansion, the revelers wander out to the ocean at dawn. They discover a massive, grotesque sea monster washed up in the nets. As Marcello stares at the dead eye of the leviathan, he sees a young, innocent girl from a nearby cafe calling out to him from across an estuary. The roar of the ocean prevents him from hearing her, and he merely shrugs and walks back to the party. He is completely lost, unable to hear the call of grace, forever trapped in the sweet life.`
  },
  {
    title: "Battleship Potemkin",
    director: "Sergei Eisenstein",
    releaseYear: 1925,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Potemkin",
    theGood: "The bedrock of modern film editing. Eisenstein’s revolutionary use of montage permanently changed the way cinematic language is constructed and understood.",
    theBad: "As a pure piece of Soviet propaganda, the narrative is entirely one-dimensional, featuring cartoonishly evil villains and a collective protagonist completely devoid of internal psychology.",
    review: `### The Invention of Montage
There is cinema before Sergei Eisenstein, and there is cinema after. Commissioned by the Soviet government to commemorate the 20th anniversary of the failed 1905 revolution, *Battleship Potemkin* is arguably the most influential piece of propaganda ever created. The film dramatizes a mutiny aboard a Russian battleship, where the sailors, pushed to the brink by rotten, maggot-infested meat and tyrannical officers, violently seize control of the ship. However, the film's legacy rests not in its historical accuracy, but in its revolutionary application of "Soviet Montage theory."

### The Collision of Images
Before Eisenstein, film editing was primarily used to ensure invisible spatial continuity (as pioneered by D.W. Griffith). Eisenstein viewed editing as a violent clash. He believed that forcing two unrelated images to collide (e.g., a shot of a roaring lion next to a shot of rising workers) creates an entirely new intellectual and emotional meaning in the viewer's mind that neither image possesses on its own. *Potemkin* is a masterclass in this technique, using rapid, rhythmic cutting to manipulate the audience's heartbeat and incite revolutionary fervor.

> "A pinch of salt in a glass of water is invisible. But pour in a little more, and suddenly—crystals!" — *Sergei Eisenstein (on montage)*

---

### The Odessa Steps Sequence
The film’s fourth act, the massacre on the Odessa Steps, is the most famous and studied sequence in film history. As the citizens of Odessa gather on a massive flight of stone stairs to cheer the mutinous sailors, a line of faceless, mechanical Tsarist soldiers marches down from the top, firing mercilessly into the crowd. Eisenstein extends the sequence far beyond real-time, intercutting terrifying wide shots of the descending boots with extreme, agonizing close-ups of screaming faces, shattered glasses, and a mother carrying her dead child upward in defiance.

### The Plunging Baby Carriage
The climax of the Odessa Steps montage is the iconic shot of an unattended baby carriage careening uncontrollably down the massive stone steps amidst the chaotic slaughter. This single image of pure, helpless innocence trapped in the machinery of state violence has been homaged and parodied endlessly (most notably in Brian De Palma’s *The Untouchables*). Through sheer editorial rhythm, Eisenstein transforms a piece of staged propaganda into a scene of visceral, undeniable horror that physically affects the viewer.

### The Collective Protagonist
Unlike traditional Hollywood narratives, *Battleship Potemkin* does not have a central protagonist. The hero of the film is "The Masses." Individual characters are introduced only to be immediately martyred to incite the collective wrath of the crowd. While this makes the film emotionally cold on an individual level, it operates as a towering visual symphony of collective action. It is a film that proved that the camera and the editing room are not just tools for storytelling, but weapons capable of shaping the psychological and political realities of nations.`
  },
  {
    title: "Children of Men",
    director: "Alfonso Cuarón",
    releaseYear: 2006,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Children+of+Men",
    theGood: "A terrifyingly prophetic masterpiece of world-building and visceral filmmaking. The single-take action sequences are breathtaking technical achievements that plunge the viewer into chaos.",
    theBad: "The unrelenting grimness of its dystopian vision, heavily featuring themes of xenophobia, fascism, and terrorism, makes it a deeply harrowing and stressful cinematic experience.",
    review: `### A World Without a Future
Alfonso Cuarón’s *Children of Men* is arguably the defining dystopian film of the 21st century because its premise feels less like science fiction and more like an inevitable news broadcast. The year is 2027. For eighteen years, humanity has been struck by absolute, unexplained global infertility. Faced with the certainty of extinction, the world has descended into anarchy, save for the United Kingdom, which has transformed into a brutal, heavily militarized fascist state violently hunting down refugees. We follow Theo Faron (Clive Owen), a deeply cynical, alcoholic bureaucrat who has entirely given up on the world.

### The Architecture of the End
Cuarón’s world-building is a masterclass in subtle, background storytelling. The exposition is never spoon-fed through dialogue; it is entirely visual. The streets of London are a terrifying mix of the recognizable and the ruined. High-end coffee shops feature screens displaying anti-immigrant propaganda and government-sponsored suicide kits ("Quietus"). Caged refugees are brutalized on the sidewalks while wealthy citizens walk past without blinking. The sheer density of the despair captured by cinematographer Emmanuel Lubezki is suffocating, painting a world that has decided to violently consume itself before the clock runs out.

> "As the sound of the playgrounds faded, the despair set in. Very odd, what happens in a world without children's voices." — *Jasper Palmer*

---

### The Impossible Spark
The plot ignites when Theo is kidnapped by a militant rebel group led by his radicalized ex-wife, Julian. He is tasked with securing transit papers for a young West African refugee named Kee. The stunning, impossible revelation that Kee is heavily pregnant instantly shifts the narrative from a bleak survival story into a terrifying, high-stakes escort mission. The pregnancy is not treated as a joyous miracle, but as a massive liability; in a world dying of fascism and war, a baby is the ultimate political weapon that every faction wants to control or destroy.

### The Long Takes of Chaos
*Children of Men* is legendary for its staggering, extended single-take tracking shots. Cuarón does not use the "oner" merely as a technical gimmick; he uses it to create an inescapable, unbroken sense of visceral terror. The ambuscade of the car in the forest, and the final, horrific battle sequence through the collapsing refugee camp of Bexhill, are shot in massive, unbroken takes, with blood literally splattering onto the camera lens. The audience is trapped alongside Theo, forced to duck and run through the unedited, chaotic carnage of urban warfare. 

### The Silence of the Miracle
The emotional climax of the film is one of the most powerful sequences in modern cinema. As Theo desperately leads Kee and her newborn baby out of a besieged building, the crying of the infant suddenly echoes through the stairwell. For a brief, transcendent moment, the apocalyptic warfare completely stops. The soldiers—both the fascist military and the radical rebels—lower their weapons, weeping and falling to their knees in awe as the baby passes. It is a fleeting, miraculous moment of grace that proves that even in the absolute depths of human cruelty, the fragile promise of the future demands reverence.`
  }
];

async function seedMoviesBatch1Part2() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding Movies Batch 1 - Part 2 (10 World Cinema Classics)...');
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
      console.log(`+ Added: ${movie.title} (Movie Batch 1 Part 2 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${movie.title}`);
    }
  }
  console.log(`Done. Added ${added} movies (Part 2).`);
}

seedMoviesBatch1Part2().catch(console.error).finally(() => prisma.$disconnect());
