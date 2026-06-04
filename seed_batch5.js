const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  let user = await prisma.user.findFirst();
  if (!user) {
    console.error('No user found.');
    process.exit(1);
  }
  const userId = user.id;

  const movies = [
    {
      title: "Chungking Express",
      director: "Wong Kar-wai",
      releaseYear: 1994,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/A5zTFC4UDA65U7gTIfq5T4Xn25o.jpg",
      theGood: "A vibrant, kinetic exploration of heartbreak and urban isolation in 1990s Hong Kong",
      theBad: "The fragmented, two-part narrative structure can feel disjointed",
      review: "Wong Kar-wai's **Chungking Express** is a film fueled by lovelorn energy and expired pineapples. Shot quickly during a break from editing his martial arts epic *Ashes of Time*, it captures the frantic, neon-drenched pulse of Hong Kong better than almost any other film. It tells two separate stories about heartbroken cops falling for enigmatic women, bound together only by setting and thematic resonance.\n\nThe first half follows Cop 223 (Takeshi Kaneshiro), who obsessively buys cans of pineapple expiring on May 1st, waiting for his ex-girlfriend to return. His encounter with a mysterious blonde-wigged drug smuggler (Brigitte Lin) in a bar is a masterclass in missed connections. Wong and cinematographer Christopher Doyle use step-printing — dropping frames to create a smudged, dizzying sense of motion — to visually represent the blur of city life where people pass within inches of each other without truly touching.\n\nThe second half shifts to Cop 663 (Tony Leung), whose apartment is secretly cleaned and rearranged by Faye (Faye Wong), a quirky snack bar worker. Her unauthorized redecoration of his life — changing his soap, replacing his fish — is both an act of profound intrusion and peculiar romance.\n\n> \"Where do you want to go?\"\n> \"Wherever you want to take me.\"\n\nThe Mamas & the Papas' 'California Dreamin'' plays relentlessly throughout the second half, becoming less a song and more an atmosphere — a localized weather system of longing. Faye Wong's performance is magnetic, a burst of chaotic pixie energy that feels entirely genuine.\n\n**Chungking Express** doesn't offer neat resolutions. It offers moods. It understands that heartbreak in a crowded city is a specific kind of loneliness, and it finds beauty in the transience of those connections. It's a pop song of a movie: catchy, melancholy, and impossible to forget."
    },
    {
      title: "Synecdoche, New York",
      director: "Charlie Kaufman",
      releaseYear: 2008,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/1X64qS0Yl93yZEDs71B5J2Rnf5I.jpg",
      theGood: "A staggeringly ambitious meditation on mortality, art, and the impossibility of truly knowing another person",
      theBad: "Its surreal, recursive structure and pervasive gloom make it an emotionally exhausting experience",
      review: "Charlie Kaufman's directorial debut, **Synecdoche, New York**, is a film of terrifying scope. It is about a theater director, Caden Cotard (Philip Seymour Hoffman), who uses a MacArthur Genius Grant to build a life-size replica of New York City inside a warehouse, populating it with actors playing himself and everyone he knows. As years turn into decades, the play becomes indistinguishable from reality, and then consumes it.\n\nHoffman delivers a performance of profound, agonizing vulnerability. Caden is decaying from the first frame — plagued by mysterious physical ailments, haunted by the departure of his wife (Catherine Keener) and daughter. His attempt to capture the 'brutal truth' of his life in art is a desperate bid for control in a universe governed by entropy and loss.\n\nThe film's surrealism operates on a scale that defies logic but adheres perfectly to the emotional reality of depression and aging. Time slips away unnoticed. People buy houses that are permanently on fire. Actors hired to play Caden hire other actors to play themselves playing Caden, creating a fractal regression of identity that is both hilarious and deeply disturbing.\n\n> \"I know how to do it now. There are nearly thirteen million people in the world. None of those people is an extra. They're all the leads of their own stories.\"\n\nKaufman's script is dense with wordplay, literary references, and visual gags (the title itself is a pun on Schenectady, New York, and the literary device of a part representing the whole). But the intellectual games never obscure the film's beating heart: the unbearable sadness of realizing that life is short, that we hurt the people we love, and that art, for all its power, cannot save us from death.\n\nThe final act, as the warehouse city falls into ruin and Caden accepts direction from an earpiece, is an elegy for the human condition. **Synecdoche, New York** is a masterpiece that demands to be watched, even as it breaks your heart."
    },
    {
      title: "Do the Right Thing",
      director: "Spike Lee",
      releaseYear: 1989,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/63rmC6QkO30D5L108L9jNqS5c8M.jpg",
      theGood: "A masterpiece of political filmmaking that remains fiercely relevant, visually explosive, and morally complex",
      theBad: "The escalating tension leading to the climax is so palpable it can induce physical anxiety",
      review: "Spike Lee's **Do the Right Thing** takes place on the hottest day of the summer in Bedford-Stuyvesant, Brooklyn. It is a film about temperature — meteorological, racial, and social — and the inevitability of combustion when the heat has nowhere to go. Released in 1989, it remains the most vital, formally audacious, and uncompromising film about race in American cinema.\n\nLee himself plays Mookie, a pizza delivery man navigating the fault lines between the Black community, the Italian-American pizzeria owners (Sal and his sons), and the Korean grocers across the street. The film refuses to offer easy heroes or villains. Sal (Danny Aiello) is generous but fiercely defensive of his 'Wall of Fame' (which features only Italian-Americans). Buggin' Out (Giancarlo Esposito) is righteous but needlessly antagonistic. Radio Raheem (Bill Nunn) is gentle but intimidating. Every character is fully human, which makes the inevitable tragedy all the more devastating.\n\nErnest Dickerson's cinematography bathes the neighborhood in saturated reds, oranges, and yellows, creating a visual heat wave that radiates off the screen. Lee employs Dutch angles, direct-to-camera monologues, and a vibrant hip-hop aesthetic (anchored by Public Enemy's 'Fight the Power') that revolutionized the language of independent film.\n\n> \"Always do the right thing.\"\n\nThe film's climax — the murder of Radio Raheem by police, followed by the destruction of Sal's Pizzeria — sparked controversy upon release, with some critics expressing fear it would incite riots. This reaction proved Lee's point: a society that values property over Black lives is fundamentally broken. Mookie's decision to throw the trash can through the window remains one of the most debated actions in cinema history. Is it an act of misdirected rage, or a calculated move to save Sal's life by directing the crowd's anger at the building rather than the man?\n\nThe film ends with two quotes: one from Martin Luther King Jr. advocating nonviolence, and one from Malcolm X arguing for self-defense. Lee refuses to resolve the tension between them, leaving the audience to grapple with the unbearable heat of the questions he poses."
    },
    {
      title: "Amélie",
      director: "Jean-Pierre Jeunet",
      releaseYear: 2001,
      rating: 8,
      posterUrl: "https://image.tmdb.org/t/p/w500/sXqHhMEnj48vN2qI4F8yI2z5C60.jpg",
      theGood: "A visually delightful, relentlessly charming fairy tale about the quiet courage required to connect with others",
      theBad: "Its whimsy can cross the line into cloying sweetness for more cynical viewers",
      review: "Jean-Pierre Jeunet's **Amélie** (Le Fabuleux Destin d'Amélie Poulain) is a confection of a film, a Parisian fairy tale rendered in hyper-saturated greens, reds, and yellows. But beneath its whimsical surface lies a surprisingly poignant study of introversion and the fear of intimacy.\n\nAudrey Tautou stars as Amélie, a shy waitress in Montmartre who, after discovering a hidden box of childhood treasures in her apartment, decides to anonymously improve the lives of the people around her. She orchestrates romances, executes elaborate practical jokes on a cruel grocer, and sends a garden gnome on a world tour. Tautou's performance — defined by her saucer-like eyes and impish half-smile — anchors the film's eccentricities in genuine human emotion.\n\nJeunet's visual style is hyperactive and obsessively detailed. He uses CGI not for spectacle, but to visualize Amélie's interior life: her heart glowing through her chest, her body dissolving into water when she feels embarrassed. The film's Paris is not the real city, but a stylized, idealized dreamscape, scrubbed clean of grit and populated entirely by lovable eccentrics.\n\n> \"You mean she would rather imagine herself relating to an absent person than build relationships with those around her?\"\n\nYann Tiersen's accordion-and-piano score is inextricably linked to the film's charm, evoking a sense of nostalgia for a Paris that never truly existed. It propels the narrative forward with the bouncy energy of a carousel.\n\nThe film's emotional arc centers on Amélie's realization that fixing other people's lives is a way of avoiding her own. Her elaborate games of hide-and-seek with Nino (Mathieu Kassovitz), a man who collects discarded photo booth pictures, are ultimately revealed as a defense mechanism. The 'glass man,' her neighbor who paints Renoir copies, forces her to confront her own fragility: she must risk her heart to find happiness.\n\n**Amélie** is a film that weaponizes charm. It is unapologetically optimistic, an ode to the small, unseen acts of kindness that keep the world turning."
    },
    {
      title: "The Thing",
      director: "John Carpenter",
      releaseYear: 1982,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/tzGY49kse15EN0O8QDRFMBk303E.jpg",
      theGood: "A masterclass in claustrophobic paranoia with practical effects that remain unsurpassed",
      theBad: "The sheer grotesquerie of the creature transformations can be stomach-churning",
      review: "John Carpenter's **The Thing** was a critical and commercial failure upon its release in 1982, overshadowed by the optimistic, cuddly alien of *E.T.* History has vindicated Carpenter. **The Thing** is now widely recognized as one of the greatest sci-fi horror films ever made, a relentless exercise in paranoia and practical effects mastery.\n\nSet at an isolated American research station in Antarctica, the film follows a group of men who realize they are being hunted by an alien organism capable of perfectly imitating any living being it consumes. The true terror of the film is not the monster itself, but the erosion of trust. When anyone could be the Thing, every glance, every argument, every shadow becomes charged with lethal suspicion.\n\nKurt Russell's R.J. MacReady, the cynical helicopter pilot, emerges as the reluctant leader. Russell plays him with a grim, weary pragmatism that grounds the film's wilder elements. There are no heroes here, only men trying to survive an impossible situation.\n\n> \"I know I'm human. And if you were all these things, then you'd just attack me right now, so some of you are still human.\"\n\nRob Bottin's practical makeup effects are legendary. The creature transformations — dogs splitting open to reveal tendrils, human heads detaching and sprouting spider legs, chests opening into jagged maws — are grotesque, surreal, and terrifyingly visceral. Because the effects are physical, not digital, they possess a tangible weight and presence that CGI still struggles to replicate.\n\nEnnio Morricone's minimalist, pulsing synthesizer score (which closely mimics Carpenter's own musical style) provides the heartbeat of the film's dread, echoing the vast, frozen emptiness outside the station.\n\nThe blood-testing scene, where MacReady uses a hot wire to test the crew's blood in petri dishes, is one of the most perfectly constructed suspense sequences in cinema. The film's ambiguous, bleak ending — two men sitting in the freezing darkness, unsure if the other is human, waiting to die — is a testament to Carpenter's uncompromising vision. It is the ultimate horror of isolation."
    }
  ];

  const books = [
    {
      title: "Ficciones",
      author: "Jorge Luis Borges",
      publishYear: 1944,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12858641-L.jpg",
      theGood: "A collection of short stories that reinvented the possibilities of literature, time, and infinity",
      theBad: "The density of philosophical and literary allusions can be intimidating",
      review: "Jorge Luis Borges's **Ficciones** is a slender volume of short stories that changed the architecture of world literature. Borges, a blind Argentine librarian, constructed labyrinths out of words, imagining worlds where books contain infinite pages, where maps are exactly the size of the empires they depict, and where the universe itself is an endless, hexagonal library.\n\nThese stories are less narratives than philosophical thought experiments wrapped in the guise of detective fiction, essays, and faux-encyclopedia entries. In 'Tlön, Uqbar, Orbis Tertius,' the discovery of an encyclopedia describing a fictional world gradually causes that fiction to rewrite our reality. In 'Pierre Menard, Author of the Quixote,' a 20th-century French writer attempts to write Cervantes's masterpiece word for word, not by copying, but by reinventing it — a hilarious and profound meditation on reading, authorship, and context.\n\nBorges's prose is characterized by an elegant, crystalline precision. He deals in paradoxes, infinities, and mirrors, writing with a mathematician's logic and a poet's awe. His erudition is vast, but he wears it lightly, often inventing authors, books, and historical events to mix seamlessly with real ones.\n\n> \"I have always imagined that Paradise will be a kind of library.\"\n\n'The Library of Babel' is perhaps his most famous vision: a universe consisting of an infinite number of hexagonal galleries, containing every possible combination of letters in every possible book. It is a terrifying metaphor for the search for meaning in a chaotic universe — the truth is out there, but it is buried beneath an infinity of gibberish.\n\nBorges did not write novels; he believed that writing five hundred pages to express an idea that could be sketched in a few minutes was an 'impoverishing extravagance.' **Ficciones** proves his point. In less than two hundred pages, he creates universes more complex, resonant, and mind-bending than most authors manage in a lifetime of epics."
    },
    {
      title: "The Dispossessed",
      author: "Ursula K. Le Guin",
      publishYear: 1974,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12952402-L.jpg",
      theGood: "A brilliantly constructed political thought experiment that treats its characters with deep humanity",
      theBad: "The detailed exploration of political and economic theory slows the narrative pace",
      review: "Ursula K. Le Guin's **The Dispossessed** (subtitled *An Ambiguous Utopia*) is a masterpiece of sociological science fiction. It imagines two twin planets: Urras, a lush world dominated by capitalist and statist powers, and Anarres, a harsh, arid moon settled centuries ago by anarcho-syndicalist revolutionaries. Between these two worlds travels Shevek, a brilliant physicist seeking to bridge the gap and share his revolutionary theory of time.\n\nLe Guin's genius lies in her refusal to paint either society as perfect. Anarres, founded on principles of mutual aid, lack of property, and the abolition of authoritarian hierarchy, has survived its harsh environment. But Le Guin unflinchingly examines how informal power structures, social pressure, and bureaucracy can create a new kind of tyranny, stifling individual creativity in the name of the collective.\n\nUrras, which Shevek visits, is a world of extreme wealth and extreme poverty, beautiful and horrific in equal measure. Through Shevek's eyes, Le Guin provides a devastating critique of our own capitalist society — the obsession with property, the invisible walls between classes, the packaging of dissent as a consumer product.\n\n> \"You cannot buy the revolution. You cannot make the revolution. You can only be the revolution. It is in your spirit, or it is nowhere.\"\n\nShevek is one of science fiction's most compelling protagonists. He is driven not by a desire for power or adventure, but by an intellectual and moral necessity. His struggle to maintain his integrity — to be a true Odonian (anarchist) in both worlds — is the novel's ethical core. His relationship with his partner, Takver, is depicted with a mature, abiding warmth that anchors the lofty political discussions in human reality.\n\nThe novel's alternating chapter structure — toggling between Shevek's past on Anarres and his present on Urras — masterfully builds tension and deepens our understanding of both worlds. **The Dispossessed** won the Hugo, Nebula, and Locus awards, cementing Le Guin's status as a writer who used the tools of science fiction to examine the most fundamental questions of human organization and freedom."
    },
    {
      title: "Things Fall Apart",
      author: "Chinua Achebe",
      publishYear: 1958,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/8305634-L.jpg",
      theGood: "A foundational text of African literature that tells the story of colonization from the inside out",
      theBad: "The deliberate, anthropological pacing of the first half requires adjustment for readers expecting a conventional plot",
      review: "Chinua Achebe's **Things Fall Apart** is a novel that reclaimed the narrative of Africa from Western literature. In response to works like Conrad's *Heart of Darkness*, which depicted Africans as voiceless savages, Achebe wrote a tragedy of Shakespearean depth centered on Okonkwo, a proud, flawed leader in the Igbo village of Umuofia in the late 19th century, just as British colonialism arrives.\n\nThe first two-thirds of the novel is an immersive, unsentimental portrait of pre-colonial Igbo society. Achebe details the complex judicial systems, religious rituals, agricultural practices, and social hierarchies of Umuofia. The society is not presented as a flawless utopia — it is rigid, sometimes brutal, and deeply patriarchal — but it is undeniably a civilization, rich with proverbs and logic.\n\nOkonkwo is a classic tragic hero. Driven by a desperate fear of weakness and failure — a reaction against his lazy, debtor father — his rigidity brings about his downfall. He beats his wives, alienates his son, and participates in the execution of a boy he loves, all to maintain his image of masculine strength. His tragic flaw is his inability to adapt.\n\n> \"The white man is very clever. He came quietly and peaceably with his religion. We were amused at his foolishness and allowed him to stay. Now he has won our brothers, and our clan can no longer act like one. He has put a knife on the things that held us together and we have fallen apart.\"\n\nWhen the British missionaries and colonial administrators arrive in the final third of the book, the collapse is swift and devastating. Achebe shows how colonialism succeeds by exploiting the fractures already present in the society — drawing in the outcasts, the mothers of twins, the dissatisfied (including Okonkwo's own son, Nwoye). The tragedy is not just Okonkwo's destruction, but the dissolution of an entire way of life.\n\nThe novel's final paragraph, written from the perspective of the British District Commissioner contemplating a book he plans to write called *The Pacification of the Primitive Tribes of the Lower Niger*, is a masterstroke of bitter irony. Okonkwo's tragedy, the epic we have just read, will be reduced to a single, dismissive paragraph in a colonial history. Achebe's novel is the correction to that history."
    },
    {
      title: "Midnight's Children",
      author: "Salman Rushdie",
      publishYear: 1981,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12818817-L.jpg",
      theGood: "A sprawling, exuberant, magical realist epic that captures the chaotic birth of modern India",
      theBad: "The sheer density of the prose and the meandering, digressive narrative can be exhausting",
      review: "Salman Rushdie's **Midnight's Children** is a novel of superabundant energy, a linguistic and narrative explosion that attempts to contain the entire history of post-independence India within the life of a single man. Saleem Sinai is born at the exact moment of India's independence — midnight on August 15, 1947 — thereby handcuffing his destiny to that of his nation.\n\nSaleem is one of the 1,001 'midnight's children,' all born in the first hour of independence, all endowed with magical powers. Saleem's power is telepathy, a psychic radio that allows him to hear the thoughts of the other children, representing the vast, polyphonic, contradictory multitudes of India itself. The tragedy of the novel is the gradual silencing of this chorus as the optimism of independence curdles into the cynical realities of state power, culminating in Indira Gandhi's 'Emergency.'\n\nRushdie's prose is a torrential mix of English, Hindi, Urdu, myth, pop culture, and historical fact. He writes with a frantic, digressive brilliance, constantly circling back, delaying revelations, and addressing the reader directly through Saleem's interactions with his listener, Padma. The style is heavily indebted to Laurence Sterne and Gabriel García Márquez, but the voice is uniquely Rushdie's.\n\n> \"To understand just one life, you have to swallow the world.\"\n\nThe novel is an argument against the idea of a single, pure history. Saleem's narrative is full of errors, misrememberings, and deliberate lies — he is an unreliable narrator who openly admits his unreliability. But his fragmented, subjective history is presented as more 'true' than the official accounts. India, Rushdie implies, is too vast and contradictory to be captured by singular truths.\n\n**Midnight's Children** won the Booker Prize in 1981, and later won the 'Booker of Bookers' (the best novel to win the prize in its first 25, and then 40, years). It is a demanding, exhausting masterpiece that redefined what the English language could do and reshaped the landscape of postcolonial literature."
    },
    {
      title: "The Road to Wigan Pier",
      author: "George Orwell",
      publishYear: 1937,
      rating: 8,
      coverUrl: "https://covers.openlibrary.org/b/id/14840898-L.jpg",
      theGood: "A devastatingly honest piece of reportage and political self-reflection that remains relevant to modern class discourse",
      theBad: "The sharp division between the journalistic first half and the polemical second half makes it feel like two different books",
      review: "George Orwell's **The Road to Wigan Pier** is a book split cleanly in two. Commissioned by the Left Book Club to investigate the living conditions of the unemployed in the industrial north of England, Orwell delivered a manuscript that fulfilled his brief brilliantly, and then followed it with a devastating critique of the socialist movement that commissioned him.\n\nThe first half of the book is some of the finest documentary journalism in the English language. Orwell lived in the slums, went down the coal mines, and documented the staggering poverty, the terrible housing, and the physical toll of industrial labor. His description of a miner's commute — crawling for miles through subterranean darkness just to reach the coal face before the actual work begins — is a masterwork of empathetic observation. Orwell forces the comfortable reader to acknowledge the brutal physical reality that makes their comfort possible.\n\n> \"Our civilization... is founded on coal, more completely than one realizes until one stops to think about it. The machines that keep us alive, and the machines that make the machines, are all directly or indirectly dependent upon coal.\"\n\nThe second half shifts from observation to polemic. Orwell, a committed socialist, turns his critical eye on socialists. He argues that the movement is alienated from the working class it claims to champion, dominated instead by eccentric, middle-class intellectuals (whom he famously derides as 'fruit-juice drinkers, nudists, sandal-wearers, sex-maniacs, Quakers, 'Nature Cure' quacks, pacifists, and feminists').\n\nHis core argument — that class prejudice is deeply ingrained, visceral, and cannot be overcome merely by adopting correct political opinions — is delivered with an honesty that is still shocking. He admits his own ingrained snobbery, confessing that he was raised to believe the working classes 'smelt.'\n\n**The Road to Wigan Pier** is not a novel, but it possesses the moral gravity and psychological insight of great literature. It captures Orwell in the process of becoming Orwell: the fiercely independent thinker who refused to sacrifice truth to ideological purity, demanding that political movements confront the reality of the people they claim to serve."
    }
  ];

  console.log('Seeding Batch 5 Movies...');
  for (const m of movies) {
    await prisma.movieReview.create({
      data: {
        title: m.title,
        director: m.director,
        releaseYear: m.releaseYear,
        rating: m.rating,
        posterUrl: m.posterUrl,
        theGood: m.theGood,
        theBad: m.theBad,
        review: m.review,
        authorId: userId
      }
    });
    console.log(`  ✓ ${m.title}`);
  }

  console.log('\nSeeding Batch 5 Books...');
  for (const b of books) {
    await prisma.bookReview.create({
      data: {
        title: b.title,
        author: b.author,
        publishYear: b.publishYear,
        rating: b.rating,
        coverUrl: b.coverUrl,
        theGood: b.theGood,
        theBad: b.theBad,
        review: b.review,
        authorId: userId
      }
    });
    console.log(`  ✓ ${b.title}`);
  }

  console.log('\n🎬📚 Batch 5 seeded successfully!');

  const movieCount = await prisma.movieReview.count();
  const bookCount = await prisma.bookReview.count();
  console.log(`Total: ${movieCount} movies, ${bookCount} books`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
