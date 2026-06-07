const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const prisma = new PrismaClient({ adapter: new PrismaLibSql({ url: 'file:./dev.db' }) });

const books = [
  {
    title: "The Left Hand of Darkness",
    author: "Ursula K. Le Guin",
    publishYear: 1969,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Left+Hand+of+Darkness",
    theGood: "A groundbreaking, profoundly empathetic exploration of gender and society. The trek across the ice is a masterpiece of survival literature.",
    theBad: "Its deliberate, anthropological pacing may deter readers looking for fast-paced sci-fi action.",
    review: "Ursula K. Le Guin’s The Left Hand of Darkness is a monumental work of speculative fiction that completely shattered the boundaries of the genre. The novel follows Genly Ai, an emissary from an interstellar coalition, who travels to the freezing planet of Gethen to invite its inhabitants to join the collective. The Gethenians are ambisexual, meaning they have no fixed gender, assuming temporary male or female biological roles only during a brief reproductive cycle each month.\n\nLe Guin uses this brilliant conceit not for cheap shock value, but to conduct a profound anthropological thought experiment: what would a human society look like if it were entirely stripped of the concept of a gender binary? The result is a society devoid of war, but fraught with incredibly complex political maneuvering, paranoia, and deep betrayals. The emotional core of the novel is the evolving relationship between Genly Ai and Estraven, a disgraced Gethenian politician. Their desperate, grueling 800-mile trek across the unforgiving Gobrin Ice is one of the most beautiful depictions of platonic love and profound mutual understanding ever written."
  },
  {
    title: "Neuromancer",
    author: "William Gibson",
    publishYear: 1984,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Neuromancer",
    theGood: "The novel that practically invented cyberpunk. The prose is incredibly dense, stylish, and wildly prophetic.",
    theBad: "The sheer density of invented slang and the dizzying pace can make the plot difficult to follow on a first read.",
    review: "William Gibson’s Neuromancer did not just predict the internet; it effectively gave it a vocabulary. Opening with the legendary line, 'The sky above the port was the color of television, tuned to a dead channel,' the novel birthed the cyberpunk genre. It introduced the world to the 'matrix'—a global, consensual hallucination of data—and the console cowboys who hack into it.\n\nThe story follows Case, a washed-up, drug-addicted hacker whose nervous system was damaged by a former employer, preventing him from jacking into cyberspace. He is recruited by a mysterious benefactor for one last impossible heist. Accompanied by Molly Millions, a heavily augmented street samurai with razor blades beneath her fingernails, Case navigates a dystopian underworld dominated by massive mega-corporations and sentient artificial intelligences. Gibson’s prose is highly stylized, frantic, and loaded with technological jargon that felt alien in 1984 but is terrifyingly familiar today. It is a gritty, visionary masterpiece that forever changed how we imagine the future."
  },
  {
    title: "Snow Crash",
    author: "Neal Stephenson",
    publishYear: 1992,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Snow+Crash",
    theGood: "A wildly entertaining, razor-sharp satire of anarcho-capitalism and virtual reality. The world-building is hilarious and highly influential.",
    theBad: "The massive, pages-long infodumps regarding Sumerian mythology and linguistics severely halt the narrative momentum in the middle act.",
    review: "If Neuromancer established the serious, gritty aesthetic of cyberpunk, Neal Stephenson’s Snow Crash violently deconstructed it with massive doses of hyper-capitalist satire. The novel imagines a future America where the federal government has completely collapsed, replaced by a patchwork of franchised corporate enclaves (Burbclaves) run by fast-food chains and the mafia. The protagonist, 'Hiro Protagonist,' is a freelance hacker and the greatest sword fighter in the world, who currently delivers pizzas for the Mafia.\n\nThe plot centers on the spread of 'Snow Crash,' a new cyber-drug that is simultaneously a computer virus capable of infecting avatars in the 'Metaverse' (a term Stephenson coined) and a biological virus capable of infecting the user's actual brain. Stephenson brilliantly intertwines computer programming theory with ancient Sumerian neurolinguistics, suggesting that language itself is a form of code that can be hacked. While the pacing occasionally suffers from lengthy historical expositions, the sheer audacity, wit, and prophetic accuracy of Stephenson’s vision make it a cornerstone of modern sci-fi."
  },
  {
    title: "Hyperion",
    author: "Dan Simmons",
    publishYear: 1989,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Hyperion",
    theGood: "A magnificent sci-fi adaptation of The Canterbury Tales. Each pilgrim's story is a flawless execution of a different sci-fi subgenre.",
    theBad: "It ends on a massive cliffhanger, requiring the reader to immediately start the sequel to get any narrative resolution.",
    review: "Dan Simmons’ Hyperion is a towering achievement in science fiction world-building and narrative structure. Modeled directly on Chaucer’s The Canterbury Tales, the novel follows seven pilgrims chosen to travel to the mysterious Time Tombs on the planet Hyperion, on the eve of a massive galactic war. The Tombs are guarded by the Shrike, a terrifying, time-traveling, metallic entity composed entirely of blades, worshipped by some as the Lord of Pain.\n\nTo pass the time on their journey, each pilgrim tells the story of why they were chosen for this doomed expedition. Simmons uses this structure to brilliant effect, writing each tale in a completely different genre. The Priest’s Tale is a horrific piece of body-horror and lost faith; the Soldier’s Tale is gritty military sci-fi; the Detective’s Tale is slick cyberpunk noir. The undisputed standout is the Scholar’s Tale, a profoundly heartbreaking story of a father watching his daughter age backward due to a temporal anomaly, serving as a devastating allegory for Alzheimer's disease. Hyperion is epic, deeply literary, and relentlessly terrifying."
  },
  {
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    publishYear: 2007,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Name+of+the+Wind",
    theGood: "Exquisitely crafted, lyrical prose that elevates the traditional 'magic school' trope into a deeply moving meditation on music and myth.",
    theBad: "Kvothe's extreme competence at almost everything he attempts can occasionally border on the 'Gary Stu' archetype.",
    review: "Patrick Rothfuss’s The Name of the Wind is a beautifully constructed love letter to the power of storytelling itself. The novel is framed around Kvothe, a legendary figure—variously known as a master magician, a brilliant musician, and a notorious assassin—who is now hiding in plain sight as a humble innkeeper. He agrees to dictate his true autobiography to a traveling scribe over three days, with this novel representing day one.\n\nWhile the plot hits familiar fantasy beats—an orphaned boy attends a prestigious university of magic, makes arrogant rivals, and struggles with poverty—Rothfuss’s prose elevates the material entirely. The writing is incredibly lyrical and precise. The magic system, 'sympathy,' is treated as a rigorous physical science, grounded in thermodynamics and mental discipline. However, the true soul of the novel lies in Kvothe’s relationship with music. The scene where a destitute Kvothe finally earns his silver talent pipes by playing a terrifyingly complex, heart-wrenching song on a lute with a broken string is a masterclass in emotional writing. It is a captivating, richly detailed debut."
  },
  {
    title: "Mistborn: The Final Empire",
    author: "Brandon Sanderson",
    publishYear: 2006,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Mistborn",
    theGood: "A brilliant fusion of a high-fantasy epic and an intricate heist movie, featuring one of the most innovative, rule-based magic systems ever created.",
    theBad: "The prose is highly functional but occasionally utilitarian, lacking the poetic flourish found in other literary fantasy.",
    review: "Brandon Sanderson’s Mistborn: The Final Empire operates on a brilliant, subversive premise: What if the 'Chosen One' prophesied to save the world actually lost, and the Dark Lord has been ruling the ash-covered, dystopian planet with an iron fist for a thousand years? The solution, proposed by a charismatic survivor named Kelsier, is not to fulfill a prophecy, but to assemble a crew of specialized thieves to rob the immortal Lord Ruler blind and collapse the empire’s economy.\n\nThe undeniable star of the novel is Allomancy, Sanderson’s meticulously crafted magic system where 'Mistborn' ingest and 'burn' specific metals in their stomach to grant physical and mental enhancements. Burning steel allows you to push on metals, tin enhances senses, pewter increases strength. The resulting action sequences read less like traditional fantasy duels and more like highly kinetic, physics-based wire-fu choreography. The emotional core centers on Vin, a traumatized, deeply mistrustful street urchin whom Kelsier mentors. Mistborn is a masterclass in tight plotting, explosive magic, and immensely satisfying narrative payoffs."
  },
  {
    title: "The Way of Kings",
    author: "Brandon Sanderson",
    publishYear: 2010,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Way+of+Kings",
    theGood: "Unparalleled epic world-building on a staggering scale. The climax, affectionately known as the 'Sanderlanche,' is breathtaking.",
    theBad: "The massive, 1,000-page length requires an immense upfront investment before the various plot threads finally converge.",
    review: "If Mistborn proved Brandon Sanderson could write a tight, innovative fantasy thriller, The Way of Kings proved he could construct a world on the massive, sweeping scale of Tolkien or Jordan. It is the first volume of the Stormlight Archive, set on Roshar, a terrifying, rocky world battered by massive, magical hurricanes where the flora and fauna have adapted by hiding in shells. The world-building is staggering in its ecological, historical, and cultural detail.\n\nThe narrative primarily follows Kaladin, a brilliant young surgeon-turned-soldier who has been betrayed and sold into slavery as a 'bridgeman'—cannon fodder forced to carry massive wooden bridges across deadly chasms during endless border skirmishes. Kaladin’s excruciating struggle against deep depression and despair forms the beating heart of the novel. Intertwined with his story are Dalinar Kholin, a warlord experiencing terrifying visions of a forgotten past, and Shallan, a young scholar attempting a desperate heist to save her family. When the incredibly complex, meticulously established plot threads finally violently collide in the final 200 pages, the emotional and kinetic payoff is unmatched in modern fantasy. It is epic fantasy at its absolute zenith."
  },
  {
    title: "The Fifth Season",
    author: "N.K. Jemisin",
    publishYear: 2015,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Fifth+Season",
    theGood: "A fiercely original, structurally brilliant apocalyptic fantasy. The second-person narration is a stroke of absolute genius.",
    theBad: "It is an incredibly dark, emotionally punishing narrative regarding systemic oppression and the murder of children.",
    review: "N.K. Jemisin’s The Fifth Season opens with the end of the world. It is set in the Stillness, a massive supercontinent plagued by 'Fifth Seasons'—catastrophic, world-shattering tectonic and climatic events that routinely decimate civilization. The only people capable of mitigating these disasters are 'orogenes,' individuals born with the ability to manipulate kinetic energy and control the earth. Because of their terrifying power, they are brutally subjugated, enslaved, and trained by a brutal imperial institution known as the Fulcrum.\n\nThe novel is a masterclass in narrative structure, following three distinct orogene women at different stages of their lives: Damaya, a young girl given to the Fulcrum; Syenite, a rising star tasked with breeding; and Essun, a woman hiding her identity in a remote village, who discovers her husband has murdered their young son and kidnapped their daughter upon discovering they possess orogeny. Jemisin’s use of the second-person point of view ('You are Essun') is not a gimmick; it forces the reader into an agonizing, intimate complicity with the character's profound trauma and rage. The Fifth Season is a furious, geological masterpiece about the violence of systemic oppression."
  },
  {
    title: "American Gods",
    author: "Neil Gaiman",
    publishYear: 2001,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=American+Gods",
    theGood: "A brilliant, sprawling mythological road trip across a weird, hidden America. The blending of ancient folklore and modern decay is seamless.",
    theBad: "The protagonist, Shadow, is incredibly passive and stoic, often merely reacting to the bizarre events happening around him.",
    review: "Neil Gaiman’s American Gods is a massive, rambling love letter to the strange, forgotten corners of the American landscape. The novel operates on a brilliant central premise: gods are real, and they exist because people believe in them. When immigrants came to America, they brought their gods with them—Odin, Anansi, Czernobog. But over time, the old gods have been forgotten, forced to scrape out miserable existences as grifters, butchers, and prostitutes, rapidly losing power to the 'New Gods' of America: Media, Technology, and the Interstate Highway System.\n\nThe narrative follows Shadow Moon, an ex-convict who is hired as a bodyguard by the mysterious Mr. Wednesday (who is actually Odin), as they travel across the country attempting to rally the old gods for a massive, apocalyptic war. Gaiman uses this road trip structure to explore the strange, liminal spaces of America—the roadside attractions, the neon-lit motels, the freezing, sleepy towns of the Midwest. The novel is deeply atmospheric, weaving intense mythological violence with profound observations about the immigrant experience and the nature of belief. It is a vast, dark, and utterly magical piece of Americana."
  },
  {
    title: "The Martian",
    author: "Andy Weir",
    publishYear: 2011,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Martian",
    theGood: "An incredibly tight, relentlessly entertaining survival thriller that successfully weaponizes hard science and botany as gripping action.",
    theBad: "Mark Watney’s constant, glib humor in the face of certain death can occasionally undercut the psychological terror of total isolation.",
    review: "Andy Weir’s The Martian is a triumph of 'hard' science fiction, a novel that proves that rigorous mathematics, chemistry, and orbital mechanics can be just as thrilling as a laser shootout. The premise is immediate and terrifying: astronaut Mark Watney is presumed dead and accidentally left behind on Mars when his crew is forced to evacuate during a massive dust storm. With no way to communicate with Earth and only enough food to last a fraction of the time required for a rescue mission, Watney must 'science the shit out of this' to survive.\n\nThe novel is told largely through Watney’s highly informal, sarcastic log entries. This narrative choice brilliantly grounds the incredibly complex scientific problem-solving—whether it’s creating water from hydrazine rocket fuel or growing potatoes in human waste—in an accessible, highly entertaining voice. Weir masterfully paces the tension; every time Watney solves a seemingly impossible problem, a new, catastrophic failure occurs, forcing him to improvise once again. The Martian is an incredibly optimistic novel, a celebration of human ingenuity, international cooperation, and the stubborn, unbreakable will to live."
  },
  {
    title: "Project Hail Mary",
    author: "Andy Weir",
    publishYear: 2021,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Project+Hail+Mary",
    theGood: "Takes the scientific problem-solving of The Martian and scales it up to an incredibly emotional, high-stakes interstellar friendship.",
    theBad: "The flashbacks to Earth occasionally drag compared to the sheer brilliance of the present-day space narrative.",
    review: "With Project Hail Mary, Andy Weir takes the winning formula of The Martian—a lone, sarcastic scientist solving physics problems in space—and fundamentally improves upon it by introducing one of the greatest extraterrestrial characters in modern sci-fi. The novel opens with Ryland Grace waking up from a coma on a spaceship in a distant star system, with two dead crewmates and absolutely no memory of who he is or why he is there. He soon realizes he is on a desperate, one-way suicide mission to find a cure for 'Astrophage,' a space-borne algae that is rapidly dimming the Sun and threatening Earth with an apocalyptic ice age.\n\nThe true brilliance of the novel occurs when Grace discovers he is not alone in the star system; an alien ship from the Eridani system has also arrived, suffering from the same Astrophage infection. The cautious, meticulously scientific process by which Grace and the alien engineer (whom he names 'Rocky') establish a common language using music and mathematics is utterly captivating. Rocky—a blind, five-legged, rock-covered creature who communicates in chords—is incredibly endearing. Their evolving friendship and deep mutual respect across entirely different biologies elevate Project Hail Mary from a standard hard-sci-fi thriller into a profoundly touching, optimistic masterpiece."
  },
  {
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    publishYear: 2008,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Three+Body+Problem",
    theGood: "Mind-bending, terrifyingly grand scientific concepts regarding orbital mechanics, quantum physics, and the terrifying reality of the Fermi Paradox.",
    theBad: "The characterization is often extremely flat, serving primarily as mouthpieces for the massive philosophical and scientific ideas.",
    review: "Liu Cixin’s The Three-Body Problem is a colossal, fiercely intellectual work of hard science fiction that completely redefines the scale of first-contact narratives. The novel is rooted in the trauma of the Chinese Cultural Revolution, opening with the brutal public execution of a physics professor by the Red Guard. His daughter, Ye Wenjie, becomes deeply disillusioned with humanity and, while working at a secret military radar base, intercepts a transmission from a hostile alien civilization (the Trisolarans). Believing humanity cannot save itself, she invites them to conquer Earth.\n\nThe narrative then shifts to the present day, where nanotech engineer Wang Miao is drawn into a mysterious virtual reality game that perfectly simulates the 'Three-Body Problem'—a planet caught in the chaotic, unpredictable gravitational pull of three suns, resulting in the constant destruction of its civilization. Liu Cixin’s exploration of advanced physics—particularly the concept of 'sophons' used to actively halt human scientific progress by interfering with particle accelerators—is staggering in its imagination. It is a bleak, dense, and utterly terrifying novel that makes the universe feel vast, dark, and deeply hostile."
  },
  {
    title: "The Hunger Games",
    author: "Suzanne Collins",
    publishYear: 2008,
    rating: 9,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=The+Hunger+Games",
    theGood: "A tightly paced, brutally effective critique of reality television, class inequality, and the spectacle of violence.",
    theBad: "The love triangle subplot often distracts from the far more compelling political and psychological trauma of the narrative.",
    review: "It is easy to dismiss The Hunger Games due to the massive wave of inferior Young Adult dystopian clones it spawned, but Suzanne Collins’ original novel remains a sharp, genuinely brutal piece of political science fiction. Set in the ruins of North America, the nation of Panem maintains control over its twelve impoverished districts by forcing them to send one boy and one girl to fight to the death in an annual, highly televised gladiatorial spectacle. When sixteen-year-old Katniss Everdeen volunteers to take her younger sister’s place, she is thrust into a terrifying game of survival.\n\nCollins writes with a stark, present-tense urgency that perfectly captures Katniss’s hyper-vigilant, traumatized perspective. The novel is less about the glory of combat and more about the horrific psychological toll of violence, and the realization that in a totalitarian society, the only true act of rebellion is refusing to play by their rules. The Capitol's obsession with fashion, spectacle, and manufactured narratives is a scathing indictment of modern media consumption. It is a fiercely compelling, important novel."
  },
  {
    title: "Station Eleven",
    author: "Emily St. John Mandel",
    publishYear: 2014,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=Station+Eleven",
    theGood: "A profoundly beautiful, elegiac post-apocalyptic novel that focuses on the preservation of art and human connection rather than brutal survival.",
    theBad: "The narrative weaves across multiple timelines and characters, which can initially feel disparate before the brilliant final convergence.",
    review: "In a genre usually dominated by zombies, cannibals, and grim desperation, Emily St. John Mandel’s Station Eleven offers a stunningly melancholic, hopeful vision of the apocalypse. The novel opens with the sudden death of a famous actor playing King Lear on stage, on the same night that a hyper-lethal strain of the Georgia Flu begins to wipe out 99% of the global population. Twenty years later, the narrative follows the Traveling Symphony, a nomadic troupe of actors and musicians who wander the ruins of the Great Lakes region, performing Shakespeare for the scattered survivors because 'survival is insufficient.'\n\nMandel weaves a beautiful, intricate web, constantly jumping between the post-apocalyptic present and the days leading up to the collapse. The novel is an elegy for the modern world, making the reader feel profound grief for mundane things we take for granted: the glow of a laptop screen, the flight of an airplane, the hum of electricity. It suggests that art, memory, and the relationships we forge are the only things capable of anchoring us when civilization falls. Station Eleven is a quiet, devastating, and ultimately life-affirming masterpiece."
  },
  {
    title: "A Game of Thrones",
    author: "George R.R. Martin",
    publishYear: 1996,
    rating: 10,
    readDate: new Date("2024-06-08"),
    coverUrl: "https://placehold.co/400x600/000000/ffffff/png?text=A+Game+of+Thrones",
    theGood: "A massive, ruthless deconstruction of high fantasy tropes. The political maneuvering is incredibly dense and the consequences are brutal.",
    theBad: "The sheer volume of characters, noble houses, and historical lore requires significant mental tracking.",
    review: "George R.R. Martin’s A Game of Thrones violently dragged the epic fantasy genre out of the idealized, moralistic shadow of Tolkien and thrust it into the mud, blood, and brutal realpolitik of the War of the Roses. Set on the continent of Westeros, the novel is told through the shifting perspectives of several major characters, primarily members of the noble House Stark. When Lord Eddard Stark is called to serve as the Hand of the King, he is drawn into a deadly, intricate web of deceit, incest, and political assassination orchestrated by the Lannisters.\n\nThe brilliance of Martin’s work lies in its absolute refusal to protect its protagonists. In Westeros, honor and nobility are not shields; they are fatal vulnerabilities. The shocking execution of the presumed main character in the final act fundamentally changes the rules of engagement, proving that anyone can die and that actions have terrifying, permanent consequences. Martin balances this gritty, low-magic political intrigue with the slow, terrifying return of supernatural forces—the undead White Walkers in the frozen North, and the birth of dragons in the East. It is a sprawling, addictive masterwork of political fantasy."
  }
];

async function seedBatch() {
  const admin = await prisma.user.findUnique({ where: { email: 'admin@example.com' } });
  if (!admin) {
    console.error('Admin user not found!');
    return;
  }
  
  console.log('Seeding books chunk 3 (15 books)...');
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
