const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "Persona",
    director: "Ingmar Bergman",
    releaseYear: 1966,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Persona",
    theGood: "A devastating psychological masterclass that deconstructs the medium of cinema itself. The merging of identities between the two lead actresses is hauntingly profound.",
    theBad: "Its deliberate ambiguity, surrealist imagery, and jarring meta-cinematic interruptions can be deeply alienating to viewers seeking a conventional narrative structure.",
    review: `### The Dissolution of the Self
Ingmar Bergman’s *Persona* is widely considered one of the most radical and psychologically terrifying films ever made. It begins with a sensory assault—a rapid-fire montage of flashing cinematic apparatus, a cartoon, a slaughtered sheep, and a boy reaching out to a blurry image of a woman's face. We are immediately reminded that we are watching a film. The narrative then settles into the austere story of Elisabet Vogler, a renowned stage actress who has suddenly and inexplicably gone entirely mute, and Alma, the young, naive nurse assigned to care for her in a secluded summer cottage on the island of Fårö.

### The Silence That Devours
Bergman uses Elisabet’s silence not as a passive condition, but as an aggressive, suffocating force. Because Elisabet refuses to speak, Alma is forced to fill the void. Alma chatters endlessly, revealing her deepest insecurities, her sexual history, and her moral failings. She views Elisabet as a sympathetic confessor, but Bergman shoots Elisabet’s silent reactions with terrifying ambiguity—is she listening with compassion, or observing Alma with the cold detachment of an artist studying a specimen? The silence acts as a vacuum that slowly sucks the very identity out of the young nurse.

> "No matter what you do, it's a lie. The only truth is to remain silent." — *The Doctor*

---

### The Blurring of Boundaries
The cinematographic genius of Sven Nykvist is instrumental to the film’s psychological horror. Nykvist employs extreme, suffocating close-ups, often framing half of Alma’s face and half of Elisabet’s face in the same shot, visually merging them. As the isolation of the island takes its toll, Alma begins to lose her grip on reality. She adopts Elisabet’s mannerisms, wears her clothes, and even begins to speak for her. The boundary between the caregiver and the patient collapses entirely, leading to a profound meditation on the fragile nature of the human ego. 

### The Breakdown of the Medium
The most shocking moment in *Persona* occurs at the midpoint, when the film itself literally breaks. During a moment of intense psychological tension between the two women, the celluloid appears to burn and snap in the projector, leaving the audience in total darkness before restarting with a jarring montage. Bergman is deliberately attacking the illusion of the cinematic medium, forcing the audience to recognize the artifice of the identities presented on screen, just as Alma is recognizing the artifice of her own identity.

### A Haunting Legacy
*Persona* does not offer a neat resolution. It remains a terrifyingly open wound of a film. The final sequences, which repeat the same agonizing monologue twice—once from Alma’s perspective and once from Elisabet’s—cement the film’s status as a masterpiece of psychological fragmentation. It is an exhausting, beautiful, and unparalleled exploration of the masks (the "personas") we wear, and the terrifying emptiness that lies beneath them when those masks are finally stripped away.`
  },
  {
    title: "8 ½",
    director: "Federico Fellini",
    releaseYear: 1963,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=8+1/2",
    theGood: "The ultimate film about filmmaking. Fellini brilliantly turns his own creative paralysis into a surreal, joyous, and visually intoxicating carnival of the mind.",
    theBad: "The completely fluid transition between reality, memory, and hallucination requires the audience to surrender entirely to dream logic, which can be disorienting.",
    review: `### The Nightmare of the Blank Page
Federico Fellini’s *8 ½* opens with one of the most famous dream sequences in cinema: a man suffocating in his car during a massive traffic jam, eventually floating out of the sunroof and ascending into the sky like a kite, only to be violently pulled back down to earth by a rope. This man is Guido Anselmi, a famous Italian film director suffering from a catastrophic case of director’s block. He has a massive sci-fi epic in pre-production, millions of liras on the line, actors demanding their lines, and a colossal spaceship set built—but he has absolutely no idea what the movie is about.

### A Carnival of the Subconscious
Instead of writing a script, Guido retreats to a luxurious health spa to take a "cure." However, there is no escape. He is constantly hounded by producers, critics, his neglected wife, and his demanding mistress. To cope with the crushing pressure, Guido’s mind completely fractures. The film seamlessy weaves in and out of his reality, his childhood memories of a Catholic boarding school, and his surreal, often bizarre sexual fantasies (most notably the famous "harem" sequence where he imagines living with every woman he has ever desired, all of whom happily serve him). 

> "There is no end. There is no beginning. There is only the infinite passion of life." — *Federico Fellini*

---

### The Camera as a Mirror
What makes *8 ½* a towering masterpiece is its staggering level of meta-textual honesty. Fellini is making a movie about a director who cannot make a movie. Marcello Mastroianni, playing Guido with effortless cool and deep existential exhaustion, is essentially playing Fellini himself. The film’s cinematographer, Gianni Di Venanzo, shoots the chaos with sweeping, incredibly complex camera movements that turn the bustling spa and the massive, empty spaceship set into a grand, beautiful circus. The visuals are a direct manifestation of Guido’s chaotic, brilliant mind.

### The Intellectual Critic
Fellini constantly anticipates the audience's criticism by placing a literal film critic in the movie as Guido’s collaborator. This critic follows Guido around, brutally deconstructing his ideas, calling them pretentious, disjointed, and structurally flawed. This is Fellini’s brilliant defense mechanism; by explicitly stating every possible critique of *8 ½* within the text of *8 ½*, he renders the critics powerless. It is a stunning display of artistic vulnerability masquerading as supreme confidence.

### The Joyous Acceptance of Chaos
The climax of the film does not involve Guido magically finishing a brilliant script. Instead, he simply accepts his own confusion. The film ends with a joyous, literal circus parade where the cast of characters—everyone Guido has ever loved, hated, or imagined—joins hands and dances in a massive circle around a circus ring, directed by Guido with a megaphone. It is a euphoric acceptance of life's messiness, declaring that art doesn't need to be perfectly structured to be profoundly beautiful.`
  },
  {
    title: "Tokyo Story",
    director: "Yasujirô Ozu",
    releaseYear: 1953,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Tokyo+Story",
    theGood: "A masterpiece of supreme gentleness and devastating emotional power. Ozu's minimalist approach turns a simple family drama into a universal meditation on the passage of time.",
    theBad: "The extraordinarily slow pacing, static camera work, and total lack of melodrama demand extreme patience from viewers accustomed to modern cinematic momentum.",
    review: `### The Inevitable Drift of Family
Yasujirô Ozu’s *Tokyo Story* is universally regarded as one of the greatest films ever made, yet it possesses a plot so simple it barely registers as a narrative. An elderly couple, Shukichi and Tomi, travel from their small, quiet coastal town to the bustling post-war metropolis of Tokyo to visit their adult children. Upon arrival, they quickly discover that their children—a busy doctor and an irritable beauty salon owner—are completely consumed by their own lives. They do not have the time, the space, or the inclination to entertain their aging parents.

### The Tragedy of the Everyday
Ozu does not paint the adult children as villains; that would be too simple and too melodramatic. Instead, he portrays them as ordinary, flawed people caught in the relentless machinery of modern life. They love their parents, but they find them deeply inconvenient. The true tragedy of *Tokyo Story* is not born of malice, but of the natural, inevitable drifting apart of generations. The children ship their parents off to a noisy, cheap hot spring resort just to get them out of their hair, a quiet cruelty that the parents accept with heartbreaking grace and polite smiles.

> "Isn't life disappointing?"
> "Yes, it is." — *Kyoko and Noriko*

---

### The Grace of Noriko
The only person in Tokyo who shows the elderly couple genuine warmth and unhurried affection is not their blood relative, but their widowed daughter-in-law, Noriko (played with transcendent radiance by Setsuko Hara). Noriko’s husband died in the war eight years prior, yet she remains deeply devoted to his memory and to his parents. She takes time off from her demanding office job to give them a tour of Tokyo. The bond between Noriko and the elderly couple forms the emotional core of the film, highlighting the profound difference between familial obligation and genuine human kindness.

### The Tatami Mat Shot
Ozu’s directorial style in *Tokyo Story* is famously ascetic. The camera almost never moves. There are no pans, no tracking shots, and no dramatic zooms. Ozu employs his signature "tatami shot"—placing the camera at the eye level of a person kneeling on a tatami mat. This creates a deeply intimate, grounded perspective, forcing the audience to sit in the room with the characters and observe their quiet heartbreaks in real-time. He also famously shoots conversations head-on, having the actors look almost directly into the lens, breaking conventional editing rules to create a profound emotional directness.

### The Unstoppable March of Time
The film's quiet, devastating climax revolves around the sudden illness and passing of the mother, Tomi. When the children rush back to their hometown for the funeral, they mourn, but they also quickly return to their busy lives, eager to divide her belongings. It is only Noriko who truly feels the weight of the loss. *Tokyo Story* is an exquisite, painful acceptance of the transient nature of life (mono no aware). It is a film that patiently asks us to look at our own families, our own aging parents, and the fleeting nature of the time we have with them.`
  },
  {
    title: "Ikiru",
    director: "Akira Kurosawa",
    releaseYear: 1952,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Ikiru",
    theGood: "A profoundly moving existential drama. Kurosawa masterfully transforms a bleak premise about a dying bureaucrat into a triumphant, life-affirming call to action.",
    theBad: "The narrative structure shifts radically in the second half, relying heavily on non-linear flashbacks that can initially disorient the viewer.",
    review: `### The Death of a Bureaucrat
The title of Akira Kurosawa’s masterpiece, *Ikiru*, translates directly to "To Live." Yet, the film begins with a death sentence. We are introduced to Kanji Watanabe, a middle-aged, deeply uninspiring section chief in a Tokyo municipal office. The narrator bluntly informs us via an X-ray that Watanabe has terminal stomach cancer and less than a year to live, though he doesn't know it yet. For thirty years, Watanabe has not truly lived; he has merely existed as a cog in the post-war Japanese bureaucracy, stamping papers and ensuring that nothing of substance is ever accomplished. 

### The Desperate Search for Meaning
When Watanabe discovers his grim diagnosis, his initial reaction is one of profound, paralyzing despair. He realizes he has wasted his entire life. He withdraws his life savings and embarks on a pathetic, desperate attempt to buy happiness. He drinks heavily, wanders through Tokyo's chaotic nightlife, and attempts to surround himself with noise and hedonism. However, Kurosawa shoots these sequences not with joy, but with a suffocating, nightmarish intensity. Watanabe quickly realizes that pleasure is not a substitute for meaning; the neon lights only amplify his terrifying internal void.

> "I can't afford to hate people. I don't have that kind of time." — *Kanji Watanabe*

---

### The Spark of Purpose
Watanabe’s salvation comes in the form of a young, vivacious female subordinate who is quitting the suffocating bureaucracy to work in a toy factory. He is drawn to her raw vitality. When he asks her how she manages to be so alive, she simply points out that she makes toys that bring joy to children. This simple revelation fundamentally alters Watanabe's worldview. He realizes that he cannot undo thirty years of stagnation, but he can use his remaining months to accomplish exactly one meaningful thing: pushing through a stalled petition to build a children's playground in a slum area.

### A Structural Masterstroke
Halfway through the film, Kurosawa executes a brilliant and incredibly risky structural pivot. Watanabe dies off-screen. The entire second half of the movie takes place at his wake. His bewildered colleagues, superiors, and family members sit around drinking sake, attempting to piece together why the famously passive Watanabe suddenly became a relentless, immovable force of nature in his final months. Through a series of flashbacks, the film shows Watanabe systematically breaking every bureaucratic rule, bowing to hostile politicians, and refusing to give up until the playground is built.

### The Song in the Snow
The film's defining image—and one of the most iconic moments in cinema history—is the flashback of Watanabe, in the final stages of his illness, sitting alone on a swing in the newly completed playground. Snow is falling heavily, and he is softly singing a melancholy 1920s ballad, "Life is Brief." He is dying, but his face is illuminated with a profound, transcendent peace. *Ikiru* is a devastating critique of bureaucratic apathy and a beautiful, urgent reminder that it is never too late to find meaning and truly live.`
  },
  {
    title: "Aguirre, the Wrath of God",
    director: "Werner Herzog",
    releaseYear: 1972,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Aguirre",
    theGood: "A mesmerizing descent into madness and megalomania. Herzog captures the brutal, unyielding power of nature and the terrifying consequences of absolute obsession.",
    theBad: "The deliberate lack of traditional character arcs and the relentless, grueling pacing make it a deeply uncomfortable and oppressive viewing experience.",
    review: `### A Suicidal Expedition
Werner Herzog’s *Aguirre, the Wrath of God* opens with one of the most breathtaking and perilous shots in cinema history: a massive column of Spanish conquistadors, enslaved Indigenous people, and llamas slowly winding their way down a terrifyingly steep, mist-shrouded path in the Peruvian Andes. It is 1560, and this doomed expedition has been dispatched into the uncharted Amazon rainforest to locate the mythical city of gold, El Dorado. From the very first frame, Herzog establishes that the humans are not the masters of this domain; they are tiny, arrogant insects about to be swallowed whole by an indifferent jungle.

### The Rise of the Madman
As the expedition bogs down in the mud, disease, and hostile territory, the leadership splinters. The focus shifts entirely to Don Lope de Aguirre, played with terrifying, bug-eyed intensity by the legendary Klaus Kinski. Aguirre is not merely greedy; he is a megalomaniac who views himself as a god. He stages a mutiny, executes those loyal to the Spanish crown, and declares his own emperor of the new world. Kinski’s performance is entirely unhinged; he moves with a strange, crab-like lopsidedness, his eyes burning with an obsessive madness that is deeply unsettling to watch.

> "I am the great traitor. There must be no other. Anyone who even thinks about deserting this mission will be cut up into 198 pieces." — *Lope de Aguirre*

---

### The Jungle as the Ultimate Antagonist
Herzog famously refused to shoot on a soundstage, opting instead to drag his crew deep into the actual Peruvian jungle. This grueling production method bleeds directly into the film. The Amazon River is the true antagonist of the story. It is a slow, muddy, relentless force that traps the mutineers on their wooden rafts. The jungle on either side is a wall of green, hiding unseen Indigenous archers who silently pick off the conquistadors one by one. The atmosphere is one of suffocating heat, starvation, and creeping delirium. 

### The Illusion of Conquest
The film is a searing critique of imperialism and the inherent absurdity of colonial conquest. The conquistadors are dressed in heavy, rusting armor, completely unsuited for the environment. They carry cannons that sink in the mud and read proclamations of land ownership to an empty, echoing jungle. Aguirre’s grand delusions of founding an empire and marrying his own daughter to create a pure dynasty are contrasted brutally against the reality of his situation: he is floating on a rotting raft, starving to death, covered in disease.

### The Empire of Monkeys
The final sequence of *Aguirre* is a haunting masterpiece of surreal cinema. The expedition has been entirely wiped out by starvation, disease, and arrows. Aguirre is the sole survivor. The raft is suddenly overrun by hundreds of tiny squirrel monkeys. As the camera circles the raft in a continuous, dizzying shot, a delusional Aguirre stands among the monkeys, clutching his sword, shouting his plans to conquer Mexico and rule the world. It is the ultimate portrait of hubris—a self-proclaimed god ruling over an empire of corpses and primates, entirely swallowed by the vastness of the Amazon.`
  },
  {
    title: "Solaris",
    director: "Andrei Tarkovsky",
    releaseYear: 1972,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Solaris",
    theGood: "A profound, philosophical science fiction epic that uses the vastness of space to explore the deepest recesses of the human subconscious, grief, and memory.",
    theBad: "Tarkovsky’s incredibly slow, meditative pacing and long, unbroken takes require a level of patience that will frustrate viewers expecting a typical sci-fi thriller.",
    review: `### A Psychological Space Station
Andrei Tarkovsky’s *Solaris*, adapted from Stanislaw Lem’s novel, is frequently cited as the Soviet response to Kubrick’s *2001: A Space Odyssey*. However, where Kubrick looked outward to the evolution of the species, Tarkovsky looks entirely inward to the fragility of the human soul. The film follows Kris Kelvin, a psychologist sent to a decaying space station orbiting the oceanic planet Solaris to investigate why the crew has gone completely insane. When he arrives, he finds the station in disrepair, one scientist dead by suicide, and the remaining two locked in a state of terrified paranoia.

### The Ocean that Remembers
The central, terrifying premise of *Solaris* is that the oceanic planet below is a massive, sentient consciousness. It does not communicate via radio waves or mathematical codes; instead, it reads the deepest, most repressed memories of the scientists on board and physically manifests them. For Kelvin, this means the sudden, impossible materialization of his wife, Hari, who committed suicide years ago on Earth. This "Guest" is not a ghost or an alien shapeshifter; she is an exact physical replica, born entirely from Kelvin's guilt and grief.

> "We don't want to conquer the cosmos, we simply want to extend the boundaries of Earth to the frontiers of the cosmos... We don't need other worlds. We need a mirror." — *Dr. Snaut*

---

### The Torment of the Replica
The brilliance of Tarkovsky’s narrative lies in the tragic existential crisis of Hari. Initially, she is merely a manifestation of Kelvin’s memory, lacking any independent agency or history. However, as she spends more time with Kelvin, she begins to develop her own consciousness. She realizes that she is not a real human being, but a cruel cosmic projection. Her repeated, horrific attempts to commit suicide (drinking liquid oxygen) are undone by the planet's rapid regenerative powers. Tarkovsky uses her agonizing existence to ask profound questions about what constitutes a human soul. Is a perfect replica of a human, capable of feeling love and existential dread, indistinguishable from the real thing?

### The Burden of Earthly Attachments
Throughout the film, Tarkovsky contrasts the cold, sterile, metallic environment of the space station with lush, nostalgic memories of Earth. The opening sequence, an agonizingly beautiful, long meditation on water, reeds, and a country house, grounds the viewer in the tactile beauty of nature. Tarkovsky suggests that humanity is fundamentally unfit for the cold expanse of the cosmos because we are too deeply tethered to our earthly roots, our grief, and our emotional traumas. Space travel, in his view, is an exercise in profound loneliness.

### A Devastating Final Illusion
The ending of *Solaris* remains one of the most debated and visually stunning conclusions in cinema history. Kelvin appears to return to Earth, arriving back at the lush country house from the beginning of the film. He embraces his father in a deeply emotional reunion. But as the camera slowly tracks backward and upward into the sky, it reveals that the house, the father, and the entire landscape are merely an island floating on the vast, swirling surface of the Solaris ocean. Kelvin has entirely surrendered to the illusion, choosing a comforting falsehood over a painful reality.`
  },
  {
    title: "The Mirror",
    director: "Andrei Tarkovsky",
    releaseYear: 1975,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Mirror",
    theGood: "A visually sublime, purely poetic cinematic experience. Tarkovsky abandons narrative structure entirely to create a tapestry of memory, dreams, and historical trauma.",
    theBad: "It is fiercely difficult to parse logically. The non-linear structure, multiple timelines, and actors playing dual roles make it a highly demanding watch.",
    review: `### The Architecture of Memory
If *Solaris* was Andrei Tarkovsky exploring the human subconscious in space, *The Mirror* (Zerkalo) is Tarkovsky turning the camera directly onto his own soul. It is his most autobiographical, elusive, and arguably his most beautiful film. There is no conventional plot. Instead, the film operates entirely on the logic of dreams and memory. We hear the voice of the dying protagonist, Alexei (a stand-in for Tarkovsky), as his consciousness drifts through fragmented recollections of his childhood before World War II, his complicated relationship with his mother, and his failures with his own ex-wife and son.

### A Sensory Tapestry
*The Mirror* is less a movie to be watched and more an environment to be experienced. Tarkovsky’s cinematography is staggering in its elemental power. The film is obsessed with fire, water, wind, and earth. A barn burning down in the rain, a sudden gust of wind violently shaking a field of buckwheat, a child’s hand brushing against a wet window—these images are presented with an overwhelming, tactile beauty. Tarkovsky believed that cinema, at its highest form, should not merely tell a story, but should transmit the precise emotional weight of a memory directly to the viewer.

> "A book is a world. It's not the same thing as looking in the mirror." — *Natalia*

---

### The Duality of Women
One of the most notoriously confusing elements of the film is Tarkovsky's decision to cast the same actress, the magnificent Margarita Terekhova, in two completely different roles across two timelines. She plays Alexei’s mother (Maria) in the pre-war childhood memories, and she also plays Alexei’s ex-wife (Natalia) in the modern-day timeline. Similarly, the actor playing Alexei’s young son also plays the young version of Alexei. This deliberate conflation is a brilliant psychological device, demonstrating how we project the traumas and unresolved feelings from our parents onto our romantic partners and children. 

### The Intertwining of History and Self
Tarkovsky does not limit the film to pure personal nostalgia; he heavily intertwines his memories with the violent history of the 20th century. The intimate, dreamlike sequences are frequently interrupted by stark black-and-white archival footage—the Spanish Civil War, the launch of a Soviet balloon, the grueling Sino-Soviet border conflicts. By juxtaposing the deeply personal (a mother washing her hair) with the historical, Tarkovsky argues that our internal lives are inextricably bound to the massive, sweeping currents of world history.

### The Levitation of the Soul
The film is famously opaque, but its emotional resonance is undeniable. The recurring motif of levitation—where the mother slowly floats above a bed in a dream sequence—serves as the ultimate metaphor for the transcendence of art and memory. *The Mirror* is a defiant rejection of linear storytelling. It demands that the viewer surrender their need for logical comprehension and simply allow the poetry of the images to wash over them. It is a haunting, melancholic masterpiece that attempts to capture the very essence of human consciousness on celluloid.`
  },
  {
    title: "L'Avventura",
    director: "Michelangelo Antonioni",
    releaseYear: 1960,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=L'Avventura",
    theGood: "A groundbreaking subversion of cinematic grammar. Antonioni uses the framing of a mystery thriller to expose the profound, crushing alienation of the modern bourgeois.",
    theBad: "The deliberate lack of resolution regarding the central mystery infuriated audiences upon its release and remains a highly provocative, challenging viewing experience.",
    review: `### The Mystery That Doesn't Matter
When Michelangelo Antonioni’s *L'Avventura* premiered at the Cannes Film Festival in 1960, it was notoriously booed by the audience for completely shattering narrative expectations. The film begins as a classic mystery thriller: a group of wealthy, bored Italian socialites take a yacht trip to a rocky, desolate volcanic island in the Mediterranean. Suddenly, Anna, a disgruntled young woman, disappears entirely. Her best friend, Claudia (Monica Vitti), and Anna’s fiancé, Sandro, begin a frantic, desperate search of the island. However, as the film progresses, Antonioni commits a cinematic heresy: he allows the characters, and the movie itself, to simply forget about Anna.

### The Architecture of Alienation
The disappearance of Anna is not the point of the movie; it is merely a catalyst to expose the profound spiritual emptiness of the remaining characters. Antonioni’s visual style is meticulous and revolutionary. He uses the stark, imposing landscapes of the volcanic island and the modern, sterile architecture of Italian cities to dwarf his characters, emphasizing their internal isolation. The framing is often deliberately asymmetrical, with characters looking away from each other or blocked by walls and pillars, perfectly capturing the "incommunicability" of the modern era.

> "I love you. It's the most beautiful phrase. I've never heard it. Not the way you say it." — *Claudia*

---

### The Betrayal of Grief
As Claudia and Sandro continue their search across Italy, their grief and anxiety rapidly mutate into a sudden, highly inappropriate romantic affair. Antonioni brilliantly portrays this romance not as an act of passion, but as an act of desperate distraction. Sandro, a former architect who sold out his artistic vision to estimate costs for other people's buildings, is a man hollowed out by compromise. He pursues Claudia because he cannot stand the silence of his own mind. Claudia, wracked by guilt over betraying her missing friend, is pulled into the affair out of a sheer, terrifying need for connection in an indifferent world.

### The Face of Modern Cinema
Monica Vitti’s performance as Claudia is iconic, turning her into the ultimate muse of 1960s European cinema. She carries the existential weight of the film on her shoulders. Her face is a battleground of guilt, fleeting joy, and profound confusion. As the search for Anna slowly dissolves into a series of opulent parties and hollow social encounters, Claudia realizes that she has become trapped in the exact same cycle of bourgeois ennui that drove Anna away in the first place.

### The Tragedy of Forgiveness
The ending of *L'Avventura* remains one of the most haunting and pessimistic resolutions in cinema. Claudia discovers Sandro in the early hours of the morning, casually cheating on her with an American escort at a luxury hotel. Instead of a dramatic confrontation or a cathartic breakup, the film ends with Sandro sitting on a bench outside, weeping silently in self-pity, while Claudia slowly places a hand on the back of his head in an act of agonizing, defeated forgiveness. Antonioni suggests that in the modern world, even betrayal is too exhausting to fight against; all that is left is a shared, pathetic loneliness.`
  },
  {
    title: "The 400 Blows",
    director: "François Truffaut",
    releaseYear: 1959,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=400+Blows",
    theGood: "The vital, beating heart of the French New Wave. Truffaut captures the chaotic, rebellious, and deeply vulnerable essence of adolescence with unparalleled authenticity.",
    theBad: "Viewers expecting a tightly plotted, Hollywood-style coming-of-age story may find its episodic, slice-of-life structure a bit meandering.",
    review: `### The Birth of the French New Wave
François Truffaut’s debut feature, *The 400 Blows* (Les Quatre Cents Coups), did not just launch his legendary career; it effectively fired the starting pistol for the French New Wave. The film is a deeply personal, semi-autobiographical portrait of Antoine Doinel, a misunderstood, neglected thirteen-year-old boy growing up in Paris. Truffaut abandons the rigid, studio-bound artificiality of previous French cinema ("the tradition of quality") in favor of taking the camera out onto the real streets of Paris, capturing the grit, the noise, and the spontaneous energy of youth. 

### The Failure of the Adult World
The tragedy of Antoine Doinel is that he is not inherently a bad kid; he is simply a boy surrounded by adults who have completely failed him. His mother is self-absorbed and having an affair, his stepfather is well-meaning but weak and easily frustrated, and his school teachers are tyrannical disciplinarians who punish him for minor infractions while ignoring his genuine cries for help. Antoine’s descent into petty crime (stealing a typewriter) is not born of malice, but of a desperate need for attention, freedom, and a way to survive in a world that views him purely as an inconvenience.

> "I lie now and then, I suppose. Sometimes I'd tell them the truth and they still wouldn't believe me, so I prefer to lie." — *Antoine Doinel*

---

### The Interview Sequence
One of the most remarkable and groundbreaking moments in the film occurs when Antoine is placed in a juvenile observation center. Truffaut includes a scene where a female psychologist interviews Antoine. The camera remains fixed entirely on Antoine’s face in a long, unbroken shot while the psychologist asks him questions from off-screen. Jean-Pierre Léaud, the young actor playing Antoine, improvised many of his answers. The result is a moment of staggering, unvarnished cinematic truth, capturing the raw vulnerability, intelligence, and deep sadness of a child trying to rationalize his own abandonment.

### A Love Letter to Cinema
Despite the bleakness of Antoine’s situation, the film is infused with a manic, joyous energy, largely driven by Antoine’s love for cinema. Truffaut, a former film critic who found his own salvation in movie theaters, mirrors this in his protagonist. When Antoine and his friend skip school, they immediately head to the cinema. For Antoine, the dark theater is the only sanctuary where the rigid rules of the adult world do not apply. It is a beautiful acknowledgement of how art can serve as a lifeline for the neglected.

### The Freeze-Frame at the Edge of the World
The ending of *The 400 Blows* is arguably the most famous freeze-frame in the history of movies. Having escaped from the juvenile center, Antoine runs endlessly across the countryside until he finally reaches the ocean—something he has never seen before. He wades into the water, turns back to look directly into the camera lens, and the image freezes on his ambiguous, haunting expression. It is not a moment of triumphant freedom, but a moment of profound uncertainty. He has reached the edge of the world, and now he has nowhere left to run. It perfectly encapsulates the terrifying precipice of growing up.`
  },
  {
    title: "Breathless",
    director: "Jean-Luc Godard",
    releaseYear: 1960,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Breathless",
    theGood: "A cinematic hand grenade that gleefully destroyed all the rules of editing and narrative. It is the epitome of 1960s cool, crackling with raw, improvisational jazz energy.",
    theBad: "The intentionally jagged editing (jump cuts) and the deeply shallow, narcissistic protagonists can make it feel more like an intellectual exercise than an emotional journey.",
    review: `### Smashing the Rules of Cinema
If Truffaut’s *The 400 Blows* gave the French New Wave its heart, Jean-Luc Godard’s *Breathless* (À bout de souffle) gave it its punk-rock attitude. The film famously shreds the fundamental rulebook of classical cinematic grammar. It follows Michel Poiccard, a petty, arrogant car thief who impulsively murders a police officer on a country road and flees to Paris. There, he attempts to persuade Patricia, a beautiful, detached American journalism student, to run away with him to Italy. The plot, however, is almost entirely irrelevant; the film is an exercise in pure style and rebellious form.

### The Invention of the Jump Cut
Godard’s most famous technical innovation in *Breathless* is the heavy use of the "jump cut." In classical Hollywood editing, cuts are designed to be invisible, maintaining spatial and temporal continuity. Godard deliberately shatters this illusion by abruptly cutting out frames within the same continuous shot, making characters appear to magically jump across the room or dialogue to violently skip forward. This jagged, restless editing style perfectly mimics Michel’s manic, chaotic lifestyle and forces the audience to constantly acknowledge that they are watching a constructed piece of art.

> "Between grief and nothing, I will take nothing." — *Patricia*

---

### The Hollywood Cosplay
Michel, played with an iconic, cigarette-dangling swagger by Jean-Paul Belmondo, is essentially a young man cosplaying as a Hollywood gangster. He models his entire persona on Humphrey Bogart, constantly rubbing his thumb across his lip in imitation. Godard uses Michel to deconstruct the absurdity of American cinema tropes. Michel wants to live in a film noir, but reality keeps getting in the way. He is not a glamorous kingpin; he is a broke, pathetic thug hiding in small apartments and stealing change from his girlfriends. 

### The Long Conversation
Despite its frantic editing, the centerpiece of the film is a shockingly long, 24-minute sequence that takes place entirely within Patricia’s tiny Parisian bedroom. The scene meanders endlessly as Michel and Patricia smoke, flirt, argue about literature, and avoid talking about anything of real substance. It captures the specific, exhausting dynamic of a toxic, narcissistic relationship where two people are talking *at* each other rather than *to* each other. Patricia (Jean Seberg) is the ultimate cool, detached icon of the era, completely inscrutable in her motivations.

### A nihilistic shrug
The finale of *Breathless* is famously abrupt and emotionally cold. When Patricia ultimately betrays Michel to the police—not out of moral obligation, but seemingly just to see what will happen—Michel simply accepts his fate. Shot in the back while running down the street, he collapses, makes a bizarre, comical face, calls Patricia a "disgusting bitch," and dies. Godard strips the death of any romantic tragedy or moral weight. It is a nihilistic, cinematic shrug—a brilliant, anarchic end to a film that permanently changed the way movies were made.`
  }
];

async function seedMoviesBatch1Part1() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding Movies Batch 1 - Part 1 (10 World Cinema Classics)...');
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
      console.log(`+ Added: ${movie.title} (Movie Batch 1 Part 1 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${movie.title}`);
    }
  }
  console.log(`Done. Added ${added} movies (Part 1).`);
}

seedMoviesBatch1Part1().catch(console.error).finally(() => prisma.$disconnect());
