const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Brave New World",
    author: "Aldous Huxley",
    publishYear: 1932,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Brave+New+World",
    theGood: "A terrifyingly accurate prediction of a society enslaved by pleasure, distraction, and genetic engineering.",
    theBad: "The character development is entirely secondary to the philosophical world-building.",
    review: "Aldous Huxley’s Brave New World is often contrasted with Orwell’s 1984, and arguably, Huxley’s vision proved to be far more prophetic. Rather than envisioning a society controlled by pain and fear, Huxley imagines a World State controlled by overwhelming pleasure, endless distraction, and genetic conditioning. Citizens are hatched in incubators, strictly divided into castes, and kept permanently docile through a combination of promiscuous sex and a narcotic called soma.\n\nThe genius of the novel is that the dystopia is entirely voluntary; people love their subjugation because they have been engineered to lose the capacity for deep thought or sorrow. The arrival of John 'the Savage,' a man raised outside the World State who still reads Shakespeare, acts as a violent catalyst. His philosophical debate with the World Controller, Mustapha Mond, is the intellectual climax of the novel, exploring the brutal truth that true human freedom requires the right to suffer, to fail, and to feel pain. It is a brilliant, unsettling masterpiece."
  },
  {
    title: "The Brothers Karamazov",
    author: "Fyodor Dostoevsky",
    publishYear: 1880,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Brothers+Karamazov",
    theGood: "The pinnacle of philosophical literature. The 'Grand Inquisitor' chapter alone is worth the massive undertaking.",
    theBad: "Its immense length and deeply complex, digressive philosophical arguments demand total commitment from the reader.",
    review: "Fyodor Dostoevsky’s final novel, The Brothers Karamazov, is a towering, encyclopedic exploration of faith, doubt, free will, and morality, framed around a sensational patricide. The three Karamazov brothers—Dmitri the sensualist, Ivan the rationalist atheist, and Alyosha the spiritual novice—represent the fractured soul of late 19th-century Russia, all living under the shadow of their monstrous, buffoonish father, Fyodor.\n\nThe novel is famous for its dialectic structure; Dostoevsky grants his ideological opponents, particularly the atheist Ivan, the strongest possible arguments. The chapter 'The Grand Inquisitor,' a story told by Ivan to Alyosha wherein Christ returns to earth only to be arrested by the Spanish Inquisition for burdening humanity with the terrifying freedom of choice, is perhaps the greatest philosophical parable ever written. Dostoevsky counters this profound despair not with logical argument, but with the active, loving grace embodied by Alyosha and Father Zosima. It is an overwhelming, exhausting, and ultimately transcendent reading experience."
  },
  {
    title: "Don Quixote",
    author: "Miguel de Cervantes",
    publishYear: 1605,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Don+Quixote",
    theGood: "The first modern novel, combining brilliant satire with a surprisingly touching exploration of idealism and madness.",
    theBad: "The episodic nature of the first volume can feel repetitive to modern readers accustomed to tight, linear narratives.",
    review: "Miguel de Cervantes’ Don Quixote is widely considered the foundational work of modern Western literature. It is the story of Alonso Quixano, a minor noble whose brain has essentially melted from reading too many chivalric romances. Declaring himself a knight-errant, he sets out into a cynical, modernizing Spain to right wrongs, accompanied by his deeply pragmatic, uneducated squire, Sancho Panza.\n\nInitially, the novel reads as a pure, hilarious parody of knightly literature; Quixote attacks windmills believing they are giants and mistakes inns for castles. However, as the narrative progresses, particularly in the masterful second volume published ten years later, a profound shift occurs. Quixote’s madness ceases to be merely a joke and becomes a tragic, noble defense of idealism in a world that has completely abandoned honor. The dynamic between Quixote and Sancho Panza—the dreamer and the realist—is the blueprint for every buddy-comedy that followed. It is a vast, deeply humane masterpiece."
  },
  {
    title: "Moby-Dick",
    author: "Herman Melville",
    publishYear: 1851,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Moby-Dick",
    theGood: "A magnificent, sprawling American epic. Ahab is one of literature's most terrifying, Shakespearean figures of obsession.",
    theBad: "The extensive, highly technical chapters detailing the minutiae of 19th-century whaling can be a grueling slog for many.",
    review: "Herman Melville’s Moby-Dick is the Great American Novel in its most feral, untamed form. Narrated by the wandering outcast Ishmael, it chronicles the doomed voyage of the whaling ship Pequod, commanded by the terrifying, monomaniacal Captain Ahab. Ahab is not interested in the commercial pursuit of whale oil; he is entirely consumed by his desire to destroy Moby Dick, the legendary white whale that bit off his leg, viewing the beast as the physical manifestation of all the malice and chaotic indifference of the universe.\n\nMelville’s prose is a wild, biblical torrent, constantly shifting between high tragedy, philosophical essay, natural history, and sheer poetic madness. The novel is famously digressive, pausing the narrative to detail everything from the anatomy of a whale to the structural mechanics of a harpoon line. Yet, these digressions serve to build an entire, overwhelming world. Ahab’s terrifying charisma, pulling his entire crew down into the abyss to satisfy his vengeance, is a profound study of hubris. It is a massive, difficult, and profoundly rewarding masterwork."
  },
  {
    title: "Catch-22",
    author: "Joseph Heller",
    publishYear: 1961,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Catch-22",
    theGood: "The definitive anti-war satire. Its furious, cyclical logic perfectly captures the terrifying absurdity of military bureaucracy.",
    theBad: "Its non-linear structure and massive cast of absurd characters require intense concentration to follow.",
    review: "Joseph Heller’s Catch-22 is a masterpiece of dark, frantic comedy that weaponizes the absurdity of language against the horrific reality of war. Set on an American bomber base in Italy during World War II, the novel follows Captain John Yossarian, a bombardier who is furious that thousands of people he has never met are constantly trying to kill him. His primary goal is simply to survive, but he is constantly thwarted by his commanding officers, who keep raising the number of missions required to go home.\n\nThe novel introduces the concept of the 'Catch-22,' a paradoxical bureaucratic rule that essentially states: you can be grounded from flying combat missions if you are insane, but simply asking to be grounded proves you have a rational concern for your own safety, which proves you are sane, meaning you must fly. Heller’s prose is dizzying, looping back on itself in circular arguments that are intensely hilarious until they suddenly, violently, become tragic. The novel brilliantly exposes how massive institutions prioritize paperwork and procedure over human life. It is a brilliant, savage dissection of military logic."
  },
  {
    title: "Wuthering Heights",
    author: "Emily Brontë",
    publishYear: 1847,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Wuthering+Heights",
    theGood: "A fierce, terrifyingly passionate novel that entirely subverts the traditional Victorian romance. Heathcliff is an unforgettable force of nature.",
    theBad: "Almost every character is vicious, vindictive, and deeply unsympathetic, making it a grueling emotional experience.",
    review: "Emily Brontë’s sole novel, Wuthering Heights, is often wildly misunderstood as a sweeping, romantic love story. In reality, it is a ferocious, deeply disturbing tale of generational revenge, obsession, and the terrifying, destructive power of untamed passion. Set on the bleak, windswept Yorkshire moors, the narrative centers on the intense, almost feral bond between Catherine Earnshaw and Heathcliff, a foundling brought to the estate.\n\nWhen Catherine chooses social advancement by marrying the weak but wealthy Edgar Linton, Heathcliff is driven to exact a meticulous, multi-generational revenge that destroys nearly everyone on the moors. Brontë does not moralize; she presents her characters as elemental forces, as violent and unforgiving as the landscape itself. The narrative structure—a story told by a servant to an outsider—brilliantly distances the reader from the sheer madness at the center of the novel. Wuthering Heights is dark, uncompromising, and absolutely mesmerizing."
  },
  {
    title: "Frankenstein",
    author: "Mary Shelley",
    publishYear: 1818,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Frankenstein",
    theGood: "The birth of science fiction. It is a profound, deeply moving exploration of creation, abandonment, and the limits of scientific ambition.",
    theBad: "The framing narratives and florid Romantic prose can feel somewhat dated and slow to modern sensibilities.",
    review: "Written when Mary Shelley was only eighteen, Frankenstein; or, The Modern Prometheus is a foundational text that birthed the science fiction genre. Stripped of the cinematic cliches of lightning bolts and lumbering, mute monsters, the original novel is a deeply tragic, philosophical text. It is the story of Victor Frankenstein, a brilliant but arrogant scientist who discovers the secret of life, creates an eight-foot-tall being from stolen body parts, and immediately abandons it in absolute horror.\n\nThe genius of the novel lies in granting the Creature a voice. Educating himself in the wilderness by reading Paradise Lost, the Creature is highly articulate, desperately lonely, and deeply perceptive. His argument with his creator on a glacier in the Alps—pleading for a companion so that he will not be entirely isolated from the natural order—is heartbreaking. When Victor breaks his promise, the Creature turns to violent revenge. The novel is a brilliant critique of the Enlightenment ideal of scientific progress unchecked by moral responsibility or parental care."
  },
  {
    title: "Lolita",
    author: "Vladimir Nabokov",
    publishYear: 1955,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Lolita",
    theGood: "Perhaps the most brilliant, linguistically dazzling prose ever written in the English language.",
    theBad: "The subject matter—a man's obsessive abuse of a twelve-year-old girl—is inherently repulsive and requires a high degree of reader detachment.",
    review: "Vladimir Nabokov’s Lolita is the ultimate literary trap. It is narrated by Humbert Humbert, a highly educated, fiercely intelligent European intellectual who uses his breathtaking command of the English language to mask the reality of his actions: the kidnapping and repeated sexual abuse of his twelve-year-old stepdaughter, Dolores Haze. The tension of the novel lies entirely in the gulf between Humbert’s soaring, poetic justifications and the horrific reality of what he is doing to a child.\n\nNabokov’s prose is unparalleled; he plays with words like a virtuoso musician, creating sentences of such overwhelming beauty that the reader is momentarily seduced into Humbert's perspective, only to feel profound revulsion when the reality sets in. The novel is a brilliant, terrifying exploration of solipsism and the way language can be weaponized to obscure truth. It is a masterwork of unreliable narration and a permanent testament to the dangerous, seductive power of art."
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    publishYear: 1987,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Beloved",
    theGood: "A towering, devastating masterpiece of American literature. Morrison’s prose is incantatory, blending history and myth with agonizing power.",
    theBad: "The non-linear narrative and shifting perspectives can be challenging, demanding close, emotional reading.",
    review: "Toni Morrison’s Beloved is a profound reckoning with the trauma of American slavery, utilizing the tropes of the ghost story to visualize the inescapability of the past. Set in Cincinnati after the Civil War, the novel follows Sethe, a formerly enslaved woman whose house is violently haunted by the spirit of the infant daughter she murdered eighteen years earlier to save her from being taken back into slavery. When the spirit seemingly manifests as a young woman calling herself Beloved, the past arrives to consume the present.\n\nMorrison’s prose is majestic, operating with the rhythm and power of biblical scripture and jazz. She refuses to present slavery simply as a historical fact; she forces the reader to experience it as an ongoing, profound psychological mutilation. The concept of 'rememory'—the idea that traumatic events leave permanent, physical scars on the landscape—permeates the narrative. Sethe’s impossible choice is the harrowing, beating heart of the book. Beloved is a necessary, emotionally shattering masterpiece."
  },
  {
    title: "Slaughterhouse-Five",
    author: "Kurt Vonnegut",
    publishYear: 1969,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Slaughterhouse-Five",
    theGood: "A brilliant, utterly unique anti-war novel that uses science fiction to process the unimaginable trauma of the Dresden firebombing.",
    theBad: "The fatalistic philosophy ('So it goes') may strike some as apathetic rather than a coping mechanism.",
    review: "Kurt Vonnegut’s Slaughterhouse-Five is a book that actively attempts to fail at being a war novel, because, as the author notes, there is nothing intelligent to say about a massacre. Drawing on his own experiences surviving the Allied firebombing of Dresden as a POW hidden in a meat locker, Vonnegut crafted a narrative about Billy Pilgrim, an unremarkable man who has come 'unstuck in time.'\n\nBilly is violently thrown back and forth across his life: from the horrors of the German POW camps to his banal postwar life as an optometrist, to his abduction by the Tralfamadorians, an alien race that experiences all time simultaneously. This non-linear, science-fiction framing is a brilliant literary representation of PTSD. The Tralfamadorian philosophy—that death is merely a moment, and that all moments exist forever—provides a necessary, detached comfort for surviving the absurd horror of war. Vonnegut’s simple, direct prose is punctuated by the recurring refrain 'So it goes' every time death is mentioned, a quiet, devastating acknowledgement of mortality. It is a deeply humane, weird, and indispensable classic."
  },
  {
    title: "The Sound and the Fury",
    author: "William Faulkner",
    publishYear: 1929,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Sound+and+the+Fury",
    theGood: "A masterpiece of Southern Gothic literature and modernist experimentation. The stream-of-consciousness narratives are breathtaking.",
    theBad: "The first section, narrated by the severely intellectually disabled Benjy, is notoriously difficult to parse and requires immense patience.",
    review: "William Faulkner’s The Sound and the Fury is a punishing, deeply rewarding pillar of literary modernism. It chronicles the tragic decay of the Compson family, formerly aristocratic Southern elites, over the course of thirty years, focusing on their varying obsessions with their sister, Caddy. The novel is famously divided into four sections, each told from a different perspective and utilizing completely different narrative techniques.\n\nThe opening section, narrated by the thirty-three-year-old, intellectually disabled Benjy, experiences all time simultaneously; a sensory impression in the present instantly transports him decades into the past without warning. It is a brilliant, disorienting immersion into pure sensation. This is followed by the agonizingly intellectual, suicidal narrative of Quentin, and the vicious, hyper-pragmatic narrative of Jason. Finally, the novel zooms out to an objective third-person perspective centered on Dilsey, the Black matriarchal servant who actually holds the shattered family together. Faulkner’s demanding, labyrinthine prose perfectly captures the suffocating weight of history and the inescapable tragedy of the American South."
  },
  {
    title: "Invisible Man",
    author: "Ralph Ellison",
    publishYear: 1952,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Invisible+Man",
    theGood: "A sweeping, vital exploration of Black identity in America. Ellison masterfully blends surrealism with devastating social critique.",
    theBad: "The dense symbolism and the lengthy, ideological speeches in the latter half can occasionally stall the narrative momentum.",
    review: "Ralph Ellison’s Invisible Man is a towering achievement of American literature, an epic odyssey that maps the profound psychological trauma of systemic racism. The unnamed narrator opens the novel by declaring his invisibility—not a physical condition, but a societal one, caused by the refusal of the white world to see him as anything other than a projection of their own fears, desires, or political agendas.\n\nThe novel’s structure is brilliant, moving the narrator through a series of increasingly absurd, devastating vignettes that critique various factions of 20th-century America: the suffocating, subservient ideology of a Southern Black college, the brutal industrial machinery of the Liberty Paints factory in the North, and the manipulative, communist-leaning 'Brotherhood' in Harlem. At every turn, the narrator attempts to find an identity within these systems, only to realize he is merely a pawn. The famous 'Battle Royal' scene in the first chapter remains one of the most viscerally horrifying depictions of racial degradation ever written. Ellison’s prose is jazz-like, rhythmic, and intensely powerful, culminating in a profound declaration of selfhood in a world determined to erase it."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 2 (12 books)...');
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
