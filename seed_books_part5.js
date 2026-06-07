const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Gone Girl",
    author: "Gillian Flynn",
    publishYear: 2012,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Gone+Girl",
    theGood: "A brilliantly constructed, viciously cynical deconstruction of modern marriage and media manipulation.",
    theBad: "The ending is notoriously bleak and frustrating, refusing to offer any traditional narrative justice.",
    review: "Gillian Flynn’s Gone Girl did not just spawn a decade of domestic thrillers featuring the word 'Girl' in the title; it completely redefined the unreliable narrator trope. The novel opens on the morning of Nick and Amy Dunne’s fifth wedding anniversary, when Amy disappears, leaving behind a violently staged living room and a husband who seems suspiciously unbothered.\n\nFlynn brilliantly structures the novel by alternating perspectives between Nick’s current-day police investigation and Amy’s diary entries from the past. The genius of the book lies in how completely it weaponizes the reader's own biases. It is a terrifyingly sharp autopsy of a toxic marriage, exploring how couples constantly perform versions of themselves to please their partners—epitomized by Amy's legendary 'Cool Girl' monologue. The massive mid-point twist is executed flawlessly, violently shifting the genre from a missing-person mystery into a psychological hostage situation. It is dark, deeply uncomfortable, and completely addictive."
  },
  {
    title: "The Girl with the Dragon Tattoo",
    author: "Stieg Larsson",
    publishYear: 2005,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Dragon+Tattoo",
    theGood: "Introduced the iconic Lisbeth Salander. The intricate, deeply disturbing central mystery is flawlessly plotted.",
    theBad: "The first hundred pages are a notoriously slow slog through Swedish corporate journalism and financial law.",
    review: "Stieg Larsson’s posthumous sensation, The Girl with the Dragon Tattoo, is a massive, intricate piece of Nordic Noir that operates simultaneously as a locked-room murder mystery and a scathing indictment of systemic violence against women in Sweden. Disgraced journalist Mikael Blomkvist is hired by an aging industrialist to solve the decades-old disappearance of his niece, requiring him to dig into the deeply buried, terrifying secrets of the wealthy Vanger family.\n\nHowever, the undisputed triumph of the novel is the character of Lisbeth Salander. A brilliant, fiercely antisocial hacker who has been repeatedly abused by the state's ward system, Salander is an entirely original creation—a deeply traumatized survivor who operates by her own ruthless, unforgiving moral code. Her eventual partnership with Blomkvist creates a brilliant dynamic. Once the novel moves past its slow, heavily economic introduction, it becomes a terrifying, relentlessly paced thriller that exposes the darkest underbellies of extreme wealth and political corruption."
  },
  {
    title: "The Silence of the Lambs",
    author: "Thomas Harris",
    publishYear: 1988,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Silence+of+the+Lambs",
    theGood: "A flawless psychological thriller. The dynamic between Clarice Starling and Hannibal Lecter is electrifying.",
    theBad: "The portrayal of Buffalo Bill relies on outdated and harmful tropes regarding transgender identity, which has aged poorly.",
    review: "Thomas Harris’s The Silence of the Lambs is the gold standard for the modern serial killer procedural. The plot is famously tight: FBI trainee Clarice Starling is pulled from the academy and sent to interview Dr. Hannibal Lecter, a brilliant, incarcerated cannibalistic serial killer, hoping he can provide insight into the mind of 'Buffalo Bill,' a new killer who skins his female victims.\n\nThe novel is a masterclass in psychological tension. Harris brilliantly structures the interrogations between Starling and Lecter as a twisted transaction: Lecter will provide clues only in exchange for Starling’s deeply guarded, traumatic childhood memories. Starling is a fantastic protagonist—highly competent, deeply empathetic, and constantly navigating the pervasive sexism of her male-dominated profession. While the psychological profiling of Buffalo Bill relies on highly problematic gender tropes, the sheer mechanical brilliance of the plotting, culminating in the terrifying, pitch-black climax in Bill's basement, makes it a landmark in the thriller genre."
  },
  {
    title: "And Then There Were None",
    author: "Agatha Christie",
    publishYear: 1939,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=And+Then+There+Were+None",
    theGood: "The ultimate locked-room mystery. The creeping paranoia and the sheer impossibility of the premise are perfectly executed.",
    theBad: "The characters are largely one-dimensional archetypes, existing purely to serve the complex mechanics of the plot.",
    review: "Agatha Christie’s And Then There Were None is the best-selling mystery novel of all time for a very simple reason: it is the most perfectly constructed puzzle in the history of the genre. Ten strangers, all harboring dark secrets regarding deaths they caused but cannot be legally punished for, are invited to an isolated mansion on Soldier Island. One by one, they are murdered in accordance with a creepy nursery rhyme, leaving the survivors trapped in an escalating nightmare of paranoia.\n\nChristie completely abandons her usual reliance on a brilliant detective (like Poirot or Marple). There is no investigator to save the day; the reader is trapped on the island with the victims, desperately trying to deduce the killer before everyone dies. The tension is incredibly tight, and the eventual reveal of the killer's methodology is a stroke of pure, diabolical genius. It is a masterpiece of plotting, atmosphere, and psychological dread."
  },
  {
    title: "The Da Vinci Code",
    author: "Dan Brown",
    publishYear: 2003,
    rating: 7,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Da+Vinci+Code",
    theGood: "Incredibly fast-paced and addictive. The blending of historical art, secret societies, and cryptology is deeply compelling.",
    theBad: "The prose is notoriously clunky, and the historical 'facts' are highly inaccurate pseudo-history.",
    review: "It is impossible to discuss the publishing industry in the 2000s without addressing the colossal phenomenon of Dan Brown’s The Da Vinci Code. The novel follows Harvard symbologist Robert Langdon and cryptologist Sophie Neveu as they flee across Paris and London, attempting to solve a murder at the Louvre that connects to the Priory of Sion, the Knights Templar, and a massive cover-up regarding the true nature of Jesus Christ and Mary Magdalene.\n\nFrom a purely literary standpoint, the prose is often mocked for its repetitive structure and flat characterization. However, from a structural standpoint, the novel is a masterclass in pacing. Brown utilizes incredibly short chapters that almost exclusively end on cliffhangers, making the book nearly impossible to put down. It successfully weaponized conspiracy theories and art history into a breathless, globe-trotting scavenger hunt. It is the ultimate literary popcorn: critically derided, but undeniably, compulsively entertaining."
  },
  {
    title: "It",
    author: "Stephen King",
    publishYear: 1986,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=It",
    theGood: "A towering, deeply emotional epic about childhood trauma and the power of memory. The town of Derry is incredibly realized.",
    theBad: "The massive page count features numerous bizarre tangents, and the infamous sewer sequence near the end is deeply problematic.",
    review: "Stephen King’s It is arguably the author's magnum opus, a massive, sprawling epic that serves as a thesis statement on everything he believes about childhood, fear, and the dark underbelly of small-town America. The novel alternates between 1958 and 1985, following the 'Losers Club'—seven outcast children who battle a shape-shifting, child-eating cosmic entity in the sewers of Derry, Maine, and must return twenty-seven years later to finish the job.\n\nWhile Pennywise the Dancing Clown is the iconic face of the novel, the true horror of It is the apathy of the adult world. King brilliantly portrays Derry as a town poisoned by the entity, where adults actively ignore the horrific bullying, abuse, and murders happening right in front of them. The profound bond between the Losers Club is beautifully written, capturing the intense, fleeting magic of childhood friendship. Despite its deeply flawed and controversial ending, it remains a terrifying, surprisingly tender masterpiece of the horror genre."
  },
  {
    title: "The Stand",
    author: "Stephen King",
    publishYear: 1978,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Stand",
    theGood: "The ultimate apocalyptic epic. The slow, terrifying collapse of society in the first act is some of the best writing of King's career.",
    theBad: "The narrative significantly loses momentum in the middle, and the literal 'deus ex machina' climax is highly divisive.",
    review: "Stephen King’s The Stand is the quintessential American apocalyptic novel. The story begins with the accidental release of 'Captain Trips,' a weaponized strain of influenza that rapidly wipes out 99.4% of the global population. The surviving humans are drawn by prophetic dreams into two opposing camps: the forces of good gathered in Boulder, Colorado, under the 108-year-old Mother Abagail, and the forces of evil gathered in Las Vegas under the demonic Randall Flagg.\n\nThe first third of the novel, detailing the relentless spread of the virus and the terrifyingly fast collapse of infrastructure, is a masterpiece of escalating dread. King excels at illustrating the apocalypse not through grand battles, but through terrifying, mundane details—a family dying in their station wagon, a radio station going silently off the air. The subsequent attempt to rebuild society is fascinating, though the final confrontation relies heavily on literal divine intervention, which frustrates many readers. Nevertheless, it is a staggering, sweeping epic of good versus evil."
  },
  {
    title: "Misery",
    author: "Stephen King",
    publishYear: 1987,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Misery",
    theGood: "A suffocating, flawless psychological thriller. Annie Wilkes is one of the most terrifying, realistic villains in modern fiction.",
    theBad: "The intense, visceral descriptions of physical mutilation make it a deeply difficult and agonizing read.",
    review: "Unlike the massive, cosmic horror of It or The Stand, Stephen King’s Misery is a masterclass in claustrophobic, purely human terror. Famous romance novelist Paul Sheldon crashes his car in a blizzard and is 'rescued' by Annie Wilkes, a former nurse who proclaims herself his 'Number One Fan.' When Annie discovers Paul has killed off her favorite character, Misery Chastain, she holds him hostage in her isolated farmhouse, forcing him to write a new book bringing the character back to life.\n\nThe novel is a terrifying exploration of toxic fandom and the deeply agonizing, hostage-like relationship a creator can feel toward their audience. Annie Wilkes is a brilliant creation—prone to infantile language ('dirty bird') and sudden, horrifying bursts of extreme violence. The tension is agonizingly tight; the reader is trapped in the bedroom with Paul, feeling the absolute hopelessness of his situation. The infamous 'hobbling' scene remains one of the most viscerally shocking moments in literature. It is King at his tightest and most terrifying."
  },
  {
    title: "Dracula",
    author: "Bram Stoker",
    publishYear: 1897,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Dracula",
    theGood: "The definitive vampire text. The epistolary structure builds incredible dread, and the opening chapters in Transylvania are flawless horror.",
    theBad: "The middle section bogs down in repetitive Victorian moralizing and extremely slow blood transfusions.",
    review: "Bram Stoker’s Dracula is the novel that permanently cemented the vampire mythos into global pop culture. Stoker utilized an epistolary format—constructing the narrative entirely through diary entries, letters, newspaper clippings, and ship logs—to give the incredibly supernatural events a grounded, terrifyingly bureaucratic sense of realism.\n\nThe novel opens brilliantly with Jonathan Harker’s deeply unsettling journey to Castle Dracula in Transylvania. Harker’s slow realization that he is a prisoner to an immortal monster is a masterpiece of escalating gothic dread. When the Count arrives in London, the novel transforms into an anxious exploration of Victorian fears regarding foreign invasion, female sexuality, and the limits of modern science. While the relentless heroism of Van Helsing and his crew can feel somewhat repetitive in the middle act, the sheer atmospheric power of Stoker’s creation remains undeniable. It is a brooding, deeply influential classic."
  },
  {
    title: "The Haunting of Hill House",
    author: "Shirley Jackson",
    publishYear: 1959,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Haunting+of+Hill+House",
    theGood: "The greatest haunted house novel ever written. Jackson’s prose is chilling, utilizing extreme psychological ambiguity over cheap scares.",
    theBad: "Readers expecting a traditional, gore-filled ghost story will likely find the intense focus on psychological breakdown frustrating.",
    review: "Shirley Jackson’s The Haunting of Hill House is the undisputed high watermark of the psychological ghost story. The novel follows Dr. John Montague, an occult scholar, who invites three individuals to spend the summer in the notoriously haunted Hill House to find scientific evidence of the supernatural. The narrative focuses primarily on Eleanor Vance, a deeply fragile, desperately lonely young woman who has spent her entire adult life caring for her abusive mother.\n\nJackson’s genius lies in her absolute ambiguity. It is never definitively clear whether the horrifying events—the pounding on the doors, the writing on the walls—are truly supernatural manifestations of the evil house, or the psychic projections of Eleanor’s rapidly disintegrating mind. The horror in the novel is not found in ghosts or monsters, but in the terrifying realization that your own mind is turning against you. The opening paragraph alone is a legendary piece of literary architecture. It is a subtle, agonizingly tense masterpiece."
  },
  {
    title: "The Handmaid's Tale",
    author: "Margaret Atwood",
    publishYear: 1985,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Handmaids+Tale",
    theGood: "A terrifyingly plausible dystopian warning. Atwood’s rule that she only included atrocities that have actually occurred in history makes it chilling.",
    theBad: "The deliberately passive, suffocating nature of the protagonist’s existence makes for a profoundly oppressive reading experience.",
    review: "Margaret Atwood’s The Handmaid's Tale is a landmark work of speculative fiction that envisions a near-future America overthrown by a totalitarian, Christian fundamentalist regime called the Republic of Gilead. Due to plunging fertility rates, the few remaining fertile women are violently stripped of their identities, bank accounts, and families, and forced into sexual servitude as 'Handmaids' for the ruling class.\n\nThe genius of the novel lies in the intimacy of its horror. Narrated by Offred, a Handmaid assigned to a high-ranking Commander, the prose focuses on the mundane, agonizing details of living under total surveillance. Atwood brilliantly explores how tyrannical regimes use language to subjugate—stripping women of their names and reducing them to their biological functions. The novel is a stark warning about the fragility of women's rights and the ease with which society can violently revert. The brilliant, ambiguous ending, framed as an academic historical symposium in the distant future, forces the reader to confront how history sanitizes tragedy."
  },
  {
    title: "Atonement",
    author: "Ian McEwan",
    publishYear: 2001,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Atonement",
    theGood: "A devastating, beautifully constructed exploration of guilt, memory, and the immense power and danger of storytelling.",
    theBad: "The infamous twist ending completely shatters the reader, leading to intense feelings of betrayal and heartbreak.",
    review: "Ian McEwan’s Atonement is a novel constructed like a flawless, devastating puzzle box. It is divided into three distinct parts. The first act is a stifling, intensely observed drama set on an English country estate in 1935 during a sweltering heatwave. Thirteen-year-old Briony Tallis, an aspiring writer with an overactive imagination, misinterprets a deeply complex adult interaction between her older sister Cecilia and Robbie Turner, the housekeeper’s son. Her subsequent lie destroys all three of their lives.\n\nThe second act is a harrowing, brutally realistic account of Robbie’s desperate retreat to Dunkirk during World War II, a stark contrast to the pampered elegance of the first act. The third act follows Briony’s attempt to achieve 'atonement' through her work as a nurse in wartime London. The novel’s brilliance lies in its profound meta-textual ending, which forces the reader to fundamentally re-evaluate the entire narrative structure. It asks a painful question: can fiction ever truly provide atonement for the sins of reality? It is an emotionally shattering, brilliant masterpiece."
  },
  {
    title: "The Kite Runner",
    author: "Khaled Hosseini",
    publishYear: 2003,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Kite+Runner",
    theGood: "An emotionally devastating, deeply moving exploration of guilt, redemption, and the tragic modern history of Afghanistan.",
    theBad: "The massive coincidences in the final act occasionally stretch the bounds of narrative believability.",
    review: "Khaled Hosseini’s debut novel, The Kite Runner, is a powerful, heart-wrenching narrative that personalized the devastating history of Afghanistan for millions of Western readers. The story centers on the fraught, unequal friendship between Amir, the privileged son of a wealthy Pashtun merchant in Kabul, and Hassan, the deeply loyal Hazara servant boy who lives in the compound.\n\nThe central tragedy of the novel occurs during a local kite-fighting tournament in 1975, when Amir witnesses a horrific act of violence against Hassan and, paralyzed by cowardice, does nothing to stop it. The novel is an agonizing exploration of Amir’s subsequent guilt, which poisons his life even after he escapes the Soviet invasion and builds a new life in America. Hosseini’s depiction of pre-war Kabul is deeply affectionate, making its eventual destruction under the Taliban all the more devastating. While the third act's reliance on extreme coincidence can feel slightly melodramatic, the emotional core of the novel—the agonizing, desperate search for 'a way to be good again'—is undeniably powerful."
  },
  {
    title: "The Book Thief",
    author: "Markus Zusak",
    publishYear: 2005,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Book+Thief",
    theGood: "A staggeringly beautiful, poetic novel narrated by Death itself. The prose is unique and the emotional impact is devastating.",
    theBad: "Death’s habit of casually spoiling the tragic fates of characters pages before they happen can be emotionally agonizing.",
    review: "Markus Zusak’s The Book Thief is a monumental achievement in historical fiction, offering a profoundly unique perspective on the Holocaust in Nazi Germany. The novel is brilliantly narrated by Death, who presents himself not as a malicious entity, but as a deeply exhausted, strangely compassionate observer who is fascinated by the duality of human nature. Death focuses his attention on Liesel Meminger, a young girl placed in foster care in Molching, Germany, just before the outbreak of World War II.\n\nThe novel is fundamentally about the immense power of language. Liesel steals books from book burnings and the mayor’s library, learning to read with the help of her deeply kind foster father, Hans Hubermann. When the family hides a Jewish fist-fighter, Max Vandenburg, in their basement, the danger escalates exponentially. Zusak’s prose is incredibly poetic and evocative; he paints scenes with colors and tastes. By focusing on ordinary Germans who were complicit, resistant, and victimized by the regime, the novel achieves a devastating emotional resonance. It is a heartbreaking masterpiece."
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publishYear: 1988,
    rating: 7,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Alchemist",
    theGood: "A simple, highly accessible fable that has inspired millions with its message of following one's dreams and listening to the universe.",
    theBad: "The philosophy is largely composed of vague, metaphysical platitudes ('When you want something, all the universe conspires in helping you to achieve it').",
    review: "Paulo Coelho’s The Alchemist is less a traditional novel and more a massive, globally resonant self-help fable. It tells the story of Santiago, an Andalusian shepherd boy who experiences a recurring dream about finding treasure at the Egyptian pyramids. He sells his flock and embarks on a journey across the North African desert, encountering various mentors, including an Englishman seeking the philosopher's stone and a 200-year-old Alchemist.\n\nThe book’s immense popularity stems from its absolute simplicity. It advocates for the concept of the 'Personal Legend'—the belief that everyone has a singular, divine destiny they are meant to achieve, and that recognizing omens will guide them there. While many literary critics deride the book for its heavy-handed use of cliches, its lack of complex characterization, and its highly simplistic, almost magical view of the world, it is impossible to deny its profound emotional impact on readers seeking encouragement and purpose. It is a comforting, allegorical tale about the value of the journey over the destination."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 5 (15 books)...');
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
