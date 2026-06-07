const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Ulysses",
    author: "James Joyce",
    publishYear: 1922,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Ulysses",
    theGood: "The absolute zenith of modernist literature. Joyce's unparalleled mastery of language, encompassing every conceivable literary style from Shakespearean parody to hallucinatory stream-of-consciousness, completely redefined what a novel could be.",
    theBad: "It is notoriously, aggressively difficult to read. The sheer density of obscure Dublin geography, Catholic theology, linguistic puns, and fragmented thoughts demands massive academic dedication and external reading guides.",
    review: "James Joyce’s *Ulysses* is widely considered the greatest and most intimidating novel of the 20th century. Taking place entirely on a single day—June 16, 1904—in Dublin, Ireland, the novel closely mirrors the structure of Homer's *Odyssey*. However, instead of an epic Greek warrior battling mythical monsters, the hero is Leopold Bloom, a deeply ordinary, slightly bumbling Jewish advertising canvasser wandering the streets of the city, eating pork kidneys, and agonizing over his wife Molly’s impending afternoon affair with her manager.\n\nThe genius of *Ulysses* lies not in its plot, but in its revolutionary, microscopic examination of human consciousness. Joyce attempts to capture the exact, unfiltered reality of thought. The narrative does not merely describe what characters are thinking; it forces the reader to inhabit the chaotic, rapid-fire associations, memories, and sensory inputs that make up the human mind. The second protagonist, Stephen Dedalus (serving as the Telemachus figure), provides the hyper-intellectual, deeply cynical counterpoint to Bloom’s pragmatic, deeply empathetic nature. Their eventual, profoundly anti-climactic meeting in the late hours of the night is a quiet masterpiece of failed human connection.\n\nFurthermore, Joyce treats language itself as a playground. Every one of the eighteen chapters (episodes) is written in a completely different literary style. One chapter is written entirely in the form of a musical fugue; another is a massive, hallucinatory play set in a brothel; another traces the entire historical evolution of the English language from Anglo-Saxon alliteration to modern slang. The novel concludes with the famous 'Penelope' episode—a 24,000-word, completely unpunctuated stream-of-consciousness monologue from Molly Bloom, culminating in her overwhelming, life-affirming 'yes.' *Ulysses* is a terrifyingly brilliant, impossibly complex monument to the mundane beauty of ordinary life."
  },
  {
    title: "The Trial",
    author: "Franz Kafka",
    publishYear: 1925,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Trial",
    theGood: "The definitive exploration of bureaucratic terror and existential alienation. The atmosphere is perfectly, suffocatingly absurd, coining the very definition of the term 'Kafkaesque.'",
    theBad: "The intentionally frustrating, completely circular logic of the narrative offers absolutely no resolution or explanation, which can be deeply maddening for readers seeking a traditional plot.",
    review: "Published posthumously against the author's explicit dying wishes, Franz Kafka’s *The Trial* (*Der Process*) is a masterpiece of surreal, terrifyingly calm nightmare logic. The novel opens with one of the most famous sentences in literature: 'Someone must have been telling lies about Josef K., he knew he had done nothing wrong but, one morning, he was arrested.' For the remainder of the novel, Josef K., a respectable bank clerk, attempts to navigate an incomprehensible, labyrinthine legal system to defend himself against a charge that is never stated, in a court that operates entirely in dusty attics and dark, hidden rooms.\n\nThe horror of *The Trial* does not come from physical torture or totalitarian violence, but from the absolute, crushing weight of impenetrable bureaucracy. The Law in Kafka's universe is an infinite, invisible monolith. Everyone K. encounters—from the lowest guards to his own lawyer and the court painter—accepts the terrifying absurdity of the system as perfectly normal. K.’s initial arrogant defiance slowly, agonizingly grinds down into exhausted submission as he realizes that the legal process itself is the punishment.\n\nAt the philosophical center of the novel is the famous parable 'Before the Law,' told to K. by a priest in a dark cathedral. The parable concerns a man from the country who waits his entire life before an open door to the Law, only to be told as he dies that the door was made only for him, and is now being shut. The novel is a profound, deeply disturbing autopsy of modern human alienation—the terrifying suspicion that we are all fundamentally guilty of simply existing, waiting endlessly for a judgment that will never be explained. It is a bleak, utterly brilliant masterpiece."
  },
  {
    title: "The Castle",
    author: "Franz Kafka",
    publishYear: 1926,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Castle",
    theGood: "A brilliant, darkly comedic expansion of Kafka’s themes. The depiction of desperate, completely futile attempts to gain recognition from an invisible authority is profoundly relevant.",
    theBad: "It is notoriously unfinished, abruptly ending mid-sentence. The relentless, exhausting conversations with the villagers can feel incredibly repetitive.",
    review: "If *The Trial* is Franz Kafka’s exploration of inescapable guilt, *The Castle* (*Das Schloss*) is his massive, unfinished masterpiece exploring the agonizing desperation for inclusion and validation. The novel follows a protagonist known only as K., who arrives in a snowbound village claiming to have been hired as a land surveyor by the authorities in the mysterious, unreachable Castle that looms over the town. However, from the moment he arrives, every single attempt to contact the Castle, confirm his employment, or even gain basic acceptance from the hostile, highly superstitious villagers is met with endless, absurd bureaucratic roadblocks.\n\nKafka brilliantly constructs the Castle not as a place of grand, evil tyranny, but as a swamp of extreme administrative incompetence. The officials are constantly drowning in paperwork, phone calls are either ignored or answered by exhausted clerks, and the very concept of 'truth' is entirely determined by the shifting, completely arbitrary whims of the bureaucracy. K.’s struggle is both terrifying and deeply, darkly hilarious. He is constantly engaging in massively complex, logical arguments with the villagers, attempting to apply reason to a system that fundamentally rejects it.\n\nThe tragedy of K. is his absolute refusal to leave. He becomes obsessed with forcing the Castle to acknowledge his existence, sacrificing his health, his dignity, and his relationship with the barmaid Frieda in the process. While the novel stops mid-sentence due to Kafka's declining health, the lack of resolution perfectly suits the narrative's central theme: the human condition is an endless, exhausting struggle to find meaning and belonging in an indifferent, completely inaccessible universe."
  },
  {
    title: "The Grapes of Wrath",
    author: "John Steinbeck",
    publishYear: 1939,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Grapes+of+Wrath",
    theGood: "The definitive American novel of the Great Depression. A profoundly moving, fiercely righteous indictment of corporate greed and a powerful tribute to the resilience of the working class.",
    theBad: "The narrative occasionally leans heavily into overt, almost heavy-handed political sermonizing, sacrificing subtlety for ideological impact.",
    review: "John Steinbeck’s Pulitzer Prize-winning *The Grapes of Wrath* is a towering, deeply compassionate epic that captured the immense human tragedy of the Dust Bowl era, forcing the American public to confront the brutal realities of extreme poverty. The novel follows the Joad family, 'Okies' who are ruthlessly driven from their tenant farm in Oklahoma by drought and the unfeeling, mechanical greed of the banks. Lured by handbills promising plentiful work, they pack their entire lives onto a dilapidated truck and embark on a desperate, agonizing journey across Route 66 to the supposed 'Promised Land' of California.\n\nSteinbeck structures the novel brilliantly, alternating chapters between the intensely intimate, harrowing narrative of the Joad family and broader, sweeping 'intercalary' chapters that act as a Greek chorus, describing the massive, sociological shift occurring across the entire country. The Joads' journey is marked by constant death, exploitation, and the terrifying realization that California is not a paradise, but a fiercely guarded fortress where corporate farm owners use starvation wages and brutal police violence to crush migrant workers.\n\nThe emotional core of the novel is the evolution of two characters: Tom Joad, an ex-convict who slowly transforms from a fiercely independent, self-centered man into a radicalized, politically conscious defender of the working class (under the mentorship of the former preacher Jim Casy), and Ma Joad, the absolute, unyielding bedrock of the family whose definition of 'family' expands to include all suffering humanity. The novel’s highly controversial, biblical final scene—where Rose of Sharon, having just delivered a stillborn baby, breastfeeds a starving man in a flooded barn—is one of the most powerful, searing images in literature. It is a masterpiece of social realism and human dignity."
  },
  {
    title: "As I Lay Dying",
    author: "William Faulkner",
    publishYear: 1930,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=As+I+Lay+Dying",
    theGood: "A staggering feat of modernist structure. The use of 15 different narrators across 59 incredibly brief, fragmented chapters perfectly captures the chaotic, deeply subjective nature of grief.",
    theBad: "The dense Southern dialect and the extreme stream-of-consciousness format (particularly the chapters narrated by the young, uncomprehending Vardaman) can be incredibly disorienting to parse.",
    review: "William Faulkner famously claimed to have written *As I Lay Dying* in six weeks while working the night shift at a power plant, without changing a single word. Whether true or not, the novel remains one of the most structurally innovative, deeply bizarre, and emotionally devastating works of American modernism. Set in Faulkner's fictional Yoknapatawpha County, Mississippi, the novel centers on the deeply impoverished Bundren family and their grotesque, darkly comedic quest to fulfill the dying wish of their matriarch, Addie: to be buried in the town of Jefferson, forty miles away.\n\nThe genius of the novel lies entirely in its structure. Faulkner completely abandons an objective narrator, instead fracturing the story across 15 different characters, including all the Bundren children, their deeply lazy father Anse, various neighbors, and eventually, the dead woman herself. This polyphonic approach creates a terrifyingly complete psychological portrait of a deeply dysfunctional family. We see the journey not as a unified quest, but as a chaotic collision of deeply selfish, hidden motivations. Cash, the eldest, obsessively builds his mother's coffin right outside her window; Darl, the most perceptive and articulate, slowly descends into madness; Dewey Dell desperately seeks a secret abortion; and the youngest, Vardaman, attempts to process death through the infamous, single-sentence chapter: 'My mother is a fish.'\n\nAs the journey devolves into a horrifying series of disasters—including losing the coffin in a flooded river and surviving a barn fire—the rotting corpse of Addie Bundren literally and metaphorically poisons the family. The novel is a brutal, darkly hilarious, and profoundly sad exploration of the massive chasm between human thought and spoken language, and the terrifying, isolating reality of individual consciousness."
  },
  {
    title: "Absalom, Absalom!",
    author: "William Faulkner",
    publishYear: 1936,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Absalom",
    theGood: "Arguably Faulkner's greatest masterpiece. A towering, suffocatingly dark Southern Gothic epic that brutally dismantles the romanticized mythology of the American South.",
    theBad: "It is notoriously, aggressively difficult to read. The sentences often span entire pages, spiraling into massive, convoluted labyrinths of time, memory, and unreliable narration.",
    review: "If *The Sound and the Fury* is Faulkner’s most emotionally devastating novel, *Absalom, Absalom!* is his most intellectually staggering and historically profound. The novel is an intricate, suffocating attempt to piece together the terrifying, almost mythic history of Thomas Sutpen, a fiercely ambitious, ruthlessly calculating man who arrived in Mississippi in 1833 with a band of enslaved Haitians and a French architect, determined to carve a massive plantation, 'Sutpen's Hundred,' out of the wilderness and establish an aristocratic dynasty.\n\nHowever, the narrative is not told directly. Instead, the story of Sutpen's rise and horrific, catastrophic fall is obsessively reconstructed decades later in a freezing Harvard dorm room by Quentin Compson (the tragic protagonist of *The Sound and the Fury*) and his Canadian roommate, Shreve. They are piecing together fragmented, highly biased accounts from Quentin's father and the deeply bitter Rosa Coldfield. This complex, multi-layered framing device is the true genius of the novel. Faulkner argues that history is not a set of objective facts, but a deeply contested, desperately constructed narrative shaped entirely by the trauma and prejudices of the storyteller.\n\nAt its core, Sutpen's tragic flaw is not mere ambition, but his complete, terrifyingly rigid adherence to 'The Design'—the brutal, racial architecture of the antebellum South. When he discovers that his son's best friend and potential son-in-law, Charles Bon, possesses a fraction of Black ancestry, Sutpen's absolute refusal to acknowledge him triggers a Greek tragedy of incest, fratricide, and total ruin. The novel is a towering, feverish masterpiece, exposing the original sin of slavery that fundamentally doomed the American South. Quentin's desperate, agonizing denial at the end of the novel—'I dont hate it! I dont hate it!'—is the definitive, tragic cry of a region trapped by its own ghosts."
  },
  {
    title: "Jane Eyre",
    author: "Charlotte Brontë",
    publishYear: 1847,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Jane+Eyre",
    theGood: "A fiercely revolutionary, intensely passionate psychological drama. Jane is one of literature's greatest protagonists—uncompromising, highly intelligent, and fiercely demanding of her own self-worth.",
    theBad: "The extensive reliance on incredible coincidences (particularly Jane randomly stumbling upon her long-lost cousins while freezing on a moor) strains the bounds of narrative believability.",
    review: "Charlotte Brontë’s *Jane Eyre* completely revolutionized the Victorian novel by introducing a fiercely intimate, intensely subjective first-person narrative voice that treated the inner emotional life of a poor, plain, and obscure woman as a subject of profound, epic importance. The novel traces the life of Jane, from her deeply abusive childhood living with her cruel aunt at Gateshead and her traumatic education at the horrific Lowood School, to her employment as a governess at the brooding, gothic estate of Thornfield Hall.\n\nAt Thornfield, she encounters the Byronic, highly volatile Edward Rochester. Their subsequent romance is not a traditional Victorian courtship of polite manners, but a fierce, deeply intellectual meeting of equals. Jane’s famous declaration—'Do you think, because I am poor, obscure, plain, and little, I am soulless and heartless? You think wrong!'—is a monumental assertion of feminist autonomy. Brontë brilliantly utilizes elements of the Gothic thriller—the terrifying, demonic laughter echoing in the halls, the mysterious fires—to heighten the psychological tension, culminating in one of the most famous, devastating plot twists in literary history: the revelation of Rochester's violently insane wife, Bertha Mason, hidden in the attic.\n\nThe true power of the novel lies in Jane's absolute, agonizing refusal to compromise her moral integrity for romantic love. When she discovers Rochester's secret, she does not succumb to his desperate pleas to live as his mistress; she chooses exile, near-starvation, and absolute loneliness rather than surrender her self-respect. Her eventual return to a blinded, broken Rochester is not a surrender, but a choice made from a position of absolute equality and independence. It is a stunning, deeply moving masterpiece of selfhood and passion."
  },
  {
    title: "Emma",
    author: "Jane Austen",
    publishYear: 1815,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Emma",
    theGood: "A flawless, diamond-sharp masterpiece of social comedy. Austen's use of free indirect discourse is revolutionary, and Emma's gradual, painful self-awareness is brilliantly charted.",
    theBad: "Emma's intense snobbery and relentless, often deeply harmful meddling in the lives of her social inferiors can make her a highly frustrating protagonist for the first half of the novel.",
    review: "Jane Austen famously declared before writing *Emma*, 'I am going to take a heroine whom no one but myself will much like.' In Emma Woodhouse, Austen created her most complex, deeply flawed, and ultimately rewarding protagonist. Emma is 'handsome, clever, and rich,' occupying the absolute pinnacle of the social hierarchy in the sleepy village of Highbury. Unburdened by the financial desperation that drives most Austen heroines, Emma suffers from intense boredom and extreme intellectual arrogance, leading her to appoint herself the village matchmaker.\n\nThe novel is a brilliantly constructed, highly ironic comedy of errors. Emma is completely, almost violently blind to the actual emotions and social realities of the people around her. Her disastrous, incredibly patronizing attempt to mold the pliable, lower-class Harriet Smith into a gentlewoman and match her with the vicar Mr. Elton is a masterclass in social disaster. Austen’s revolutionary use of 'free indirect discourse'—where the third-person narrator seamlessly adopts Emma’s deeply flawed, highly subjective viewpoint—forces the reader to initially share Emma’s delusions before realizing, alongside her, just how terribly wrong she is.\n\nThe emotional and moral core of the novel is Emma's relationship with Mr. Knightley, the only person in Highbury willing to ruthlessly criticize her. The famous Box Hill picnic scene, where Emma casually, cruelly insults the impoverished, endlessly rambling Miss Bates, is a devastating turning point. Mr. Knightley’s furious reprimand completely shatters Emma’s arrogance, leading to her profound, agonizing realization of her own cruelty and foolishness. Her subsequent growth from a spoiled, narcissistic meddler into a truly empathetic, self-aware woman makes *Emma* arguably Austen's most perfect, mature, and satisfying masterpiece."
  },
  {
    title: "Sense and Sensibility",
    author: "Jane Austen",
    publishYear: 1811,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Sense+and+Sensibility",
    theGood: "A brilliant, sharp-witted exploration of the tension between rational restraint and romantic excess. The brutal economic reality of 19th-century women is exposed with razor-sharp clarity.",
    theBad: "The male romantic leads (Edward Ferrars and Colonel Brandon) are often perceived as remarkably dull and passive compared to the fiercely intelligent, vibrant Dashwood sisters.",
    review: "Jane Austen’s first published novel, *Sense and Sensibility*, immediately established her as a master of social satire and psychological realism. The narrative is built upon a profound, deeply engaging dichotomy between the two eldest Dashwood sisters. Following the death of their father, the sisters and their mother are immediately disinherited due to the brutal, misogynistic laws of primogeniture, forcing them to leave their massive estate and live in near-poverty in a small cottage.\n\nElinor, the older sister, represents 'Sense.' She is fiercely rational, deeply stoic, and completely represses her own agonizing heartbreak over Edward Ferrars to maintain the stability of her family. Marianne, conversely, represents 'Sensibility.' She is fiercely romantic, wildly emotional, and believes that true love demands extreme, public displays of passion, leading her into a dangerous, deeply compromising infatuation with the dashing, entirely unreliable John Willoughby. \n\nWhile the novel initially appears to be a straightforward moral critique of Marianne's excessive romanticism, Austen’s true genius lies in her ultimate subversion of this dichotomy. Elinor's extreme stoicism nearly destroys her internally, while Marianne's unbridled emotion nearly kills her physically. Austen argues for a desperate, necessary balance between the two. Furthermore, the novel is a searing, deeply angry critique of the brutal economics of the marriage market, where women are traded like commodities and men like Willoughby are rewarded for their cruelty with wealthy heiresses. It is a sharp, deeply moving, and brilliantly observed classic."
  },
  {
    title: "The Magic Mountain",
    author: "Thomas Mann",
    publishYear: 1924,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Magic+Mountain",
    theGood: "A towering, intellectually staggering masterpiece. The novel flawlessly captures the diseased, decaying psychology of Europe on the absolute brink of World War I.",
    theBad: "It is incredibly dense, slow-moving, and requires immense patience. The novel is dominated by massive, 50-page philosophical debates regarding time, disease, humanism, and totalitarianism.",
    review: "Thomas Mann’s *The Magic Mountain* (*Der Zauberberg*) is the ultimate novel of ideas, a massive, philosophical colossus that serves as a profound autopsy of pre-World War I European civilization. The premise is deceptively simple: Hans Castorp, an ordinary, fiercely pragmatic young German engineer, travels to a high-altitude tuberculosis sanatorium in the Swiss Alps to visit his cousin for three weeks. Upon arrival, he is diagnosed with a mild bronchial infection and ends up staying for seven years.\n\nMann brilliantly utilizes the isolated, deeply weird, and fundamentally diseased environment of the sanatorium as a microcosm for the entirety of Western culture. In this hyper-rarefied air, time completely loses its meaning; patients measure their lives not by years, but by their daily temperature readings and resting periods. Castorp, acting as a blank slate, is pulled between the massive, warring ideologies of the 20th century, represented by two brilliant, deeply flawed mentors. Settembrini is a fiercely rational, progressive Italian humanist who believes in the inevitable triumph of democracy and science. Naphta is a terrifying, highly intelligent Jesuit radical who advocates for absolute totalitarianism, terror, and the beauty of suffering.\n\nThe novel is an incredibly demanding, deeply rewarding exploration of how illness, death, and isolation strip away the superficial concerns of society, forcing humanity to confront its core philosophical beliefs. As Castorp descends into a hypnotic, detached state of intellectual and erotic obsession (with the enigmatic Madame Chauchat), the reader realizes that the 'magic mountain' is a paralyzing trap. The novel's shattering conclusion, where Castorp is violently expelled from his philosophical dream state straight into the mechanized slaughter of the trenches in 1914, is a devastating commentary on the tragic failure of European intellectualism. It is a monumental, essential work of modernism."
  },
  {
    title: "Death in Venice",
    author: "Thomas Mann",
    publishYear: 1912,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Death+in+Venice",
    theGood: "A perfect, suffocatingly beautiful novella. Mann’s prose is incredibly lush and highly symbolic, creating a terrifying atmosphere of decay and obsession.",
    theBad: "The central premise—an aging man's obsessive, unconsummated stalking of a young boy—is inherently deeply uncomfortable and disturbing.",
    review: "Before the massive scale of *The Magic Mountain*, Thomas Mann wrote *Death in Venice* (*Der Tod in Venedig*), a tight, intensely focused, and suffocatingly atmospheric novella regarding the complete collapse of artistic discipline in the face of consuming, irrational desire. The protagonist, Gustav von Aschenbach, is a highly respected, fiercely disciplined, and aging German author who has dedicated his entire life to classical logic, moral rigidity, and the pursuit of objective beauty. Seeking a cure for writer's block, he travels to Venice.\n\nIn Venice, a city slowly sinking into the lagoon and secretly suffering from an outbreak of cholera, Aschenbach becomes intensely, silently obsessed with Tadzio, a breathtakingly beautiful 14-year-old Polish boy staying at his hotel. Mann does not depict this obsession as a standard romance, but as an overwhelming, terrifying confrontation with the Dionysian forces of chaos and pure aesthetic perfection that Aschenbach has spent his entire life repressing. Aschenbach never actually speaks to the boy; he simply stalks him through the diseased, labyrinthine streets of Venice.\n\nThe novella is a brilliant, highly symbolic exploration of the fatal tension between Apollonian order (reason, discipline) and Dionysian excess (passion, disease). As Aschenbach attempts to artificially restore his youth with grotesque cosmetics and refuses to leave the infected city, his dignified, highly ordered life collapses into complete, pathetic degradation. Mann’s prose is incredibly dense, mythological, and deeply melancholic, perfectly mirroring the oppressive, sickly heat of the Venetian sirocco wind. It is a profound, terrifying masterpiece regarding the destructive power of beauty."
  },
  {
    title: "A Passage to India",
    author: "E.M. Forster",
    publishYear: 1924,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Passage+to+India",
    theGood: "A brilliant, deeply nuanced exploration of the sheer impossibility of genuine connection under the crushing weight of British colonialism. The atmosphere is masterful.",
    theBad: "The narrative significantly loses momentum and focus in the final 'Hindu' section after the intense courtroom drama of the middle act is resolved.",
    review: "E.M. Forster’s *A Passage to India* is widely considered the definitive British novel regarding the Raj, a profound, deeply pessimistic exploration of the absolute failure of cross-cultural understanding within a colonial hierarchy. Set against the backdrop of the Indian independence movement in the 1920s, the novel begins with a seemingly simple question: 'Is it possible for an Englishman and an Indian to be friends?' The narrative focuses on Dr. Aziz, a warm, emotional, and highly intelligent Indian Muslim physician, and Cyril Fielding, a pragmatic, liberal British schoolmaster who genuinely attempts to transcend the intense racism of his peers.\n\nThe fragile possibility of their friendship is completely shattered by the arrival of Adela Quested, a naive, well-meaning Englishwoman who wants to see 'the real India.' During an expedition to the mysterious, ancient Marabar Caves, an unexplained incident occurs in the oppressive, echoing darkness of a cave, leading Adela to accuse Dr. Aziz of attempted assault. This accusation immediately ignites the latent, terrified racism of the British colonial elite, who violently unite against the entire Indian population.\n\nForster’s true genius is his utilization of the Marabar Caves not merely as a plot device, but as a terrifying, existential void. The caves possess an echo that reduces all sounds—whether a curse or a poem—to the exact same, meaningless 'boum.' This echo represents the vast, indifferent antiquity of India itself, completely rejecting both British attempts to organize it and human attempts to find universal meaning within it. The novel is a brilliant, deeply sad autopsy of imperialism, concluding that as long as the master-subject dynamic exists, genuine human connection is fundamentally, tragically impossible."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 3 chunk 2 (12 books)...');
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
  console.log(`Done. Added ${added} books. Batch 3 (25 books) fully completed!`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
