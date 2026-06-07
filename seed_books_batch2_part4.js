const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Satanic Verses",
    author: "Salman Rushdie",
    publishYear: 1988,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Satanic+Verses",
    theGood: "A wildly inventive, deeply funny, and conceptually brilliant exploration of immigrant identity and the fluid nature of faith.",
    theBad: "The novel's immense controversy often overshadows the actual text, which is dense, highly referential, and sometimes incredibly difficult to follow.",
    review: "It is nearly impossible to discuss Salman Rushdie’s The Satanic Verses without addressing the unprecedented global fatwa and violence it provoked. However, beneath the massive historical controversy lies a brilliant, surreal, and deeply funny novel about the immigrant experience. The story begins with a hijacked airplane exploding over the English Channel. Two Indian actors, Gibreel Farishta and Saladin Chamcha, miraculously survive the fall. Upon landing, they undergo bizarre transformations: Gibreel begins to take on the persona of the Archangel Gabriel, while Saladin sprouts horns and hooves, transforming into a devilish satyr.\n\nRushdie uses magical realism to brutally satirize British racism and the profound psychological fracture of the immigrant experience—being torn between a home that no longer exists and a host country that rejects you. The controversial dream sequences, which reimagine the founding of Islam in the city of Jahilia, are less an attack on religion and more a profound literary exploration of doubt, revelation, and the nature of storytelling. It is a wildly ambitious, chaotic, and utterly brilliant piece of postmodern literature."
  },
  {
    title: "To the Lighthouse",
    author: "Virginia Woolf",
    publishYear: 1927,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=To+the+Lighthouse",
    theGood: "The pinnacle of modernist stream-of-consciousness. Woolf’s ability to capture the fleeting, profound essence of a single moment is breathtaking.",
    theBad: "The complete lack of traditional plot or action makes it a deeply challenging read for those accustomed to narrative structure.",
    review: "Virginia Woolf’s To the Lighthouse is a masterpiece of modernist literature, entirely abandoning traditional plot mechanics in favor of a profound, deeply intimate exploration of human consciousness. The novel is set on the Isle of Skye in Scotland and centers on the Ramsay family and their guests. The narrative famously revolves around a seemingly trivial event: the family's young son, James, desperately wants to visit a nearby lighthouse, but his harsh father insists the weather will be too poor.\n\nThe novel is divided into three distinct sections. The first, 'The Window,' is a masterclass in shifting perspectives, sliding seamlessly between the inner thoughts of Mrs. Ramsay, Mr. Ramsay, and the artist Lily Briscoe over the course of a single afternoon. The middle section, 'Time Passes,' is one of the most stunning, devastating pieces of prose in the English language, rapidly accelerating through ten years of war, death, and decay as the summer house sits empty. The final section, 'The Lighthouse,' details the surviving family members finally making the trip. It is a haunting, beautiful meditation on grief, the passage of time, and the desperate human attempt to create lasting meaning through art and memory."
  },
  {
    title: "Mrs Dalloway",
    author: "Virginia Woolf",
    publishYear: 1925,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Mrs+Dalloway",
    theGood: "A brilliant, intricate mapping of a single day. The juxtaposition of high-society London with severe PTSD is incredibly powerful.",
    theBad: "The constantly shifting, fluid narrative voice requires immense concentration to follow who is actually thinking at any given moment.",
    review: "Like James Joyce's Ulysses, Virginia Woolf’s Mrs Dalloway takes place over the course of a single, seemingly ordinary day. In mid-June 1923, Clarissa Dalloway, a 52-year-old upper-class Londoner, spends her day running errands and preparing to host a high-society party that evening. However, beneath the mundane surface of buying flowers and altering dresses, Clarissa's mind constantly slips backward into profound, melancholic memories of her youth, questioning her choice of husband and the suppression of her romantic feelings for a woman named Sally Seton.\n\nCrucially, Woolf runs a parallel, entirely separate narrative alongside Clarissa's: the tragic story of Septimus Warren Smith, a working-class World War I veteran suffering from severe shell shock (PTSD). Septimus is plagued by terrifying hallucinations of his dead commanding officer. Though Clarissa and Septimus never meet, their mental states deeply mirror one another; both are deeply isolated individuals trying to survive in a society that demands a facade of polite normalcy. The novel is a stunning, rhythmic exploration of trauma, regret, and the hidden depths of ordinary lives."
  },
  {
    title: "Orlando",
    author: "Virginia Woolf",
    publishYear: 1928,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Orlando",
    theGood: "A wildly joyful, incredibly ahead-of-its-time exploration of gender fluidity and the suffocating nature of historical patriarchy.",
    theBad: "It lacks the profound, melancholic emotional depth of Woolf's other major works, functioning more as a brilliant, extended intellectual joke.",
    review: "Described by critics as 'the longest and most charming love letter in literature,' Virginia Woolf wrote Orlando as a grand, fantastical tribute to her lover, Vita Sackville-West. The novel is presented as a sprawling, highly satirical biography of a young, aristocratic poet named Orlando. The twist is that Orlando lives for over 300 years, from the Elizabethan era to the 1920s, without visibly aging. Furthermore, midway through the novel, while serving as an ambassador in Constantinople, Orlando falls into a deep sleep and wakes up physically transformed into a woman.\n\nWhat follows is a brilliant, highly comedic deconstruction of gender roles across centuries. Woolf highlights how society's treatment of Orlando drastically shifts—suddenly, she is burdened by massive, restrictive skirts, denied property rights, and expected to defer to male intellect. Yet, Orlando's internal identity remains entirely the same. The novel is fiercely witty, poking fun at the literary establishment of every century it traverses. It is a joyful, revolutionary, and deeply playful masterpiece of feminist literature."
  },
  {
    title: "Oryx and Crake",
    author: "Margaret Atwood",
    publishYear: 2003,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Oryx+and+Crake",
    theGood: "A terrifyingly plausible, darkly funny vision of a corporate-ruled dystopia and the hubris of genetic engineering.",
    theBad: "The protagonist, Jimmy/Snowman, is often incredibly passive, deeply cynical, and intensely frustrating to follow.",
    review: "Margaret Atwood prefers the term 'speculative fiction' over science fiction, arguing she only writes about technologies that already exist. Oryx and Crake, the first in the MaddAddam trilogy, is a terrifying realization of that philosophy. The novel alternates between a post-apocalyptic present, where a man calling himself 'Snowman' appears to be the last human on Earth, living alongside a peaceful, genetically engineered humanoid species called 'Crakers,' and flashbacks to the near-future world that created them.\n\nIn the flashbacks, Snowman is Jimmy, a painfully average man living in a society completely dominated by massive, amoral biotech corporations. He is lifelong friends with Crake, a terrifyingly brilliant, deeply nihilistic geneticist. The novel is a scathing satire of unchecked capitalism, where horrific animal splicing (like 'pigoons' grown for organ harvesting) and hyper-violent internet pornography are completely normalized. Crake's eventual, terrifying 'solution' to humanity's self-destruction is brilliant and horrific. It is a deeply unsettling, darkly hilarious masterpiece about the ethical limits of science."
  },
  {
    title: "The Blind Assassin",
    author: "Margaret Atwood",
    publishYear: 2000,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Blind+Assassin",
    theGood: "A brilliantly constructed puzzle box of a novel. The 'story-within-a-story' structure is executed with absolute perfection.",
    theBad: "The pacing in the first half is incredibly slow, as the true connections between the narrative layers take time to materialize.",
    review: "Winner of the Booker Prize, Margaret Atwood’s The Blind Assassin is a dense, deeply intricate nesting doll of a novel. The outermost layer is the present-day narrative of Iris Chase, an elderly, cynical woman living in a small Canadian town, writing a memoir about her immensely wealthy, deeply tragic family, and specifically the suicide of her younger sister, Laura, in 1945.\n\nThe second layer is a scandalous, posthumously published novel (attributed to Laura) called 'The Blind Assassin,' detailing a clandestine, intensely passionate affair between an unnamed wealthy woman and a radical socialist on the run. The third layer is a pulp science-fiction story that the socialist lover makes up to entertain the woman during their secret meetings, involving slave children weaving carpets in an alien city. Atwood weaves these three narratives—the historical memoir, the romantic tragedy, and the pulp sci-fi—with absolute mastery. As the novel progresses, the layers begin to bleed into one another, leading to a devastating, completely unexpected revelation regarding authorship and betrayal. It is a stunning literary achievement."
  },
  {
    title: "The Diamond Age",
    author: "Neal Stephenson",
    publishYear: 1995,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Diamond+Age",
    theGood: "Incredibly inventive world-building. The concepts of matter compilers, nanotechnology, and interactive education remain wildly prescient.",
    theBad: "Like many Stephenson novels, the massive, chaotic climax feels rushed and fails to cleanly resolve many of the complex plot threads.",
    review: "Following the massive success of Snow Crash, Neal Stephenson’s The Diamond Age: Or, A Young Lady's Illustrated Primer shifted focus from the internet to the terrifying, boundless potential of nanotechnology. Set in a neo-Victorian future where nation-states have been replaced by cultural 'phyles,' the plot centers on the creation of the 'Primer'—an incredibly advanced, interactive, AI-driven book designed to raise an aristocratic girl into a brilliant, subversive leader.\n\nHowever, a copy of the Primer falls into the hands of Nell, an impoverished, abused girl living in the lowest caste of society. The novel follows Nell as the book methodically educates her, teaching her survival, logic, and self-reliance through adaptive fairy tales. Stephenson’s vision of a society completely revolutionized by 'matter compilers' (advanced 3D printers that can create anything from thin air) is brilliantly explored, particularly regarding how economic scarcity is maintained artificially. It is a dense, incredibly fascinating exploration of education, class, and the future of technology."
  },
  {
    title: "Do Androids Dream of Electric Sheep?",
    author: "Philip K. Dick",
    publishYear: 1968,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Androids+Dream",
    theGood: "A profound, deeply melancholy exploration of empathy and what it actually means to be human in a dead world.",
    theBad: "Readers expecting the sleek, action-heavy noir of the film adaptation (Blade Runner) will likely be confused by the book's intense focus on depression and fake animals.",
    review: "Philip K. Dick’s Do Androids Dream of Electric Sheep? is famously the source material for Ridley Scott's Blade Runner, but the novel is a vastly different, deeply stranger beast. Set in a post-apocalyptic San Francisco blanketed by radioactive dust, most of humanity has emigrated to off-world colonies. Rick Deckard is a bounty hunter tasked with 'retiring' six highly advanced rogue androids (Nexus-6 models) that have escaped to Earth.\n\nWhile the film focuses on the noir aesthetic and the morality of artificial life, the novel is overwhelmingly obsessed with the concept of empathy. In this dead world, owning a real, living animal is the ultimate status symbol; Deckard is deeply depressed because he can only afford an electric sheep. The novel introduces 'Mercerism,' a bizarre, virtual-reality religion built entirely around shared suffering. The line between human and machine becomes terrifyingly blurred, not through action sequences, but through deeply philosophical interrogations regarding the nature of emotion. It is a bleak, weird, and profoundly thought-provoking classic."
  },
  {
    title: "The Man in the High Castle",
    author: "Philip K. Dick",
    publishYear: 1962,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=High+Castle",
    theGood: "The definitive alternate history novel. The world-building of a partitioned, defeated America is chillingly mundane and believable.",
    theBad: "The narrative intentionally lacks a traditional climax, relying heavily on the ambiguous use of the I Ching, which can frustrate readers.",
    review: "Philip K. Dick’s The Man in the High Castle popularized the alternate history genre. Set in 1962, the novel imagines a world where the Axis powers won World War II. The United States has been partitioned: the Japanese Empire controls the Pacific States, Nazi Germany controls the East Coast, and a lawless Rocky Mountain buffer zone lies between them.\n\nThe genius of Dick's approach is that he largely ignores high-level politics and military action. Instead, he focuses on ordinary people navigating this terrifying reality: an antique dealer secretly selling forged American artifacts to Japanese collectors, a Jewish worker hiding his identity, and a woman who becomes entangled with a covert assassin. Within this world, an illegal, banned novel circulates called 'The Grasshopper Lies Heavy,' which depicts an alternate history where the Allies won the war. Dick uses this brilliant meta-narrative, along with the pervasive use of the I Ching for decision-making, to deeply question the very nature of objective reality. It is a subtle, creeping, and paranoid masterpiece."
  },
  {
    title: "Ubik",
    author: "Philip K. Dick",
    publishYear: 1969,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Ubik",
    theGood: "Arguably Dick’s most perfectly realized exploration of shifting realities. It is completely unpredictable and deeply, terrifyingly bizarre.",
    theBad: "The constant, aggressive dismantling of reality can make it incredibly difficult to follow the actual narrative thread.",
    review: "Ubik is perhaps the ultimate distillation of Philip K. Dick’s career-long obsession with fractured realities and corporate dystopias. Set in 1992, the novel features a world where telepathy and precognition are common, requiring companies to hire 'anti-psis' to block corporate espionage. Furthermore, the recently deceased can be placed in 'half-life,' a state of suspended animation where they can be communicated with for years.\n\nJoe Chip works for a prominent anti-psi firm. Following a catastrophic explosion during a mission on the Moon, Joe and his team return to Earth, only to find that reality is rapidly, terrifyingly decaying backward. Modern technology devolves into 1930s models, coins bear the face of their supposedly dead boss, and the only thing that seems to halt the decay is an elusive, commercialized aerosol spray called 'Ubik.' The novel is a masterpiece of ontological terror—the horrific realization that the universe itself is fundamentally unstable. It is funny, incredibly weird, and genuinely unsettling."
  },
  {
    title: "The Lathe of Heaven",
    author: "Ursula K. Le Guin",
    publishYear: 1971,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Lathe+of+Heaven",
    theGood: "A brilliant, tightly focused exploration of the terrifying consequences of playing God, heavily influenced by Taoist philosophy.",
    theBad: "The writing style is notably more sparse and clinical than Le Guin’s usually lush, poetic prose.",
    review: "Ursula K. Le Guin’s The Lathe of Heaven is a fascinating departure from her sprawling Hainish Cycle, presenting a tight, Earth-bound psychological thriller deeply indebted to the reality-bending work of Philip K. Dick. The novel centers on George Orr, an incredibly passive, deeply terrified man who discovers that his 'effective dreams' physically alter reality. When he wakes up, the universe has retroactively changed to accommodate his dream, and he is the only one who remembers the previous timeline.\n\nSeeking help, George is assigned to Dr. William Haber, an ambitious, fiercely rational psychiatrist. Once Haber realizes George’s power is real, he begins using hypnosis to direct George’s dreams to 'fix' the world's problems—overpopulation, war, racism. Le Guin brilliantly demonstrates the horrific monkey's paw effect of forced utopianism: dreaming away overpopulation results in a timeline where billions died in a plague; dreaming of racial harmony results in everyone turning a uniform, dull gray. It is a profound, philosophical argument against forcing human perfection."
  },
  {
    title: "Kindred",
    author: "Octavia E. Butler",
    publishYear: 1979,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Kindred",
    theGood: "A fiercely intelligent, agonizingly tense masterpiece that uses a science fiction premise to force a brutal confrontation with the reality of American slavery.",
    theBad: "The visceral, unsparing depictions of physical and psychological abuse on the plantation are deeply harrowing.",
    review: "Octavia E. Butler’s Kindred is a monumental work that seamlessly blends science fiction time-travel with the brutal historical realism of the neo-slave narrative. The novel follows Dana, a modern Black woman living in 1976 California, who is inexplicably and violently pulled back through time to a pre-Civil War plantation in Maryland. She is pulled back specifically to save the life of Rufus Weylin, the white, slave-owning son of the plantation owner, who is also her direct ancestor.\n\nThe true brilliance of Kindred lies in Butler’s refusal to provide easy moral answers. Dana must repeatedly save the life of a man who grows up to be a monster, knowing that if he dies before fathering her great-grandmother, she will cease to exist. The novel is a terrifying exploration of how systemic power and environment corrupt the human soul, as Dana watches Rufus slowly adopt the horrific cruelty of his father. Butler also brilliantly dissects the compromises enslaved people were forced to make simply to survive. It is an unforgettable, deeply impactful novel."
  },
  {
    title: "Parable of the Sower",
    author: "Octavia E. Butler",
    publishYear: 1993,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Parable+of+the+Sower",
    theGood: "A staggeringly prophetic, terrifyingly plausible vision of a collapsed America. The creation of Earthseed is a brilliant philosophical thesis.",
    theBad: "The sheer accuracy of its dystopian predictions regarding climate change, political extremism, and extreme wealth inequality makes it an intensely anxiety-inducing read.",
    review: "Octavia E. Butler’s Parable of the Sower is arguably the most terrifyingly accurate dystopian novel of the late 20th century. Set in the mid-2020s, the novel presents a California completely ravaged by climate change, corporate greed, and drug-fueled violence. The government has essentially collapsed, and the middle class has retreated into fragile, walled communities.\n\nThe narrator, Lauren Olamina, is a fifteen-year-old girl suffering from 'hyperempathy'—a condition that causes her to physically feel the pain of others. When her gated community is violently destroyed, Lauren is forced to travel north along the dangerous highways of California. Amidst the terrifying chaos and violence, Lauren begins to formulate a new religion called Earthseed, based on the central tenet that 'God is Change.' Butler brilliantly uses the apocalypse not just as a setting for survival mechanics, but as a blank slate for exploring how humanity must adapt its core philosophies to survive. It is a bleak, incredibly powerful, and ultimately hopeful masterpiece."
  },
  {
    title: "The Color Purple",
    author: "Alice Walker",
    publishYear: 1982,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Color+Purple",
    theGood: "A profoundly moving, intensely raw exploration of Black female resilience, sisterhood, and the reclaiming of one's own voice and spirituality.",
    theBad: "The extreme, relentless physical and sexual abuse detailed in the early letters is deeply triggering and painful to read.",
    review: "Alice Walker’s Pulitzer Prize-winning The Color Purple is a breathtaking epistolary novel that chronicles the brutal, ultimately triumphant life of Celie, a deeply impoverished, uneducated Black woman living in rural Georgia in the early 20th century. The novel consists entirely of letters Celie writes to God, as she has no one else to confide in, detailing the horrific sexual abuse she endures from her father, and later, the vicious physical abuse from her husband, 'Mr. ___'.\n\nDespite the overwhelming darkness of its opening, the novel is fundamentally a story of profound healing and liberation. The arrival of Shug Avery—a glamorous, fiercely independent blues singer who becomes Mr. ___'s mistress—completely transforms Celie's life. Through Shug, Celie learns about self-worth, sexual pleasure, and a spirituality that is not rooted in a punishing, patriarchal God, but in the beauty of the natural world (the 'color purple'). Walker’s use of African American Vernacular English is brilliant, making Celie’s eventual empowerment all the more resonant. It is a stunning, essential work."
  },
  {
    title: "Their Eyes Were Watching God",
    author: "Zora Neale Hurston",
    publishYear: 1937,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Watching+God",
    theGood: "A gorgeous, fiercely independent celebration of Black culture and female autonomy. The prose is incredibly lush and poetic.",
    theBad: "The heavy use of phonetic Southern Black dialect requires a period of adjustment for readers unfamiliar with it.",
    review: "Zora Neale Hurston’s Their Eyes Were Watching God is a cornerstone of African American literature, fiercely unique for its era because it entirely avoids the 'uplift' narratives and direct confrontations with white racism that dominated the Harlem Renaissance. Instead, it is an intensely intimate, deeply lyrical exploration of one Black woman's quest for absolute autonomy and romantic fulfillment.\n\nThe novel follows Janie Crawford as she returns to Eatonville, Florida (an all-Black town), and recounts the story of her three marriages to her best friend. Her first two marriages—one for security, one for social status—stifle her spirit and treat her as property. It is only in her third marriage, to the younger, vibrant Tea Cake, that Janie experiences true, equal partnership, leading to a tragic but deeply profound climax during a massive hurricane in the Everglades. Hurston’s prose is a breathtaking blend of high-literary narration and rich, authentic phonetic dialogue. It is a beautiful, deeply empowering masterpiece regarding self-discovery."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books BATCH 2 chunk 4 (to reach exactly 11 more books)...');
  let added = 0;
  for (const book of books) {
    if (added >= 11) break; // Stop exactly when we hit 11 new books
    
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
  console.log(`Done. Added ${added} books. Batch 2 (50 books) completed!`);
}

seedBatch().catch(console.error).finally(() => prisma.$disconnect());
