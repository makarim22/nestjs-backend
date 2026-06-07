const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const movies = [
  {
    title: "The Night of the Hunter",
    director: "Charles Laughton",
    releaseYear: 1955,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Night+of+Hunter",
    theGood: "A terrifying, expressionistic fairy tale that stands completely alone in American cinema. Robert Mitchum’s performance as the murderous preacher is pure nightmare fuel.",
    theBad: "The dramatic tonal shift in the final act—from gothic horror to a sweet, almost aggressively wholesome morality play—can feel jarring to modern sensibilities.",
    review: `### A Wolf in the Fold
Charles Laughton’s *The Night of the Hunter* is one of the greatest anomalies in the history of American film. It was the only movie Laughton ever directed; heavily criticized upon release and a massive box-office failure, it has since been rightfully reclaimed as a towering masterpiece of visual storytelling. The film operates on the terrifying, primal logic of a Grimm fairy tale. It follows Reverend Harry Powell (Robert Mitchum), a misogynistic serial killer who uses the guise of a traveling preacher to marry, murder, and rob wealthy widows, believing he is carrying out God's divine will. 

### The Tattoos of Good and Evil
Robert Mitchum delivers a performance of absolute, predatory menace. His famous introduction, holding up his hands to reveal the words "LOVE" and "HATE" tattooed across his knuckles, establishes the central thematic conflict of the film. Powell uses these tattoos to perform a hypnotic, theatrical sermon about the eternal struggle between the soul and the devil. It is a chilling deconstruction of how easily religious authority can be weaponized to manipulate the vulnerable. He sets his sights on a naive widow, Willa Harper (Shelley Winters), completely blinding her to the fact that she has invited the devil into her bed.

> "Lord, you sure made women cheap. You know, I don't think I'll ever understand." — *Reverend Harry Powell*

---

### The Architecture of a Nightmare
Laughton rejected the prevailing realism of the 1950s, choosing instead to shoot the film in the heavily stylized, high-contrast shadows of German Expressionism. The cinematography by Stanley Cortez turns the American South into a deeply uncanny landscape. Bedroom ceilings are pitched at sharp, claustrophobic angles; shadows stretch impossibly long; and the famous shot of Willa sitting up in bed, framed like a corpse in a coffin under the sharp triangular architecture of the roof, is an image of profound, suffocating dread. The visual language is designed explicitly to mirror the terrifying perspective of the children trapped in Powell's web.

### The River Journey
When Powell finally murders Willa (in a sequence that is entirely bloodless but overwhelmingly terrifying), her two young children, John and Pearl, are forced to flee down the Ohio River in a small skiff to protect the stolen money their father hid in Pearl's doll. The subsequent river sequence is one of the most beautiful and surreal passages in all of cinema. Shot mostly on soundstages with giant, artificial animals (a massive frog, a spider web) looming in the foreground, it feels like a literal descent into a child’s dreamscape, offering a brief, magical sanctuary from the horrors of the adult world.

### The Mother Protector
The film’s climax introduces Rachel Cooper (Lillian Gish), a fiercely protective, shotgun-toting matriarch who takes in the runaway children. Gish, a legendary star of the silent era, brings an unyielding moral purity that perfectly counters Mitchum’s predatory evil. In the film’s most haunting moment, Powell sits outside Rachel’s house in the dark, singing the hymn "Leaning on the Everlasting Arms," and Rachel joins in, creating a terrifyingly beautiful duet between the savior and the monster. It is a cinematic masterpiece that proves true horror lies not in the supernatural, but in the corrupted hearts of men.`
  },
  {
    title: "Pather Panchali",
    director: "Satyajit Ray",
    releaseYear: 1955,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Pather+Panchali",
    theGood: "The genesis of Indian parallel cinema. Satyajit Ray crafts an impossibly beautiful, heartbreakingly humanist portrait of childhood and poverty in rural Bengal.",
    theBad: "The narrative unfolds with the slow, unhurried rhythm of actual life, requiring the viewer to abandon expectations of a conventional, plot-driven structure.",
    review: `### A Song of the Little Road
Satyajit Ray’s *Pather Panchali* (Song of the Little Road) is a film of such staggering emotional purity that it feels less like a constructed piece of fiction and more like a captured fragment of reality. Made on a shoestring budget over several years with a largely amateur cast, the film broke completely from the song-and-dance melodrama of commercial Indian cinema. It focuses on the impoverished Roy family living in their ancestral home in rural Bengal in the 1910s. The patriarch, Harihar, is an idealistic but entirely impractical priest and writer who leaves his fierce, exhausted wife, Sarbajaya, to manage the crushing burden of raising their two children, Durga and Apu, in abject poverty.

### The World Through a Child's Eyes
The true brilliance of Ray’s direction lies in his ability to film the world entirely through the perspective of the children. For Durga and the young Apu, poverty is not an abstract socioeconomic condition; it is simply the background noise of their existence. Their world is defined by small, miraculous discoveries: the rustle of the bamboo forest, the thrill of stealing fruit from a wealthy neighbor's orchard, and the sheer, overwhelming joy of chasing a sweet-seller down a dusty path. Ray captures the tactile sensation of childhood with a poetic, unvarnished grace.

> [The dialogue is sparse; the film’s emotional weight is carried by the haunting sitar score composed by Ravi Shankar.]

---

### The Symphony of the Train
One of the most famous sequences in world cinema occurs when Durga and Apu wander far from their village and see a modern steam train for the first time. The sequence begins with the children listening to the humming of the telegraph wires, a physical manifestation of the modern world slowly encroaching on their rural isolation. As the massive, black locomotive violently cuts across a field of white kaash flowers, billowing thick dark smoke, Ray creates an image of staggering, overwhelming power. It is a moment of pure cinematic awe that permanently expands the boundaries of the children's universe.

### The Tragedy of the Monsoon
The emotional climax of the film is intimately tied to the brutal indifference of nature. The arrival of the monsoon rains—initially greeted with joyous dancing by Durga—quickly mutates into a terrifying ordeal. As the storm tears through the family's dilapidated house, Durga falls deathly ill. Ray’s depiction of Sarbajaya desperately trying to keep the storm out and her child alive is an agonizing portrait of maternal helplessness. When Durga tragically passes away in the night, the grief is profound because Ray has made us love her not as a cinematic saint, but as a flawed, vibrant, living child.

### The Acceptance of Grief
The film concludes with Harihar returning to the village, entirely unaware of his daughter's death, proudly displaying the cheap gifts he bought for her in the city. The ensuing scene, where Sarbajaya finally breaks down and howls in agony at her husband's feet, is utterly devastating. As the grieving family finally abandons their ancestral home to seek a better life in the city, the camera lingers on a snake crawling into their empty, ruined house. *Pather Panchali* is a masterpiece of supreme empathy, a film that looks at the deepest human suffering and still manages to find the world impossibly beautiful.`
  },
  {
    title: "The Leopard",
    director: "Luchino Visconti",
    releaseYear: 1963,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Leopard",
    theGood: "A towering, opulent masterpiece of historical cinema. The production design is staggeringly lavish, and Burt Lancaster delivers the defining performance of his career.",
    theBad: "The immense, three-hour runtime and the incredibly slow, meticulous pacing require a significant investment of time and attention from the viewer.",
    review: `### The Decay of the Aristocracy
Luchino Visconti’s *The Leopard* (Il Gattopardo) is a cinematic monument that chronicles the death of a social order with both majestic opulence and profound melancholy. Set in Sicily during the tumultuous Risorgimento (the 19th-century unification of Italy), the film follows Don Fabrizio Corbera, the Prince of Salina (Burt Lancaster). The Prince is a highly intelligent, physically imposing aristocrat whose family emblem is the Leopard. However, the Prince is painfully aware that his kind—the noble, untamed beasts of the old world—are being rapidly replaced by the "jackals and sheep" of the rising, wealthy, but deeply unrefined bourgeois class.

### The Pragmatism of Survival
Unlike the typical aristocrats of cinema who fight blindly against the tide of history, the Prince is defined by his devastating pragmatism. When Garibaldi's republican rebels invade Sicily, the Prince does not attempt to crush the revolution. Instead, he orchestrates a strategic alliance by encouraging his dashing, opportunistic nephew Tancredi (Alain Delon) to marry Angelica (Claudia Cardinale), the stunningly beautiful daughter of a wealthy, corrupt local mayor. The Prince compromises his noble bloodline with new money to ensure his family's survival, fully aware of the tragic humiliation this concession requires.

> "If we want things to stay as they are, things will have to change." — *Tancredi*

---

### The Elegance of the Camera
Visconti, himself an Italian aristocrat and a Marxist, directs the film with an unparalleled eye for historical detail. The production design is staggeringly lavish, but the opulence is never merely decorative; it is deeply thematic. The massive, decaying palazzos the Prince inhabits are beautiful prisons, caked in dust and stifling heat. The camera moves with a slow, sweeping elegance that mimics the fading grandeur of the nobility. Visconti captures the sensation of a class slowly suffocating under the weight of its own history.

### The Grand Ball Sequence
The final 45 minutes of the film are entirely dedicated to a massive, exhausting aristocratic ball. It is one of the greatest sequences in film history. The sheer physical scale of the choreography is breathtaking, but the true focus remains entirely on the internal psychology of the Prince. As he wanders through the opulent rooms, watching the young people dance and sweat, he is overwhelmed by a profound sense of his own mortality. He views the young aristocrats as foolish children, blindly celebrating on the deck of a sinking ship.

### The Final Gaze at the Stars
The emotional climax of the ball—and the film—occurs when the aging Prince dances a waltz with the vibrant, beautiful Angelica. For a brief, heartbreaking moment, the Prince reclaims his youth and his absolute dominance over the room. But the illusion cannot last. As the film concludes, the Prince walks home alone in the pale dawn light, kneeling in the dusty street to look up at the stars, begging for an end to the agonizingly slow decay of his life. *The Leopard* is the ultimate cinematic elegy, a magnificent portrait of a man watching his entire world turn to ash.`
  },
  {
    title: "The Red Shoes",
    director: "Michael Powell, Emeric Pressburger",
    releaseYear: 1948,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Red+Shoes",
    theGood: "A visually explosive, terrifyingly obsessive masterwork about the absolute, devastating cost of artistic perfection. The central ballet sequence is a triumph of surrealist cinema.",
    theBad: "The intense, theatrical acting style and the hyper-stylized Technicolor visuals can initially feel artificial to viewers accustomed to modern, naturalistic cinema.",
    review: `### The Religion of Art
Michael Powell and Emeric Pressburger’s *The Red Shoes* is the definitive film about the devastating, consuming fire of artistic ambition. It is a movie that treats art not as a profession or a hobby, but as a jealous, demanding religion that requires absolute human sacrifice. The story centers on a tyrannical, brilliant ballet impresario, Boris Lermontov (Anton Walbrook), who discovers a fiercely talented young dancer, Victoria Page (Moira Shearer), and a brilliant young composer, Julian Craster. Lermontov elevates them both to superstardom, but demands that they surrender every ounce of their humanity to the stage.

### The Demand for Absolute Surrender
Lermontov is one of cinema's most fascinating antagonists because he is not motivated by greed or malice, but by an uncompromising worship of beauty. He firmly believes that a true artist cannot have a personal life. When Victoria and Julian inevitably fall in love, Lermontov views it as the ultimate betrayal of the art form. He forces Victoria into an impossible, agonizing psychological ultimatum: she must choose between the man she loves and the art that defines her very soul.

> "Why do you want to dance?"
> "Why do you want to live?" — *Lermontov and Victoria Page*

---

### The Ballet of the Red Shoes
The absolute centerpiece of the film is the 17-minute staging of "The Ballet of the Red Shoes" (based on the dark Hans Christian Andersen fairy tale). It is a sequence of unparalleled, hallucinatory cinematic brilliance. Powell and Pressburger do not merely film a stage performance; they plunge the camera directly into the psychological perspective of the dancer. As the ballet progresses, the physical stage dissolves into a surreal, terrifying dreamscape of swirling colors, falling newspapers, and demonic shoemakers. It visually manifests Victoria’s internal realization that her talent is a curse that will eventually destroy her.

### The Power of Technicolor
The visual impact of *The Red Shoes* is staggering. Shot by Jack Cardiff in three-strip Technicolor, the film utilizes color as an aggressive emotional weapon. The vivid, blood-red hue of the ballet shoes slashes across the screen, dominating the muted, sophisticated tones of the real world. The cinematography perfectly mirrors the intoxicating, blinding allure of the stage. The film’s aesthetic has heavily influenced directors from Martin Scorsese to Damien Chazelle, proving that cinematic artificiality can reveal deeper psychological truths than strict realism.

### A Brutal Ultimatum
The film's climax is deeply shocking and tragic. Trapped in a dressing room between the furious demands of her husband to leave the company and the hypnotic insistence of Lermontov to perform, the psychological pressure fractures Victoria completely. In a moment of absolute despair, she throws herself in front of a passing train, still wearing the red ballet shoes. Lermontov, devastated but unbroken in his devotion to the art, orders the ballet to proceed without her. The film ends with the horrifying, beautiful image of the spotlight following an empty space on the stage where Victoria should be. It is a masterpiece that asks exactly how much blood art demands.`
  },
  {
    title: "A Brighter Summer Day",
    director: "Edward Yang",
    releaseYear: 1991,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brighter+Summer+Day",
    theGood: "A colossal, four-hour novelistic epic that captures the crushing political tension, teenage angst, and identity crisis of 1960s Taiwan with staggering emotional detail.",
    theBad: "Its massive runtime and sprawling ensemble cast (featuring dozens of named characters and gang members) require immense patience and active engagement to fully track.",
    review: `### The Shadow of Exile
Edward Yang’s *A Brighter Summer Day* is an absolute titan of world cinema. Spanning nearly four hours, the film is a sprawling, novelistic epic that operates simultaneously as a tragic teenage romance and a devastating sociological history of Taiwan in the early 1960s. The film focuses on the millions of mainland Chinese families who fled to Taiwan after the Communist victory in 1949. These families live in a state of suspended animation, constantly expecting to return home, but slowly realizing they are permanently exiled. It is a society vibrating with the suppressed anxiety of political surveillance (the White Terror) and cultural displacement.

### The Gangs as Identity
The narrative centers on Xiao Si'r, a quiet, observant teenage boy from a strict, anxious family. In the absence of a solid cultural identity, the youth of Taipei form violent street gangs, primarily divided between the native Taiwanese youths and the mainland exiles. The film is brilliant in its depiction of gang warfare; it is not glamorous or choreographed, but clumsy, sudden, and terrifyingly brutal. The boys copy the swagger of American rock 'n' roll icons and John Wayne movies, desperately trying to construct a sense of masculinity and belonging in a society where their fathers have been rendered powerless by a totalitarian government.

> "Are you crazy? You think you can change me? I am like this world... it will never change!" — *Ming*

---

### The Darkness and the Flashlight
Yang’s visual style in the film is heavily reliant on darkness. Much of the film takes place at night, in poorly lit alleys, or during power outages. Xiao Si'r famously steals a large flashlight from the film studio where he likes to hang out. He carries this flashlight constantly, shining it into the suffocating darkness of Taipei in a desperate, futile attempt to illuminate the truth. The cinematography emphasizes how little control the characters have over their environment; they are constantly submerged in the shadows of larger historical forces they cannot comprehend.

### The Tragedy of Ming
The emotional core of the film is Xiao Si'r's obsessive, doomed romance with Ming, a beautiful but deeply pragmatic girl who dates various gang leaders to ensure her own survival and protect her sickly mother. Xiao Si'r idealizes Ming, projecting his own desperate need for purity and moral certainty onto her. When he attempts to "save" her from her complicated life, he completely fails to understand that her fluid allegiances are the only way she can survive in a deeply patriarchal, unstable society.

### A Senseless Eradication
The film's climax is one of the most heartbreaking and inevitable tragedies in cinema. When Xiao Si'r realizes that Ming will not conform to his idealized vision of her, his fragile sense of order completely collapses. In a sudden, quiet act of violence on a dark street, he stabs her to death, not out of malice, but out of a desperate, terrified need to stop her from changing. Yang’s masterpiece is a devastating portrait of how the crushing weight of systemic political instability and cultural displacement eventually trickles down to destroy the minds and bodies of the youth.`
  },
  {
    title: "Late Spring",
    director: "Yasujirô Ozu",
    releaseYear: 1949,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Late+Spring",
    theGood: "A perfect distillation of Ozu’s style. It is a profoundly moving, subtle masterpiece that explores the agonizing tension between tradition, familial love, and the inevitability of change.",
    theBad: "The central conflict—a father trying to persuade his adult daughter to get married—may seem overly quaint or historically distant to audiences unfamiliar with traditional Japanese social dynamics.",
    review: `### The Sacrifice of the Father
Yasujirô Ozu’s *Late Spring* (Banshun) is the film that firmly established his mature, signature style and marked the beginning of his legendary "Noriko trilogy." The premise is remarkably simple: an aging, widowed professor, Shukichi Somiya, lives a peaceful, deeply contented life in Kamakura with his devoted 27-year-old daughter, Noriko (Setsuko Hara). Noriko is perfectly happy remaining unmarried and caring for her father. However, Shukichi realizes that by allowing her to sacrifice her future for his comfort, he is dooming her to an old age of profound loneliness. He therefore decides he must trick her into leaving him.

### The Resistance to Marriage
What makes the film so emotionally devastating is that Noriko does not want to leave. Unlike Western narratives where the youth rebel against the parents to gain independence, Noriko rebels against the concept of marriage specifically *because* she wants to maintain her traditional familial bond. Setsuko Hara plays Noriko with a radiant, almost fiercely defensive smile, using her cheerfulness to mask a profound, existential terror of change. The film brilliantly explores how deeply comfortable routines can become a form of emotional paralysis.

> "A marriage isn't something you're given, it's something you make. It takes time." — *Shukichi Somiya*

---

### The Deception for Love
To force Noriko’s hand, the gentle Shukichi executes a heartbreaking deception: he lies to her, claiming that he intends to remarry a much younger woman. This lie achieves its desired effect, shattering the comfortable equilibrium of their household. Noriko feels betrayed and displaced, finally realizing she can no longer rely on her father as the sole anchor of her life. Ozu directs this familial manipulation not as an act of cruelty, but as the ultimate, agonizing act of paternal love—a father actively destroying his own happiness to ensure his daughter’s survival in the world.

### The Vase and the Pillow
Ozu’s mastery of visual poetry is perfectly demonstrated in a famous sequence during the father and daughter’s final trip together to Kyoto. As they sleep in the inn, Ozu cuts away from the characters to a long, silent shot of a beautiful, shadowed vase in the corner of the room. This "pillow shot" allows the immense, unspoken emotional weight of the scene—Noriko’s quiet realization that her childhood is permanently over—to wash over the audience. Ozu uses the physical objects in the room to absorb the emotions the characters are too polite to express.

### The Empty House
The ending of *Late Spring* is one of the quietest and most devastating moments in cinema. Following Noriko’s wedding, Shukichi returns to his home in Kamakura. The house, previously filled with the bustling energy of his daughter, is now utterly silent. He sits alone in a chair and slowly, methodically begins to peel an apple. The knife drops. The camera lingers on his bowed head. He has successfully saved his daughter, but in doing so, he has condemned himself to an unbearable isolation. It is a flawless, heart-wrenching meditation on the absolute necessity and profound tragedy of letting go.`
  },
  {
    title: "The Conformist",
    director: "Bernardo Bertolucci",
    releaseYear: 1970,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Conformist",
    theGood: "A staggering visual masterpiece. Vittorio Storaro’s cinematography uses brutalist architecture and expressionistic lighting to perfectly map the psychology of a fascist.",
    theBad: "The non-linear, fragmented timeline and the heavily symbolic, psychoanalytic approach to politics can make the narrative feel cold and overly intellectual.",
    review: `### The Desperation to be Normal
Bernardo Bertolucci’s *The Conformist* (Il conformista) is one of the most visually stunning and psychologically devastating political thrillers ever made. Set in 1938 Italy, the film follows Marcello Clerici (Jean-Louis Trintignant), an aristocratic intellectual who volunteers to work as an assassin for Mussolini’s fascist secret police. However, Marcello is not motivated by deep ideological belief. Traumatized by a childhood incident of sexual abuse and murder, and terrified of his family's history of insanity, Marcello is driven by a desperate, psychotic need to appear completely, unremarkable "normal." He views fascism not as a political doctrine, but as the ultimate, rigid shield to hide his own broken psychology.

### The Architecture of Fascism
The film is legendary for the unparalleled cinematography of Vittorio Storaro. The visual design is not merely beautiful; it is an active, aggressive participant in the storytelling. Storaro uses the imposing, sterile, and terrifyingly symmetrical brutalist architecture of Mussolini’s Rome to visually dwarf Marcello, turning him into an insignificant insect trapped in the machinery of the state. The lighting is heavily expressionistic—slatted blinds cast harsh, prison-like shadows across characters' faces, visually demonstrating how the fascist ideology slices the humanity out of its citizens.

> "A man who wants to be normal... a conformist. He wants to be like everyone else, but he is fundamentally different." — *Professor Quadri*

---

### The Murder of the Father Figure
Marcello is assigned a horrific task to prove his loyalty to the fascist party: he must travel to Paris on his honeymoon and assassinate his former college mentor, Professor Quadri, an outspoken anti-fascist political exile. Quadri represents everything Marcello has abandoned—intellectual freedom, morality, and paternal guidance. The mission is complicated when Marcello and his superficial new wife, Giulia, become deeply entangled with Quadri’s wife, Anna, who sees through Marcello’s fascist facade and attempts to seduce both him and his wife.

### The Allegory of the Cave
Bertolucci explicitly uses Plato’s Allegory of the Cave to structure the film. In a brilliant scene, Quadri explains the allegory to Marcello, pointing out that the Italian fascists are simply watching shadows on a wall, completely blind to reality. When Marcello eventually carries out the assassination in a snowy forest in Savoy, the brutality is shocking. As Quadri is murdered by fascist thugs and Anna screams for help, Marcello sits in his car, completely paralyzed behind the glass, refusing to intervene. He has achieved his goal of absolute conformity at the cost of his own soul.

### The Collapse of the Illusion
The film’s devastating epilogue takes place in 1943, on the night Mussolini’s regime falls. The rigid, symmetrical world Marcello desperately clung to completely collapses into chaos. Wandering the dark, riotous streets of Rome, Marcello suddenly encounters the man from his childhood trauma—the man he thought he had murdered, whose "death" drove Marcello to fascism in the first place. The realization that his entire adult life, his terrible crimes, and his surrender to fascism were based on a complete illusion breaks Marcello’s mind. It is a masterpiece that exposes fascism not as a political strength, but as the ultimate manifestation of human cowardice.`
  },
  {
    title: "Cries and Whispers",
    director: "Ingmar Bergman",
    releaseYear: 1972,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Cries+and+Whispers",
    theGood: "A visually aggressive, emotionally shattering examination of mortality and the failure of familial love. The use of crimson red in the production design is unforgettable.",
    theBad: "It is an incredibly grueling, oppressive experience. The depiction of physical agony and profound emotional cruelty among the sisters is difficult to endure.",
    review: `### A Crimson Purgatory
Ingmar Bergman’s *Cries and Whispers* is a film that operates on the extreme edges of human suffering. Set in an opulent, late-19th-century Swedish manor house, the narrative centers on Agnes (Harriet Andersson), a woman dying a slow, agonizing death from uterine cancer. She is attended by her two emotionally repressed sisters, Karin and Maria, and her fiercely devoted servant, Anna. The most immediately striking aspect of the film is its production design: the walls, the carpets, the curtains, and the transitions between scenes are all a deep, suffocating, blood-red. Bergman stated that he envisioned the human soul as a damp membrane in shades of red, and the film visually traps the audience entirely within that agonizing interior.

### The Agony of the Flesh
Harriet Andersson’s performance as the dying Agnes is terrifyingly visceral. Bergman does not romanticize death; he films it as a brutal, sweaty, physical humiliation. The sound design amplifies Agnes’s ragged breathing, her moans, and the ticking of the clocks in the manor, emphasizing the excruciating passage of time. Her intense physical suffering serves as a catalyst that strips away the polite, aristocratic facades of her visiting sisters, forcing their own profound psychological sicknesses to the surface.

> "It's all a tissue of lies. A tissue of lies. All of it." — *Karin*

---

### The Sisters of Ice and Fire
The two sisters represent opposite but equally destructive reactions to pain and intimacy. Karin is tightly wound, deeply resentful of physical touch, and filled with a terrifying, self-destructive self-loathing (culminating in one of the most disturbing acts of self-mutilation in cinema). Maria, conversely, is beautiful, emotionally manipulative, and entirely superficial, using seduction as a weapon to avoid genuine connection. Neither sister is capable of providing Agnes with the simple human comfort she desperately needs as she dies; they are too consumed by their own terror of mortality.

### The Pietà of Anna
The only source of genuine grace in the film is Anna, the servant. Having lost her own child, Anna treats the dying Agnes with profound, maternal tenderness. In the film’s most famous and striking image, Anna bares her breasts to hold the agonizing Agnes against her chest in a composition that directly mirrors the Pietà. While the wealthy, educated sisters recoil from the physical reality of death, the servant accepts it with unconditional love, proving that intellectualism and status are utterly useless in the face of the grave.

### The Horror of the Resurrection
In the film's terrifying, surreal climax, the deceased Agnes briefly "wakes up" and begs her sisters to stay with her in the dark void of death. The sisters recoil in absolute horror, violently rejecting their sister's corpse because they are incapable of genuine empathy. Only Anna is willing to climb into the bed and hold the dead woman. The film concludes with a flashback to a brief, beautiful autumn day when all the women were happy, a fleeting moment of grace that is entirely swallowed by the surrounding darkness. It is Bergman’s most pessimistic, visually stunning masterpiece.`
  },
  {
    title: "Stroszek",
    director: "Werner Herzog",
    releaseYear: 1977,
    rating: 9,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Stroszek",
    theGood: "A brilliant, deeply cynical, and oddly hilarious deconstruction of the American Dream. Bruno S. delivers one of the most uniquely authentic performances in film history.",
    theBad: "The narrative’s relentless descent into absurdity and failure, combined with Herzog’s detached, documentary-like shooting style, can feel overwhelmingly bleak.",
    review: `### The Innocent and the American Dream
Werner Herzog’s *Stroszek* is arguably the most brutal and bizarre teardown of the "American Dream" ever committed to film. The movie was written specifically for its star, Bruno Schleinstein (credited as Bruno S.), a real-life street musician who spent decades in psychiatric institutions and possessed a deeply compelling, profoundly damaged authenticity. Bruno plays Stroszek, an eccentric, gentle, alcoholic street performer in Berlin. After being brutally beaten by the pimps of his prostitute girlfriend, Eva, Stroszek, Eva, and his eccentric elderly neighbor, Scheitz, decide to flee the cruelty of Germany for the promised land: Railroad Flats, Wisconsin.

### The Tyranny of the Bank
When the trio arrives in America, Herzog avoids the typical cinematic clichés of immigrant success. Instead, they find a desolate, frozen, and deeply alienating landscape. Stroszek buys a massive mobile home and a huge television on credit, believing he has instantly achieved the American Dream. However, Herzog reveals the true antagonist of modern society: the invisible, relentless machinery of the banking system. The physical violence of the Berlin pimps is simply replaced by the polite, bureaucratic violence of the American debt collectors, who smile warmly as they systematically repossess Stroszek’s entire life.

> "In Berlin, people were mean to me. Here, I don't know who is doing it." — *Stroszek*

---

### The Language of Isolation
A significant portion of the film's quiet tragedy is rooted in Stroszek’s inability to communicate. Bruno S. speaks very little English, and Herzog frequently leaves him out of the loop in scenes where Americans are explaining his financial doom. Stroszek is trapped in a world he fundamentally does not understand, watching his girlfriend leave him and his possessions disappear. The vastness of the American Midwest—the endless highways, the frozen fields, the bizarre roadside attractions—serves to magnify his profound, existential loneliness.

### The Absurdity of the End
As his world completely collapses, Stroszek and Scheitz embark on a pathetic, doomed crime spree. They execute an armed robbery of a local barbershop, completely ignoring the massive bank across the street, stealing only a handful of change to buy a frozen turkey. It is an act of total desperation mixed with complete logistical incompetence. When the police eventually arrive, the arrest of Scheitz is treated as a minor, absurd inconvenience rather than a dramatic climax.

### The Dancing Chicken
The final sequence of *Stroszek* is legendary for its surreal, terrifying absurdity. Having fled to a desolate tourist attraction in the mountains, Stroszek sets a stolen truck on fire and rides a ski lift in an endless, agonizing loop. Meanwhile, he has activated a series of coin-operated animal exhibits. The film ends with an unbroken, agonizingly long shot of a caged chicken forced to dance continuously on a hot plate while upbeat folk music plays on a loop. It is Herzog’s ultimate, devastating metaphor for the human condition under capitalism: we are all just dancing chickens, performing mindlessly in a cage until the music stops.`
  },
  {
    title: "Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles",
    director: "Chantal Akerman",
    releaseYear: 1975,
    rating: 10,
    watchDate: new Date("2024-06-08"),
    posterUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Jeanne+Dielman",
    theGood: "A revolutionary feminist masterpiece. By forcing the audience to watch the mundane, real-time chores of a housewife, Akerman radically redefines what constitutes cinematic tension.",
    theBad: "The three-and-a-half-hour runtime, consisting largely of unbroken shots of a woman peeling potatoes, making beds, and washing dishes, demands absolute, excruciating patience.",
    review: `### The Radical Act of Observation
Chantal Akerman’s *Jeanne Dielman, 23, quai du Commerce, 1080 Bruxelles* is a cinematic earthquake that completely dismantled traditional narrative structure. Voted the greatest film of all time in the 2022 Sight & Sound poll, the film is a grueling, 201-minute observation of three days in the life of a widowed Belgian housewife (Delphine Seyrig). Akerman films Jeanne’s daily routine in rigid, unbroken, static wide shots. We watch her peel potatoes in real-time. We watch her make the bed, polish shoes, cook soup, and occasionally, turn tricks in her bedroom in the afternoon to support her teenage son. 

### The Prison of Routine
The genius of Akerman’s approach is that she elevates the unseen, invisible labor of women to the level of high cinematic art. Jeanne’s routine is not merely a set of chores; it is an incredibly rigid, defensive armor she has constructed to stave off an overwhelming existential dread. She moves with the terrifying precision of a machine. The cinematography traps her entirely within the suffocating geometry of her small apartment. By forcing the audience to endure the excruciating length of these mundane tasks, Akerman demands that we acknowledge the crushing, soul-destroying reality of domestic isolation.

> [The film is virtually silent, driven by the rhythmic, mechanical sounds of domestic labor.]

---

### The Terror of the Dropped Potato
Because Akerman establishes such a rigid, predictable rhythm in the first two hours of the film, any slight deviation from the routine hits the audience with the force of an explosion. On the second day, Jeanne slightly overcooks the potatoes. She drops a spoon. Her hair is slightly out of place. Because we have been conditioned to the absolute perfection of her routine, these minor errors generate an almost unbearable psychological tension. It becomes terrifyingly clear that the machine is breaking down, and her carefully constructed psychological armor is beginning to crack.

### The Collapse of Order
The climax of the film occurs on the third day, during her afternoon appointment with a client. Throughout the film, Jeanne’s sex work has been treated with the exact same mechanical, emotionless precision as her potato peeling—just another chore to complete before dinner. However, on this day, Jeanne accidentally experiences an orgasm. This sudden, uncontrollable eruption of genuine human feeling completely shatters her rigid, emotionless reality. The order is destroyed.

### The Inevitable Violence
In the immediate aftermath of this breakdown of control, Jeanne calmly reaches for a pair of scissors and stabs the client to death in his sleep. The violence is sudden, quiet, and completely devoid of Hollywood melodrama. The film concludes with a static, six-minute shot of Jeanne sitting silently at her dining table in the dark, her hands folded, blood faintly visible on her shirt. She has finally freed herself from the suffocating prison of her routine, but only by completely destroying her own life. It is a terrifying, brilliant, and uncompromising masterpiece of feminist cinema.`
  }
];

async function seedMoviesBatch2() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding Movies Batch 2 (10 World Cinema Classics)...');
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
      console.log(`+ Added: ${movie.title} (Movie Batch 2 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${movie.title}`);
    }
  }
  console.log(`Done. Added ${added} movies (Batch 2).`);
}

seedMoviesBatch2().catch(console.error).finally(() => prisma.$disconnect());
