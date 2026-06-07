const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "Touki Bouki",
    director: "Djibril Diop Mambéty",
    releaseYear: 1973,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Touki+Bouki",
    theGood: "A fiercely original, kinetic explosion of African avant-garde cinema. Mambéty blends surrealism with post-colonial critique in a visually intoxicating joyride.",
    theBad: "The intentionally jagged editing and heavily symbolic, non-linear narrative require viewers to completely abandon traditional Western storytelling expectations.",
    review: `### The Motorcycle and the Skull
Djibril Diop Mambéty’s *Touki Bouki* (The Journey of the Hyena) is a staggering anomaly in African cinema. While his contemporaries (like Ousmane Sembène) were utilizing social realism to critique post-colonialism, Mambéty chose the path of explosive, surrealist anarchy. The film follows two young lovers in Dakar, Senegal: Mory, a charismatic herdsman who rides a motorcycle adorned with a zebu skull, and Anta, a rebellious university student. Disillusioned by their marginalized existence, they scheme to steal enough money to escape to Paris, an idealized paradise they know only through Josephine Baker songs and French magazines.

### The Illusion of the Metropole
The genius of *Touki Bouki* lies in its savage deconstruction of the colonial hangover. Mory and Anta are completely obsessed with fleeing to France, viewing it as the ultimate salvation. However, Mambéty constantly undercuts their romanticized vision of the "metropole" by juxtaposing their fantasies with the brutal realities of Dakar. The soundtrack is famously abrasive, abruptly cutting between traditional Senegalese drumming, the bleating of slaughtered goats, and a looping, cloying French pop song ("Paris, Paris, Paris"), creating a profound auditory dissonance that perfectly mirrors their cultural schizophrenia.

> "To see Paris and die... or to see Dakar and live?" — *Thematic undercurrent of the film*

---

### A Cinematic Joyride
Visually, the film owes more to the French New Wave (specifically Godard’s *Pierrot le Fou*) than to traditional African storytelling, yet it remains fiercely, unmistakably Senegalese. Mambéty’s camera is restless, employing jarring jump cuts, extreme close-ups, and sudden shifts into dream sequences. The sequence where Mory steals a wealthy homosexual's clothing and car, parading around Dakar as a faux-aristocrat, is a hilarious and biting satire of the African bourgeoisie who merely inherited the arrogant mannerisms of their former French colonizers.

### The Weight of the Blood
Throughout the chaotic, freewheeling narrative, Mambéty repeatedly intercuts graphic, documentary-style footage of a slaughterhouse. As cattle are bled out on the floor, the film draws a direct, horrifying parallel between the physical butchery of animals and the spiritual butchery of a nation stripped of its identity by colonialism. Mory’s motorcycle, with its massive animal skull, becomes a dark chariot of death, suggesting that their desperate attempt to sever their roots and flee to Europe is a form of cultural suicide.

### The Ship Departs
The film’s climax is a masterstroke of psychological paralysis. Having successfully stolen the money and boarded the massive ocean liner bound for France, Mory is suddenly overcome by an inexplicable, overwhelming dread. As the ship sounds its horn, he abandons Anta, running frantically back down the gangway to reclaim his beloved motorcycle, only to find it has been destroyed in a crash. He is left entirely alone on the docks of Dakar, trapped between a homeland he despises and a European fantasy he lacks the courage to pursue. It is a brilliant, devastating portrait of post-colonial limbo.`
  },
  {
    title: "The Color of Pomegranates",
    director: "Sergei Parajanov",
    releaseYear: 1969,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Color+of+Pomegranates",
    theGood: "A film composed entirely of breathtaking, living paintings. It is a work of pure, unadulterated visual poetry that completely defies cinematic categorization.",
    theBad: "There is absolutely no plot, dialogue, or character development. It is an abstract, highly symbolic visual poem that will completely alienate viewers seeking a traditional narrative.",
    review: `### Cinema as a Persian Miniature
Sergei Parajanov’s *The Color of Pomegranates* is arguably the most fiercely independent and visually radical film ever produced under the Soviet regime (which promptly banned the film and eventually imprisoned its director). Ostensibly a biography of the 18th-century Armenian troubadour Sayat-Nova, the film completely abandons narrative. Instead, Parajanov constructs a series of stunning, static, deeply symbolic tableaux. He treats the movie screen not as a window into a realistic world, but as a flat canvas, arranging his actors and props with the strict, geometric precision of ancient Persian miniatures or medieval illuminated manuscripts.

### The Geometry of the Soul
The visual language of the film is overwhelmingly beautiful and profoundly esoteric. Parajanov uses no camera movement—no pans, no tilts, no tracking shots. The camera stares rigidly straight ahead while the action unfolds in highly choreographed, ritualistic movements. We see red juice bleeding from pomegranates onto a white cloth to form the shape of the Armenian nation; a blindfolded monk surrounded by hundreds of bleating sheep in a church; books left out on a monastery roof to dry in the wind. These images do not advance a plot; they are designed to transmit the spiritual interiority of the poet directly to the viewer.

> [The film features virtually no spoken dialogue, relying instead on chanting, music, and the sounds of physical labor.]

---

### The Androgyny of the Muse
In a deeply subversive casting choice, Parajanov cast the stunningly beautiful actress Sofiko Chiaureli in six different roles, playing both male and female characters—including both the male poet in his youth and the poet’s female muse, Princess Anna. This deliberate blurring of gender boundaries emphasizes the idea that true artistic inspiration transcends physical reality. The poet and the muse are not two separate entities, but two halves of the same divine creative force, reflecting each other perfectly in a world defined by suffocating religious orthodoxy.

### The Tyranny of the Censor
The creation of the film was a minor miracle of artistic defiance. The Soviet authorities, demanding strict adherence to "Socialist Realism" (art that explicitly glorified the working class), were utterly baffled and enraged by Parajanov’s obscure, religious, and hyper-stylized imagery. They forced the film to be heavily recut and re-titled, eventually condemning Parajanov to five years in a hard labor camp on trumped-up charges. The film survives today as a testament to an artist who absolutely refused to compromise his vision, even under the threat of physical destruction.

### A Tapestry of Blood and Lace
*The Color of Pomegranates* is not a film to be understood logically; it must be absorbed sensorially. It is a movie about textures—the heavy brocade of church robes, the wet wool of a dyed carpet, the sharp thorn of a rose, and the stark contrast of red blood on white snow. It is a mournful, ecstatic celebration of Armenian culture and the indomitable power of the artistic spirit. Watching it is akin to walking through a museum of dreams, where every frame is a masterpiece demanding quiet, absolute reverence.`
  },
  {
    title: "Daisies",
    director: "Věra Chytilová",
    releaseYear: 1966,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Daisies",
    theGood: "A joyful, anarchic, and fiercely feminist explosion of the Czech New Wave. It destroys patriarchal expectations through pure, chaotic gluttony and surrealist comedy.",
    theBad: "Its gleeful lack of structure, aggressive editing, and shrill protagonists make it an intentionally abrasive and chaotic viewing experience.",
    review: `### The Declaration of Badness
Věra Chytilová’s *Daisies* (Sedmikrásky) begins with a simple, devastatingly nihilistic premise. Two young women, both named Marie (Marie I and Marie II), sit in bathing suits, bored out of their minds. They look at the state of the world—intercut with documentary footage of aerial bombings and mechanical gears—and come to a logical conclusion: "Since the world is going bad, we will be bad too." What follows is 74 minutes of pure, unadulterated, anarchic destruction. The Maries refuse to be productive members of the socialist state; instead, they dedicate themselves entirely to gluttony, manipulation, and chaos.

### The Weaponization of the Feminine
The genius of *Daisies* lies in how it weaponizes traditional patriarchal expectations of women. The Maries act like overgrown, deeply irritating children. They go on dates with wealthy older men, feigning naive innocence, only to gorge themselves on massive, expensive meals before promptly abandoning the men at the train station. They use their youth and beauty not as a means to secure a husband, but as a tool to extract free food and amusement. They are the ultimate nightmare of a conservative society: women who absolutely refuse to be useful.

> "Does it matter? No, it doesn't matter. Nothing matters." — *Marie I and Marie II*

---

### The Aesthetic of Destruction
Chytilová’s directorial style is as chaotic and rebellious as her protagonists. The film violently shifts between black-and-white, sepia, and hyper-saturated color, sometimes within the same scene. She employs aggressive jump cuts, surreal stop-motion animation, and a cacophonous soundtrack of clanging machinery and ticking clocks. The film feels as though it is constantly threatening to break apart at the seams. It is a visual manifestation of the Maries' refusal to conform to any established rules, cinematic or societal.

### The Banquet of Ruins
The film culminates in one of the most famous and glorious sequences in avant-garde cinema. The two Maries discover a massive, opulent banquet hall prepared for high-ranking political officials. Left alone, they systematically devour and then violently destroy the entire feast. They stomp on tiered cakes in their high heels, throw massive platters of food at each other, swing from the chandeliers, and completely obliterate the room. It is a joyous, terrifying act of pure Dadaist rebellion against the absurd extravagance of the ruling elite.

### The Hollow Apology
In the film's deeply ironic final moments, the Maries, realizing they have gone too far, attempt to "fix" the destroyed banquet hall. They whisper apologies while awkwardly sweeping broken glass and mashed cake back onto the tables, lying down on the table as the final "platters." The film abruptly cuts to footage of a massive explosion, accompanied by a dedication: "To all those whose indignation is limited to a smashed-up salad." Chytilová brutally mocks those who are outraged by the destruction of property (or a film's narrative rules) but remain entirely apathetic to the actual violence and destruction of the real world.`
  },
  {
    title: "Cure",
    director: "Kiyoshi Kurosawa",
    releaseYear: 1997,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Cure",
    theGood: "A deeply unsettling masterpiece of atmospheric dread. It strips the serial killer procedural of all its comforting tropes, leaving behind a terrifying meditation on the fragility of identity.",
    theBad: "It refuses to offer neat, logical answers. The horror is entirely psychological, lacking traditional jump scares or explicit gore, which may disappoint fans of conventional thrillers.",
    review: `### The Virus of the Mind
Before the explosion of "J-Horror" popularized by *Ringu*, Kiyoshi Kurosawa quietly released *Cure*, a film that remains arguably the most deeply terrifying and philosophically disturbing export of Japanese cinema. The premise masquerades as a standard police procedural: Detective Takabe (Koji Yakusho) is investigating a bizarre string of murders. The victims are all found with a large "X" carved into their necks, but the killers are ordinary, unconnected citizens (a teacher, a policeman, a doctor) who were found near the bodies, completely dazed, with no memory of why they committed the crime. 

### The Empty Vessel
The investigation quickly leads to Mamiya, a young man wandering the beaches of Tokyo with severe short-term memory loss. He is the film’s antagonist, but he possesses none of the flamboyant brilliance of a Hannibal Lecter. Mamiya is entirely empty. He constantly asks people "Who are you?" in a flat, infuriating monotone. However, Kurosawa reveals that Mamiya's emptiness is his weapon. Through a subtle combination of rhythmic lighter flicks, spilled water, and hypnotic questioning, he acts as a psychological mirror. He breaks down the rigid societal identities of the people he meets, allowing their deeply repressed violent urges to surface.

> "The things you say... they have no meaning. You're completely empty." — *Detective Takabe*

---

### The Architecture of Dread
Kurosawa's directorial style is an exercise in suffocating restraint. There are no sudden musical cues to tell the audience to be scared, and the violence often occurs off-screen or in extreme wide shots, making it feel chillingly mundane. The cinematography utilizes desolate, post-industrial landscapes—empty warehouses, abandoned hospitals, and sterile police interrogation rooms. Kurosawa frequently uses long, unbroken takes, forcing the audience to stare into the shadowy corners of the frame, creating an agonizing sense of anticipation that something terrible is quietly unraveling right in front of us.

### The Collapse of the Detective
The true horror of *Cure* lies not in the murders, but in the psychological degradation of Detective Takabe. Takabe is a man holding onto his sanity by a thread; he returns home every night to a wife suffering from severe mental illness, suppressing his own exhaustion and resentment behind a mask of stoic duty. As Takabe interrogates Mamiya, the film shifts into a terrifying psychological duel. Mamiya realizes that Takabe's rigid moral code is merely a fragile dam holding back a massive reservoir of rage. The hypnosis works not by implanting a foreign idea, but by giving Takabe permission to stop fighting his own darkness.

### The Final Cut
The film’s climax and epilogue are masterful strokes of ambiguity and existential dread. Takabe eventually tracks Mamiya to an abandoned sanatorium, resulting in a confrontation that feels less like a triumph of justice and more like a grim transfer of power. The final scene, showing Takabe quietly ordering food in a family restaurant while a waitress inexplicably picks up a knife behind him, is one of the most chilling endings in cinema. Kurosawa suggests that the "cure" for the exhausting, crushing pressure of modern society is simply to surrender to the void. The madness is highly contagious, and absolutely no one is immune.`
  },
  {
    title: "Close-Up",
    director: "Abbas Kiarostami",
    releaseYear: 1990,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Close-Up",
    theGood: "A miraculous blending of documentary and fiction. Kiarostami’s profound empathy transforms a bizarre true-crime story into a deeply moving meditation on cinema and identity.",
    theBad: "The raw, low-budget, documentarian aesthetic and the total lack of traditional dramatic structure will completely baffle viewers expecting a standard narrative feature.",
    review: `### The Crime of Imagination
Abbas Kiarostami’s *Close-Up* is a film that actively defies categorization. Is it a documentary? Is it a dramatic recreation? It is, miraculously, both simultaneously. The film is based on a bizarre true story that Kiarostami read in an Iranian newspaper: a poor, unemployed cinephile named Hossain Sabzian was arrested for impersonating the famous Iranian film director Mohsen Makhmalbaf. Sabzian had successfully convinced an affluent family, the Ahankhahs, that he was the famous director and that he was going to cast them in his next film, effectively living in their home for days before being discovered.

### The Radical Act of Recreation
Upon reading the article, Kiarostami immediately halted his current project, rushed to the prison, and convinced the judge to allow him to film Sabzian’s actual trial. But the genius of *Close-Up* is what Kiarostami did next: he convinced *everyone* involved in the real-life incident—the imposter Sabzian, the wealthy family he conned, the journalist who broke the story, and the police who arrested him—to play themselves in staged reenactments of the events leading up to the arrest. Kiarostami effortlessly weaves the real documentary footage of the trial with the staged reenactments, completely blurring the line between absolute truth and cinematic illusion.

> "I didn't want to steal anything. I just wanted to be someone. I just wanted them to respect me." — *Hossain Sabzian*

---

### The Empathy of the Lens
During the trial sequences, Kiarostami places two cameras in the courtroom: one wide shot for the legal proceedings, and one extreme "close-up" focused entirely on Sabzian’s face. When Kiarostami speaks to Sabzian from behind the camera, the film shifts from a legal inquiry into a profound psychological confession. Sabzian reveals that he did not con the family for money; he conned them because, for a few days, their reverence for his assumed identity allowed him to escape the crushing humiliation of his poverty. He committed a crime of pure, desperate imagination.

### The Power of Cinema
*Close-Up* is fundamentally a film about the overwhelming power of cinema itself. The wealthy family was conned not because Sabzian looked exactly like the director, but because they were entirely blinded by the glamour of the film industry. Sabzian himself was so deeply moved by Makhmalbaf’s films (which often champion the poor) that he genuinely believed he possessed the director's soul. Kiarostami does not judge Sabzian; instead, he uses the apparatus of filmmaking to grant a broken, invisible man the dignity and the voice that society had denied him.

### The Flowers on the Motorcycle
The final sequence of the film is one of the most transcendent moments in the history of the medium. Sabzian is released from prison, and waiting for him outside is the *real* Mohsen Makhmalbaf. Makhmalbaf buys Sabzian flowers, puts him on the back of his motorcycle, and drives him to the home of the family he conned to apologize. Kiarostami famously manipulates the audio track, intentionally degrading the sound so we cannot hear all of their conversation, protecting the intimacy of the moment. When Sabzian bursts into tears at the family's door, holding the flowers, the emotional catharsis is overwhelming. It is a masterpiece that proves cinema's ultimate purpose is profound human empathy.`
  },
  {
    title: "A Touch of Zen",
    director: "King Hu",
    releaseYear: 1971,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=A+Touch+of+Zen",
    theGood: "The undisputed granddaddy of the modern Wuxia epic. It elevates martial arts cinema to high art, blending breathtaking, gravity-defying action with profound Buddhist philosophy.",
    theBad: "The staggering three-hour runtime and a very slow, meandering first hour requires viewers to invest significant patience before the legendary action sequences begin.",
    review: `### The Elevation of Wuxia
Before *Crouching Tiger, Hidden Dragon* or *House of Flying Daggers*, there was King Hu’s *A Touch of Zen* (Xia nü). It is the film that single-handedly proved that the martial arts genre (Wuxia) was capable of possessing the same visual grandeur and philosophical depth as a Kurosawa samurai epic or a John Ford western. The film begins as a slow-burn ghost story: Ku, a clumsy, unambitious scholar living near an abandoned, supposedly haunted fortress, becomes entangled with Yang Hui-ching, a beautiful, mysterious fugitive hiding from the corrupt Eunuch Wei’s secret police.

### The Scholar and the Warrior
King Hu subverts the traditional gender roles of action cinema immediately. Ku, the male protagonist, is entirely incapable of fighting. He is a bumbling intellectual who spends the first hour of the film frightened of shadows. Yang, conversely, is a highly trained, lethal martial artist. When the secret police finally arrive at the fortress, Ku does not pick up a sword; instead, he uses his intellect, devising a massive, elaborate series of booby traps and psychological tricks (utilizing the fortress's "haunted" reputation) to defeat the heavily armed soldiers. It is a brilliant integration of strategy and combat.

> "The mind is the origin of all things. When the mind is still, all things are at peace." — *Abbot Hui Yuan*

---

### The Ballet of the Bamboo Forest
The film is rightfully legendary for its action choreography, specifically the staggering, ten-minute battle sequence in a bamboo forest. King Hu revolutionized action editing. Rather than focusing purely on the physical impact of the blows, he used hidden trampolines and rapid, rhythmic editing to make the fighters appear to glide through the air, bouncing off bamboo stalks like weightless dancers. The sequence is a masterclass in kinetic geometry, utilizing the verticality of the forest to create a sequence that feels more like a violently beautiful ballet than a brawl.

### The Shift to the Spiritual
In its final hour, *A Touch of Zen* undergoes a massive tonal and narrative shift, abandoning the political thriller plot to embrace explicit Buddhist philosophy. The focus shifts to Abbot Hui Yuan, a profoundly powerful, pacifist monk who intervenes to protect Yang. The Abbot does not fight to kill; he fights purely to disarm and educate. His martial arts are an extension of his spiritual enlightenment. King Hu visually reinforces this by frequently framing the Abbot against the blinding, transcendent glare of the sun, turning him into an almost supernatural force of grace.

### The Golden Blood
The climax of the film is one of the most surreal and unforgettable endings in cinema. After a brutal final battle where the Abbot sacrifices himself to save the heroes, the villain strikes the monk in the back. Instead of bleeding red blood, the Abbot bleeds pure, radiant gold. As he sits in the lotus position, pointing toward the setting sun in a final act of enlightenment, the camera pans across the mountains. The political struggles of the first two hours are rendered completely insignificant in the face of absolute spiritual transcendence. It is a masterpiece that uses the sword solely as a vehicle to reach the soul.`
  },
  {
    title: "Black Girl",
    director: "Ousmane Sembène",
    releaseYear: 1966,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Black+Girl",
    theGood: "A lean, devastating, and historically vital piece of cinema. It is the foundational text of Sub-Saharan African filmmaking, delivering a razor-sharp critique of neo-colonialism.",
    theBad: "The post-synced audio (a necessity of the low budget) can be distracting, and its brisk 60-minute runtime feels almost too brief for the magnitude of its themes.",
    review: `### The Birth of African Cinema
Ousmane Sembène’s *Black Girl* (La Noire de...) is widely considered the first internationally recognized feature film directed by a Sub-Saharan African. Released in 1966, it is a cinematic declaration of independence. Sembène, a former novelist and dockworker, refused to let European filmmakers dictate the narrative of Africa any longer. The film tells the brutally simple story of Diouana, a young Senegalese woman who is hired as a nanny by a wealthy French family in Dakar. When the family returns to the French Riviera, they bring Diouana with them, promising her a life of glamour and cosmopolitan adventure.

### The Trap of the Metropole
Upon arriving in France, the illusion is immediately shattered. Diouana is not treated as a nanny or a guest; she is locked inside their sterile, claustrophobic apartment and reduced to an unpaid domestic slave. Sembène shoots the French Riviera not as a paradise, but as a bright, sunny prison. Diouana never leaves the apartment; her entire existence is confined to the kitchen, the bathroom, and the living room. The film operates as a brilliant, devastating allegory for neo-colonialism: the physical occupation of Africa has ended, but the economic and psychological exploitation of its people continues unabated.

> "I am not a prisoner. I will not be a slave." — *Diouana's inner monologue*

---

### The Silence and the Monologue
One of the most striking formal elements of *Black Girl* is its use of sound. Diouana rarely speaks aloud to her French employers; when she does, they treat her French as primitive and ignore her. Instead, Sembène grants the audience access to Diouana’s rich, articulate, and increasingly desperate inner monologue. We hear her thoughts in pristine voiceover as she silently scrubs the floors. This disconnect between her silent physical servitude and her articulate internal rebellion perfectly captures the agonizing suffocation of being stripped of one's voice and humanity.

### The Mask of Identity
The central visual motif of the film is a traditional African mask that Diouana purchases in Dakar and gifts to her employers. Initially, the mask is a symbol of her cultural pride. However, once in France, the employers hang it on their stark white wall as an exotic decoration, entirely divorcing it from its cultural meaning. The mask becomes a terrifying mirror for Diouana herself—she realizes she is merely a prop, a status symbol for her liberal French employers to prove how "cosmopolitan" they are, completely devoid of human agency in their eyes.

### A Devastating Rebuttal
The film’s climax is an act of ultimate, tragic defiance. Unable to endure the psychological suffocation, Diouana commits suicide in the bathtub. When the guilty French patriarch travels to Dakar to return her belongings and offer her mother financial compensation, the mother silently refuses the money. In the film's haunting final sequence, a young Senegalese boy puts on Diouana’s African mask and slowly, relentlessly follows the terrified French patriarch through the streets of Dakar. It is an unforgettable image of a continent rising up to reclaim its stolen dignity, staring down its former colonizers with an unblinking gaze.`
  },
  {
    title: "Beau Travail",
    director: "Claire Denis",
    releaseYear: 1999,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Beau+Travail",
    theGood: "A hypnotic, tactile masterpiece. Denis creates a mesmerizing cinematic language out of sweat, sand, and the silent, choreographed rituals of the male body in motion.",
    theBad: "The narrative is incredibly sparse, conveyed almost entirely through lingering glances, unspoken resentment, and repetitive physical exercises rather than traditional dialogue.",
    review: `### The Choreography of Men
Claire Denis’s *Beau Travail* is a film of overwhelming physical presence. Loosely adapting Herman Melville’s *Billy Budd*, Denis transplants the story to a remote French Foreign Legion outpost in the blistering desert of Djibouti. The narrative is structured as the melancholic, retrospective diary of Adjudant-Chef Galoup (Denis Lavant), a rigid, deeply repressed career officer. His meticulously ordered, monastic existence is violently disrupted by the arrival of a new recruit, Sentain, a young man of effortless grace, kindness, and popularity. Galoup’s immediate, unspoken reaction to Sentain is a terrifying mixture of intense homoerotic attraction and absolute, destructive jealousy.

### The Ballet of the Legion
What elevates *Beau Travail* to the status of a modern masterpiece is how Denis films the soldiers. There are virtually no battle scenes. Instead, Denis films the men engaging in punishing, repetitive military exercises—crawling under barbed wire, ironing shirts, and performing synchronized martial arts in the scorching sun. Set against the stark beauty of the African landscape and scored to the soaring choral music of Benjamin Britten, these exercises are transformed into a hypnotic, intensely sensual contemporary ballet. The camera lingers on the sweat, the muscles, and the unspoken tension between the men, creating a palpable atmosphere of repressed desire.

> "Serve the good cause and die." — *Legionnaire motto*

---

### The Poison of Repression
Galoup cannot comprehend or process his obsession with Sentain. Because his entire identity is built upon the rigid, emotionless structure of the Legion, he views his own feelings as a catastrophic weakness. To protect his fragile psychology, he decides that Sentain must be destroyed. Denis does not script dramatic confrontations; the tension is conveyed entirely through Galoup’s cold, unblinking stares and his silent orchestration of a plot to push the younger man past his physical limits. It is a masterful study of how repressed emotion inevitably metastasizes into cruelty.

### The Ghost of Colonialism
While the central conflict is deeply psychological, the film also serves as a haunting critique of the French military presence in Africa. The Legionnaires exist in a bizarre, suspended animation. They train endlessly for a war that does not exist, running drills in an empty desert. They are completely isolated from the local Djiboutian population, interacting with them only in cheap nightclubs. Denis paints the Foreign Legion as an obsolete, ghostly apparatus of a dead empire, consisting of men who have abandoned their homelands to perform empty rituals in the sand.

### The Rhythm of the Night
The film concludes with one of the greatest, most unexpected, and purely euphoric final shots in the history of cinema. Having been court-martialed for his cruelty to Sentain, Galoup is sent back to civilian life in France. We see him making his bed with military precision, placing a revolver on his stomach, preparing for suicide. Suddenly, the film cuts to a mirror-lined nightclub. The pulsating beat of Corona’s "The Rhythm of the Night" drops, and Denis Lavant launches into a frantic, chaotic, fiercely acrobatic solo dance. It is the ultimate release of a lifetime of repressed energy—a terrifying, joyous explosion of the self right before the end.`
  },
  {
    title: "Memories of Underdevelopment",
    director: "Tomás Gutiérrez Alea",
    releaseYear: 1968,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Memories+of+Underdevelopment",
    theGood: "A brilliantly cynical, intellectually devastating portrait of a man—and a nation—caught between a rotting past and an uncertain, radical future.",
    theBad: "The protagonist is an incredibly passive, arrogant, and highly unlikable bourgeois intellectual, which can make it difficult for viewers seeking an empathetic hero.",
    review: `### The Man Left Behind
Tomás Gutiérrez Alea’s *Memories of Underdevelopment* (Memorias del Subdesarrollo) is the undisputed crown jewel of Cuban cinema, and a film of shocking political and psychological complexity. Set in Havana in 1961, shortly after the Bay of Pigs invasion and right before the Cuban Missile Crisis, the film follows Sergio, a wealthy, European-educated bourgeois landlord. When his wife, parents, and friends all flee the communist revolution for Miami, Sergio inexplicably chooses to stay in Havana. He is not a revolutionary, nor is he a committed capitalist; he is simply paralyzed by a cynical, intellectual detachment from everything around him.

### The Architecture of Alienation
Alea masterfully uses a fragmented, essay-like structure to map Sergio’s internal paralysis. The film seamlessly blends fictional narrative sequences with actual documentary footage of political rallies, poverty, and historical events. We hear Sergio’s arrogant, analytical inner monologue as he wanders the streets of Havana, constantly criticizing the "underdevelopment" of the Cuban people while completely blind to his own moral decay. He views his fellow citizens through a telescope from his luxury apartment, literally and figuratively elevating himself above the messy reality of the revolution unfolding below.

> "I am too educated to be innocent, and not educated enough to be cynical." — *Sergio*

---

### The Exploitation of Elena
Sergio’s hypocrisy is brutally exposed through his relationship with Elena, a young, working-class Cuban woman who dreams of becoming an actress. Sergio treats her exactly as the colonizers treated Cuba: he attempts to "develop" her, taking her to museums and trying to mold her into a sophisticated European intellectual. When she resists his arrogant attempts to overwrite her identity, he discards her, leading to a farcical, deeply humiliating legal trial where her family accuses him of rape. The trial exposes the utter uselessness of Sergio’s bourgeois intellectualism when confronted with raw, human emotion.

### A Masterclass in Self-Deception
The brilliance of the film lies in its refusal to act as simple propaganda for the Castro regime. Alea critiques the old, corrupt bourgeois order, but he also uses Sergio’s sharp intellect to highlight the absurdities, the heavy-handed censorship, and the chaotic growing pains of the new communist state. The film is a devastating portrait of a man who fancies himself an observer of history, only to realize that history is rapidly making him entirely obsolete. He is a ghost haunting his own life.

### The Threat of Annihilation
The final act of the film shifts tone entirely as the Cuban Missile Crisis ignites. The streets of Havana are suddenly filled with anti-aircraft guns and mobilizing militias; the threat of total nuclear annihilation is imminent. Sergio remains alone in his apartment, finally forced to confront the absolute emptiness of his existence. While the nation unites in a terrifying collective struggle for survival, Sergio is utterly alone, having alienated everyone he ever knew. The film ends in profound ambiguity, leaving Sergio trapped in a claustrophobic silence, waiting for a bomb that may or may not drop. It is a towering masterpiece of political cinema.`
  },
  {
    title: "Werckmeister Harmonies",
    director: "Béla Tarr",
    releaseYear: 2000,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Werckmeister+Harmonies",
    theGood: "A visually staggering, apocalyptic masterpiece. Tarr’s legendary use of impossibly long, hypnotic takes creates an atmosphere of pure, suffocating dread and surreal beauty.",
    theBad: "The film consists of only 39 shots across two and a half hours. The glacially slow pacing requires a level of meditative surrender that many viewers will find unbearable.",
    review: `### The Arrival of the Whale
Béla Tarr’s *Werckmeister Harmonies* is not a film you watch; it is a film that slowly, methodically crushes you under its immense atmospheric weight. Set in a bleak, freezing, unnamed Hungarian town during the dead of winter, the film begins with an atmosphere of inexplicable, creeping dread. The town’s fragile social order is completely disrupted by the sudden arrival of a mysterious traveling circus in the dead of night. The circus features only two attractions: a massive, rotting, stuffed blue whale housed inside a corrugated metal truck, and a shadowy, unseen figure known only as "The Prince."

### The Dance of the Cosmos
The film’s opening sequence is one of the most sublime and beautiful long takes in cinematic history. Janos Valuska, the innocent, starry-eyed protagonist who delivers the town's mail, is in a rundown tavern at closing time. To stall the angry bartender, Janos orchestrates the drunken patrons into a physical representation of a solar eclipse. He physically moves the staggering drunks around the room—one playing the sun, one the earth, one the moon—creating a profound, joyous ballet of the cosmos in the middle of a filthy bar. It establishes Janos as the sole beacon of humanity in a town teetering on the edge of darkness.

> "What are you doing here, in the middle of the night, waiting for a whale?" — *Janos Valuska*

---

### The Architecture of the Long Take
Tarr’s directorial style is legendary for its extreme use of the long take. The entire 145-minute film consists of just 39 shots. Accompanied by Mihály Víg’s incredibly mournful, looping piano score, the camera drifts through the freezing, fog-choked streets with an ominous, terrifying inevitability. By refusing to cut, Tarr traps the audience entirely within the grueling, real-time physical reality of the characters. We feel the biting cold, the exhaustion, and the profound, unspoken paranoia of the townspeople gathering in silent, angry mobs around the truck containing the whale.

### The Explosion of Violence
The unseen "Prince" begins broadcasting nihilistic, chaotic philosophy through a loudspeaker, acting as a catalyst for the town’s repressed rage. The tension finally snaps in a sequence of staggering, horrific violence. A massive mob of men marches silently on a hospital, systematically and brutally beating the patients and destroying everything in their path. The violence is shot without any frantic editing; the camera simply tracks alongside the mob, observing the carnage with terrifying detachment. The riot only stops when the mob pulls back a shower curtain to reveal a completely naked, frail, skeletal old man. Faced with an image of absolute vulnerability, the mob is suddenly struck by shame and silently disperses.

### The Eye of the Leviathan
The film’s climax is an image of profound, devastating bleakness. Order is restored by a fascist military crackdown, Janos is institutionalized, and the town is left in ruins. The final shot focuses on the massive eye of the stuffed whale, which has been dragged out of the destroyed truck and left to rot in the town square. It stares blankly into the cold Hungarian sky—a dead leviathan acting as a silent, indifferent witness to the total collapse of human morality. *Werckmeister Harmonies* is a grueling, magnificent apocalyptic vision, cementing Tarr as one of the ultimate masters of cinematic dread.`
  }
];

async function seedMoviesBatch3() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding Movies Batch 3 (10 Obscure International Masterpieces)...');
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
      console.log(`+ Added: ${movie.title} (Movie Batch 3 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${movie.title}`);
    }
  }
  console.log(`Done. Added ${added} movies (Batch 3).`);
}

seedMoviesBatch3().catch(console.error).finally(() => prisma.$disconnect());
