const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Crying of Lot 49",
    author: "Thomas Pynchon",
    publishYear: 1966,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Lot+49",
    theGood: "A brilliant, hyper-condensed introduction to postmodern paranoia. Pynchon’s prose is dizzying and fiercely intelligent.",
    theBad: "The sheer density of obscure historical and cultural references can make it deeply alienating.",
    review: "Thomas Pynchon’s The Crying of Lot 49 is a surreal, deeply paranoid novella that serves as the perfect distillation of 1960s American anxiety. The story follows Oedipa Maas, a suburban housewife who is named co-executor of her ex-boyfriend's massive, labyrinthine estate. In the process of untangling his assets, she uncovers what may be a centuries-old underground postal delivery service called the Tristero, operating in direct, violent opposition to the U.S. monopoly.\n\nHowever, Pynchon’s true genius is epistemological ambiguity: the reader, along with Oedipa, can never definitively determine whether the Tristero actually exists, or if Oedipa is simply experiencing a highly elaborate hallucination induced by grief and suburban isolation. The novel is a masterpiece of information overload, satirizing the human desperation to find meaningful patterns in completely random noise. It is brief, intensely weird, and highly influential."
  },
  {
    title: "Gravity's Rainbow",
    author: "Thomas Pynchon",
    publishYear: 1973,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Gravitys+Rainbow",
    theGood: "A staggering, encyclopedic colossus of a novel that completely redefines the boundaries of American literature.",
    theBad: "It is famously impenetrable. The massive cast, non-linear structure, and wildly digressive prose require intense, dedicated study.",
    review: "To describe the plot of Thomas Pynchon’s Gravity’s Rainbow is to almost entirely miss the point of reading it. Set primarily in Europe at the very end of World War II, the narrative nominally centers on the V-2 rocket program and an American soldier named Tyrone Slothrop, whose sexual encounters inexplicably predict the exact strike locations of German V-2 rockets in London.\n\nWhat unfolds is a massive, incredibly complex autopsy of the military-industrial complex, behavioral psychology, quantum mechanics, and the dark, terrifying intersection of human sexuality and mass death. Pynchon’s prose is breathtakingly diverse, constantly shifting from high-minded philosophical treatises to slapstick comedy, musical numbers, and grotesque obscenity within a single page. It is a novel that aggressively resists interpretation, demanding that the reader surrender to its overwhelming paranoia and sheer, terrifying brilliance. It is the Mount Everest of postmodern literature."
  },
  {
    title: "Blood Meridian",
    author: "Cormac McCarthy",
    publishYear: 1985,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Blood+Meridian",
    theGood: "Perhaps the greatest American novel since Moby-Dick. Judge Holden is the most terrifying literary creation of the 20th century.",
    theBad: "The sheer volume of graphic, relentless, and senseless violence makes it an agonizingly difficult read for many.",
    review: "Cormac McCarthy’s Blood Meridian; or, The Evening Redness in the West is an anti-Western of terrifying, apocalyptic power. It entirely strips the American frontier of its romanticized mythology, revealing it instead as a charnel house built on genocide and greed. Based on historical events, the novel follows 'the kid,' a nameless teenager who joins the Glanton gang, a group of ruthless scalp hunters paid by the Mexican government to exterminate Apache populations in the 1840s.\n\nThe undeniable, horrifying core of the novel is Judge Holden—a massive, completely hairless, highly educated polymath who serves as the gang's spiritual leader. The Judge is the physical embodiment of war and nihilism; he murders children casually, fiddles beautifully, and argues that violence is the only true language of the universe. McCarthy’s prose is intensely biblical and devoid of traditional punctuation, lending the horrific slaughter a strange, terrifyingly beautiful majesty. It is a punishing, monumental masterpiece."
  },
  {
    title: "The Road",
    author: "Cormac McCarthy",
    publishYear: 2006,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Road",
    theGood: "A devastating, emotionally shattering exploration of paternal love set against a perfectly realized, bleak apocalypse.",
    theBad: "It is overwhelmingly depressing, offering no explanations and almost zero hope for humanity's future.",
    review: "Cormac McCarthy’s Pulitzer Prize-winning The Road is the apocalypse stripped down to its bare, ash-covered bones. An unnamed catastrophe has destroyed the biosphere; the sky is permanently dark, nothing grows, and the few remaining humans have largely turned to cannibalism to survive. Against this utterly hopeless backdrop, a nameless father and his young son walk south toward the coast, pushing their few belongings in a shopping cart.\n\nThe novel is a terrifying distillation of the terrible burden of love. The father knows they are almost certainly going to die, and his primary concern is ensuring his son does not fall into the hands of the 'bad guys,' keeping a pistol with two bullets just in case. Yet, the boy serves as the father's—and the reader's—only tether to morality, fiercely insisting that they must 'carry the fire' of humanity. The sparse, desolate prose perfectly matches the dead landscape. It is a brief, agonizing, and profoundly beautiful novel."
  },
  {
    title: "No Country for Old Men",
    author: "Cormac McCarthy",
    publishYear: 2005,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=No+Country+for+Old+Men",
    theGood: "A tightly paced, incredibly suspenseful neo-Western thriller that also serves as a profound meditation on aging and inevitable violence.",
    theBad: "The narrative purposefully subverts the traditional thriller climax, leaving many readers deeply unsatisfied by the resolution.",
    review: "Originally conceived as a screenplay, Cormac McCarthy’s No Country for Old Men is the author’s most accessible, relentlessly paced novel. Set along the Texas-Mexico border in 1980, the plot is ignited when Llewelyn Moss, a welder hunting antelope, stumbles upon the aftermath of a bloody drug deal gone wrong and decides to take a briefcase containing two million dollars. He is immediately hunted by Anton Chigurh, an unstoppable, deeply philosophical hitman who views himself as an instrument of fate.\n\nWhile the cat-and-mouse pursuit between Moss and Chigurh provides the thriller mechanics, the true heart of the novel belongs to Sheriff Ed Tom Bell. Bell is a decent, aging lawman who is deeply traumatized by his realization that he is completely ill-equipped to combat the sheer, senseless brutality of the modern world (represented by Chigurh). The novel's refusal to offer a traditional heroic victory is brilliant, forcing the reader to sit with the terrifying truth that some evil simply cannot be stopped or understood."
  },
  {
    title: "Suttree",
    author: "Cormac McCarthy",
    publishYear: 1979,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Suttree",
    theGood: "A lush, darkly hilarious, and deeply moving portrait of outcasts and drunks. It is McCarthy's most humane and autobiographical work.",
    theBad: "It lacks a cohesive plot, reading more like a series of heavily atmospheric vignettes along the Tennessee River.",
    review: "Often considered Cormac McCarthy's hidden masterpiece, Suttree is a massive departure from the apocalyptic violence of his later works. Set in the early 1950s in Knoxville, Tennessee, the novel follows Cornelius Suttree, a highly educated man from a prominent family who has abandoned his privilege to live on a dilapidated houseboat, making a meager living catching catfish in the polluted Tennessee River.\n\nThe novel is a sprawling, episodic portrait of the river's underclass—a Dickensian cast of prostitutes, petty thieves, drunks, and misfits, most notably the deeply tragic, hilariously inept Gene Harrogate. McCarthy’s prose here is lush, Joycean, and intensely poetic, capturing the sweltering heat, the stench of the river, and the agonizing weight of Suttree's unspoken grief. It is a profoundly funny, melancholic exploration of a man actively attempting to dismantle his own life, and the strange grace he finds among society’s outcasts."
  },
  {
    title: "Infinite Jest",
    author: "David Foster Wallace",
    publishYear: 1996,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Infinite+Jest",
    theGood: "A towering, devastatingly brilliant exploration of addiction, entertainment, and the agonizing loneliness of modern American life.",
    theBad: "The 1,000-page length and the 388 incredibly dense endnotes require a monumental commitment and significant patience.",
    review: "David Foster Wallace’s Infinite Jest is the defining novel of the 1990s, a colossal, hyper-articulate masterpiece that terrifyingly predicted the modern era's paralyzing addiction to entertainment. Set in a near-future 'Subsidized Time' where years are sponsored by corporations (e.g., The Year of the Depend Adult Undergarment), the novel circles around a piece of media known as 'The Entertainment'—a film so intensely pleasurable that anyone who watches it immediately loses all desire to do anything else, eventually dying of starvation.\n\nThe narrative primarily shifts between the Enfield Tennis Academy, an elite institution focused on creating robotic excellence, and the Ennet House Drug and Alcohol Recovery House just down the hill. Wallace’s deep, intensely empathetic exploration of addiction—not just to substances, but to irony, perfectionism, and entertainment itself—is the beating heart of the book. The prose is famously labyrinthine, requiring the reader to constantly flip to the extensive endnotes, structurally mimicking the constant distraction of modern life. It is a massive, deeply sad, and absolutely brilliant achievement."
  },
  {
    title: "White Noise",
    author: "Don DeLillo",
    publishYear: 1985,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=White+Noise",
    theGood: "A razor-sharp, eerily prophetic satire of consumerism, academia, and the American obsession with mortality.",
    theBad: "The dialogue is intentionally highly stylized and artificial, which can make the characters feel emotionally distant.",
    review: "Don DeLillo’s White Noise is a brilliant, dark comedy that perfectly captures the profound, existential dread underlying mid-century American consumerism. The novel follows Jack Gladney, a professor who essentially invented 'Hitler Studies' at his picturesque Midwestern college, despite not knowing how to speak German. Jack and his wife, Babette, are obsessed with death, a fear they attempt to mitigate by shopping at the massive, fluorescently lit supermarket.\n\nThe novel’s central event, the 'Airborne Toxic Event'—a massive chemical spill that forces the town to evacuate—is treated by the characters primarily as a media spectacle rather than a physical danger. DeLillo uses this event to brilliantly satirize how Americans process tragedy through the numbing filter of television and bureaucracy. The 'white noise' of the title refers to the constant hum of advertisements, radio broadcasts, and consumer goods that we use to drown out our inevitable mortality. It is a sharp, terrifyingly prescient masterpiece of postmodern literature."
  },
  {
    title: "Underworld",
    author: "Don DeLillo",
    publishYear: 1997,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Underworld",
    theGood: "A staggering, symphonic history of the Cold War era. The opening prologue regarding the 'Shot Heard 'Round the World' is flawless.",
    theBad: "The massive, non-linear structure and shifting perspectives demand intense focus across its 800 pages.",
    review: "Don DeLillo’s Underworld is a massive, ambitious attempt to map the secret history of the United States during the second half of the 20th century. The novel famously opens with a breathtaking 60-page prologue set during the 1951 National League pennant winner between the Giants and the Dodgers. DeLillo brilliantly interweaves the joy of the baseball game (the 'Shot Heard 'Round the World') with the simultaneous, terrifying announcement that the Soviet Union has successfully tested an atomic bomb.\n\nFrom there, the narrative moves backward in time, tracing the journey of the winning baseball through various hands over the decades, using it as a vehicle to explore the pervasive, paranoid psychology of the Cold War. DeLillo is obsessed with the concept of 'waste'—both the physical garbage America produces and the buried, repressed secrets of its citizens. The prose is incredibly rhythmic and precise, transforming the mundane details of American life into profound, melancholy poetry. It is the definitive novel of the American atomic age."
  },
  {
    title: "The Corrections",
    author: "Jonathan Franzen",
    publishYear: 2001,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Corrections",
    theGood: "A masterclass in domestic realism. Franzen dissects the terrifying dysfunction of the Midwestern family with surgical precision.",
    theBad: "The characters are frequently awful to one another, making it a heavy, deeply cynical reading experience.",
    review: "Jonathan Franzen’s The Corrections reinvigorated the grand, social-realist family novel for the 21st century. The story centers on the Lamberts, a deeply repressed, fractured Midwestern family. The matriarch, Enid, has one desperate, driving goal: to gather her husband (who is rapidly declining from Parkinson’s disease) and her three adult children in their childhood home for one last 'normal' Christmas.\n\nFranzen brilliantly utilizes the three children—Gary, an incredibly depressed, wealthy banker; Chip, a disgraced academic attempting to write a screenplay; and Denise, a successful chef self-destructing her personal life—to satirize various aspects of late-90s American culture, from rampant consumerism to the pharmaceutical industry. The genius of the novel lies in Franzen’s ability to deeply empathize with his characters even as he ruthlessly exposes their selfishness and hypocrisy. The depiction of Alfred Lambert's terrifying mental decline is handled with profound, agonizing grace. It is a brilliant, funny, and deeply sad novel."
  },
  {
    title: "The Secret History",
    author: "Donna Tartt",
    publishYear: 1992,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Secret+History",
    theGood: "The undisputed blueprint for the 'Dark Academia' genre. The prose is intoxicating, and the reverse murder-mystery structure is flawless.",
    theBad: "The characters are impossibly pretentious and insulated, which can alienate readers seeking relatable protagonists.",
    review: "Donna Tartt’s debut novel, The Secret History, operates as a reverse 'whodunit.' In the very first pages, the narrator, Richard Papen, casually informs the reader that he and his friends murdered their classmate, 'Bunny' Corcoran. The remainder of the 500-page novel is dedicated to answering the far more terrifying question: *why* did they do it?\n\nSet at an elite, picturesque New England college, the novel follows Richard, a desperate outsider who manages to infiltrate a deeply insulated, elitist group of students studying Ancient Greek under a charismatic, highly manipulative professor. Obsessed with achieving the 'Dionysian frenzy' described in Greek tragedy, the group crosses a terrifying moral threshold. Tartt’s prose is incredibly lush and atmospheric, perfectly capturing the intoxicating, dangerous allure of unchecked intellectualism isolated from real-world consequences. The true horror of the novel lies in the chillingly mundane, bureaucratic manner in which the students plot the murder of their friend. It is a brilliant, hypnotic masterpiece."
  },
  {
    title: "The Goldfinch",
    author: "Donna Tartt",
    publishYear: 2013,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Goldfinch",
    theGood: "A sweeping, Dickensian saga about art, trauma, and the incredible, chaotic friend character of Boris.",
    theBad: "The middle section set in Las Vegas drags considerably, and the final philosophical essay feels somewhat unearned.",
    review: "Donna Tartt’s Pulitzer Prize-winning The Goldfinch is a massive, sprawling homage to the 19th-century Dickensian novel. The story begins with a catastrophic terrorist bombing at the Metropolitan Museum of Art in New York, which kills the mother of 13-year-old Theo Decker. In the chaotic aftermath, a dying stranger urges Theo to take a priceless Dutch masterpiece, Carel Fabritius's *The Goldfinch*. Theo's desperate concealment of this painting anchors the rest of his turbulent life.\n\nThe novel is incredibly successful when it focuses on the profound, suffocating weight of Theo's grief and the bizarre surrogate families he acquires. The lengthy section where Theo lives in a desolate, abandoned housing development in Las Vegas with his chaotic, fiercely loyal Ukrainian friend Boris is a highlight of modern literature. However, the novel's massive 800-page runtime occasionally sags under its own weight, particularly during a sudden shift into a European crime thriller in the third act. Despite its structural flaws, the sheer beauty of Tartt’s prose makes it a highly compelling, emotional journey."
  },
  {
    title: "Middlesex",
    author: "Jeffrey Eugenides",
    publishYear: 2002,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Middlesex",
    theGood: "A staggeringly empathetic, beautifully structured epic that seamlessly blends genetics, immigration history, and gender identity.",
    theBad: "The incestuous history of the grandparents may be uncomfortable for some readers.",
    review: "Jeffrey Eugenides’ Middlesex is a colossal, fiercely original achievement that manages to combine a sprawling Greek-American immigration saga with a deeply intimate coming-of-age story regarding intersex identity. The narrator, Cal Stephanides, brilliantly opens the novel: 'I was born twice: first, as a baby girl, on a remarkably smogless Detroit day in January of 1960; and then again, as a teenage boy, in an emergency room near Petoskey, Michigan, in August of 1974.'\n\nTo explain how he arrived at this point, Cal must trace the journey of a mutated gene across three generations. The novel sweeps from the burning of Smyrna in 1922 to the booming, industrial rise of Detroit, and the eventual race riots of 1967. Eugenides handles the complex, sensitive subject of Cal’s intersex condition (5-alpha-reductase deficiency) with profound grace and scientific precision, never treating it as a tragic medical anomaly, but as a unique, powerful lens through which to view the fluidity of human experience. It is a compassionate, brilliant, and sweeping masterpiece."
  },
  {
    title: "The Virgin Suicides",
    author: "Jeffrey Eugenides",
    publishYear: 1993,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Virgin+Suicides",
    theGood: "The collective 'we' narration is a stroke of genius. It perfectly captures the suffocating mystery of adolescence and suburban decay.",
    theBad: "It offers absolutely no answers or closure regarding the central tragedy, which is the point, but can be frustrating.",
    review: "Jeffrey Eugenides’ debut novel, The Virgin Suicides, is a haunting, intensely atmospheric autopsy of American suburbia. Set in a decaying, elm-shaded neighborhood in 1970s Michigan, the novel details the inexplicable suicides of all five teenage Lisbon sisters over the course of a single year. \n\nThe true brilliance of the novel is its narrative perspective. It is told from the collective 'we' perspective of the neighborhood boys, now middle-aged men, who are still obsessively trying to piece together why the girls died using salvaged diaries, medical records, and faded photographs. Because the girls are only ever viewed through the heavily romanticized, fundamentally ignorant gaze of adolescent boys, they remain terrifyingly unknowable. The novel is not actually about the Lisbon sisters; it is about the male gaze, the terror of female adolescence, and the slow, inevitable decay of the American Dream. It is a beautiful, deeply melancholic book."
  },
  {
    title: "A Little Life",
    author: "Hanya Yanagihara",
    publishYear: 2015,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=A+Little+Life",
    theGood: "An overwhelming, completely immersive emotional experience. The depth of the friendships portrayed is incredibly moving.",
    theBad: "The sheer volume of unrelenting, extreme trauma inflicted upon the protagonist frequently borders on 'trauma porn' and misery exploitation.",
    review: "Hanya Yanagihara’s A Little Life is arguably the most divisive, emotionally devastating novel of the 21st century. The story initially presents itself as a standard post-college narrative, following four friends—Jude, Willem, JB, and Malcolm—as they attempt to establish successful careers in New York City. However, the novel rapidly shifts focus entirely onto Jude, a brilliant, deeply secretive lawyer suffering from horrific, mysterious physical and psychological trauma.\n\nThe novel is a grueling endurance test. Yanagihara methodically reveals the utterly grotesque, escalating abuse Jude suffered in his childhood, and details his present-day struggles with severe self-harm. What makes the book so compelling, and so devastating, is that it fundamentally rejects the traditional narrative of healing and redemption. It poses the terrifying question of whether some trauma is simply too profound to ever be fixed, even by the most unconditional, overwhelming love of friends. While many critics rightfully argue the suffering is aggressively manipulative and excessive, its ability to completely shatter the reader's emotional defenses is undeniable."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 2 chunk 2 (15 books)...');
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
