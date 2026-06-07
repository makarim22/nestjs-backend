const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Eye of the World",
    author: "Robert Jordan",
    publishYear: 1990,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Eye+of+the+World",
    theGood: "A magnificent, sweeping introduction to one of the most meticulously crafted fantasy worlds ever built.",
    theBad: "The first half leans heavily on Tolkien tropes before eventually establishing its own unique identity.",
    review: "Robert Jordan’s The Eye of the World is the foundational first step into the monumental Wheel of Time series. The novel begins in the idyllic, isolated village of Emond's Field, where three young men—Rand, Mat, and Perrin—are suddenly thrust into a continent-spanning conflict when their home is attacked by monstrous Trollocs. Guided by Moiraine, a powerful magic-user of the Aes Sedai, they embark on a desperate flight across the world.\n\nWhile the plot deliberately mirrors the structure of The Lord of the Rings to ease readers into the genre, Jordan's world-building quickly proves to be vast and entirely original. The magic system (the One Power) is strictly gendered and politically fraught, as male channelers are doomed to go violently insane. The novel excels at portraying the sheer terror and confusion of simple country youths encountering ancient myths made real. It is a slow, methodical, and immensely rewarding start to an epic journey."
  },
  {
    title: "Foundation",
    author: "Isaac Asimov",
    publishYear: 1951,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Foundation",
    theGood: "A staggering intellectual achievement. The concept of 'psychohistory' remains one of the most brilliant ideas in science fiction.",
    theBad: "The narrative is incredibly dry, consisting almost entirely of men in rooms having intense political debates. Characterization is nearly non-existent.",
    review: "Isaac Asimov’s Foundation is not an action novel; it is a sprawling, multi-generational political and sociological puzzle. Based heavily on Edward Gibbon's The History of the Decline and Fall of the Roman Empire, the novel is set in a Galactic Empire that has ruled millions of worlds for 12,000 years. Mathematician Hari Seldon develops 'psychohistory,' a science that can predict the behavior of massive populations, and foresees the inevitable, catastrophic collapse of the Empire, followed by 30,000 years of dark ages.\n\nTo mitigate this disaster, Seldon establishes the Foundation, a colony of scientists at the edge of the galaxy tasked with preserving human knowledge. The book is structured as a series of interconnected novellas spanning centuries, each dealing with a specific 'Seldon Crisis'—a historical bottleneck that can only be solved in one specific, often non-violent way. Asimov’s thesis is that intellect and economic pressure are far more powerful forces than military might. It is a purely cerebral, visionary masterpiece."
  },
  {
    title: "I, Robot",
    author: "Isaac Asimov",
    publishYear: 1950,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=I,+Robot",
    theGood: "A brilliant series of logical puzzles that practically invented the modern ethical discourse surrounding artificial intelligence.",
    theBad: "The prose is highly functional, and some of the gender dynamics reflect the mid-century era in which it was written.",
    review: "Unlike the action-heavy blockbuster film that bears its name, Isaac Asimov’s original I, Robot is a collection of interconnected short stories framed as an interview with Dr. Susan Calvin, a pioneering 'robopsychologist.' The book is famously built entirely around the Three Laws of Robotics—a set of ethical safeguards hardwired into every positronic brain to prevent machines from harming humans.\n\nAsimov does not treat the Laws as magical solutions; instead, he treats them as complex, highly flawed legal statutes. Every story in the collection is essentially a locked-room mystery or a logical paradox arising from conflicts between the Three Laws. What happens when a robot is ordered to do something dangerous (Law 2), but must also protect its own existence (Law 3)? What happens when a robot lies to protect a human's feelings (Law 1)? By interrogating his own rules, Asimov elevated robots from B-movie monsters into profound mirrors reflecting human morality and logic."
  },
  {
    title: "Rendezvous with Rama",
    author: "Arthur C. Clarke",
    publishYear: 1973,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Rendezvous+with+Rama",
    theGood: "The ultimate 'Big Dumb Object' sci-fi novel. The sense of scale, wonder, and scientific realism is absolutely unparalleled.",
    theBad: "There is almost zero character development or interpersonal conflict. The humans are merely vehicles to explore the alien geometry.",
    review: "Arthur C. Clarke’s Rendezvous with Rama is a masterpiece of hard science fiction that relies entirely on the sheer, terrifying awe of the unknown. In the 22nd century, a massive, perfectly cylindrical object—fifty kilometers long—enters the solar system. Named 'Rama,' it is clearly an interstellar spacecraft. A human crew is dispatched to intercept and explore it before it slingshots around the sun and leaves forever.\n\nWhat makes the novel so brilliant is its absolute lack of cinematic cliches. There are no laser battles, no evil alien empires, and no dramatic interstellar wars. The tension arises entirely from the agonizingly slow, methodical scientific exploration of Rama’s interior. Clarke’s descriptions of the physics of a massive, spinning cylinder—where gravity is generated by centrifugal force and a circular 'Cylindrical Sea' cuts across the middle—are breathtaking. The ultimate revelation is chilling in its sheer indifference: the Ramans do not care about humanity at all. We are simply a speck on their windshield. It is a profound, awe-inspiring book."
  },
  {
    title: "The Pillars of the Earth",
    author: "Ken Follett",
    publishYear: 1989,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Pillars+of+the+Earth",
    theGood: "A magnificent, sprawling historical epic that makes the architectural details of cathedral building incredibly thrilling.",
    theBad: "The villains are often cartoonishly evil, engaging in relentless, escalating acts of sadism that can become exhausting over 1,000 pages.",
    review: "Ken Follett’s The Pillars of the Earth is a massive, multi-generational historical epic set in 12th-century England during a period of civil war known as the Anarchy. However, the true narrative center of the book is not the warring monarchs, but the decades-long construction of a Gothic cathedral in the fictional town of Kingsbridge. \n\nFollett manages to turn the mechanics of medieval architecture—vaulting, flying buttresses, and the cutting of stone—into high-stakes drama. The novel follows a massive cast of characters, including Tom Builder, a deeply passionate master mason; Prior Philip, a brilliant and politically savvy monk; and Aliena, a disgraced noblewoman turned successful wool merchant. Against them are arrayed some of the most despicable, ruthless villains in historical fiction, notably the sadistic William Hamleigh and the corrupt Bishop Waleran. It is a relentlessly paced, sweeping melodrama that immerses the reader completely in the mud, blood, and soaring ambition of the Middle Ages."
  },
  {
    title: "Wolf Hall",
    author: "Hilary Mantel",
    publishYear: 2009,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Wolf+Hall",
    theGood: "A staggering literary achievement. Mantel’s prose completely revolutionizes the historical fiction genre, making the Tudor court feel fiercely modern.",
    theBad: "Mantel’s frequent use of the ambiguous pronoun 'he' to refer to Cromwell can make the dense political dialogue difficult to track initially.",
    review: "Hilary Mantel’s Booker Prize-winning Wolf Hall is a total deconstruction and resurrection of the Tudor historical novel. Instead of focusing on the volatile King Henry VIII or the tragic Anne Boleyn, Mantel centers the narrative entirely on Thomas Cromwell, a man historically reviled as a corrupt, ruthless architect of the English Reformation. \n\nIn Mantel’s hands, Cromwell is a fascinating, fiercely intelligent protagonist—a blacksmith’s son who rose to become the second most powerful man in England entirely through his wits, pragmatism, and terrifying competence. The prose is written in a tight, immediate present tense, stripping away the dusty, theatrical distance of traditional historical fiction. We are placed directly behind Cromwell’s eyes as he navigates the lethal, paranoid labyrinth of the King's 'Great Matter' (his divorce from Katherine of Aragon). Mantel’s depiction of Sir Thomas More not as a saintly martyr, but as a rigid, cruel fanatic, is a brilliant historical subversion. It is a dense, political masterpiece."
  },
  {
    title: "The Shadow of the Wind",
    author: "Carlos Ruiz Zafón",
    publishYear: 2001,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Shadow+of+the+Wind",
    theGood: "A lush, gothic love letter to literature and the city of Barcelona. The intertwining mysteries are incredibly atmospheric and deeply romantic.",
    theBad: "The dialogue often veers into heavy melodrama, and the female characters are frequently reduced to tragic muses.",
    review: "Carlos Ruiz Zafón’s The Shadow of the Wind is a sprawling, gothic mystery that celebrates the profound, almost magical power of books. Set in Barcelona in the aftermath of the Spanish Civil War, the story begins when a young boy named Daniel Sempere is taken by his bookseller father to the 'Cemetery of Forgotten Books,' a massive, labyrinthine library holding books that the world has left behind.\n\nDaniel chooses a novel called The Shadow of the Wind by an obscure author named Julián Carax. He soon discovers that a terrifying, faceless man is systematically tracking down and burning every single copy of Carax’s work. Daniel’s quest to uncover Carax’s tragic, doomed history slowly begins to mirror his own life. Zafón’s prose is incredibly rich, melancholic, and deeply atmospheric, turning the foggy, scarred streets of Barcelona into a central character. It is an intricate, highly emotional thriller that feels like a classic 19th-century melodrama infused with modern pacing."
  },
  {
    title: "A Tale of Two Cities",
    author: "Charles Dickens",
    publishYear: 1859,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Tale+of+Two+Cities",
    theGood: "The definitive novel of the French Revolution. The climax is a soaring, emotionally devastating piece of literary heroism.",
    theBad: "The central romance is incredibly dull, and Charles Darnay is perhaps the least interesting protagonist in the Dickens canon.",
    review: "Charles Dickens’ A Tale of Two Cities opens with the most famous paragraph in the English language ('It was the best of times, it was the worst of times...'), immediately establishing its massive, sweeping scope. Moving between the relative peace of London and the blood-soaked terror of Revolutionary Paris, the novel is a searing examination of societal inequality and the terrifying, uncontrollable momentum of mob violence.\n\nWhile the primary plot revolves around the rescue of Dr. Manette from the Bastille and the subsequent danger facing his son-in-law, Charles Darnay, the true soul of the novel belongs to two vastly different characters. First, Madame Defarge, the terrifying, knitting embodiment of the revolution's merciless vengeance. Second, Sydney Carton, the cynical, alcoholic lawyer who believes his life is entirely worthless. The novel's climax, driven by Carton’s profound, unrequited love, is a masterclass in tragic redemption. Dickens expertly balances grand historical terror with deeply intimate sacrifice."
  },
  {
    title: "Great Expectations",
    author: "Charles Dickens",
    publishYear: 1861,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Great+Expectations",
    theGood: "Dickens’ most mature, psychologically complex work. The critique of the British class system is razor-sharp and deeply moving.",
    theBad: "Pip’s snobbery in the middle act makes him intensely unlikable for a significant portion of the narrative.",
    review: "Great Expectations is often considered Charles Dickens’ finest achievement, a deeply autobiographical coming-of-age story (Bildungsroman) that violently dismantles the Victorian obsession with inherited wealth and social class. The novel follows Pip, an orphaned boy raised in poverty by his abusive sister and his deeply kind brother-in-law, Joe Gargery. Pip’s life is altered by two traumatic encounters: aiding an escaped convict on the freezing marshes, and being invited to the decaying, gothic Satis House to play for the wealthy, embittered Miss Havisham and her beautiful, cruel ward, Estella.\n\nWhen Pip suddenly receives a massive fortune from an anonymous benefactor, he moves to London to become a 'gentleman,' abandoning the people who truly love him in pursuit of a shallow, aristocratic illusion. The eventual, terrifying revelation of his benefactor’s identity shatters Pip’s entire worldview. Dickens uses this narrative to brutally expose the hollowness of high society. The character of Miss Havisham, frozen in her wedding dress, remains one of the greatest, most tragic creations in literature. It is a profound, beautifully written novel about shame, love, and true nobility."
  },
  {
    title: "The Count of Monte Cristo",
    author: "Alexandre Dumas",
    publishYear: 1844,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Monte+Cristo",
    theGood: "The ultimate, undisputed masterclass in revenge literature. The intricate, decades-long plotting is immensely satisfying.",
    theBad: "The sheer volume of characters, aliases, and Parisian social politics can be overwhelming in the massive, unabridged version.",
    review: "Alexandre Dumas’ The Count of Monte Cristo is arguably the most entertaining adventure novel ever written. It is the story of Edmond Dantès, an innocent, naive young sailor who is betrayed by jealous rivals and falsely imprisoned in the terrifying island fortress of the Château d'If on the eve of his wedding. After spending fourteen agonizing years in a dungeon, he escapes, uncovers a massive hidden treasure, and reinvents himself as the mysterious, omnipotent Count of Monte Cristo.\n\nDantès does not merely kill his enemies; he uses his limitless wealth and terrifying patience to systematically dismantle their lives, destroying their finances, their families, and their sanity. The narrative is an incredibly intricate, clockwork machine of retribution. However, Dumas elevates the material beyond simple pulp by exploring the immense psychological cost of playing God. As the Count's vengeance spirals out of control, inevitably harming the innocent, he is forced to reckon with the limits of human justice. It is a sprawling, addictive, and deeply satisfying epic."
  },
  {
    title: "Les Misérables",
    author: "Victor Hugo",
    publishYear: 1862,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Les+Miserables",
    theGood: "A monumental, overwhelmingly powerful epic regarding grace, justice, and the resilience of the human spirit.",
    theBad: "Hugo’s infamous, 50-page digressions on the Battle of Waterloo or the Parisian sewer system severely disrupt the narrative pacing.",
    review: "Victor Hugo’s Les Misérables is not merely a novel; it is an exhaustive, encyclopedic monument to 19th-century France. At its core, it is the story of Jean Valjean, an ex-convict who spent nineteen years in a brutal prison simply for stealing a loaf of bread to feed his sister's starving children. Upon his release, an act of astonishing, unmerited grace from a bishop completely shatters Valjean’s hardened soul, prompting a lifelong, agonizing quest for moral redemption.\n\nValjean is relentlessly hunted by Inspector Javert, a man whose rigid, fanatical adherence to the letter of the law renders him completely incapable of understanding mercy. The novel weaves Valjean's journey with the tragic descent of Fantine and the doomed student rebellion of 1832. While Hugo’s massive, rambling digressions into history, architecture, and politics require immense patience, they serve to ground the intimate human tragedy within a vast, living society. The novel is a profound, sprawling argument that social inequality is the true architect of crime, and that love is the ultimate act of divine rebellion."
  },
  {
    title: "Anna Karenina",
    author: "Leo Tolstoy",
    publishYear: 1877,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Anna+Karenina",
    theGood: "Perhaps the greatest, most psychologically realistic novel ever written. The depth of characterization is absolutely staggering.",
    theBad: "Levin’s lengthy, heavily philosophical agricultural debates can be intensely dry for readers primarily invested in Anna’s tragedy.",
    review: "Famously heralded by Dostoevsky and Nabokov as a flawless piece of art, Leo Tolstoy’s Anna Karenina is a massive, sweeping autopsy of Russian high society, marriage, and human desire. The novel famously opens with the declaration: 'Happy families are all alike; every unhappy family is unhappy in its own way.' It then proceeds to meticulously trace the contrasting trajectories of two primary characters.\n\nThe first is Anna herself, a brilliant, vital woman trapped in a sterile marriage, whose passionate affair with the dashing Count Vronsky leads to her social excommunication and a terrifying, paranoid descent into despair. The second is Konstantin Levin, an awkward, deeply philosophical landowner (acting as Tolstoy’s autobiographical stand-in) who struggles with religious doubt and the agrarian reforms of Russia, eventually finding hard-won, quiet domestic peace. Tolstoy does not judge his characters; he observes them with an almost god-like, omniscient empathy. The psychological realism is so profound that the characters cease to feel like fiction. It is a devastating, beautiful, and absolutely essential masterpiece."
  },
  {
    title: "War and Peace",
    author: "Leo Tolstoy",
    publishYear: 1869,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=War+and+Peace",
    theGood: "The ultimate literary epic. It captures the entirety of human existence—from the grandest battles to the most intimate domestic moments.",
    theBad: "The sheer volume of Russian aristocratic names and the lengthy philosophical essays on historiography in the second epilogue are deeply challenging.",
    review: "Leo Tolstoy’s War and Peace is often treated as the Mount Everest of literature—a massive, intimidating monolith. In reality, once a reader navigates the initial flood of aristocratic Russian names, it is an incredibly accessible, deeply engaging soap opera intertwined with staggering historical reportage. Set against the backdrop of the Napoleonic Wars and the French invasion of Russia in 1812, the novel follows the intertwined lives of five aristocratic families.\n\nThe characters of Pierre Bezukhov (the clumsy, spiritually seeking heir), Prince Andrei Bolkonsky (the cynical, brilliant soldier), and Natasha Rostova (the joyous, impulsive heart of the novel) undergo profound, decades-long transformations. Tolstoy’s descriptions of battles, particularly Austerlitz and Borodino, are revolutionary; he entirely strips away the myth of military genius, depicting war as a terrifying, chaotic mess of thousands of individuals acting blindly. The novel alternates between massive historical events and intensely intimate, mundane moments of human connection. It is arguably the most complete, all-encompassing novel ever written."
  },
  {
    title: "The Brothers Lionheart",
    author: "Astrid Lindgren",
    publishYear: 1973,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brothers+Lionheart",
    theGood: "A deeply moving, beautifully melancholic children's book that bravely addresses death, courage, and brotherly love.",
    theBad: "Its incredibly dark themes, including terminal illness and suicide, make it a heavy, tear-jerking read for younger children.",
    review: "Astrid Lindgren, best known for the cheerful anarchy of Pippi Longstocking, wrote something profoundly different with The Brothers Lionheart. It is a fantasy novel that refuses to shy away from the ultimate human fear: death. The story is narrated by Karl, a sickly nine-year-old boy who is terrified of dying. His older, idolized brother, Jonatan, comforts him with tales of Nangijala, a magical afterlife where they will eventually reunite.\n\nTragically, Jonatan dies first in a fire while saving Karl. When Karl inevitably follows, he awakens in Nangijala, only to find that even the afterlife is not free from tyranny and cruelty. The brothers must join a resistance movement against the brutal dictator Tengil and his terrifying dragon, Katla. The novel is a beautiful, melancholic exploration of what it means to be brave—not the absence of fear, but the choice to act in spite of it. The deeply ambiguous, emotionally shattering ending remains one of the most powerful conclusions in children's literature."
  },
  {
    title: "The Neverending Story",
    author: "Michael Ende",
    publishYear: 1979,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Neverending+Story",
    theGood: "A brilliant, intensely meta-fictional exploration of the power and danger of imagination and escapism.",
    theBad: "The second half of the book, omitted from the famous film adaptation, is highly philosophical, surreal, and deeply melancholic.",
    review: "Most audiences are only familiar with the first half of Michael Ende’s The Neverending Story, popularized by the 1984 film. The novel follows Bastian Balthazar Bux, a bullied, overweight boy who steals a mysterious book and hides in his school's attic to read it. The book details the destruction of the magical realm of Fantastica by 'The Nothing'—a manifestation of humanity's loss of imagination. \n\nHowever, the true brilliance of Ende’s novel occurs in the second half, after Bastian successfully enters Fantastica to save it. Given an amulet that grants his every wish, Bastian slowly realizes that every wish costs him a piece of his real-world memory. The novel violently pivots from a story celebrating escapism into a terrifying warning about the dangers of losing oneself entirely to fantasy. Bastian's journey becomes a desperate, surreal quest to find his true will and return to reality. It is a dense, highly symbolic, and deeply profound psychological fantasy."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 2 chunk 1 (15 books)...');
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
