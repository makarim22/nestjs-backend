const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "1984",
    author: "George Orwell",
    publishYear: 1949,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=1984",
    theGood: "A chillingly prescient, mathematically precise dissection of totalitarianism that fundamentally altered the English language.",
    theBad: "The lengthy inclusion of Goldstein's manifesto in the middle act severely disrupts the narrative momentum.",
    review: "George Orwell’s 1984 is less a novel than it is a terrifyingly accurate architectural blueprint of absolute tyranny. Written in the immediate aftermath of World War II, it imagines a perpetually warring, impoverished super-state (Oceania) ruled by the omniscient, infallible 'Big Brother.' The protagonist, Winston Smith, is not a heroic revolutionary; he is a tired, sickly bureaucrat whose job is to literally rewrite history to match the Party's ever-changing narrative.\n\nThe brilliance of the novel lies not in its depiction of physical torture—though the climax in Room 101 remains horrifying—but in its exploration of psychological subjugation. Orwell understood that to control a population entirely, a state must first control language and objective truth. Concepts like 'Newspeak' (the systematic destruction of vocabulary to eliminate heterodox thought) and 'Doublethink' (the ability to hold two contradictory beliefs simultaneously) are terrifying because they are so easily recognizable in modern political discourse.\n\nWinston’s rebellion is tragically small and inherently doomed: writing in a diary, renting a room, and falling in love with Julia. The Party does not simply want to crush Winston; it wants to cure him. The true horror of 1984 is its final realization: tyranny succeeds completely when it forces the victim to genuinely love their oppressor. It is the most essential political novel of the 20th century."
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publishYear: 1960,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=To+Kill+a+Mockingbird",
    theGood: "A profound, beautifully written exploration of racial injustice and the loss of childhood innocence in the American South.",
    theBad: "Its perspective is undeniably limited by its era, centering a white savior narrative at the expense of Black interiority.",
    review: "Harper Lee’s Pulitzer Prize-winning novel is a cornerstone of American literature, a coming-of-age story deeply entwined with a harrowing courtroom drama. Set in the racially divided, depression-era town of Maycomb, Alabama, the story is narrated by the young, fiercely intelligent Scout Finch. Her perspective allows Lee to expose the absurdities and profound cruelties of Southern racial and class hierarchies through the lens of innocent observation.\n\nThe moral center of the novel is Scout’s father, Atticus Finch, an attorney appointed to defend Tom Robinson, a Black man falsely accused of raping a white woman. Atticus is portrayed as a paragon of quiet, steadfast integrity, attempting to teach his children empathy in a town consumed by prejudice. The courtroom sequences are masterclasses in tension and heartbreaking inevitability.\n\nHowever, the novel's second narrative thread—the children’s terrified fascination with their reclusive neighbor, 'Boo' Radley—is equally important. The convergence of these two storylines in the final act beautifully illustrates the novel's central thesis: the sin of harming the innocent. While modern critics rightfully point out the limitations of its racial framing, the emotional resonance of Scout's journey from innocent observer to empathetic participant remains undeniably powerful."
  },
  {
    title: "Pride and Prejudice",
    author: "Jane Austen",
    publishYear: 1813,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Pride+and+Prejudice",
    theGood: "A razor-sharp social satire featuring one of the most brilliant, engaging heroines in literary history. The dialogue crackles with wit.",
    theBad: "The rigid, claustrophobic focus on marriage and inherited wealth can feel completely alien to modern sensibilities.",
    review: "Jane Austen’s Pride and Prejudice is often mistakenly categorized purely as a romance, when in fact it is one of the sharpest, most ruthless social comedies ever written. Set in the landed gentry of early 19th-century England, the novel follows the Bennet family, whose five daughters face a terrifying economic reality: their estate is entailed away from the female line, making marriage their only viable means of financial survival.\n\nAt the center of the storm is Elizabeth Bennet, a heroine of fierce intelligence, quick wit, and deep flaws. Her initial, fiercely held prejudice against the wealthy, aloof Mr. Darcy is the engine that drives the narrative. Austen’s genius lies in her free indirect discourse, allowing the reader to inhabit Elizabeth’s highly subjective perspective, making us entirely complicit in her misjudgments of both Darcy and the charmingly deceptive Mr. Wickham.\n\nThe dialogue is a masterclass in passive-aggressive maneuvering; characters wound each other deeply with the most polite, socially acceptable language imaginable. Mr. Collins stands as one of literature's greatest comic grotesques. Ultimately, the novel is a profound exploration of self-awareness. Both Elizabeth and Darcy must undergo humiliating realizations of their own flaws before they are worthy of each other. It is a perfect, timeless masterpiece of character and society."
  },
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publishYear: 1925,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Great+Gatsby",
    theGood: "Lyrical, breathtakingly beautiful prose that perfectly captures the hollow tragedy of the American Dream.",
    theBad: "Nearly every character is profoundly unlikable, vapid, and self-serving, which can alienate some readers.",
    review: "F. Scott Fitzgerald’s The Great Gatsby is the definitive novel of the Jazz Age, a glittering, champagne-soaked tragedy that dissects the illusion of the American Dream. Narrated by the passive, increasingly cynical Nick Carraway, the novel observes the lavish, desperate life of Jay Gatsby, a mysterious millionaire who throws extravagant parties in West Egg in a doomed attempt to win back his former love, the superficial Daisy Buchanan.\n\nFitzgerald’s prose is incredibly poetic and evocative, utilizing vivid color symbolism—most notably the green light at the end of Daisy’s dock—to represent Gatsby’s unreachable, pure desire. However, the novel exposes the brutal reality beneath the glitter. Gatsby’s wealth is built on organized crime, his identity is a total fabrication, and the 'old money' society he desperately wishes to join, represented by Daisy’s brutally arrogant husband Tom, is utterly careless and morally bankrupt.\n\nThe tragedy of Gatsby is that his dream is so pure, but his object of desire is entirely unworthy of it. The novel’s concluding passages, reflecting on the Dutch sailors first viewing the 'fresh, green breast of the new world,' tie Gatsby’s personal failure to the fundamental failure of the American promise: that we are constantly running toward a future that is already behind us. It is a brief, devastating masterpiece."
  },
  {
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    publishYear: 1967,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=One+Hundred+Years",
    theGood: "A staggering, magical realist epic that compresses the history of a continent into a single, doomed family. The imagery is unforgettable.",
    theBad: "The cyclical naming conventions (dozens of Aurelianos and José Arcadios) make the massive cast incredibly difficult to track.",
    review: "Gabriel García Márquez’s One Hundred Years of Solitude is a monumental achievement in global literature, the definitive text of the magical realism movement. It chronicles seven generations of the Buendía family in the fictional, isolated town of Macondo. Time in Macondo does not move in a straight line; it moves in circles, trapping the family in an inescapable cycle of repetition, incest, violence, and profound, crushing solitude.\n\nMárquez treats the miraculous and the mundane with the exact same narrative weight. A plague of insomnia, a woman ascending to heaven while folding sheets, and a rain of yellow flowers are described with the same factual detachment as the arrival of the railroad or the brutal massacre of striking banana workers. This blending of myth and history serves as a profound allegory for the colonial and post-colonial trauma of Latin America.\n\nThe prose is overwhelmingly lush and dense, creating a world that is both utterly fantastical and deeply, tragically human. Every member of the Buendía family is cursed by their own specific form of obsession, unable to truly connect with the world around them. When the final, apocalyptic wind sweeps Macondo away as the last Aureliano translates the family’s prophecies, it is an astonishing, devastating conclusion to a literary masterpiece."
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    publishYear: 1965,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Dune",
    theGood: "Unprecedented world-building that seamlessly blends ecology, theology, and feudal politics into a sprawling sci-fi epic.",
    theBad: "The prose is notoriously dense, and the heavy reliance on internal monologues and complex political maneuvering can stall the pacing.",
    review: "Frank Herbert’s Dune is to science fiction what The Lord of the Rings is to fantasy: a foundational, massively influential text of unparalleled scope and depth. Set tens of thousands of years in the future, it is a feudal political thriller centered on the desert planet Arrakis, the sole source of 'melange' (the spice), a substance that extends life and makes interstellar travel possible.\n\nThe novel follows young Paul Atreides, whose noble family is sent to govern Arrakis, only to fall into a devastating trap set by their rivals, the Harkonnens, and the Padishah Emperor. Forced to flee into the deep desert, Paul integrates with the Fremen, the planet's indigenous, fiercely independent population, eventually weaponizing their religious mythology to become their messiah, the Muad'Dib.\n\nHerbert’s genius lies in his ecological focus and his subversion of the 'chosen one' narrative. Dune is not a simple hero’s journey; it is a terrifying warning about the dangers of charismatic leaders and the absolute corruption of power. The Bene Gesserit breeding program, the massive sandworms, and the intricate, water-scarce culture of the Fremen are detailed with incredible sociological precision. It is a dense, deeply philosophical masterpiece."
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishYear: 1866,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Crime+and+Punishment",
    theGood: "An agonizing, brilliant psychological autopsy of guilt and nihilism. The philosophical debates are as thrilling as any action sequence.",
    theBad: "It is an incredibly oppressive, feverish reading experience that plunges you completely into the mind of a delirious murderer.",
    review: "Fyodor Dostoevsky’s Crime and Punishment is less a murder mystery and more an excruciating, profound psychological autopsy. We know exactly who the murderer is from the very beginning: Rodion Raskolnikov, a destitute, desperate former student in St. Petersburg who murders a pawnbroker and her sister. The true mystery is *why* he did it, and whether his shattered psyche can survive the overwhelming burden of his own guilt.\n\nRaskolnikov’s initial justification is chillingly intellectual: he believes he is an 'extraordinary' man, an Übermensch who is morally exempt from the laws of ordinary society, and that killing a 'louse' for her money is a net positive for humanity. The novel systematically and violently dismantles this nihilistic philosophy. The actual punishment of the title is not his eventual exile to Siberia, but the agonizing, feverish paranoia that completely consumes him in the days following the murder.\n\nDostoevsky populates St. Petersburg with a Dickensian cast of grotesques and tragedies, particularly the noble, deeply suffering prostitute Sonya, who ultimately becomes Raskolnikov’s only path to spiritual resurrection. His cat-and-mouse interrogations with the brilliant detective Porfiry Petrovich are masterclasses in psychological tension. It is a monumental, punishing, and utterly essential novel."
  },
  {
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    publishYear: 1951,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Catcher+in+the+Rye",
    theGood: "A pitch-perfect capture of adolescent alienation and grief. Holden's voice is entirely unique and deeply influential.",
    theBad: "Holden’s perpetual whining, hypocrisy, and repetitive slang can become intensely grating to older readers.",
    review: "J.D. Salinger’s The Catcher in the Rye is perhaps the most famous, and most divisive, novel of adolescent rebellion ever written. Narrated by the sixteen-year-old Holden Caulfield after his expulsion from an elite prep school, the novel follows his wandering, erratic journey through New York City over a few days in December. Holden is fiercely critical of the 'phony' adult world, obsessed with preserving childhood innocence.\n\nWhile many readers find Holden simply annoying, a closer reading reveals a deeply traumatized, profoundly depressed boy who is completely unable to process grief. The death of his younger brother, Allie, hangs over every page of the novel. Holden’s desperate desire to be the 'catcher in the rye'—saving children from falling off a cliff into adulthood—is a heartbreaking manifestation of his inability to save Allie, or himself.\n\nSalinger’s ear for mid-century teenage dialogue is impeccable. The novel captures the intense, confusing contradiction of adolescence: the desperate desire for human connection combined with a paralyzing fear of intimacy. The final image of Holden watching his sister Phoebe ride the carousel in the rain is a beautiful, fleeting moment of pure grace. It remains an essential, albeit challenging, American classic."
  },
  {
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    publishYear: 1954,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Lord+of+the+Rings",
    theGood: "The undisputed bedrock of modern fantasy. The world-building, linguistic depth, and epic scope are completely unparalleled.",
    theBad: "The pacing can be extremely slow, bogged down by detailed geographic descriptions, long songs, and extensive historical appendices.",
    review: "It is nearly impossible to overstate the influence of J.R.R. Tolkien’s The Lord of the Rings. It is not merely a novel; it is a fully realized mythology, complete with its own invented languages, histories, geographies, and cosmologies. The story of the hobbit Frodo Baggins, tasked with carrying the One Ring of the Dark Lord Sauron into the fires of Mount Doom, established the structural template for almost all modern high fantasy.\n\nWhat elevates Tolkien’s work above its thousands of imitators is its profound melancholic tone. Despite its epic battles and heroic deeds, the narrative is fundamentally an elegiac account of the end of magic. The victory over Sauron comes at a terrible cost; the Elves must leave Middle-earth, and the age of Men must begin in an era of diminished wonder. Frodo himself is irrevocably broken by his burden, finding that he has saved the Shire, but not for himself.\n\nTolkien, drawing heavily on his experiences in the trenches of World War I, treats evil not as a simple external monster, but as a corrupting, addictive force that preys on the desires and weaknesses of the human heart. The bond between Frodo and Samwise Gamgee remains one of the most moving depictions of platonic love and loyalty in literature. It is an overwhelming, majestic achievement."
  },
  {
    title: "Fahrenheit 451",
    author: "Ray Bradbury",
    publishYear: 1953,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Fahrenheit+451",
    theGood: "A fiery, deeply passionate defense of literature. Bradbury’s poetic prose elevates a simple dystopian premise into high art.",
    theBad: "Its critique of mass media and technology occasionally veers into reactionary, 'old man yells at cloud' territory.",
    review: "Written in the paranoid depths of the McCarthy era, Ray Bradbury’s Fahrenheit 451 remains a blistering, urgent warning against censorship and the numbing effects of mass entertainment. It envisions a dystopian future America where books are banned and 'firemen' are employed to burn any that are found. The protagonist, Guy Montag, is a fireman who begins to question his destructive profession after encountering a free-spirited teenager and witnessing a woman choose to burn alive with her library.\n\nBradbury’s argument is subtle and terrifying: he suggests that the state did not ban books because of authoritarian malice, but because the populace demanded it. The people chose the shallow, narcotic comfort of massive interactive television screens ('parlor walls') and fast cars over the complex, challenging, and often painful reflections offered by literature.\n\nThe prose is intensely lyrical, full of fiery metaphors and rushing momentum. Montag’s awakening is not merely intellectual; it is deeply visceral, leading him to murder his superior and flee into the wilderness. The novel’s conclusion, finding hope in a nomadic community of outcasts who memorize entire books to preserve them for a future generation, is a beautiful testament to the enduring, unbreakable spirit of the written word."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 1 (10 books)...');
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
