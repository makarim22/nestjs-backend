const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    publishYear: 2011,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Sapiens",
    theGood: "A sweeping, incredibly accessible synthesis of human history that forces the reader to completely re-evaluate modern society.",
    theBad: "Harari occasionally states highly debated anthropological theories as absolute, objective facts.",
    review: "Yuval Noah Harari’s Sapiens is a massively ambitious undertaking: compressing the entire history of the human species into a single, readable volume. Harari argues that Homo sapiens came to dominate the planet not because we are the strongest or smartest, but because we are the only species capable of creating and believing in 'shared fictions.' He posits that money, religion, human rights, and corporations do not exist in the physical world; they exist only because millions of humans collectively agree to believe in them.\n\nThe book is divided into four major cognitive shifts: the Cognitive Revolution, the Agricultural Revolution, the Unification of Humankind, and the Scientific Revolution. Harari’s most provocative argument is that the Agricultural Revolution was history's biggest fraud—trapping humans in a cycle of grueling labor and disease to serve the evolutionary success of wheat, rather than improving human happiness. It is a profoundly paradigm-shifting, highly readable synthesis of biology, history, and economics."
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    publishYear: 2011,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Thinking+Fast+and+Slow",
    theGood: "A masterclass in behavioral economics that fundamentally alters how you perceive your own decision-making process.",
    theBad: "The sheer density of academic studies and statistical explanations can make it a very slow, demanding read.",
    review: "Nobel laureate Daniel Kahneman’s Thinking, Fast and Slow is the definitive text on behavioral economics and cognitive bias. Kahneman explains the human mind as a dichotomy between two systems: System 1 (fast, intuitive, emotional, and heavily reliant on heuristics) and System 2 (slow, deliberate, logical, and highly lazy). \n\nThe book systematically dismantles the classical economic theory that humans are rational actors. Instead, Kahneman demonstrates through decades of rigorous psychological experiments how System 1 constantly tricks us into making terrible decisions through overconfidence, loss aversion, and the anchoring effect. While it is dense and requires careful study, it is an essential manual for understanding the profound flaws in human intuition and learning how to mitigate our own cognitive blindness."
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    publishYear: 2018,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Atomic+Habits",
    theGood: "Incredibly practical, actionable, and devoid of the vague, metaphysical fluff that plagues most self-help books.",
    theBad: "It synthesizes a lot of existing behavioral psychology without necessarily introducing radically new theoretical concepts.",
    review: "James Clear’s Atomic Habits has become the modern gold standard for personal development literature largely because it is fiercely pragmatic. Clear abandons the traditional advice of relying on sheer willpower and motivation, arguing instead that behavior change is a function of system design. He posits that we do not rise to the level of our goals; we fall to the level of our systems.\n\nThe book outlines four fundamental laws of behavior change: make it obvious, make it attractive, make it easy, and make it satisfying. Clear emphasizes the concept of 'atomic' changes—tiny, 1% improvements that compound over time into massive results. By focusing on identity change rather than outcome change (e.g., 'I am a runner' vs. 'I want to run a marathon'), the book provides a highly effective, purely mechanical blueprint for rewiring your life."
  },
  {
    title: "The Power of Habit",
    author: "Charles Duhigg",
    publishYear: 2012,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Power+of+Habit",
    theGood: "Fascinating journalistic deep dives into how habits shape both individual lives and massive corporate structures.",
    theBad: "The advice on how to actually change personal habits is somewhat brief compared to the extensive corporate case studies.",
    review: "Before Atomic Habits provided the practical manual, Charles Duhigg’s The Power of Habit provided the journalistic exploration of the science behind habit formation. Duhigg introduces the core concept of the 'habit loop': a cue, a routine, and a reward. He argues that habits cannot be eradicated, they can only be replaced by inserting a new routine between the old cue and the old reward.\n\nWhere the book truly excels is in its macro-level analysis. Duhigg explores how massive organizations, from Alcoa to Target, utilize habit loops to manipulate consumer behavior or drastically improve workplace safety. The chapter detailing how Target's statistical models could determine a customer was pregnant before her family knew is a terrifying, fascinating look into data-driven marketing. It is a highly engaging, thought-provoking read."
  },
  {
    title: "Quiet: The Power of Introverts",
    author: "Susan Cain",
    publishYear: 2012,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Quiet",
    theGood: "A profoundly validating, culturally necessary defense of introversion in a society that worships the 'Extrovert Ideal.'",
    theBad: "It occasionally paints extroverts with a very broad, somewhat negative brush to elevate its central thesis.",
    review: "Susan Cain’s Quiet is a cultural watershed, a book that fundamentally shifted the societal conversation around personality types. Cain argues that Western society, particularly American corporate culture, is entirely structured around the 'Extrovert Ideal'—the belief that the ideal self is gregarious, alpha, and comfortable in the spotlight. This bias, she argues, results in a colossal waste of talent, energy, and happiness for the one-third of the population who are introverted.\n\nCain utilizes extensive neurological research to prove that introversion is a biological reality, not a character flaw. The book explores how open-plan offices and group brainstorming sessions are often actively detrimental to creativity, which usually requires deep, solitary focus. For introverts, the book is incredibly validating; for extroverts, it is a necessary manual for understanding how to properly lead and collaborate with the quieter half of the world."
  },
  {
    title: "Educated",
    author: "Tara Westover",
    publishYear: 2018,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Educated",
    theGood: "An astonishing, deeply moving memoir about the transformative power of education and the terrifying gravity of family trauma.",
    theBad: "The descriptions of intense physical and psychological abuse are harrowing and difficult to read.",
    review: "Tara Westover’s memoir Educated is a staggering testament to human resilience. Westover was born to radical Mormon survivalist parents in the mountains of Idaho. She had no birth certificate, no medical records, and received no formal schooling, spending her childhood salvaging scrap metal in her father's dangerous junkyard and preparing for the End of Days.\n\nThe book chronicles her desperate, grueling attempt to escape the severe physical abuse of her older brother and the profound psychological manipulation of her father by teaching herself enough mathematics and grammar to pass the ACT. Her eventual journey to Brigham Young University, and later to Cambridge and Harvard, is less a triumph of intellect than a devastating emotional severing. Westover eloquently captures the terrifying realization that to save her own mind, she had to irrevocably lose her family. It is a profoundly gripping, beautifully written autobiography."
  },
  {
    title: "Born a Crime",
    author: "Trevor Noah",
    publishYear: 2016,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Born+a+Crime",
    theGood: "Hilarious, heartwarming, and deeply insightful regarding the absurdities and horrors of apartheid South Africa.",
    theBad: "The narrative structure is somewhat episodic and non-linear, jumping back and forth across his childhood.",
    review: "Trevor Noah’s Born a Crime is an absolute triumph of the memoir genre, primarily because it serves as an extraordinary tribute to his mother, Patricia Nombuyiselo Noah. The title refers to the literal fact of Noah’s existence: born to a white Swiss father and a Black Xhosa mother during apartheid, his very conception was a criminal act punishable by imprisonment. He spent his early childhood largely hidden indoors to prevent the state from taking him away.\n\nNoah uses his incredible comedic timing to expose the profound, bureaucratic absurdity of systemic racism. He navigates the rigid racial classifications of South Africa by utilizing language as a chameleon-like tool of survival. However, the true soul of the book is his fiercely independent, deeply religious, and wildly unconventional mother, who refused to be bound by the crushing limitations placed upon Black women. The final chapters, dealing with the terrifying reality of domestic violence, hit with devastating emotional force. It is a brilliant, essential read."
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    publishYear: 2018,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Becoming",
    theGood: "An incredibly poised, deeply personal reflection on identity, marriage, and the bizarre fishbowl of the American presidency.",
    theBad: "It remains highly guarded regarding the darker, more controversial realities of American political maneuvering.",
    review: "Michelle Obama’s Becoming is divided into three distinct acts: Becoming Me, Becoming Us, and Becoming More. The most compelling section is undeniably the first. Obama writes beautifully about her childhood on the South Side of Chicago, exploring the intricate dynamics of race, class, and the crushing pressure of excellence required of a young Black woman navigating elite institutions like Princeton and Harvard Law.\n\nThe second act offers a surprisingly candid look at the strains placed upon her marriage by Barack Obama’s relentless political ambition. She does not shy away from discussing their use of couples counseling, providing a refreshingly grounded view of a highly idealized relationship. While the final act, detailing their eight years in the White House, occasionally slips into the polished, guarded rhetoric typical of political memoirs, her reflections on the immense symbolic weight of being the first Black First Lady are profound and moving. It is an inspiring, elegantly written autobiography."
  },
  {
    title: "The Immortal Life of Henrietta Lacks",
    author: "Rebecca Skloot",
    publishYear: 2010,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Henrietta+Lacks",
    theGood: "A vital, enraging intersection of medical history, bioethics, and systemic racism. The reporting is incredibly empathetic and thorough.",
    theBad: "The narrative occasionally gets bogged down by the author's own presence and struggles in reporting the story.",
    review: "Rebecca Skloot’s The Immortal Life of Henrietta Lacks is a staggering piece of investigative journalism that uncovers the profoundly unjust origins of modern medicine. In 1951, a poor Black tobacco farmer named Henrietta Lacks died of cervical cancer at Johns Hopkins Hospital. Without her knowledge or consent, doctors took a sample of her tumor. Those cells, known as HeLa, became the first immortal human cell line, instrumental in developing the polio vaccine, cloning, gene mapping, and in vitro fertilization, spawning a multi-billion-dollar medical industry.\n\nSkloot intertwines the fascinating science of the HeLa cells with the tragic, deeply impoverished reality of Lacks's surviving family, who were unaware of the cells' existence for decades and could not even afford basic health insurance. The book is a searing indictment of the medical establishment’s historical exploitation of Black bodies and a profound exploration of bioethics and informed consent. It restores humanity to a woman who had been reduced to a microscopic commodity."
  },
  {
    title: "The Wright Brothers",
    author: "David McCullough",
    publishYear: 2015,
    rating: 8,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Wright+Brothers",
    theGood: "A meticulously researched, highly engaging portrait of sheer determination, mechanical genius, and Midwestern stoicism.",
    theBad: "McCullough’s reverence for his subjects borders on hagiography, rarely exploring any significant personal flaws.",
    review: "David McCullough’s The Wright Brothers is a classic American historical narrative, detailing the incredible journey of Wilbur and Orville Wright—two bicycle mechanics from Dayton, Ohio, with no college education or formal scientific training, who solved the ancient problem of human flight. \n\nMcCullough excels at demystifying the myth of the 'lone genius eureka moment.' The book details the agonizing, dangerous, and highly empirical process the brothers utilized over years of testing gliders on the desolate, wind-swept dunes of Kitty Hawk, North Carolina. The narrative is heavily reliant on the brothers' extensive diaries and letters, revealing them to be exceptionally close, fiercely private, and entirely devoted to their sister, Katharine. While the book lacks a critical edge, it is a beautifully written, highly readable testament to the power of methodical perseverance and intellectual curiosity."
  },
  {
    title: "Steve Jobs",
    author: "Walter Isaacson",
    publishYear: 2011,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Steve+Jobs",
    theGood: "An unflinchingly honest, comprehensive biography that does not shy away from Jobs' immense cruelty or his undeniable genius.",
    theBad: "Its massive length and highly detailed accounts of corporate boardroom maneuvering can be exhausting.",
    review: "Written with Steve Jobs' full cooperation but with no editorial control over the final product, Walter Isaacson’s biography is a riveting, often deeply uncomfortable portrait of the man who redefined personal computing, animated films, music, and mobile communication. Isaacson captures the inherent contradiction of Jobs: a man driven by an absolute, terrifying perfectionism who could create objects of profound beauty and elegance, while simultaneously treating the people around him with staggering emotional cruelty.\n\nThe book details Jobs' infamous 'reality distortion field'—his ability to convince himself and others that the impossible was achievable through sheer force of will. Isaacson does not attempt to excuse Jobs' worst behavior, from his initial denial of paternity for his daughter Lisa to his tyrannical management style at Apple and NeXT. Instead, the book poses a terrifying question: was Jobs' cruelty a necessary component of his genius, or did he succeed in spite of it? It is a masterclass in biographical journalism."
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    publishYear: 2016,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Shoe+Dog",
    theGood: "A surprisingly vulnerable, thrillingly chaotic account of the birth of Nike. It strips away the myth of the effortless visionary.",
    theBad: "It abruptly ends shortly after the company goes public, skimming over the later controversies regarding international labor practices.",
    review: "Phil Knight’s Shoe Dog is the anti-business business book. Rather than offering a sterile list of management principles, Knight delivers a chaotic, incredibly stressful memoir about the first two decades of building Nike. The narrative reveals that for nearly its entire early existence, Nike (originally Blue Ribbon Sports) was constantly teetering on the edge of total bankruptcy, surviving entirely on Knight's ability to float enormous loans based on skyrocketing sales.\n\nKnight is remarkably candid about his own flaws, portraying himself not as a genius, but as an introverted, deeply obsessive runner who assembled a bizarre, highly dysfunctional team of outcasts and accountants ('the Buttfaces') who were united only by their fanatical belief in shoes. The book captures the terrifying exhilaration of entrepreneurship—the betrayals, the lawsuits, the agonizing financial stress, and the profound, irrational passion required to build something out of nothing. It is an exhilarating, highly readable memoir."
  },
  {
    title: "Into Thin Air",
    author: "Jon Krakauer",
    publishYear: 1997,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Into+Thin+Air",
    theGood: "A terrifying, deeply tragic, and immaculately researched firsthand account of the commercialization of Everest and human hubris.",
    theBad: "Krakauer’s harsh criticisms of certain guides and climbers sparked immense controversy and competing narratives.",
    review: "Jon Krakauer’s Into Thin Air is a harrowing, adrenaline-fueled masterpiece of narrative non-fiction. Krakauer, an experienced mountaineer and journalist, was hired by Outside magazine in 1996 to write an article about the increasing commercialization of Mount Everest. He ended up as a participant in one of the deadliest days in the mountain's history, when a rogue storm trapped multiple guided expeditions in the 'Death Zone' near the summit.\n\nThe book is a devastating indictment of the climbing industry, exploring the fatal consequences of allowing wealthy, inexperienced clients to buy their way to the top of the world. Krakauer is brutally honest, turning his sharpest criticisms inward; he wrestles agonizingly with his own survivor’s guilt and the tragic realization that his very presence as a journalist may have pressured the guides to push past their absolute turnaround times. The descriptions of the physical deterioration caused by high altitude are terrifying. It is a grueling, essential classic of adventure literature."
  },
  {
    title: "The Diary of a Young Girl",
    author: "Anne Frank",
    publishYear: 1947,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Anne+Frank",
    theGood: "A profound, heartbreakingly intimate testament to the human spirit. Anne’s voice is remarkably perceptive, funny, and full of life.",
    theBad: "Knowing the inevitable, horrific conclusion of the author's life makes it an emotionally devastating reading experience.",
    review: "Anne Frank’s Diary is not merely a historical document; it is a vital, breathing piece of literature crafted by a naturally gifted writer. Hidden in the Secret Annex in Amsterdam for two years, Anne chronicles the claustrophobic, terrifying reality of hiding from the Nazis. Yet, the diary is overwhelmingly focused on the universal, deeply relatable struggles of adolescence: her frustrating relationship with her mother, her blossoming sexuality, and her fierce desire for independence.\n\nThe profound tragedy of the diary lies in its unrelenting optimism and the sheer, radiant potential of its author. Anne’s famous declaration—'In spite of everything I still believe that people are really good at heart'—is often quoted out of context to provide a comforting resolution to the Holocaust. However, read within the context of the looming terror outside her window, it is a staggering, defiant act of spiritual resistance. The diary abruptly ends, leaving a silence that echoes with the murder of six million Jews. It is an absolute, essential pillar of human history."
  },
  {
    title: "Man's Search for Meaning",
    author: "Viktor E. Frankl",
    publishYear: 1946,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Mans+Search+for+Meaning",
    theGood: "A brief, incredibly profound work that fundamentally reorients the reader's understanding of suffering and purpose.",
    theBad: "The second half, outlining the psychological theory of logotherapy, is somewhat dry compared to the staggering memoir of the first half.",
    review: "Viktor Frankl’s Man's Search for Meaning is a foundational text of existential psychology, born out of the absolute darkest depths of human experience. Frankl, a Jewish psychiatrist from Vienna, spent three years in Nazi concentration camps, including Auschwitz. The first half of the book is an objective, chillingly clinical observation of the psychological stages of the prisoners: the initial shock, the descent into emotional apathy as a necessary survival mechanism, and the severe psychological trauma following liberation.\n\nFrankl’s central thesis, which forms the basis of his 'logotherapy,' is that human beings are not primarily driven by the pursuit of pleasure (Freud) or power (Adler), but by the pursuit of meaning. He argues that even in circumstances of absolute, inescapable suffering, a person retains the ultimate freedom: the ability to choose their attitude toward that suffering. He posits that those who survived the camps were often those who could envision a future purpose—a loved one to return to, or an unfinished work to complete. It is a staggering, life-altering book."
  },
  {
    title: "Night",
    author: "Elie Wiesel",
    publishYear: 1956,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Night",
    theGood: "A sparse, devastating, and entirely unsentimental account of the Holocaust. It is the definitive documentation of the death of faith.",
    theBad: "It is an agonizingly bleak, traumatizing read that offers absolutely no comfort or resolution.",
    review: "If Anne Frank’s diary is a testament to the enduring human spirit in the face of terror, Elie Wiesel’s Night is the terrifying documentation of that spirit's complete annihilation. Written in sparse, staccato prose stripped of all literary flourish, the book chronicles Wiesel’s experience as a teenager deported with his family from a Hungarian ghetto to the Auschwitz and Buchenwald concentration camps.\n\nThe horror of Night lies in its depiction of the systematic stripping away of humanity. Wiesel does not merely document the physical starvation and the crematoriums; he documents the murder of his own faith in God, and the agonizing guilt of feeling his devotion to his dying father slowly replaced by the primal, animalistic instinct for self-preservation. The narrative is utterly devoid of heroics or redemption. The final image of the book—Wiesel looking into a mirror after liberation and seeing a corpse staring back at him—is a haunting, irrevocable statement on the true cost of survival. It is an excruciating, fundamentally necessary work of witness."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 4 (16 books)...');
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
