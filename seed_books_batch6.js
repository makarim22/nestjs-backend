const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Kindred",
    author: "Octavia E. Butler",
    publishYear: 1979,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Kindred",
    theGood: "A groundbreaking fusion of science fiction and neo-slave narrative. It forces the reader to viscerally experience the horrors of the antebellum South without the safety of historical distance.",
    theBad: "The sheer emotional toll of the narrative can be overwhelming. The brutality is unflinching and the compromises the protagonist must make are deeply unsettling.",
    review: `### A Violent Pull Through Time
Octavia E. Butler’s *Kindred* opens with a disorienting and traumatic premise: Edana (Dana) Franklin, a modern, independent African American writer living in 1976 California, is suddenly and inexplicably ripped from her living room and transported across time and space. She finds herself in antebellum Maryland in the early 1800s. The catalyst for these time-slips is always the same: she is summoned whenever a young, white boy named Rufus Weylin—who turns out to be her slave-owning ancestor—is in mortal danger. Dana must repeatedly save his life to ensure her own existence in the future, tying her survival to the very monster who perpetuates the enslavement of her people.

### The Erosion of Modern Privilege
The true horror of *Kindred* lies not in the mechanics of time travel, but in the rapid psychological degradation of its protagonist. Butler meticulously dismantles the illusion that a modern education or a progressive mindset can easily triumph over systemic brutality. When Dana is forced to submit to the whip, to play the role of a subservient slave, and to witness the auction block, her 20th-century sensibilities are violently stripped away. She realizes with terrifying speed how easily the human spirit can be conditioned to accept atrocities simply to survive another day.

> "I lost my arm on my last trip home. My left arm... I lost about a year of my life and much of the comfort and security I had not valued until it was gone." — *Dana Franklin*

---

### Complicity and Ancestral Trauma
The relationship between Dana and Rufus is the dark, beating heart of the novel. Rufus is not born a monster; Dana watches him grow from a vulnerable child into a cruel, manipulative plantation owner. Because she is forced to care for him to protect her own lineage, Dana becomes unwillingly complicit in his survival and, by extension, the suffering of the enslaved people on the Weylin plantation. Butler brilliantly complicates the narrative of resistance, showing that the legacy of slavery is a tangled web of blood, trauma, and forced intimacy that cannot be cleanly severed.

### The White Savior Deconstructed
Dana is not alone in her temporal kidnapping; her white husband, Kevin, is eventually pulled back in time with her. Butler uses Kevin to sharply critique the limitations of white allyship. While Kevin is a liberal man in 1976, his transition to the 1800s is disturbingly seamless. He is insulated by his race and gender, navigating the antebellum South with a level of safety and authority that Dana can never possess. His inability to fully comprehend the depths of Dana’s terror underscores the fundamental disconnect between those who observe systemic racism and those who must survive it in their own flesh.

### A Scared Return to the Present
*Kindred* refuses to offer a triumphant, clean resolution. When Dana finally secures her permanent return to 1976, it comes at a terrible, literal cost: her arm is amputated, crushed in the wall between the past and the present. This physical mutilation serves as a permanent, visible manifestation of generational trauma. Butler asserts that one cannot engage with the brutal history of slavery and emerge whole. The past is not a distant, dead thing; it is a violent phantom that reaches through the centuries to claim its pound of flesh from the present.`
  },
  {
    title: "Parable of the Sower",
    author: "Octavia E. Butler",
    publishYear: 1993,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Parable+of+Sower",
    theGood: "A chillingly prophetic dystopian masterpiece that predicted the climate crisis, economic collapse, and political extremism of the 21st century with terrifying accuracy.",
    theBad: "The relentless bleakness of the crumbling society can be difficult to stomach, especially since Butler's 2024 setting feels less like fiction and more like current events.",
    review: `### The Collapse of the Walled Communities
Reading *Parable of the Sower* today is an exercise in profound unease, primarily because Octavia E. Butler set her apocalyptic vision in the year 2024. The novel does not rely on a sudden alien invasion or a singular nuclear blast to end the world; instead, society has crumbled slowly through aggressive climate change, extreme wealth inequality, and the privatization of basic human necessities like water and police protection. We follow fifteen-year-old Lauren Olamina, who lives in a precarious, walled cul-de-sac in California, watching the fires of anarchy and drug-fueled violence slowly consume the world outside her gated community.

### Hyperempathy as a Deadly Burden
Lauren possesses a fictional, debilitating condition called "hyperempathy syndrome"—a biological delusion caused by her mother’s drug use during pregnancy. When Lauren sees someone else in physical pain or bleeding, she literally feels their agony in her own body. In a world where violence is the primary currency of survival, this condition is a catastrophic vulnerability. Yet, Butler subversively transforms this perceived weakness into the ultimate tool for visionary leadership. Because Lauren cannot ignore the suffering of others, she is uniquely equipped to envision a community built on genuine mutual care rather than ruthless exploitation.

> "All that you touch, You Change. All that you Change, Changes you. The only lasting truth is Change. God is Change." — *Lauren Olamina*

---

### The Birth of Earthseed
As Lauren watches the inevitable destruction of her walled neighborhood, she rejects the passive, traditional Christianity of her father. Instead, she begins to craft her own philosophical and religious belief system: **Earthseed**. The central tenet of Earthseed is that "God is Change." Rather than praying to a static, benevolent deity to save them, Lauren posits that humans must shape and adapt to the continuous, indifferent forces of the universe. It is a pragmatic, survivalist theology designed not to comfort the dying, but to propel humanity toward its ultimate destiny: taking root among the stars.

### The Long Walk North
When her community is finally overrun, burned, and slaughtered by scavengers, Lauren is forced onto the open road. Disguised as a man to avoid sexual violence, she embarks on a harrowing journey north toward Washington state, navigating a landscape of feral dogs, cannibals, and corporate slave towns. What makes this journey remarkable is not just the physical survival, but the way Lauren slowly gathers a found family of refugees. She sows the seeds of her new philosophy among the desperate, proving that community and trust are the only viable shields against the apocalypse.

### A Manifesto for Survival
*Parable of the Sower* is less a traditional novel and more a survival manual for the modern era. Butler strips away the romanticism of the post-apocalypse to reveal the grueling, unglamorous work of rebuilding civilization from the ashes. By ending the novel with the founding of the first Earthseed community, *Acorn*, Butler leaves the reader with a fragile, hard-won sense of hope. The book demands that we look at the decaying structures of our own society and ask ourselves: what seeds are we planting for the future?`
  },
  {
    title: "Villette",
    author: "Charlotte Brontë",
    publishYear: 1853,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Villette",
    theGood: "A masterpiece of psychological realism and an unparalleled exploration of female isolation, repression, and the haunting nature of unfulfilled desire.",
    theBad: "The narrative pacing is incredibly slow and introspective, requiring significant patience as much of the dramatic tension occurs entirely within the protagonist's mind.",
    review: `### The Shadowy Protagonist
While *Jane Eyre* remains Charlotte Brontë’s most famous work, *Villette* is widely regarded by critics as her most psychologically profound and technically mature masterpiece. The novel introduces us to Lucy Snowe, one of the most enigmatic, evasive, and unreliable narrators in English literature. After an unspecified family tragedy leaves her entirely alone and destitute, Lucy flees England for the fictional French-speaking city of Villette (modeled on Brussels). She secures a position as a teacher in a girls' boarding school, determined to live a life of total emotional suppression and invisible servitude to protect herself from further heartbreak.

### The Architecture of Repression
What makes *Villette* so compelling is its forensic examination of loneliness. Lucy Snowe actively resists the reader’s sympathy. She hides her true feelings, burying her profound depression and passionate desires under a thick layer of cold, stoic observation. Brontë brilliantly uses the claustrophobic setting of the boarding school, with its spying headmistress Madame Beck, to mirror Lucy’s internal imprisonment. Lucy’s intense surveillance of others is merely a distraction from the terrifying void within herself.

> "I believe in some blending of hope and sunshine sweetening the worst lots. I believe that this life is not all; neither the beginning nor the end." — *Lucy Snowe*

---

### The Gothic Hallucinations of the Mind
The novel takes a surreal, almost hallucinatory turn during the long summer vacation when Lucy is left entirely alone in the empty boarding school. The sensory deprivation and crushing isolation push her to the brink of a nervous breakdown. Brontë utilizes gothic elements—a ghostly nun haunting the attic, a feverish night wandering through a brightly lit festival—not as literal supernatural occurrences, but as brilliant manifestations of Lucy’s starving psyche and repressed sexual tension. The haunting in *Villette* is entirely psychological.

### A Romance Stripped of Illusion
Unlike the fiery, triumphant romance of Jane and Rochester, Lucy’s emotional awakening is agonizingly slow and deeply complicated. She is initially drawn to the handsome, idealized Dr. John, who fails to truly "see" her. It is the irascible, demanding, and aesthetically unappealing literature professor, Paul Emanuel, who ultimately recognizes Lucy’s hidden intellect and fierce spirit. Their romance is built on intellectual sparring, mutual respect, and the breaking down of defenses, offering a much more mature and realistic portrayal of love than typical Victorian fare.

### The Ambiguity of the Storm
The conclusion of *Villette* remains one of the most famously ambiguous and devastating endings in 19th-century literature. Brontë refuses to grant the reader a neat, happy resolution. As a massive storm descends upon the ocean while Paul Emanuel is sailing home, Brontë deliberately stops short of confirming his death, inviting "sunny imaginations" to picture a happy reunion, while leaving the darker, underlying truth for those who understand Lucy’s tragic fate. It is a brilliant, uncompromising end to a novel about a woman who must ultimately find self-sufficiency in the face of absolute loss.`
  },
  {
    title: "Rebecca",
    author: "Daphne du Maurier",
    publishYear: 1938,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Rebecca",
    theGood: "The ultimate psychological thriller and a masterclass in atmospheric tension. The invisible presence of a dead woman dominates the narrative with suffocating power.",
    theBad: "The unnamed narrator’s extreme passivity, low self-esteem, and constant subservience to her brooding husband can be highly frustrating for modern readers.",
    review: `### The Ghost That Breathes
*"Last night I dreamt I went to Manderley again."* With one of the most iconic opening lines in literary history, Daphne du Maurier immediately plunges the reader into a world of haunting nostalgia and inescapable dread. The novel follows a young, naive, and entirely unnamed narrator working as a paid companion in Monte Carlo. She is swiftly swept off her feet by the wealthy, brooding widower Maxim de Winter. Following a hasty marriage, he brings her home to his grand, isolated Cornish estate, Manderley. But the sprawling mansion is not a romantic sanctuary; it is a shrine to Maxim's deceased first wife, the beautiful, charismatic, and seemingly perfect Rebecca.

### The Tyranny of Perfection
The true brilliance of *Rebecca* lies in the fact that its most powerful, dynamic character is a corpse. The second Mrs. de Winter is entirely consumed by her predecessor’s lingering aura. Everything in Manderley—the morning room, the stationary, the azaleas—still bears Rebecca’s indelible mark. The narrator’s crippling inferiority complex is meticulously manipulated by the terrifying housekeeper, Mrs. Danvers, whose obsessive devotion to the dead woman turns her into one of literature’s most chilling antagonists. Du Maurier perfectly captures the paranoia of imposter syndrome magnified to gothic proportions.

> "I am glad it cannot happen twice, the fever of first love. For it is a fever, and a burden, too, whatever the poets may say." — *The Narrator*

---

### Deconstructing the Byronic Hero
Maxim de Winter is initially presented as a classic romantic archetype: the wealthy, tortured gentleman in need of saving. However, du Maurier slowly peels back this facade to reveal something far more disturbing. Maxim’s aloofness and volatile temper isolate the narrator entirely. When the shocking truth about Rebecca’s death is finally revealed in the novel’s climactic twist, it forces a radical reassessment of Maxim’s character. The reader is confronted with the unsettling realization that the narrator is willing to accept dark, unforgivable secrets simply to secure her husband’s affection.

### The Illusion of Innocence
As the mystery surrounding Rebecca’s true nature unravels, the second Mrs. de Winter undergoes a rapid, almost unsettling maturation. The discovery that Rebecca was not a saintly paragon, but a manipulative, malevolent sociopath, instantly cures the narrator of her paralyzing insecurity. However, this coming-of-age requires her to become complicit in a massive deception. She trades her innocence for absolute loyalty to a murderer, proving that the shadows of Manderley inevitably corrupt everyone who resides within its walls.

### A Fiery Catharsis
The novel does not end in triumph, but in ashes. The destruction of Manderley by fire serves as a brutal, necessary purge of the past. Mrs. Danvers’ final act of arson ensures that while the de Winters may escape the law, they are forever exiled from the paradise they fought so desperately to keep. *Rebecca* is a stunning exploration of jealousy, the destructive power of memory, and the dark compromises required to sustain the illusion of a perfect marriage.`
  },
  {
    title: "The Three Musketeers",
    author: "Alexandre Dumas",
    publishYear: 1844,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Three+Musketeers",
    theGood: "The gold standard for historical adventure and swashbuckling camaraderie. It features a breakneck plot, witty dialogue, and one of the greatest female villains in literature.",
    theBad: "The protagonists often behave more like arrogant, drunken mercenaries than noble heroes, casually abusing their servants and exploiting women for financial gain.",
    review: `### The Birth of the Swashbuckler
*Les Trois Mousquetaires* is the undisputed king of historical romance and adventure. Alexandre Dumas transports the reader to the politically volatile 17th-century France of King Louis XIII. The story begins with the hot-headed, impoverished young nobleman d'Artagnan arriving in Paris with nothing but a rusty sword and a dream of joining the King's elite Musketeers. Within hours of his arrival, his sheer arrogance and quick temper manage to secure him three separate duels to the death with the most formidable swordsmen in Paris: Athos, Porthos, and Aramis. This violent meet-cute quickly transforms into an unbreakable brotherhood.

### Brotherhood and Courtly Intrigue
The famous motto *"All for one, one for all"* is not just a catchphrase; it is the philosophical core of the novel. The four men are swept into a massive, high-stakes political conspiracy involving the weak King, the lovestruck Queen Anne, the powerful Duke of Buckingham, and the true ruler of France, the machiavellian Cardinal Richelieu. Dumas excels at plotting complex, ticking-clock scenarios, most notably the frantic, multi-stage relay race to London to retrieve the Queen's diamond studs before her honor is destroyed at a royal ball.

> "Never fear quarrels, but seek hazardous adventures." — *D'Artagnan's Father*

---

### The Magnificent Milady de Winter
While the Musketeers are iconic, the novel is entirely stolen by its primary antagonist: Milady de Winter. Long before the concept of the *femme fatale* became a cinematic staple, Dumas created a villainess of terrifying intellect, seductive power, and absolute ruthlessness. Operating as Cardinal Richelieu’s top spy, Milady is a master of disguise and psychological manipulation. Her chapters—particularly her psychological duel with the Puritan jailer John Felton, whom she seduces and brainwashes into assassinating the Duke of Buckingham—are masterclasses in suspense and villainous agency.

### The Flawed Nature of Chivalry
Modern readers often experience a severe tonal whiplash when reading *The Three Musketeers*. Despite their legendary status as heroes, d'Artagnan and his friends are deeply flawed by contemporary standards. They regularly beat their valets, extort money from their mistresses to buy equipment, and view violence as the first solution to any inconvenience. Dumas does not write paragons of virtue; he writes charismatic, reckless soldiers surviving in a brutal, honor-obsessed society where a misplaced glance demands a fatal sword fight.

### A Darker Resolution
The novel’s final act abandons its lighthearted, swashbuckling tone to descend into genuine tragedy and dark, vigilante justice. The execution of Milady by the Musketeers in the dead of night is a grim, extrajudicial act that leaves a lingering shadow over their triumph. Dumas reminds the reader that the romanticized world of musketry and court intrigue is ultimately built on a foundation of blood, betrayal, and necessary cruelty. It is a thrilling, exhaustive, and brilliantly entertaining ride through French history.`
  },
  {
    title: "Atonement",
    author: "Ian McEwan",
    publishYear: 2001,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Atonement",
    theGood: "A devastatingly brilliant exploration of guilt, memory, and the power of storytelling. The meta-fictional twist at the end completely recontextualizes the entire novel.",
    theBad: "The meticulously slow, hyper-detailed pacing of the first part (set on a single summer day) can test the patience of readers looking for immediate narrative momentum.",
    review: `### The Crime of Imagination
Ian McEwan’s *Atonement* is a masterwork of contemporary British literature that explores how a single, childish misunderstanding can irreversibly destroy multiple lives. The novel’s brilliant first section takes place on a sweltering summer day in 1935 at an English country estate. We are introduced to Briony Tallis, a precocious, highly imaginative thirteen-year-old girl who views the world entirely through the dramatic lens of the plays and stories she writes. Through a series of unfortunate vantage points and a dangerous overestimation of her own maturity, Briony witnesses a complex adult interaction between her older sister Cecilia and the housekeeper's son, Robbie Turner, and catastrophically misinterprets it.

### The Weight of a Lie
When a horrific crime is committed on the estate later that night, Briony’s overactive imagination and her desire to play the hero lead her to confidently accuse Robbie, an innocent man, of the deed. This single lie acts as a narrative bomb, detonating the lives of everyone involved. Robbie is sent to prison, and his blossoming romance with Cecilia is brutally severed. McEwan captures the terrifying reality of how the rigid British class system eagerly accepts the condemnation of a lower-class servant over the word of a wealthy family, sealing Robbie’s fate.

> "A person is, among all else, a material thing, easily torn and not easily mended." — *Ian McEwan*

---

### The Horrors of War and Nursing
The novel then executes a breathtaking structural shift. Part Two thrusts the reader into the chaotic, blood-soaked reality of the British retreat to Dunkirk in 1940, experienced through the eyes of Robbie, who has been released from prison only to fight in World War II. McEwan’s depiction of the retreat is visceral and harrowing, a stark contrast to the manicured lawns of the Tallis estate. Concurrently, Part Three follows an older Briony, who has forsaken a Cambridge education to work as a lowly nurse in a London hospital, seeking a brutal, physical penance for the lie that haunts her every waking moment.

### The Limits of Forgiveness
The emotional core of the novel is Briony’s desperate quest for absolution. She realizes that her childish crime was an act of terrible hubris—she treated real people as characters in her own internal drama. Her grueling work in the hospital, tending to horribly mutilated soldiers, is her attempt to anchor herself in the painful reality she once so easily disregarded. However, McEwan forces the reader to question whether true atonement is even possible when the damage inflicted is so absolute and irreparable. 

### The Meta-Fictional Masterstroke
The epilogue of *Atonement* is one of the most stunning and devastating twists in modern fiction. Set in 1999, an elderly Briony reveals that the happy reunion between Robbie and Cecilia detailed in the book was a complete fabrication—a final, fictional gift from a dying author. In reality, both perished tragically during the war before Briony could ever apologize. McEwan brilliantly turns the novel into a meditation on the power and limitations of art. Can the creation of a beautiful fiction serve as an act of atonement, or is it just a final, cowardly evasion of the truth? The answer is left hauntingly unresolved.`
  },
  {
    title: "Never Let Me Go",
    author: "Kazuo Ishiguro",
    publishYear: 2005,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Never+Let+Me+Go",
    theGood: "A masterpiece of understated tragedy. Ishiguro uses the tropes of science fiction not for thrills, but to execute a profoundly heartbreaking meditation on mortality and acceptance.",
    theBad: "The utter lack of rebellion from the protagonists against their horrific fate can be deeply frustrating for readers accustomed to revolutionary dystopian narratives.",
    review: `### The Nostalgia of Hailsham
At first glance, *Never Let Me Go* reads like a nostalgic, slightly melancholic British boarding school novel. The narrator, Kathy H., reminisces about her idyllic childhood at Hailsham, an exclusive institution in the English countryside, alongside her closest friends, the volatile Ruth and the gentle Tommy. The students are deeply focused on their artwork, their complex adolescent social hierarchies, and the mysterious "Madame" who occasionally takes away their best paintings. However, beneath the serene prose of Kazuo Ishiguro, a sickening dread slowly accumulates. The reader realizes long before the characters do that something is fundamentally, horrifyingly wrong with the world they inhabit.

### The Horrific Truth Revealed
Ishiguro is a master of the slow reveal. He does not rely on exposition dumps; instead, the terrible reality of the students’ existence is leaked through casual conversations and whispered rumors. Kathy, Ruth, and Tommy are not normal children; they are clones, created and raised by a dystopian society for the sole purpose of organ harvesting. They are destined to become "donors" in their early twenties, undergoing a series of surgical extractions until they "complete"—a chilling euphemism for death. Hailsham was a rare, progressive experiment designed to prove that these clones actually possessed souls.

> "Memories, even your most precious ones, fade surprisingly quickly. But I don’t go along with that. The memories I value most, I don’t ever see them fading." — *Kathy H.*

---

### The Tragedy of Passive Acceptance
The most disturbing aspect of the novel, and the source of its immense emotional power, is the clones' total lack of rebellion. They never attempt to escape, burn down the hospitals, or overthrow the society that butchers them. Instead, they accept their fate with a heartbreaking, quiet dignity. Ishiguro uses this passivity as a profound metaphor for the universal human condition. We are all born with a terminal diagnosis (our own mortality), and like the clones, our primary concern is not escaping death, but finding meaning, love, and connection in the brief, borrowed time we are given.

### The Illusion of Deferral
The narrative climax hinges on a desperate, agonizing rumor: that if a clone couple can prove they are truly in love—using the artwork they created at Hailsham as evidence of their souls—they might be granted a "deferral," a few extra years to live together before their donations begin. When Kathy and Tommy finally track down their former guardians to request this mercy, the revelation that the deferrals were always a myth shatters their last illusion of agency. The cruelty of the system is absolute, and their art was merely a sociological curiosity to the outside world.

### The Echo of a Lost World
The novel concludes with Kathy, now entirely alone after the "completions" of both Ruth and Tommy, standing at the edge of a bleak, trash-strewn field. She imagines the debris caught in the barbed wire as a manifestation of everything she has lost. Ishiguro delivers a devastatingly beautiful portrait of grief and the quiet courage required to face the inevitable. *Never Let Me Go* is a haunting, elegant elegy that asks what it truly means to be human in a world that refuses to see your humanity.`
  },
  {
    title: "Song of Solomon",
    author: "Toni Morrison",
    publishYear: 1977,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Song+of+Solomon",
    theGood: "A soaring, magical realist epic that masterfully weaves African American folklore, history, and mythology into a profound quest for male identity and ancestral roots.",
    theBad: "The narrative structure is complex, laden with heavy symbolism, biblical allusions, and non-linear storytelling that demands rigorous attention from the reader.",
    review: `### A Mythic Birth and the Burden of Wealth
Toni Morrison’s *Song of Solomon* begins with a spectacular, tragic image: an insurance agent donning blue silk wings and leaping to his death from the roof of Mercy Hospital, promising the watching crowd that he will fly away. Born the next day in that same hospital is Macon "Milkman" Dead III, the protagonist of this sweeping epic. Milkman is born into an affluent but emotionally paralyzed African American family in a Rust Belt city. His father, Macon Dead II, is a ruthless, greedy landlord whose obsession with property and wealth has completely alienated him from his community and his own humanity.

### The Stagnation of Milkman Dead
For the first half of his life, Milkman is defined by his profound apathy. He is a privileged, directionless young man, coasting on his father's wealth and completely detached from the racial and social struggles erupting around him in the 1960s. He is starkly contrasted by his best friend, Guitar Bains, who is driven to militant, violent extremism in response to white supremacist terrorism. Milkman’s spiritual emptiness is a direct result of his disconnectedness from his history; he carries a bizarre, morbid surname ("Dead") that was carelessly assigned to his illiterate grandfather by a drunken white Union soldier, severing his link to the past.

> "If you surrendered to the air, you could ride it." — *Toni Morrison*

---

### The Quest for Gold Turns to Roots
The novel shifts from a domestic drama into a mythological odyssey when Milkman embarks on a journey to the American South. His initial motivation is entirely selfish: he is hunting for a legendary stash of gold supposedly hidden in a cave by his mysterious aunt, Pilate. However, as Milkman ventures deeper into Virginia, stripping away his tailored suits and city arrogance, the treasure hunt transforms into a genealogical excavation. He is forced to listen to the oral histories, folklore, and songs of the local elders to piece together the true legacy of his family.

### The Magic of Pilate
The spiritual anchor of the novel is Milkman's aunt, Pilate Dead. Born without a navel—signifying her mythical, almost otherworldly status—Pilate is a bootlegger who lives in absolute poverty but possesses a towering spiritual wealth. She is the keeper of the family’s history, carrying her father’s bones in a green sack hung from her ceiling. While her brother Macon believes freedom is found in owning things, Pilate demonstrates that true freedom is found in loving fiercely and refusing to be bound by the material world. She is the ultimate matriarchal guide for Milkman’s awakening.

### The Flight of the Ancestors
The climax of the novel is one of the most transcendent moments in American literature. Milkman decodes the children's "Song of Solomon" and discovers the astonishing truth about his great-grandfather: he was a flying African who literally took to the air to escape slavery, leaving his family behind. In the breathtaking final scene, as Milkman faces a lethal confrontation with his former friend Guitar, he finally understands the secret of flight. Morrison masterfully asserts that true liberation requires acknowledging one's history, embracing the weight of the past, and bravely surrendering to the air.`
  },
  {
    title: "Native Son",
    author: "Richard Wright",
    publishYear: 1940,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Native+Son",
    theGood: "A raw, explosive, and unforgiving sociological indictment of systemic racism. Wright creates a protagonist who is unapologetically brutal, forcing America to look at the monster it created.",
    theBad: "The final third of the novel devolves into a lengthy, didactic courtroom speech by a defense attorney, which heavily bogs down the incredible narrative momentum.",
    review: `### A Collision Course with Tragedy
Richard Wright’s *Native Son* is a literary sledgehammer that shattered the landscape of American literature in 1940. It offers a brutal, unvarnished look at the claustrophobic nightmare of systemic racism in the slums of Chicago’s South Side. We are introduced to Bigger Thomas, a twenty-year-old Black man seething with suppressed terror, rage, and a profound sense of powerlessness. Wright makes no attempt to romanticize Bigger or make him a noble victim; Bigger is violent, sullen, and deeply flawed. The novel argues that the crushing weight of poverty and institutionalized white supremacy has left him with no psychological room to develop into anything else.

### The Accidental Murder
The plot ignites when Bigger gets a job as a chauffeur for the Daltons, an extremely wealthy, ostensibly liberal white family who ironically own the rat-infested tenement building where Bigger’s family lives. On his first night, tasked with helping the highly intoxicated Dalton daughter, Mary, to her bedroom, Bigger is suddenly confronted with the terrifying prospect of being discovered by her blind mother. Paralyzed by the absolute certainty that a Black man found in a white woman's bedroom will be lynched, Bigger accidentally smothers Mary to death in a panic to keep her quiet. 

> "He had murdered and had created a new life for himself. It was something that was all his own, and it was the first time in his life he had had anything that others could not take from him." — *Richard Wright*

---

### Empowerment Through Destruction
What follows the murder is a deeply disturbing psychological pivot. Rather than feeling immediate remorse, Bigger experiences a grotesque, exhilarating sense of empowerment. For the first time in his entire life, he feels he has agency; he has outsmarted the white world that treats him like an invisible animal. He disposes of the body in the basement furnace and concocts an elaborate ransom plot. Wright forces the reader into the uncomfortable position of understanding how a society built on racial terror can twist murder into the only accessible act of free will for the oppressed.

### The Hypocrisy of White Liberalism
*Native Son* is merciless in its critique of white society, saving its sharpest venom not for overt racists, but for the wealthy, well-meaning liberals like the Daltons and Mary's communist boyfriend, Jan. Wright exposes their blind, patronizing attempts to "help" the Black community without ever dismantling the economic systems that exploit them. Their tragic inability to see Bigger as a complex human being, treating him instead as a sociological project, directly precipitates the disastrous events of the novel. 

### The Courtroom Didacticism
The final act of the novel features Bigger's capture and subsequent trial, defended by the communist lawyer Boris Max. While Max’s lengthy courtroom summation is an eloquent, socialist critique arguing that American society is entirely responsible for manufacturing Bigger Thomas, it strips away much of the narrative tension. However, Bigger’s final moments in his cell remain haunting. He refuses to repent in the traditional sense, clinging to his violent actions as the only things that truly belonged to him. *Native Son* remains an aggressive, unapologetic masterpiece that refuses to let the reader look away.`
  },
  {
    title: "The Fire Next Time",
    author: "James Baldwin",
    publishYear: 1963,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Fire+Next+Time",
    theGood: "A towering achievement in the essay form. Baldwin’s prose is prophetic, searingly intelligent, and operates with the majestic cadence of a sermon delivering absolute truth.",
    theBad: "As a brief collection of two essays rather than a novel, it requires the reader to engage purely with philosophical and sociological arguments rather than a narrative plot.",
    review: `### A Prophecy for a Burning Nation
Published at the absolute boiling point of the American Civil Rights Movement in 1963, James Baldwin’s *The Fire Next Time* consists of two devastatingly brilliant essays. The book operates as a diagnostic X-ray of America's racial soul, exposing the diseased bone marrow of white supremacy. The title itself is a biblical warning drawn from a slave song: *"God gave Noah the rainbow sign, No more water, the fire next time!"* Baldwin is not merely writing history; he is delivering a prophetic ultimatum to a nation standing on the brink of self-destruction.

### The Letter to His Nephew
The first essay, "My Dungeon Shook," is structured as a deeply intimate letter to Baldwin’s fourteen-year-old nephew. In just a few pages, Baldwin manages to distill centuries of Black pain and resilience. He warns his nephew of the psychological traps set by a country that expects him to fail, perish, or surrender. Most radically, Baldwin urges his nephew to respond to white America’s hatred not with blind fury, but with pity and a terrible, demanding love. He argues that white Americans are trapped in a profound historical delusion, entirely unable to face the reality of their own history, and it is up to Black Americans to force them to wake up.

> "Please try to remember that what they believe, as well as what they do and cause you to endure does not testify to your inferiority but to their inhumanity." — *James Baldwin*

---

### The Rejection of the Black Muslim Movement
The longer, central essay, "Down at the Cross," chronicles Baldwin’s intellectual and spiritual journey. He recounts his teenage years in Harlem, where the terror of the streets drove him into the pulpit of a Christian church, only to realize that the church offered a hollow, hypocritical salvation that ultimately mirrored white oppressive structures. Baldwin then details his famous dinner meeting with Elijah Muhammad, the leader of the Nation of Islam. While Baldwin profoundly understands the anger that fuels the Black separatist movement and respects their ability to instill pride, he firmly rejects their theology of racial superiority and their desire for a separate Black state, viewing it as just another form of historical blindness.

### The Illusion of White Innocence
Baldwin’s sharpest intellectual blade is reserved for the concept of "white innocence." He posits that the true crime of white America is its persistent, willful ignorance of the brutal reality it has constructed. The desperate clinging to the mythology of a pure, blameless American Dream prevents true integration. Baldwin insists that integration is not a matter of Black people assimilating into white society, but rather of white people fundamentally integrating with their own repressed humanity and history.

### The Ultimatum of Love
Unlike the fiery rhetoric of Malcolm X or the nonviolent political organizing of Martin Luther King Jr., Baldwin’s solution is rooted in a radical, almost impossible existential love. He does not mean a sentimental affection, but a rigorous, demanding force that forces the nation to face the mirror. He concludes with a stark warning: if Americans—both Black and white—do not achieve this unprecedented level of consciousness and end the racial nightmare, the inevitable result will not be a political compromise, but the complete destruction of the nation. It is a masterpiece of moral clarity.`
  },
  {
    title: "Between the World and Me",
    author: "Ta-Nehisi Coates",
    publishYear: 2015,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Between+The+World",
    theGood: "A visceral, modern successor to James Baldwin. Coates brilliantly grounds abstract concepts of systemic racism in the very physical reality and vulnerability of the Black body.",
    theBad: "Coates’ absolute atheistic pessimism offers virtually no hope for national redemption, which can make the reading experience profoundly heavy and bleak.",
    review: `### A Modern Letter to a Son
Directly echoing the epistolary structure of James Baldwin’s *The Fire Next Time*, Ta-Nehisi Coates writes *Between the World and Me* as a book-length letter to his teenage son, Samori. Published during the rise of the Black Lives Matter movement and amidst a horrifying string of police killings of unarmed Black men, the book serves as an urgent, unapologetic attempt to explain the mechanics of American racism to a new generation. Coates abandons the comforting, progressive narrative that the arc of history bends toward justice, replacing it with a stark, materialistic examination of American power.

### The Destruction of the Black Body
The central, pulsing thesis of Coates’ work is that racism is a visceral, physical experience. He demands that the reader strip away the polite, abstract vocabulary of sociology and recognize racism as an act of physical violence. The entire infrastructure of American history—from the auction blocks of slavery to the redlined neighborhoods and the modern police state—has been designed to plunder, break, and exploit the Black body. Coates emphasizes that this destruction is not a glitch in the American system; it is the foundational engine that powers the "Dream."

> "In America, it is traditional to destroy the black body—it is heritage." — *Ta-Nehisi Coates*

---

### The Dreamers and the Illusion of Race
Coates introduces the concept of "The Dreamers"—his term for white Americans (or those who believe themselves to be white). He argues that "whiteness" is not a biological reality, but a violent syndicate built on exclusion. The Dreamers live in an idyllic, suburban delusion of innocence, barbecues, and treehouses, completely insulated from the awareness that their comfort is sustained by the brutalization of Black bodies beneath them. Coates warns his son never to arrange his life around trying to wake The Dreamers, as their commitment to the Dream is deeply entrenched.

### The Mecca of Howard University
A significant portion of the book serves as a beautiful tribute to Coates' time at Howard University, which he refers to as "The Mecca." For a young man who grew up on the hyper-vigilant, dangerous streets of Baltimore, Howard provides the first space where he sees the vast, glorious diversity and intellectual power of the Black diaspora. It is here that he begins to read voraciously, replacing fear with historical inquiry. However, even the sanctuary of The Mecca is breached when his college friend, Prince Jones, is senselessly murdered by a police officer, proving that no amount of education or respectability can serve as armor for a Black body in America.

### The Absence of Comfort
What makes *Between the World and Me* so polarizing and powerful is its total refusal to offer false hope. Coates does not believe that America will inevitably overcome its racial sins. He does not offer his son a comforting vision of a post-racial future. Instead, he offers him the truth. He tells his son that the struggle itself must be the meaning of his life. In a world defined by the indifferent forces of history and violence, Coates argues that maintaining one's own consciousness, questioning everything, and fiercely loving one's community is the only authentic victory available.`
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 6 (11 books)...');
  let added = 0;
  for (const book of books) {
    const exists = await prisma.bookReview.findFirst({ where: { title: book.title } });
    if (!exists) {
      await prisma.bookReview.create({
        data: {
          ...book,
          status: 'APPROVED',
          authorId: admin.id
        }
      });
      added++;
      console.log(`+ Added: ${book.title} (Batch 6 - English Grand Essay)`);
    } else {
      console.log(`- Skipped (Exists): ${book.title}`);
    }
  }
  console.log(`Done. Added ${added} books (Batch 6).`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
