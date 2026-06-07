const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Love in the Time of Cholera",
    author: "Gabriel García Márquez",
    publishYear: 1985,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Love+in+the+Time+of+Cholera",
    theGood: "A beautifully lush, intoxicating exploration of enduring love, set against the vibrant backdrop of a Caribbean port city.",
    theBad: "Florentino Ariza’s obsessive behavior, including his numerous affairs while waiting for Fermina, often borders on the predatory.",
    review: "While One Hundred Years of Solitude is arguably his magnum opus, Gabriel García Márquez’s Love in the Time of Cholera is his most intimately emotional work. The novel tells the story of an epic love triangle spanning over fifty years. In their youth, the fiercely romantic Florentino Ariza and the pragmatic Fermina Daza fall deeply in love, communicating through passionate letters. However, Fermina eventually rejects him to marry the wealthy, rational Dr. Juvenal Urbino, who is dedicated to eradicating cholera in their South American port city.\n\nFlorentino, however, refuses to move on. He vows to remain faithful to Fermina and wait for the doctor to die, a period spanning 'fifty-one years, nine months, and four days.' Paradoxically, during this 'faithful' wait, he engages in over 600 documented sexual affairs. Márquez brilliantly dissects the very nature of love—is it an illness (like cholera), a physical necessity, or a noble, enduring romantic ideal? The prose is intensely sensual, dripping with the heat and scent of the Caribbean. It is a profound, beautifully messy masterpiece."
  },
  {
    title: "The House of the Spirits",
    author: "Isabel Allende",
    publishYear: 1982,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=House+of+the+Spirits",
    theGood: "A captivating, sweeping multi-generational saga that brilliantly blends magical realism with the brutal political history of Chile.",
    theBad: "The transition from the whimsical magic of the early chapters to the horrific political violence of the end can be jarring.",
    review: "Isabel Allende’s debut novel, The House of the Spirits, often draws inevitable comparisons to Márquez, but it carves out its own distinct, fiercely feminist legacy within the magical realism genre. The novel chronicles four generations of the Trueba family in an unnamed Latin American country (strongly implied to be Chile), beginning with the terrifyingly volatile patriarch, Esteban Trueba, a conservative landowner whose explosive anger dictates the lives of his family.\n\nThe heart of the novel, however, belongs to the Trueba women. Clara, Esteban’s wife, possesses immense clairvoyant powers and serves as the eccentric, mystical anchor of the household. Her daughter Blanca rebels by engaging in a forbidden romance with a revolutionary peasant, while her granddaughter Alba ultimately faces the terrifying consequences of the military coup (mirroring the real-world 1973 overthrow of Salvador Allende, the author's uncle). The novel brilliantly uses the family’s deeply flawed, magical history to trace the broader, tragic political evolution of a nation. It is an unforgettable, deeply moving epic."
  },
  {
    title: "2666",
    author: "Roberto Bolaño",
    publishYear: 2004,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=2666",
    theGood: "A towering, apocalyptic masterpiece. The scope is staggering, and the sheer intellectual energy of the prose is unmatched.",
    theBad: "The fourth part, 'The Part About the Crimes,' is an exhausting, clinical recitation of hundreds of horrific femicides that is agonizing to read.",
    review: "Published posthumously, Roberto Bolaño’s 2666 is a massive, incredibly complex, and profoundly disturbing literary monolith. Divided into five distinct but loosely interconnected parts, the novel orbits a central, terrifying void: the fictional Mexican border city of Santa Teresa (based heavily on Ciudad Juárez), where hundreds of women are being brutally murdered with total impunity.\n\nThe novel begins as an intellectual comedy following four European literary critics searching for an elusive, reclusive German author named Benno von Archimboldi. Their search inevitably draws them to Santa Teresa. The infamous fourth section, 'The Part About the Crimes,' is a relentless, 300-page forensic cataloging of the murdered women, stripping away all narrative comfort and forcing the reader to confront the sheer, banal scale of the violence. Bolaño’s underlying thesis seems to be that all of modern society's artistic and intellectual pursuits are essentially built on a foundation of horrific, ignored bloodshed. It is a dense, terrifying, and profoundly brilliant novel."
  },
  {
    title: "The Savage Detectives",
    author: "Roberto Bolaño",
    publishYear: 1998,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Savage+Detectives",
    theGood: "A brilliant, chaotic love letter to poetry, youth, and the romanticized ideal of the starving artist in Latin America.",
    theBad: "The middle section's fragmented, multi-perspective structure (featuring over 50 narrators) can be disorienting and exhausting.",
    review: "Before the apocalyptic weight of 2666, Roberto Bolaño wrote The Savage Detectives, a sprawling, fiercely energetic, and deeply melancholic ode to his own youth. The novel is divided into three parts. The first and third sections are narrated through the diary of Juan García Madero, a 17-year-old poet who joins a radical, avant-garde literary movement in 1970s Mexico City called the Visceral Realists, led by the enigmatic Arturo Belano and Ulises Lima.\n\nThe massive second section spans twenty years and multiple continents. It is entirely composed of brief, documentary-style interviews with dozens of disparate individuals who encountered Belano and Lima as the two poets drifted aimlessly through Europe and Africa, essentially becoming ghosts. The novel brilliantly captures the tragic trajectory of youthful artistic rebellion—the intoxicating, arrogant belief that poetry can change the world, slowly eroding into disillusionment, exile, and obscurity. It is a wildly chaotic, profoundly beautiful masterpiece of Latin American literature."
  },
  {
    title: "The Aleph and Other Stories",
    author: "Jorge Luis Borges",
    publishYear: 1949,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Aleph",
    theGood: "Borges is the undisputed master of the philosophical short story. His concepts of infinity and labyrinths are mind-bending.",
    theBad: "The sheer intellectual density of the stories requires extremely slow, deliberate reading; it cannot be rushed.",
    review: "Alongside Ficciones, The Aleph and Other Stories represents the absolute pinnacle of Jorge Luis Borges’s literary output. Borges did not write traditional narratives; he wrote incredibly condensed, mind-bending philosophical puzzles disguised as short fiction. He was obsessed with the concepts of infinity, mirrors, labyrinths, and the terrifying architecture of the universe.\n\nThe title story, 'The Aleph,' is arguably his greatest achievement. It follows a fictionalized version of Borges who discovers a point in the basement of a Buenos Aires house—an Aleph—that contains every other point in the universe. By looking into it, a person can simultaneously see everything that exists, everywhere, all at once. Borges’s attempt to describe this infinite, overwhelming vision using finite language is a breathtaking piece of literary virtuosity. Other masterpieces in the collection, such as 'The Immortal' and 'The Zahir,' explore the terrifying burden of eternity and obsession. It is essential reading for anyone interested in the limits of human thought."
  },
  {
    title: "Hopscotch",
    author: "Julio Cortázar",
    publishYear: 1963,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Hopscotch",
    theGood: "A fiercely experimental, structurally revolutionary novel that demands active participation from the reader.",
    theBad: "The pretentious, hyper-intellectual jazz-club dialogue in the Paris section has aged somewhat poorly.",
    review: "Julio Cortázar’s Hopscotch (Rayuela) is less a traditional novel and more a massive, interactive literary experiment. It is the defining text of the Latin American 'Boom' movement's avant-garde wing. In a famous 'Table of Instructions' at the beginning, Cortázar offers the reader two distinct ways to read the book: linearly from chapter 1 to 56 (ignoring the rest), or by 'hopscotching' through all 155 chapters according to a seemingly random, non-linear sequence provided by the author.\n\nThe narrative centers on Horacio Oliveira, an incredibly cynical, over-educated Argentine intellectual drifting through the jazz clubs of Paris in a doomed relationship with a mystical woman named La Maga, before eventually returning to Buenos Aires. The novel is deeply obsessed with the failure of traditional language and logic to capture the true essence of human existence. While the relentless name-dropping of obscure artists and philosophers can feel exhausting today, the sheer structural audacity of the novel remains an exhilarating, chaotic experience."
  },
  {
    title: "My Brilliant Friend",
    author: "Elena Ferrante",
    publishYear: 2011,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=My+Brilliant+Friend",
    theGood: "A fiercely honest, utterly engrossing examination of female friendship, class, and the brutal reality of post-war Naples.",
    theBad: "The sheer multitude of interrelated neighborhood families can be confusing to track initially without the provided index.",
    review: "The first installment of Elena Ferrante’s monumental Neapolitan Quartet, My Brilliant Friend is a masterclass in psychological realism. The novel explores the intensely complex, fiercely competitive, and deeply loving friendship between two girls—the narrator, Elena Greco, and the fierce, brilliant Lila Cerullo—growing up in a desperately poor, violently patriarchal neighborhood on the outskirts of Naples in the 1950s.\n\nThe genius of Ferrante’s work lies in her complete refusal to romanticize either poverty or female friendship. The neighborhood is ruled by the local loan sharks, the Solara brothers, and violence is a casual, everyday occurrence. Both Elena and Lila view education as their only possible escape route, but when Lila's father refuses to let her continue schooling, their paths tragically diverge. The resentment, jealousy, and profound dependence the girls feel toward one another are described with an unsentimental, terrifying clarity. It is a profoundly moving, completely addictive introduction to one of the greatest literary achievements of the 21st century."
  },
  {
    title: "The Story of a New Name",
    author: "Elena Ferrante",
    publishYear: 2012,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Story+of+a+New+Name",
    theGood: "Deepens the complexity of the first novel brilliantly. The Ischia vacation sequence is a masterclass in suffocating tension.",
    theBad: "Lila’s decisions in the latter half of the novel are deeply frustrating and often painfully destructive to those around her.",
    review: "The second volume of the Neapolitan Quartet, The Story of a New Name, plunges Elena and Lila into the turbulent, deeply dangerous waters of young adulthood in the 1960s. The novel picks up immediately after the disastrous ending of Lila’s wedding. Trapped in an abusive marriage to the neighborhood grocer, Stefano Carracci, Lila acts out with increasingly reckless, destructive defiance. Meanwhile, Elena struggles with severe imposter syndrome as she manages to escape the neighborhood to attend university in Pisa, desperately trying to shed her Neapolitan dialect and working-class roots.\n\nThe emotional core of the novel is a fateful summer vacation on the island of Ischia, where the girls' relationship is violently ruptured by a devastating love triangle involving Nino Sarratore, a charismatic, manipulative intellectual. Ferrante brilliantly explores how the girls use each other as mirrors, constantly measuring their own successes and failures against the other. The prose is fierce, breathless, and utterly unsparing. It is a brilliant continuation that expands the scope of the narrative from the neighborhood to the broader, shifting class dynamics of Italy."
  },
  {
    title: "The Unbearable Lightness of Being",
    author: "Milan Kundera",
    publishYear: 1984,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Unbearable+Lightness",
    theGood: "A brilliant, deeply philosophical exploration of love, fate, and political oppression set against the Prague Spring.",
    theBad: "Kundera’s frequent, direct philosophical essays interrupting the narrative can feel overly didactic to some readers.",
    review: "Milan Kundera’s The Unbearable Lightness of Being is a profoundly unique novel that seamlessly blends intimate, erotic human drama with heavy, existential philosophy. Set primarily in Prague in 1968, before and during the Soviet invasion, the narrative circles around four interconnected characters: Tomas, a brilliant surgeon and compulsive philanderer; Tereza, his fiercely jealous, deeply insecure wife; Sabina, Tomas’s favorite mistress, a rebellious artist; and Franz, a Swiss professor infatuated with Sabina.\n\nKundera uses these characters to explore the concept of 'lightness' versus 'weight.' Drawing on Nietzsche's idea of eternal return, the novel asks: if we only live one life, and our choices disappear the moment we make them, does anything we do actually matter? Is the resulting 'lightness' liberating, or is it an unbearable, terrifying void? Tomas pursues the 'lightness' of casual sex, while Tereza craves the 'weight' of absolute, burdensome commitment. The novel is a beautiful, melancholic exploration of the tragic, inescapable contradictions of human desire, political ideology, and the terrifying finality of a single life."
  },
  {
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    publishYear: 1866,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Crime+and+Punishment",
    theGood: "The ultimate psychological thriller. Dostoevsky perfectly captures the suffocating, feverish paranoia of a guilty conscience.",
    theBad: "The epilogue, involving a sudden, heavy-handed religious conversion, is famously considered the weakest part of the novel.",
    review: "Fyodor Dostoevsky’s Crime and Punishment is arguably the most penetrating psychological study in the history of literature. Set in the sweltering, squalid slums of St. Petersburg, the novel follows Rodion Raskolnikov, an impoverished, desperately proud former student who formulates a terrifying philosophical theory. He believes that certain 'extraordinary' men (like Napoleon) are morally permitted to commit crimes, even murder, if doing so advances humanity. To test his theory and alleviate his poverty, he brutally murders an elderly, abusive pawnbroker with an axe.\n\nThe actual murder occurs incredibly early in the massive novel. The remainder of the book is a suffocating, feverish exploration of Raskolnikov’s psychological collapse. Dostoevsky brilliantly demonstrates that Raskolnikov is not a sociopath; his conscience is far more powerful than his intellectual theories. The cat-and-mouse interrogations between Raskolnikov and Porfiry Petrovich, the brilliant police detective who knows he is guilty but waits for him to crack, are incredibly tense. It is a profound, agonizing masterpiece concerning guilt, nihilism, and the desperate necessity of redemption."
  },
  {
    title: "The Idiot",
    author: "Fyodor Dostoevsky",
    publishYear: 1869,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Idiot",
    theGood: "A fascinating, deeply tragic experiment: what happens when a truly, perfectly good person is thrust into corrupt society?",
    theBad: "The narrative structure is notoriously chaotic, and the secondary characters are prone to sudden, melodramatic hysterics.",
    review: "While Crime and Punishment explored the depths of human darkness, Dostoevsky’s The Idiot attempts the opposite, arguably far more difficult task: portraying a completely, unconditionally good man. The protagonist, Prince Lev Nikolayevich Myshkin, is a young aristocrat returning to Russia after spending years in a Swiss sanatorium for epilepsy (a condition Dostoevsky himself suffered from). Because he is entirely devoid of irony, greed, and social pretense, the corrupt, deeply cynical St. Petersburg elite mockingly dub him 'the idiot.'\n\nMyshkin immediately becomes entangled in a destructive, deeply volatile love triangle between the beautiful, deeply traumatized Nastasya Filippovna and the dark, obsessive rogue Parfyon Rogozhin. Dostoevsky’s brilliant, tragic thesis is that pure innocence cannot survive in the real world; Myshkin’s absolute goodness does not save those around him, but instead inadvertently triggers a catastrophic chain of violence and heartbreak. While the middle sections of the novel can be exhausting due to the relentless, hysterical parlor debates of the Russian aristocracy, the devastating, quiet horror of the novel's final scene remains one of the greatest moments in literature."
  },
  {
    title: "Notes from Underground",
    author: "Fyodor Dostoevsky",
    publishYear: 1864,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Notes+from+Underground",
    theGood: "The birth of the modern anti-hero. A staggering, incredibly bitter assault on utopian rationalism and the illusion of free will.",
    theBad: "The narrator is intensely unlikable, miserable, and profoundly pathetic, making the novella an incredibly abrasive read.",
    review: "Considered one of the first true existentialist novels, Dostoevsky’s Notes from Underground is a terrifying, claustrophobic descent into the mind of an intensely alienated, bitter civil servant known only as the Underground Man. The novella is divided into two parts. The first is a sprawling, contradictory, and fiercely intelligent philosophical rant against the 'Crystal Palace'—the 19th-century utopian belief that science and logic can perfect human society. The Underground Man argues that humans will actively choose suffering, chaos, and self-destruction over perfect happiness simply to prove that they possess free will.\n\nThe second part is a painful, deeply uncomfortable narrative detailing the Underground Man's interactions in the real world. Desperate for connection but paralyzed by his own massive, toxic ego, he intentionally sabotages a dinner with former schoolmates and inflicts profound emotional cruelty on a young prostitute named Liza who attempts to show him genuine compassion. The novella is a brilliant, agonizingly accurate portrait of spite and intellectual isolation. It laid the psychological groundwork for the entirety of 20th-century literature."
  },
  {
    title: "Heart of Darkness",
    author: "Joseph Conrad",
    publishYear: 1899,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Heart+of+Darkness",
    theGood: "A perfectly constructed, terrifying psychological journey. The exploration of colonial brutality and human depravity is unparalleled.",
    theBad: "Its depiction of the African continent as a primitive, mute backdrop for European existential crises is highly problematic today.",
    review: "Joseph Conrad’s Heart of Darkness is a brief, intensely dense novella that serves as a foundational text for modern literature's exploration of human evil. Narrated by the sailor Charles Marlow, the story details his journey up the Congo River on behalf of a Belgian trading company. His mission is to retrieve Mr. Kurtz, a highly successful ivory trader who has supposedly gone mad and established himself as a terrifying demigod among the local population deep in the interior.\n\nAs Marlow travels deeper into the jungle, Conrad completely dismantles the hypocritical European myth of a 'civilizing mission.' The colonial outposts are depicted as scenes of horrific, senseless brutality and administrative incompetence. The jungle itself takes on a suffocating, almost conscious presence. When Marlow finally encounters the emaciated, dying Kurtz, he finds a man whose supposedly brilliant, 'civilized' mind has completely collapsed into primal savagery, summarizing his entire existence with the legendary whisper: 'The horror! The horror!' The novella is a profound, nightmarish masterpiece about the terrifying fragility of civilization and morality."
  },
  {
    title: "Things Fall Apart",
    author: "Chinua Achebe",
    publishYear: 1958,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Things+Fall+Apart",
    theGood: "A monumental, completely paradigm-shifting work. Achebe reclaims the narrative of Africa from European colonial literature flawlessly.",
    theBad: "The protagonist, Okonkwo, is profoundly flawed and violently toxic, which can make him difficult to empathize with.",
    review: "Written largely as a direct response to the colonial perspectives of books like Heart of Darkness, Chinua Achebe’s Things Fall Apart is a towering masterpiece that fundamentally altered global literature. The novel is set in the fictional Igbo village of Umuofia in Nigeria during the late 19th century. It centers on Okonkwo, a fierce, highly respected warrior and leader whose entire existence is driven by a terrified desperation not to appear weak like his debtor father.\n\nThe first two-thirds of the novel brilliantly, meticulously detail the complex social, religious, and judicial structures of the Igbo people before the arrival of Europeans. Achebe does not romanticize the culture; he portrays its beauty, but also its brutal traditions. The profound tragedy of the novel occurs in the final act, when white Christian missionaries and British colonial administrators arrive. Because Okonkwo’s rigidity makes him completely incapable of adapting, his tragic downfall is inevitable. The devastating final paragraph, told from the deeply ignorant perspective of a British official reducing Okonkwo’s epic tragedy to a mere footnote in a textbook, is a brilliant, searing indictment of colonial erasure."
  },
  {
    title: "Beloved",
    author: "Toni Morrison",
    publishYear: 1987,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Beloved",
    theGood: "Arguably the greatest American novel of the late 20th century. A staggeringly beautiful, terrifying ghost story about the trauma of slavery.",
    theBad: "The non-linear, fragmented narrative structure and intensely poetic prose demand an incredibly high level of reader focus.",
    review: "Toni Morrison’s Pulitzer Prize-winning Beloved is a monumental, harrowing masterpiece that forces the reader to confront the profound, inescapable psychic trauma of American slavery. Based on a true story, the novel is set in Cincinnati after the Civil War. It follows Sethe, a formerly enslaved woman whose home is violently haunted by the ghost of her infant daughter—a baby Sethe herself killed years earlier to prevent her from being dragged back into slavery by a brutal overseer known as schoolteacher.\n\nThe narrative is fractured and non-linear, mirroring how trauma shatters memory. The arrival of Paul D, a man from Sethe's past at the Sweet Home plantation, briefly drives the poltergeist away, only for a mysterious, seemingly adult woman named Beloved to emerge from the water. Beloved is the physical manifestation of the murdered child, demanding all of Sethe’s love and rapidly consuming her life. Morrison’s prose is incantatory, weaving history, mythology, and intense psychological realism into a devastating exploration of motherhood, guilt, and the desperate struggle to reclaim ownership of one's own identity. It is an absolutely essential work of art."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 2 chunk 3 (15 books)...');
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
