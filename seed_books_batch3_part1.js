const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Odyssey",
    author: "Homer",
    publishYear: -800,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Odyssey",
    theGood: "The foundational blueprint for all Western storytelling. Its exploration of cunning (mêtis) over brute strength revolutionized the concept of the epic hero. The narrative structure, featuring flashbacks and non-linear pacing, was thousands of years ahead of its time.",
    theBad: "Modern readers may struggle with the repetitive epithets ('rosy-fingered Dawn') which were originally memory aids for oral recitation. Additionally, Odysseus's treatment of his crew and the brutal mass slaughter of the suitors in the climax reflect a highly unforgiving, ancient morality.",
    review: "Homer’s *The Odyssey* is not merely an epic poem; it is the absolute bedrock upon which the entire architecture of Western narrative fiction is built. Following the bloody, decade-long siege of Troy chronicled in *The Iliad*, the poem shifts its focus from the collective tragedy of war to the intensely personal, agonizingly prolonged journey of a single man attempting to return home. Odysseus, the king of Ithaca, spends ten additional years lost at sea, cursed by the sea god Poseidon. He must navigate a terrifying gauntlet of mythological horrors—from the man-eating Cyclops Polyphemus and the mesmerizing, lethal Sirens, to the sorceress Circe who transforms his crew into swine.\n\nWhat truly elevates *The Odyssey* above mere myth is its profound philosophical shift in how heroism is defined. Unlike Achilles, whose primary virtue was overwhelming, god-like physical violence, Odysseus survives through *mêtis*—cunning, deception, and intellectual agility. He is the original trickster archetype, a man who literally calls himself 'Nobody' to outwit a monster. The poem masterfully balances his external, monstrous struggles with the internal, psychological desperation of his wife, Penelope, who spends twenty years brilliantly fending off a horde of arrogant suitors trying to usurp his throne.\n\nFurthermore, the structural complexity of *The Odyssey* is astonishing. Homer does not tell the story chronologically; the poem begins *in media res* (in the middle of things), with Odysseus trapped on an island, forcing the narrative to rely on elaborate flashbacks recounted by Odysseus himself to the Phaeacian court. This creates an early form of the unreliable narrator. Ultimately, *The Odyssey* is a profound meditation on identity, survival, and the inescapable human desire for home (*nostos*). It remains a towering, breathtakingly beautiful testament to the enduring power of human resilience and storytelling."
  },
  {
    title: "The Iliad",
    author: "Homer",
    publishYear: -750,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Iliad",
    theGood: "A devastating, unsparing autopsy of the glory and profound horror of war. The psychological complexity of Achilles' rage and grief remains one of the greatest character studies in human history.",
    theBad: "The middle books, particularly the 'Catalogue of Ships' and the endless, repetitive lists of minor characters brutally killing one another, can be an incredibly grueling endurance test for contemporary readers.",
    review: "If *The Odyssey* is the epic of cunning and survival, Homer’s *The Iliad* is the definitive epic of rage, honor, and the terrifying, consuming fire of mortality. Set during the final weeks of the decade-long Trojan War, the poem surprisingly does not depict the origin of the conflict (the abduction of Helen) nor its famous conclusion (the Trojan Horse). Instead, its focus is agonizingly tight, centering entirely on the psychological breakdown and terrifying wrath (*mênis*) of the greatest Greek warrior, Achilles, after his pride is insulted by the Greek commander Agamemnon.\n\nHomer's depiction of warfare is fiercely dualistic. He simultaneously exalts the physical beauty and immense martial glory (*kleos*) of the heroes, while unflinchingly detailing the grotesque, agonizing reality of their deaths. Spears shatter teeth, bronze pierces livers, and young men die screaming for their mothers in the dust. The gods themselves are depicted as petty, squabbling aristocrats who treat human suffering as a bloody sporting event. Against this backdrop, the human characters shine with tragic brilliance. The Trojan prince Hector emerges as arguably the most deeply sympathetic figure—a decent man forced to fight a doomed war to protect his family and his city from annihilation.\n\nThe climax of the poem, featuring Achilles' absolute, terrifying descent into barbarism following the death of his beloved companion Patroclus, is a masterclass in emotional devastation. However, the true climax is not the physical defeat of Hector, but the profoundly quiet, heart-shattering scene in the final book where King Priam sneaks into the Greek camp to beg Achilles for his son's mutilated body. In that moment, the two bitterest enemies weep together, recognizing their shared, inescapable mortality. It is a staggering, monumental work of art that captures the terrible totality of the human condition."
  },
  {
    title: "The Divine Comedy",
    author: "Dante Alighieri",
    publishYear: 1320,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Divine+Comedy",
    theGood: "The supreme masterpiece of the Middle Ages. Dante’s creation of *contrapasso* (poetic justice) and his incredibly vivid, architectural mapping of the afterlife are breathtakingly imaginative.",
    theBad: "The sheer density of obscure 14th-century Florentine political figures and complex Catholic theology requires heavy reliance on footnotes, which can severely disrupt the pacing of the poetry.",
    review: "Dante Alighieri’s *The Divine Comedy* (*La Divina Commedia*) is arguably the most ambitious intellectual and poetic endeavor ever successfully completed. Written in the rigid, mathematically precise terza rima rhyme scheme, the epic poem chronicles Dante’s own fictional journey through the three realms of the Christian afterlife: *Inferno* (Hell), *Purgatorio* (Purgatory), and *Paradiso* (Heaven). Guided first by the ancient Roman poet Virgil (representing human reason) and later by his idealized love, Beatrice (representing divine revelation), Dante uses this spiritual pilgrimage to synthesize the entirety of medieval theology, classical philosophy, and intense personal political vengeance.\n\nThe *Inferno* remains the most famous and widely read section, largely due to its terrifying, deeply visceral imagination. Dante structures Hell as nine concentric circles descending into the center of the Earth, where he implements the brilliant concept of *contrapasso*—the idea that a soul's punishment in Hell is the perfect, ironic reflection of their sin in life. Fortune-tellers walk with their heads twisted backward; hypocrites wear cloaks of lead painted with dazzling gold. Amidst the brimstone, Dante places numerous real-life political enemies, turning the epic into a scathing, highly dangerous political satire of corrupt Popes and warring Italian factions.\n\nHowever, the poem's true profundity is revealed as Dante climbs the mountain of Purgatory and ascends through the celestial spheres of Heaven. While the imagery of *Paradiso* abandons the physical horror of Hell in favor of overwhelming, blinding concepts of light and geometry, it represents a staggering philosophical achievement. The poem is fundamentally a journey from absolute spiritual despair—being 'lost in a dark wood'—to the ultimate alignment of the human will with the divine love 'that moves the sun and the other stars.' It is a terrifying, sublime, and conceptually flawless monument of human intellect."
  },
  {
    title: "Paradise Lost",
    author: "John Milton",
    publishYear: 1667,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Paradise+Lost",
    theGood: "Milton's blank verse is incredibly powerful and majestic. Satan is arguably the most charismatic, complex, and tragically compelling anti-hero in the history of English literature.",
    theBad: "The syntax is famously Latinate, convoluted, and heavily inverted. Modern readers may find the intense theological debates regarding free will and predestination somewhat tedious.",
    review: "John Milton’s *Paradise Lost* is the definitive epic poem of the English language, a massive, audacious attempt to 'justify the ways of God to men.' Written while Milton was completely blind and politically disgraced following the collapse of the English Republic, the poem dramatizes the biblical story of the Fall of Man: the temptation of Adam and Eve by the fallen angel Satan, and their subsequent expulsion from the Garden of Eden. \n\nThe undeniable, terrifying triumph of the poem is the character of Satan. In the opening books, Satan is depicted not as a grotesque monster, but as a towering, fiercely charismatic rebel commander rising from a lake of fire. His famous declaration, 'Better to reign in Hell, than serve in Heaven,' establishes him as the ultimate champion of absolute, destructive liberty. Milton intentionally makes Satan so compelling, so persuasive in his rhetoric, that the reader is seduced by him just as Eve is. This creates a profound, highly uncomfortable psychological tension, as the reader must actively fight their own instinct to root for the ultimate villain.\n\nAs the narrative progresses to the lush, innocent perfection of Eden, Milton masterfully shifts focus to the incredibly complex psychological dynamic between Adam and Eve. Their debates regarding autonomy, labor, and knowledge are surprisingly modern. When the Fall inevitably occurs, it is depicted not merely as an act of divine disobedience, but as a tragic, deeply human failure of reason overcoming passion. Milton’s blank verse is majestic, thunderous, and symphonic, requiring the poem to be read aloud to fully grasp its immense power. It is a breathtaking, terrifyingly ambitious work that permanently altered the cultural understanding of morality, rebellion, and human tragedy."
  },
  {
    title: "The Canterbury Tales",
    author: "Geoffrey Chaucer",
    publishYear: 1392,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Canterbury+Tales",
    theGood: "A brilliant, panoramic cross-section of 14th-century society. Chaucer’s profound empathy, bawdy humor, and sharp social satire are incredibly modern.",
    theBad: "Reading it in the original Middle English requires significant academic effort, while modern translations inevitably lose the rhythmic perfection and subtle wordplay of Chaucer's poetry.",
    review: "Geoffrey Chaucer’s *The Canterbury Tales* is a foundational pillar of English literature, marking the crucial moment when the English language was elevated from a vernacular dialect to a vehicle for high art. The framing device is brilliantly simple: a diverse group of 29 pilgrims—representing almost every social class of 14th-century England, from the nobility and clergy to the peasantry and emerging middle class—gather at the Tabard Inn in Southwark before embarking on a pilgrimage to the shrine of Saint Thomas Becket in Canterbury. To pass the time, they agree to a storytelling contest.\n\nWhat makes the work a masterpiece is the astonishing diversity of its voices and genres. Chaucer acts as a literary chameleon. He seamlessly transitions from the high-minded, chivalric romance of 'The Knight's Tale' to the grotesquely hilarious, deeply obscene fabliau of 'The Miller's Tale,' where characters are tricked into kissing bare buttocks out of windows. Chaucer’s true genius lies in his ability to expose the rampant hypocrisy of medieval society—particularly the extreme corruption of the Catholic Church, embodied by the terrifyingly cynical Pardoner—without ever resorting to bitter moralizing. His satire is driven by a profound, forgiving understanding of human frailty.\n\nThe undeniable star of the collection is the Wife of Bath. Her lengthy, proto-feminist prologue, in which she fiercely defends her five marriages and argues for female 'maistrie' (sovereignty) over men, remains one of the most vibrant, radical, and psychologically complex character studies in all of literature. Though unfinished at the time of his death, *The Canterbury Tales* is a massive, sprawling, and joyously chaotic tapestry of human life that remains astonishingly vital and entertaining."
  },
  {
    title: "Hamlet",
    author: "William Shakespeare",
    publishYear: 1603,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Hamlet",
    theGood: "The invention of the modern human consciousness. The depth of Hamlet's psychological paralysis, existential dread, and brilliant wordplay is absolutely unmatched in literature.",
    theBad: "The sheer cultural omnipresence of the play can make the famous soliloquies feel like clichéd quotes rather than the desperate, agonizing internal debates they actually are.",
    review: "William Shakespeare’s *The Tragedy of Hamlet, Prince of Denmark* is widely considered the greatest play ever written, marking a seismic shift in the history of storytelling. Outwardly, it operates as a standard Elizabethan revenge tragedy: the ghost of the murdered King of Denmark appears to his son, Hamlet, demanding vengeance against the King's brother, Claudius, who has usurped the throne and married the Queen. However, Shakespeare completely subverts the genre. The true focus of the play is not the act of revenge, but the agonizing, paralyzing psychological impossibility of taking action in a corrupt, meaningless world.\n\nHamlet is perhaps the most complex character ever committed to paper. He is fiercely intelligent, deeply grieving, and intensely cynical. Rather than simply killing Claudius, Hamlet feigns madness (or perhaps genuinely descends into it) to buy time, leading him to construct a terrifyingly elaborate trap involving a play-within-a-play. The play is famous for its soliloquies, particularly the legendary 'To be, or not to be,' which is not a mere contemplation of suicide, but a profound, terrifying philosophical autopsy of human suffering, the fear of the unknown afterlife, and the cowardly nature of consciousness itself.\n\nFurthermore, *Hamlet* is a masterpiece of political paranoia. Elsinore Castle is a suffocating panopticon where everyone is spying on everyone else, leading to the tragic destruction of the innocent Ophelia and the bumbling Polonius. Shakespeare’s language is incredibly dense, layered with double meanings, dark irony, and metaphysical wit. The play forces the audience to confront the terrifying realization that human intellect, rather than being a tool for clarity, can act as a labyrinth that permanently traps the soul. It is an endlessly interpretable, monumental work of art."
  },
  {
    title: "Macbeth",
    author: "William Shakespeare",
    publishYear: 1623,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Macbeth",
    theGood: "A relentlessly paced, suffocatingly dark thriller. The exploration of unchecked ambition, guilt, and the supernatural is executed with terrifying, breathless precision.",
    theBad: "Due to its rapid pace, some of the secondary characters remain relatively undeveloped compared to the massive psychological depth of the two leads.",
    review: "If *Hamlet* is Shakespeare’s masterpiece of psychological hesitation, *Macbeth* is his masterpiece of terrifying, unstoppable momentum. It is his shortest, tightest, and most relentlessly violent tragedy. The play follows Macbeth, a highly respected and fiercely loyal Scottish general, who receives a prophecy from three mysterious witches that he will one day become King of Scotland. Consumed by sudden, overwhelming ambition, and aggressively spurred on by his ruthless wife, Lady Macbeth, he murders the sleeping King Duncan to seize the throne.\n\nWhat makes *Macbeth* so brilliant is that it is not a play about a monster; it is a play about a good man who consciously chooses to become a monster, fully aware of the moral consequences. The psychological deterioration of both Macbeth and his wife is charted with clinical, agonizing detail. While Macbeth initially suffers from severe moral revulsion before the murder, he eventually fully embraces nihilistic tyranny to maintain power, famously concluding that life is 'a tale told by an idiot, full of sound and fury, signifying nothing.'\n\nConversely, Lady Macbeth, who initially prayed to evil spirits to 'unsex' her and strip her of all human compassion, is ultimately destroyed by the crushing weight of suppressed guilt, leading to the iconic, terrifying sleepwalking scene where she obsessively attempts to wash imaginary blood from her hands. The atmosphere of the play is incredibly claustrophobic; it is a world entirely cloaked in darkness, fog, and blood, where the natural order is violently inverted by the supernatural. It is a stunning, horrific exploration of the corrosive, self-destroying nature of absolute power."
  },
  {
    title: "King Lear",
    author: "William Shakespeare",
    publishYear: 1608,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=King+Lear",
    theGood: "The most devastating, emotionally shattering tragedy ever written. The depiction of a powerful man's descent into madness and nothingness is a profound exploration of human suffering.",
    theBad: "The sheer magnitude of the cruelty, betrayal, and violence inflicted upon the innocent characters makes it an incredibly painful, almost unbearable experience for the audience.",
    review: "While *Hamlet* is often cited as Shakespeare’s most intellectual play, *King Lear* is universally recognized as his most emotionally apocalyptic. It is a towering, terrifying monument to human cruelty, aging, and the absolute fragility of sanity. The plot is deceptively simple: the aging King Lear decides to divide his kingdom among his three daughters based on who can publicly declare their love for him most eloquently. When his youngest and only honest daughter, Cordelia, refuses to engage in the sycophantic flattery, Lear flies into a blind rage, disinherits her, and hands his entire realm over to his two deeply malicious daughters, Goneril and Regan.\n\nWhat follows is a systematic, horrific stripping away of Lear’s power, his dignity, and ultimately, his mind. Once his cruel daughters have secured his wealth, they immediately cast him out into a raging, apocalyptic storm. The central scenes on the heath, where the mad King screams at the thunder while accompanied only by his loyal Fool and a disguised nobleman feigning insanity, are arguably the highest pinnacle of dramatic poetry ever achieved. Shakespeare completely dismantles the illusion of divine justice; the universe of *King Lear* is terrifyingly indifferent to human suffering.\n\nRunning parallel to Lear’s tragedy is the subplot of the Earl of Gloucester, who is similarly betrayed by his illegitimate, Machiavellian son, Edmund, leading to Gloucester's horrific physical blinding. The play is an agonizing endurance test, forcing the audience to witness the absolute destruction of every social, familial, and moral bond. The final, heart-shattering scene, where Lear enters howling with the dead Cordelia in his arms, offers no redemption, no comfort, and no easy catharsis. It is a profound, terrifying masterpiece that stares directly into the darkest abyss of the human condition."
  },
  {
    title: "Faust",
    author: "Johann Wolfgang von Goethe",
    publishYear: 1808,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Faust",
    theGood: "The ultimate philosophical drama. Mephistopheles is a brilliantly witty, deeply cynical antagonist, and the exploration of humanity's endless striving is profoundly modern.",
    theBad: "Part Two is famously dense, completely abandoning the tight narrative of Part One in favor of a massive, heavily symbolic mythological pageant that is incredibly difficult to follow.",
    review: "Johann Wolfgang von Goethe’s *Faust* is the undisputed magnum opus of German literature, a massive, two-part tragic play that took the author over sixty years to complete. It is the definitive iteration of the classic German legend regarding a man who sells his soul to the Devil. Heinrich Faust is a brilliant, highly successful scholar who has mastered all human knowledge—philosophy, medicine, law, and theology—yet finds himself entirely dissatisfied and deeply depressed, realizing that true, ultimate understanding of the universe remains impossible.\n\nIn his despair, he makes a wager with Mephistopheles, a demonic agent of chaos. Crucially, Goethe alters the traditional pact: Faust does not merely sell his soul for power. He wagers that Mephistopheles will never be able to provide him with a single moment of experience so profound, so perfectly satisfying, that Faust will wish time to stop and remain in that moment forever. Mephistopheles is a brilliant creation—not a roaring monster, but a highly sophisticated, cynical, and sharply witty intellectual who views human striving as a pathetic joke.\n\nPart One focuses primarily on the deeply tragic, intimate 'Gretchen Tragedy,' where Faust’s magically restored youth and demonic assistance lead to the complete destruction of an innocent, deeply religious young woman. However, Part Two violently expands the scope into a surreal, sweeping allegory involving Greek mythology, the creation of artificial life (the Homunculus), and massive political warfare. Ultimately, *Faust* is a profound, incredibly complex meditation on the nature of the Enlightenment. It argues that humanity’s salvation lies not in achieving perfection, but in the relentless, endless struggle to strive for it, even amidst constant error. It is a towering intellectual achievement."
  },
  {
    title: "The Picture of Dorian Gray",
    author: "Oscar Wilde",
    publishYear: 1890,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Dorian+Gray",
    theGood: "A brilliantly witty, deeply disturbing exploration of vanity, hedonism, and the corruption of the soul. The dialogue is unparalleled in its sharp, cynical brilliance.",
    theBad: "The lengthy, highly detailed chapter in the middle detailing Dorian’s obsessions with jewels, perfumes, and tapestries bogs down the pacing significantly.",
    review: "Oscar Wilde’s only novel, *The Picture of Dorian Gray*, is a masterpiece of Gothic horror seamlessly blended with the sharp, epigrammatic wit of Victorian high-society comedy. The premise is legendary: an incredibly beautiful, entirely innocent young man named Dorian Gray has his portrait painted by an infatuated artist, Basil Hallward. Under the deeply cynical, highly manipulative influence of Lord Henry Wotton, Dorian realizes that his beauty will inevitably fade, and makes a desperate, supernatural wish: that the painting will bear the burden of age and corruption, allowing Dorian to remain perfectly young and beautiful forever.\n\nThe wish is granted, and the novel becomes a terrifying, psychological autopsy of unchecked hedonism. Freed from all physical and social consequences, Dorian descends into a life of extreme depravity, cruelty, and eventual murder. Wilde brilliantly uses the painting as a literal manifestation of Dorian’s soul; while Dorian's face remains angelic and untouched by time, the portrait locked in his attic becomes increasingly grotesque, dripping with blood and festering with the physical rot of his sins.\n\nThe true triumph of the novel, however, is the character of Lord Henry Wotton, who acts as the devil’s advocate. Lord Henry never actually commits a crime; he merely poisons Dorian’s mind with brilliant, incredibly seductive philosophical paradoxes regarding the supreme importance of beauty and the utter pointlessness of morality. The novel was immensely controversial upon release, heavily used against Wilde during his tragic criminal trials for homosexuality. Today, it stands as a brilliant, terrifyingly relevant critique of a society obsessed with youth, superficial aesthetics, and the dangerous illusion of a life without consequences."
  },
  {
    title: "The Strange Case of Dr Jekyll and Mr Hyde",
    author: "Robert Louis Stevenson",
    publishYear: 1886,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Jekyll+and+Hyde",
    theGood: "The definitive exploration of the duality of human nature. The atmospheric dread of Victorian London is perfectly constructed, creating a suffocating sense of paranoia.",
    theBad: "The sheer cultural saturation of the twist ending—that Jekyll and Hyde are the same person—completely eliminates the shock value that original readers experienced.",
    review: "Robert Louis Stevenson’s *The Strange Case of Dr Jekyll and Mr Hyde* is a foundational text of Victorian Gothic horror, a brief, intensely gripping novella that permanently injected the concept of the 'split personality' into the global cultural consciousness. The narrative is structured as a mystery, told primarily through the perspective of Mr. Utterson, a dry, highly rational London lawyer. Utterson becomes increasingly alarmed when his respectable, brilliant friend, Dr. Henry Jekyll, associates himself with, and leaves his entire fortune to, a terrifying, grotesque, and deeply violent man named Edward Hyde.\n\nStevenson brilliantly utilizes the foggy, labyrinthine streets of London as a physical mirror for the moral hypocrisy of the Victorian era—a society strictly divided between extreme public respectability and dark, hidden private vices. When the final revelation occurs through Jekyll's written confession, the novella transcends a simple monster story and becomes a profound psychological thriller. Jekyll did not create Hyde to be evil; he created the potion to violently separate his own complex nature, attempting to isolate his dark, repressed desires so his 'good' side could live without the agonizing burden of guilt.\n\nThe terrifying thesis of the novella is that evil, when completely unrestrained by conscience or societal rules, is inherently stronger and more vital. Hyde slowly begins to overpower Jekyll, eventually taking control without the need for the potion at all. It is a deeply unsettling, brilliant exploration of addiction, the catastrophic dangers of repressing human nature, and the terrifying reality that the monsters we fear the most are often residing quietly within our own minds."
  },
  {
    title: "The Scarlet Letter",
    author: "Nathaniel Hawthorne",
    publishYear: 1850,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Scarlet+Letter",
    theGood: "A profound, deeply psychological critique of religious hypocrisy and the devastating impact of public shaming. Hester Prynne is a remarkably strong, proto-feminist protagonist.",
    theBad: "The prose is notoriously dense, archaic, and heavily weighed down by exhaustive, highly explicit moral symbolism that can feel incredibly heavy-handed to modern readers.",
    review: "Nathaniel Hawthorne’s *The Scarlet Letter* is arguably the first great American psychological novel, a dark, suffocating exploration of guilt, sin, and the brutal rigidity of 17th-century Puritan society. The novel opens with an unforgettable scene of public humiliation: Hester Prynne, holding her illegitimate infant daughter, Pearl, is forced to stand on a scaffold before the entire colony of Boston. As punishment for the crime of adultery, she is condemned to wear a brightly embroidered scarlet letter 'A' on her chest for the rest of her life.\n\nHowever, Hawthorne immediately subverts expectations. Instead of being crushed by the shame, Hester accepts her punishment with immense, quiet dignity. She transforms the 'A' from a badge of ultimate disgrace into a symbol of her own strength, independence, and eventual profound compassion for the marginalized. The true psychological horror of the novel is reserved for the two men in her life. The first is her secret lover, the highly respected, deeply agonizing Reverend Arthur Dimmesdale, whose concealed guilt literally eats him alive from the inside out. The second is her estranged husband, the terrifyingly cold, vindictive scholar Roger Chillingworth, who arrives in Boston and dedicates his entire existence to psychologically torturing Dimmesdale.\n\nHawthorne uses this agonizing love triangle to launch a searing critique of Puritanical theology, arguing that the true, unforgivable sin is not crimes of passion (like Hester's), but crimes of the intellect—the deliberate, cold-blooded violation of another human soul (like Chillingworth's). While the pacing is slow and the symbolism relentless, it remains a masterful, profoundly influential exploration of the intersection between personal morality and tyrannical societal law."
  },
  {
    title: "The Adventures of Huckleberry Finn",
    author: "Mark Twain",
    publishYear: 1884,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Huckleberry+Finn",
    theGood: "The genesis of the modern American literary voice. The satirical dismantling of Southern racism, religious hypocrisy, and romanticized violence is razor-sharp and deeply brilliant.",
    theBad: "The final quarter of the novel, where Tom Sawyer returns and subjects Jim to an elaborate, absurd, and deeply cruel 'escape' plot, severely undermines the profound moral growth of the preceding chapters.",
    review: "Ernest Hemingway famously declared that 'All modern American literature comes from one book by Mark Twain called *Huckleberry Finn*.' This praise is well-earned. Prior to this novel, American literature was largely dominated by European styles and stiff, formal prose. Twain completely revolutionized the form by narrating the story entirely in the authentic, highly vernacular voice of Huck Finn, an uneducated, literal-minded, and fiercely pragmatic teenage outcast living in pre-Civil War Missouri.\n\nThe core of the novel is the journey down the massive, indifferent Mississippi River. Huck, fleeing his violently abusive, alcoholic father, teams up with Jim, an enslaved man fleeing from the terrifying prospect of being sold downriver. As they drift on their raft, the river serves as a space of profound freedom and genuine, equal brotherhood, sharply contrasted with the towns they visit on the shore, which are universally depicted as swamps of extreme violence, con artists (the Duke and the King), and grotesque, systemic racism.\n\nThe emotional climax of the novel is one of the greatest moments in American literature. Huck, deeply indoctrinated by Southern society to believe that helping an enslaved person escape is a mortal sin that will send him to Hell, is forced to choose between societal morality and his genuine love for Jim. Huck’s ultimate decision—'All right, then, I'll *go* to hell'—is a breathtaking, profound assertion of individual conscience over corrupt systemic law. While the ending's descent into childish farce is deeply frustrating, the novel remains a towering, fundamentally essential masterpiece of American satire and moral awakening."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 3 chunk 1 (13 books)...');
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
      console.log(`+ Added: ${book.title}`);
    } else {
      console.log(`- Skipped (Exists): ${book.title}`);
    }
  }
  console.log(`Done. Added ${added} books.`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
