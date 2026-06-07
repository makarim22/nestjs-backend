const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "Come and See",
    director: "Elem Klimov",
    releaseYear: 1985,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Come+and+See",
    theGood: "Arguably the most harrowing and effective anti-war film ever made. Its depiction of the psychological annihilation of a child is a terrifying, unforgettable cinematic achievement.",
    theBad: "The sheer, unrelenting brutality and the visceral descent into hellish madness make it an incredibly traumatic watch. It is definitively not for the faint of heart.",
    review: `### A Descent into the Inferno
Elem Klimov’s *Come and See* (Idi i smotri) is often categorized as a war film, but treating it merely as a historical drama is a profound understatement. It is a psychological horror film, an apocalyptic nightmare that completely shatters any romanticized notions of combat. Set in the Byelorussian SSR during the Nazi occupation of World War II, the film follows a young, naive boy named Flyora who excitedly digs up a rifle from the sand to join the Soviet partisans. He views war as a glorious adventure. By the end of the film, his soul has been entirely obliterated.

### The Face of Annihilation
Klimov utilizes a highly subjective, terrifyingly intimate visual style. The camera frequently remains locked in extreme, suffocating close-ups of Flyora’s face. The actor, Aleksei Kravchenko, was heavily hypnotized during production to prevent genuine psychological trauma, and his performance is staggering. We literally watch a child age decades over the span of a few days. The mud, the deafening explosions, and the horrific atrocities committed by the SS are reflected entirely through the boy’s widening, deeply traumatized eyes.

> "Come and see." — *The Book of Revelation 6:7-8*

---

### The Muffling of the World
The sound design is as assaultive and disorienting as the visuals. Early in the film, an artillery shell explodes near Flyora, partially deafening him. For long stretches, the audience hears the world exactly as he does: a high-pitched, ringing tinnitus layered over muffled, distorted screams and the terrifying hum of German reconnaissance planes circling like vultures. The film forces the viewer into Flyora's concussed, deeply terrified state of sensory overload, making the violence feel sickeningly immediate.

### The Annihilation of the Village
The climax of the film—the burning of a Byelorussian village by an SS Einsatzgruppen unit—is one of the most grueling sequences ever committed to celluloid. Klimov does not portray the Nazis as highly disciplined, cold-blooded tactical machines. Instead, he portrays them as a chaotic, drunken, laughing horde of demons reveling in pure, sadistic cruelty. The sequence is a chaotic swirl of barking dogs, roaring flames, and the terrifyingly casual banter of men actively committing genocide, culminating in an image of pure, unimaginable horror.

### The Reversal of Time
The final sequence of *Come and See* elevates the film from a grueling historical record into a profound philosophical statement. A completely broken Flyora points his rifle at a puddle containing a portrait of Adolf Hitler. As he fires repeatedly into the image, Klimov brilliantly intercuts real documentary footage of the Third Reich running backward. Buildings rebuild themselves, bombs fly back up into planes, and rallies un-happen, all the way back to an image of Hitler as a baby in his mother's arms. Flyora, confronted with the innocent infant who will become the monster, lowers his weapon. Even after witnessing hell, he refuses to completely surrender his own humanity by shooting a child.`
  },
  {
    title: "Woman in the Dunes",
    director: "Hiroshi Teshigahara",
    releaseYear: 1964,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Woman+in+Dunes",
    theGood: "A visually intoxicating, erotic, and profoundly terrifying existential parable. The tactile, suffocating cinematography of the sand is an unparalleled technical achievement.",
    theBad: "The deeply claustrophobic setting and the sheer repetitiveness of the central conflict (shoveling sand) requires viewers to engage deeply with its philosophical subtext.",
    review: `### The Trap of the Everyday
Hiroshi Teshigahara’s *Woman in the Dunes* (Suna no Onna), based on the novel by Kōbō Abe, is a towering masterpiece of existential horror. The premise is brilliantly simple: an arrogant, amateur entomologist from Tokyo travels to a remote coastal desert to collect rare beetles. After missing the last bus, local villagers offer him a place to stay at the bottom of a deep sand pit, where a solitary young widow lives in a dilapidated shack. The next morning, he discovers the villagers have removed the rope ladder. He is trapped.

### The Ocean of Sand
The true antagonist of the film is not the villagers, but the sand itself. Teshigahara’s cinematography treats the sand as a massive, sentient, and terrifyingly erotic living organism. The sand is everywhere. It rains continuously down the sides of the pit; it coats the skin, gets into the food, and threatens to bury the house entirely. The entomologist learns that the widow’s entire existence is dedicated to shoveling sand every single night just to keep the house from being crushed. If she stops, the dunes will swallow them both.

> "Are you shoveling to survive, or surviving to shovel?" — *Niki Jumpei*

---

### The Illusion of Freedom
The film operates as a brilliant, suffocating allegory for modern existence. The entomologist initially rebels violently, attempting multiple desperate, futile escapes up the shifting walls of the pit. He views his life in Tokyo—his job, his bureaucratic paperwork, his societal status—as "freedom." However, Teshigahara subtly asks the audience to consider whether the man’s life in the city was any different from the widow’s life in the pit. Is modern capitalism not simply another form of endless, repetitive shoveling just to stave off the collapse of our own lives?

### The Erotic Subjugation
As the man’s frantic attempts to escape fail, his relationship with the widow slowly mutates from hostility into a strange, deeply co-dependent intimacy. Bound together by the sheer physical exhaustion of survival, the film becomes highly eroticized. The sand sticking to their sweating skin, the claustrophobia of the small shack, and the primal need for human contact strip away all of the man’s sophisticated, urban pretensions. He is reduced to his most fundamental, animalistic urges.

### The Surrender to the Pit
The film's devastating conclusion occurs when the man finally manages to fashion a makeshift rope and climbs out of the pit. He stands at the top, looking out at the endless, desolate landscape. However, he has recently discovered a method for extracting water from the sand within the pit—a small, tangible achievement that finally gives his life concrete meaning. In a shocking, quiet moment of absolute existential surrender, he chooses not to run. He returns to the bottom of the pit. He has found purpose in the absurdity of the struggle.`
  },
  {
    title: "The Spirit of the Beehive",
    director: "Víctor Erice",
    releaseYear: 1973,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Spirit+of+Beehive",
    theGood: "A masterpiece of cinematic poetry. It brilliantly uses the perspective of a child and the imagery of Frankenstein to deliver a devastating critique of post-Civil War Spain.",
    theBad: "The narrative is incredibly delicate and subtle. Viewers unfamiliar with the oppressive atmosphere of Francoist Spain may miss the heavy, unspoken political allegories.",
    review: `### The Monster on the Screen
Víctor Erice’s *The Spirit of the Beehive* (El espíritu de la colmena) is widely considered the greatest film in the history of Spanish cinema, yet it is a movie composed almost entirely of whispers and shadows. Set in 1940, immediately following the brutal end of the Spanish Civil War, the film focuses on a small, isolated Castilian village that has fallen into a state of collective, traumatized silence. The narrative centers on Ana, a wide-eyed, profoundly imaginative seven-year-old girl whose reality is entirely shattered when a traveling cinema brings James Whale’s 1931 *Frankenstein* to the local town hall.

### The Search for the Spirit
Ana is deeply affected by the film, particularly the scene where the Monster gently plays with the little girl by the lake before accidentally drowning her. Ana does not understand death or malice; she only sees a lonely creature searching for a friend. When her older, more cynical sister Isabel tells her that the Monster is actually a spirit who lives in an abandoned sheepfold on the edge of town, Ana becomes obsessed. She begins wandering out into the desolate, golden plains of Castile, searching for the creature.

> "Why did he kill the girl? And why did they kill him after that?" — *Ana*

---

### The Silence of the Hive
Erice uses the film to brilliantly bypass the heavy censorship of Francisco Franco’s fascist regime. The political critique is never spoken aloud; it is entirely atmospheric. Ana’s family is completely fractured by the trauma of the war. Her father is a detached, melancholic intellectual who spends his days studying his glass-walled beehives (a terrifying metaphor for a mindless, highly organized, and oppressive society). Her mother spends her time writing letters to a former lover who is presumably in exile or dead. The house is vast, dark, and filled with a suffocating, unspoken grief.

### The Wounded Soldier
The film’s central allegory solidifies when Ana discovers a wounded Republican soldier (a fugitive from Franco's forces) hiding in the abandoned sheepfold. Guided by her belief that he is the "Monster" she has been seeking, she does not turn him in; instead, she brings him food and her father’s coat. The innocence of the child allows her to show empathy to a political enemy in a society that demands absolute, violent conformity. When the police inevitably discover and execute the soldier in the night, the brutal reality of the adult world permanently destroys Ana's fantasy.

### The Call to the Void
The final sequence is a haunting masterpiece of psychological cinema. Deeply traumatized by the violence, Ana runs away into the woods. In the moonlight, she finally hallucinates an encounter with the Frankenstein Monster, seeing him exactly as he appeared in the film. The movie ends with Ana standing at her bedroom window, closing her eyes, and softly whispering, "I am Ana," calling out to the spirit in the dark. It is a heartbreaking portrait of a generation of Spanish children forced to seek comfort in monsters because the real world had become entirely too terrifying.`
  },
  {
    title: "Ugetsu",
    director: "Kenji Mizoguchi",
    releaseYear: 1953,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Ugetsu",
    theGood: "A lyrical, profoundly moving ghost story that operates as a devastating critique of male ambition and the tragic collateral damage of war on women.",
    theBad: "The deliberate, theatrical pacing and the ethereal, dreamlike logic of the ghost sequences require a willingness to engage with classical Japanese aesthetics.",
    review: `### The Illusion of Glory
Kenji Mizoguchi’s *Ugetsu* (Ugetsu Monogatari) is frequently cited alongside Kurosawa’s *Seven Samurai* and Ozu’s *Tokyo Story* as the absolute pinnacle of the Golden Age of Japanese cinema. However, where Kurosawa was kinetic and Ozu was ascetic, Mizoguchi was a master of flowing, ethereal lyricism. Set in the 16th century during a period of brutal civil war, the film follows two peasant brothers, Genjuro and Tobei, who become intoxicated by ambition. Genjuro wants to become a wealthy merchant by selling pottery to the warring armies, while Tobei dreams of becoming a glorious samurai. 

### The Cost of Ambition
Mizoguchi, a fierce proto-feminist filmmaker, sharply contrasts the foolish, destructive ambitions of the men with the grounded, tragic reality of their wives, Miyagi and Ohama. To pursue their selfish dreams, both men abandon their families in the middle of a war zone. Mizoguchi films the destruction wrought by the samurai not as glorious combat, but as pure terror. While the men chase phantoms of wealth and status, their wives are subjected to the brutal, unglamorous realities of starvation and violence at the hands of marauding soldiers.

> "To seek the illusion of glory is to lose the substance of love." — *The central tragedy of Ugetsu*

---

### The Ghost of the Manor
The film shifts into a masterwork of supernatural cinema when Genjuro travels to the city to sell his pottery and is seduced by Lady Wakasa, a mysterious, wealthy noblewoman who offers him a life of unimaginable luxury and artistic appreciation. Mizoguchi’s direction in Lady Wakasa’s manor is chillingly beautiful. The lighting is completely flat and otherworldly, and the camera glides through the rooms with a spectral grace. Genjuro entirely forgets his wife and child, completely entranced by the illusion, entirely unaware that he has married a ghost.

### The Fog on the Lake
The film is legendary for its unparalleled cinematography, most notably the haunting sequence where the characters cross Lake Biwa in a small boat enveloped in a thick, supernatural fog. They encounter a dying boatman who warns them of pirates. The shot is composed like a classical Japanese ink wash painting (sumi-e). It is a moment of pure, cinematic poetry that perfectly establishes the film’s central theme: the boundary between the world of the living and the world of the dead is dangerously thin, especially during times of war.

### The Fire in the Hearth
The emotional devastation of *Ugetsu* is unparalleled in the final act. When Genjuro finally breaks the spell and returns to his ruined village, he finds his house seemingly intact, with his wife Miyagi dutifully tending the fire and caring for their son. He weeps in gratitude, falls asleep, and wakes the next morning to discover the house is abandoned and his wife has actually been dead for months; her ghost had simply remained to welcome him home one last time. It is a profoundly heartbreaking masterpiece about the agonizing realization of what truly matters, entirely too late.`
  },
  {
    title: "Pixote",
    director: "Héctor Babenco",
    releaseYear: 1980,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Pixote",
    theGood: "A raw, uncompromising, and absolutely shattering look at the lives of street children in Brazil. The performance by Fernando Ramos da Silva is hauntingly authentic.",
    theBad: "The film is an incredibly brutal, unflinching portrait of poverty, sexual violence, and systemic abuse. It is deeply distressing and offers absolutely no comforting resolutions.",
    review: `### The Discarded Children
Long before *City of God* stylized the favelas of Brazil, Héctor Babenco directed *Pixote: The Law of the Weakest*, a film that rips away any cinematic glamour to expose the raw, bleeding reality of the millions of abandoned street children in São Paulo. The film is a furious indictment of a society that treats its youth as disposable garbage. It follows a ten-year-old boy named Pixote (played with devastating authenticity by real-life street child Fernando Ramos da Silva) who is thrown into a hellish, corrupt juvenile reformatory.

### The Architecture of Abuse
Babenco films the reformatory not as a place of rehabilitation, but as a factory designed specifically to produce hardened, traumatized criminals. The older boys rule through terror and sexual violence, while the corrupt guards actively orchestrate the murder of inmates to cover up their own crimes. Babenco’s documentary-like shooting style gives the film a terrifying immediacy. When Pixote and a small group of friends eventually manage to escape, the audience is initially relieved, only to realize that the streets outside are infinitely more dangerous.

> "What do you want to be when you grow up?"
> "Alive." — *The reality of the streets*

---

### The Descent into Crime
Once on the streets, the boys have absolutely no safety net, no family, and no hope of education. They survive by escalating from petty theft to violently mugging wealthy tourists, acting as drug runners, and eventually becoming entangled in armed robbery. Pixote, despite being the youngest and smallest, quickly learns that violence is the only currency the adult world respects. The tragedy of the film is watching a literal child systematically strip away every ounce of his own innocence just to survive until the next day.

### The False Mother
The emotional climax of the film revolves around Sueli, an aging, drug-addicted prostitute whom the boys attempt to use in a botched robbery scheme. After a horrific shootout leaves the older boys dead or arrested, Pixote is left entirely alone with Sueli. In a moment of absolute, primal desperation, the ten-year-old boy, completely traumatized by the violence he has witnessed and committed, crawls into the lap of the prostitute and attempts to nurse from her breast. It is one of the most pathetic, heart-wrenching images in cinema—a shattered child desperately seeking maternal comfort from a completely broken woman.

### The Endless Cycle
The final shot of *Pixote* is a profound, cynical rejection of Hollywood endings. Sueli violently rejects Pixote in disgust, throwing him out onto the street. Pixote, holding a gun that is almost as big as he is, walks alone down the train tracks, completely swallowed by the vast, indifferent expanse of the city. He is a child who has been fully transformed into a monster by a society that refused to love him. (Tragically, Fernando Ramos da Silva, the young actor who played Pixote, was killed by Brazilian police in a shootout just a few years after the film was released, proving Babenco’s thesis with terrifying accuracy.)`
  },
  {
    title: "L'Atalante",
    director: "Jean Vigo",
    releaseYear: 1934,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=L'Atalante",
    theGood: "The crown jewel of French Poetic Realism. It is a wildly romantic, visually inventive masterpiece that captures the surreal, messy, and intoxicating reality of young love.",
    theBad: "The narrative is incredibly loose and episodic. The film relies almost entirely on mood, atmosphere, and visual poetry rather than a driving, conflict-heavy plot.",
    review: `### The Poetry of the River
Jean Vigo directed only one full-length feature film before dying of tuberculosis at the tragic age of 29. That single film, *L'Atalante*, was enough to cement his legacy as one of the most vital, revolutionary voices in cinema history. The film is the absolute pinnacle of "Poetic Realism." It tells the deceptively simple story of Jean, the captain of a river barge (the *L'Atalante*), and Juliette, his beautiful new bride from a provincial village. After their wedding, Juliette moves onto the cramped, dirty barge to live with Jean, a young cabin boy, and Père Jules, the eccentric, tattooed first mate.

### The Claustrophobia of Marriage
Vigo brilliantly captures the profound shock of early marriage. The initial romance quickly gives way to the suffocating reality of living in extremely close quarters. Juliette is bored by the slow, repetitive life on the river and yearns for the glamour and excitement of Paris. Jean is fiercely jealous and possessive, entirely unequipped to handle her independence. The barge itself becomes a character—a rusty, soot-covered, beautiful floating prison that slowly drives the young lovers apart through sheer claustrophobia.

> [The dialogue is secondary to the visual poetry of the fog, the water, and the surreal imagery of the barge.]

---

### The Magic of Père Jules
The chaotic, beating heart of the film is Père Jules, played with massive, anarchic energy by the legendary Michel Simon. Jules’s cabin is a surreal museum of oddities collected from a lifetime at sea—music boxes, severed hands in jars, and a dozen stray cats. In a famous, bizarrely erotic sequence, Jules shows Juliette his tattoos and his treasures, representing the wild, untamed world of experience that Jean is desperately trying to protect her from. Jules operates as the anarchic spirit of the film, constantly undermining Jean’s rigid authority.

### The Face in the Water
When Juliette inevitably runs away to explore Paris, Jean, paralyzed by pride and anger, orders the barge to cast off without her. However, the subsequent separation plunges both characters into a profound, suffocating despair. This leads to the most famous and incredibly beautiful sequence in the film. Jean remembers a superstition Juliette told him: if you open your eyes underwater, you will see the face of your true love. Desperate, Jean plunges into the freezing, murky river. Vigo films Jean thrashing underwater, hallucinating a glowing, ethereal image of Juliette floating in her wedding dress. It is a moment of pure, transcendent visual poetry.

### A Masterpiece Reclaimed
The studio initially mutilated the film, heavily editing it to make it a conventional romance. It wasn't until decades later that Vigo’s original, surreal, and messy vision was fully restored. *L'Atalante* is a miracle of a movie because it treats love not as a pristine, idealized fairy tale, but as something deeply physical, dirty, confusing, and ultimately magnificent. It is a testament to a brilliant director whose career was cut tragically short, but whose single feature permanently altered the trajectory of French cinema.`
  },
  {
    title: "The Ascent",
    director: "Larisa Shepitko",
    releaseYear: 1977,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Ascent",
    theGood: "A staggering, spiritually profound war film that focuses entirely on the internal, moral battle of its characters. The stark, freezing black-and-white cinematography is unforgettable.",
    theBad: "It is an incredibly grueling, oppressive experience. The film is saturated with intense physical suffering, torture, and a deeply bleak exploration of human cowardice.",
    review: `### The Frozen Hell
Larisa Shepitko’s *The Ascent* (Voskhozhdeniye) is one of the most visually arresting and spiritually devastating films to ever emerge from the Soviet Union. Set during the brutal winter of the Nazi occupation of Byelorussia in 1942, the film follows two Soviet partisans, the hardened, pragmatic Rybak and the sickly, intellectual Sotnikov, who are sent out into the freezing wilderness to forage for food for their starving camp. From the very first frame, Shepitko establishes the winter landscape not merely as a setting, but as a terrifying, indifferent cosmic force designed to strip away the characters' physical and moral strength.

### The Duality of Survival
The film is fundamentally a profound moral and psychological duel. Rybak is a survivor; he is physically strong, practical, and willing to compromise his morals to stay alive. He views the war entirely in physical terms. Sotnikov, conversely, is physically weak and suffering from a severe cough, but he possesses an unbreakable, almost fanatical spiritual core. When the two men are eventually captured by the Germans and handed over to Portnov, a terrifyingly calm Russian collaborator who works as a Nazi interrogator, the film shifts from a physical survival story into a harrowing examination of the soul.

> "A man is a man because he can overcome his physical shell." — *Sotnikov*

---

### The Judas and the Christ
As the interrogation and torture commence, Shepitko explicitly infuses the narrative with heavy Christian iconography. Sotnikov, enduring horrific torture without breaking, becomes a clear Christ figure, his face radiating a serene, transcendent acceptance of his own martyrdom. Rybak, terrified of death, slowly morphs into Judas. He convinces himself that if he simply agrees to collaborate with the Nazis temporarily, he can escape later and rejoin the partisans. He fails to realize that the moment he compromises his soul to save his body, he has already died.

### The Interrogation
The interrogation scenes are masterclasses in psychological tension. The collaborator Portnov (played with chilling, intellectual detachment by Anatoly Solonitsyn) does not use mindless violence; he uses logic. He accurately points out to Sotnikov that if he dies in the basement, no one will ever know. There will be no glory, no songs sung about his bravery. He will simply cease to exist. Sotnikov’s refusal to break in the face of absolute, meaningless oblivion is what elevates the film into a profound statement on the inherent dignity of the human spirit.

### The Endless Hanging
The film's climax is utterly shattering. As Sotnikov is led to the gallows, Shepitko shoots his face in close-ups that strongly evoke classical religious icons. Rybak, having fully capitulated, is forced to actively participate in the execution of his friend to prove his loyalty to the Nazis. After the hanging, Rybak attempts to commit suicide in an outhouse, but fails. The film concludes with Rybak staring out into the bleak, white expanse, realizing that he has survived, but he has damned himself to a life of absolute, unbearable guilt. Shepitko tragically died in a car crash shortly after completing the film, leaving behind a flawless masterpiece.`
  },
  {
    title: "Celine and Julie Go Boating",
    director: "Jacques Rivette",
    releaseYear: 1974,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Celine+and+Julie",
    theGood: "A joyful, surreal, and endlessly playful masterpiece of the French New Wave. It completely deconstructs the boundary between the audience, the actors, and the magic of storytelling.",
    theBad: "The staggering 193-minute runtime and the highly repetitive, puzzle-box structure require viewers to completely surrender to the film's bizarre, improvisational dream logic.",
    review: `### The Chase of the White Rabbit
Jacques Rivette’s *Celine and Julie Go Boating* (Céline et Julie vont en bateau) is the most joyous, freewheeling, and delightfully bizarre film to emerge from the French New Wave. It begins entirely like *Alice in Wonderland*: Julie, a quiet, orderly librarian, is sitting in a Parisian park when a frantic, flamboyant woman named Celine runs past, dropping various items. Julie begins to follow her, initiating a massive, hours-long, playful chase across the city. Eventually, the two women move in together, and the film transforms into a massive, surreal puzzle box about the very nature of fiction and cinema.

### The Haunted House of Fiction
The core of the narrative revolves around a mysterious, seemingly abandoned house located at 7 bis, rue du Nadir-aux-Pommes. Celine and Julie discover that by sucking on a magical piece of hard candy, they are transported directly into a melodramatic, looping narrative occurring inside the house. The narrative is a hyper-stylized, Henry James-esque gothic ghost story about a widower, two jealous women, and a sickly child who is destined to be murdered. 

> [The film heavily relies on the improvisational, chaotic chemistry between its two lead actresses, Juliet Berto and Dominique Labourier.]

---

### The Audience as the Actor
Rivette uses the haunted house sequence as a brilliant, elaborate metaphor for the experience of watching a movie. Initially, Celine and Julie are merely passive observers of the melodrama; they are the audience, forced to watch the same tragic loop play out every time they suck the candy. However, the film becomes a revolutionary feminist text when the two women decide they are no longer content to simply watch the tragedy unfold. They decide to invade the narrative themselves.

### Breaking the Loop
In the film's final, exhilarating hour, Celine and Julie dress up in absurd costumes and enter the house not as spectators, but as active participants. They completely disrupt the rigid, melodramatic dialogue of the "ghosts," turning the gothic tragedy into a chaotic, slapstick comedy. They hijack the narrative structure, successfully rescuing the little girl from her predetermined cinematic death and dragging her out of the haunted house and back into the real world of 1970s Paris.

### The Endless Cycle of Play
The film concludes exactly as it began, but with the roles reversed: Celine is now sitting quietly in the park, and Julie runs past her, dropping her belongings. Rivette suggests that storytelling is not a rigid, linear object to be consumed, but an endless, joyful cycle of play and imagination. *Celine and Julie Go Boating* is an aggressively long, frequently baffling, and utterly magical cinematic experience that demands the audience abandon logic and simply enjoy the ride.`
  },
  {
    title: "Tropical Malady",
    director: "Apichatpong Weerasethakul",
    releaseYear: 2004,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Tropical+Malady",
    theGood: "A deeply hypnotic, radical cinematic experience. It seamlessly blends a tender, naturalistic romance with a terrifying, mythic journey into the heart of the jungle.",
    theBad: "The film literally breaks completely in half at the midpoint, abandoning all narrative conventions to become an abstract, nearly silent tone poem that will deeply confuse casual viewers.",
    review: `### The Film That Splits in Two
Apichatpong Weerasethakul’s *Tropical Malady* (Sud Pralad) is a film of profound, mystical audacity. It is fundamentally a movie about the dual nature of love: the sweet, domestic reality, and the terrifying, primal, all-consuming spiritual surrender. To achieve this, Weerasethakul literally splits the film into two completely distinct halves. The first half is a gentle, naturalistic, and deeply affecting romance between Keng, a handsome soldier, and Tong, a quiet country boy working at an ice factory in rural Thailand. They flirt, they ride scooters, they listen to pop music. It is sweet and profoundly normal.

### The Descent into the Mythic
Exactly halfway through the runtime, the screen cuts to black. When the image returns, the modern romance has entirely vanished, replaced by an ancient Thai folk tale. Tong has disappeared into the deep jungle, seemingly transformed into a mythical, shape-shifting tiger shaman who has been slaughtering local cattle. Keng, entirely alone, is sent into the oppressive, terrifying darkness of the jungle to hunt the beast. The film abandons all dialogue, transforming into an abstract, sensory nightmare of buzzing insects, rustling leaves, and glowing eyes in the dark.

> "Monster... I give you my spirit, my flesh, and my memories." — *Keng*

---

### The Jungle as the Subconscious
The brilliance of *Tropical Malady* lies in its realization that the second half of the film is not a literal event, but a spiritual metaphor for the romance of the first half. Keng’s terrifying journey into the jungle represents the absolute vulnerability required to truly love another person. The jungle is the subconscious—dark, ancient, and beyond logical control. As Keng hunts the tiger (Tong), he is stripped of his military uniform, his weapons, and his modern identity, slowly reverting to a primal state of existence. 

### The Stare of the Tiger
Weerasethakul’s visual language in the second half is unparalleled in modern cinema. He shoots the jungle not as a physical location, but as a living, breathing entity. The darkness is so thick it feels tactile. The communication between Keng and the tiger does not occur through dialogue, but through telepathic, glowing text on the screen and lingering, hypnotic stares. Keng realizes that he cannot "conquer" the tiger through force; he must completely surrender to it.

### The Ultimate Surrender
The film culminates in an image of extraordinary spiritual power. Keng, exhausted and entirely vulnerable, drops to his knees before a massive tree where the tiger is perched in the darkness. He offers himself entirely to the beast, bowing in complete submission. It is a terrifying and beautiful metaphor for the dissolution of the ego in the face of absolute love. *Tropical Malady* is a challenging, wildly unconventional masterpiece that requires the audience to stop trying to intellectually "solve" the narrative and simply allow the hypnotic power of the images to wash over them.`
  },
  {
    title: "Ashes and Diamonds",
    director: "Andrzej Wajda",
    releaseYear: 1958,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Ashes+and+Diamonds",
    theGood: "The definitive masterpiece of the Polish Film School. It is a visually explosive, deeply tragic, and impossibly cool examination of a generation destroyed by war and ideology.",
    theBad: "The dense political context—the chaotic, violent transition of power in Poland immediately following WWII—can be difficult to fully grasp without a basic understanding of the history.",
    review: `### The Last Day of the War
Andrzej Wajda’s *Ashes and Diamonds* (Popiół i diament) is a film that crackles with the restless, doomed energy of a generation that has survived hell only to realize they have no future. The entire film takes place on a single day: May 8, 1945, the day Nazi Germany officially surrendered. While the rest of the world celebrates peace, Poland is violently tearing itself apart. The film follows Maciek (played by Zbigniew Cybulski, often called the "Polish James Dean"), a young, charismatic assassin for the anti-communist Home Army, who is tasked with murdering Szczuka, a high-ranking local communist official.

### The Tragedy of the Assassin
Maciek is one of cinema’s most compelling anti-heroes. He wears dark sunglasses indoors (a remnant of fighting in the sewers during the Warsaw Uprising) and moves with an iconic, nervous swagger. However, behind his cool exterior, Maciek is profoundly exhausted. He has spent his entire youth fighting and killing Nazis, and now he is being ordered by his superiors to start killing his fellow Poles. The tragedy of the film is watching Maciek desperately attempt to cling to a fleeting, normal life—falling in love with a beautiful barmaid named Krystyna—while realizing that the machinery of war will not allow him to stop killing.

> "Will there remain among the ashes a star-like diamond, the dawn of eternal victory?" — *Cyprian Norwid (poem quoted in the film)*

---

### The Visuals of a Shattered Nation
Wajda’s cinematography is heavily influenced by American film noir and Orson Welles, utilizing deep focus, harsh shadows, and dramatic, skewed camera angles. The visual design perfectly captures a nation trapped in a state of chaotic transition. The celebratory banquet in the hotel is shot as a grotesque, drunken farce, where opportunistic politicians blindly toast a new regime while political murders happen in the hallways. Wajda uses the setting to expose the hypocrisy of the older generation, who safely orchestrate the violence from the shadows while sacrificing the youth.

### The Burning Glasses
One of the most famous and visually striking sequences in film history occurs when Maciek and his commander sit at the hotel bar, remembering their fallen comrades from the Warsaw Uprising. Maciek lines up a row of shot glasses filled with clear vodka and sets them on fire. As the flames dance on the bar, Maciek names a dead friend for each glass. It is a beautiful, deeply melancholy monument to a lost generation—the "ashes" of Poland’s youth, burned up by the terrifying heat of historical forces far beyond their control.

### The Bleeding on the Garbage Dump
The climax of the film is a masterstroke of tragic irony and stark visual symbolism. Maciek successfully completes his assassination, but it brings him no peace. While attempting to flee the town the next morning, he is accidentally shot by a passing military patrol. Wajda films Maciek’s death not as a glorious martyrdom, but as a pathetic, agonizing reality. Maciek staggers through a massive, filthy garbage dump, clutching his stomach, writhing and dying alone among the trash. It is a brutal, unforgettable final image, signifying the ultimate waste of a brilliant, doomed generation.`
  }
];

async function seedMoviesBatch4() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding Movies Batch 4 (10 Obscure International Masterpieces)...');
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
      console.log(`+ Added: ${movie.title} (Movie Batch 4 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${movie.title}`);
    }
  }
  console.log(`Done. Added ${added} movies (Batch 4).`);
}

seedMoviesBatch4().catch(console.error).finally(() => prisma.$disconnect());
