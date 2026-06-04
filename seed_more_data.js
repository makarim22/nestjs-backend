const { PrismaClient } = require('@prisma/client');
const { PrismaLibSql } = require('@prisma/adapter-libsql');

const adapter = new PrismaLibSql({ url: 'file:./dev.db' });
const prisma = new PrismaClient({ adapter });

async function main() {
  let user = await prisma.user.findFirst();
  if (!user) {
    console.error('No user found. Run the original seed first.');
    process.exit(1);
  }
  const userId = user.id;

  const movies = [
    {
      title: "2001: A Space Odyssey",
      director: "Stanley Kubrick",
      releaseYear: 1968,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/ve72VeilHyEVBbYPBCOsmH6essB.jpg",
      theGood: "A cinematic experience that transcends narrative convention entirely",
      theBad: "The deliberate pacing and ambiguity alienate viewers seeking traditional storytelling",
      review: "Stanley Kubrick's **2001: A Space Odyssey** is not a film you watch — it is a film that happens to you. From the primordial dawn of intelligence to the birth of a star child orbiting Earth, Kubrick traces the full arc of human evolution in 142 minutes of images so indelible they have become the visual vocabulary of science fiction itself.\n\nThe film's first act — 'The Dawn of Man' — contains no dialogue, only the grunts of our ape ancestors discovering the use of tools. When a bone, thrown triumphantly into the air, match-cuts to a nuclear weapons satellite orbiting Earth, Kubrick accomplishes in a single edit what most filmmakers cannot manage in an entire career: he connects violence to progress, technology to instinct, in one breathtaking visual gesture.\n\nHAL 9000, the ship's artificial intelligence, remains cinema's most unsettling depiction of machine consciousness. His calm, pleasant voice — provided by Douglas Rain — makes his methodical murder of the crew all the more chilling. *I'm sorry, Dave. I'm afraid I can't do that.* The politeness is the horror.\n\n> \"My God, it's full of stars.\"\n\nThe Stargate sequence — twelve minutes of abstract light and color that Kubrick created using slit-scan photography — was dismissed by some critics in 1968 as self-indulgent. Seen today on a proper screen, it remains one of cinema's most overwhelming sensory experiences. Kubrick was attempting nothing less than to visualize the unvisualizable: a consciousness expanding beyond the limits of human perception.\n\nRichard Strauss's *Also sprach Zarathustra* and Johann Strauss's *The Blue Danube* were not composed for this film, but they belong to it now. Kubrick understood that existing music, already freighted with cultural meaning, could achieve effects that original scores could not. The waltz of the space station is simultaneously absurd and sublime — humanity's most elegant social ritual performed in the void.\n\nFifty-six years later, no science fiction film has surpassed it. Most have not even attempted what it attempts."
    },
    {
      title: "Spirited Away",
      director: "Hayao Miyazaki",
      releaseYear: 2001,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
      theGood: "Hand-drawn animation of breathtaking beauty married to a story of genuine emotional depth",
      theBad: "The sheer density of the spirit world's mythology can overwhelm on first viewing",
      review: "Hayao Miyazaki's **Spirited Away** begins with a sulky ten-year-old girl named Chihiro and ends with a young woman capable of extraordinary courage. The transformation between those two states — achieved through labor, love, and the stubborn refusal to forget who you are — is the most compelling coming-of-age story in the history of animation.\n\nChihiro's parents are turned into pigs after gorging themselves at an abandoned theme park's food stalls. She is trapped in the spirit world, enslaved by the witch Yubaba, stripped of her name, and forced to work in a bathhouse that serves spirits and gods. Every element of this scenario is a metaphor, and Miyazaki trusts his audience — including children — to understand them.\n\nThe bathhouse itself is one of cinema's great locations: a towering, impossibly detailed structure where frog-servants scurry, radish spirits soak in herbal baths, and a masked spirit called No-Face silently consumes everything it encounters. Miyazaki's imagination operates at a level that makes Western fantasy look timid by comparison.\n\n> \"Once you've met someone, you never really forget them. It just takes a while for your memories to return.\"\n\nThe film's emotional climax — Chihiro remembering Haku's true name — is devastating in its simplicity. In Miyazaki's world, names have power, and remembering someone's name is an act of love. When Chihiro and Haku fall through the sky together, laughing with joy, it is one of the purest moments of happiness in all of cinema.\n\nJoe Hisaishi's score is inseparable from the film. The main theme — a simple piano melody that gradually swells into a full orchestral statement — mirrors Chihiro's own growth from timidity to strength. It is music that makes you believe in the possibility of transformation.\n\n**Spirited Away** won the Academy Award for Best Animated Feature and the Golden Bear at Berlin. It remains the highest-grossing film in Japanese history. These facts, while impressive, tell you nothing about what the film actually is: a hand-drawn miracle."
    },
    {
      title: "The Shining",
      director: "Stanley Kubrick",
      releaseYear: 1980,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/nRj5511mZdTl4saWEPoj9QroTIu.jpg",
      theGood: "Kubrick transforms a horror novel into a masterwork of architectural dread",
      theBad: "Shelley Duvall's treatment during filming casts a shadow over the production",
      review: "Stanley Kubrick took Stephen King's **The Shining** — a novel about alcoholism, domestic violence, and supernatural horror — and rebuilt it as a study in spatial dread. The Overlook Hotel, realized through Steadicam shots that glide through impossible geometries, becomes the true antagonist: a building that digests its inhabitants.\n\nJack Nicholson's Jack Torrance has been criticized for seeming unhinged from the start, but this is precisely Kubrick's point. The Overlook doesn't create Jack's madness; it reveals what was always there. The hotel is a mirror, and Jack has been avoiding mirrors his entire life.\n\nThe Steadicam, operated by Garrett Brown (who invented the device), follows Danny's Big Wheel through the hotel's corridors in shots that have become the grammar of horror cinema. The shift from carpet to hardwood — the change in sound as the wheels cross thresholds — creates a rhythm of anticipation that is almost unbearable.\n\n> \"All work and no play makes Jack a dull boy.\"\n\nWendy Carlos and Rachel Elkind's electronic score, combined with Kubrick's use of Penderecki and Bartók, creates a soundscape of pure anxiety. The music doesn't accompany the horror — it is the horror, a sonic environment as oppressive as the hotel itself.\n\nThe twins. The blood elevator. Room 237. The maze. These images have escaped the film and entered collective consciousness. They are modern mythology, and like all mythology, they mean more than they depict. Kubrick understood that the most frightening thing about a haunted house is not what haunts it but what it reveals about the people inside."
    },
    {
      title: "Eternal Sunshine of the Spotless Mind",
      director: "Michel Gondry",
      releaseYear: 2004,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
      theGood: "Charlie Kaufman's screenplay is the most intelligent exploration of love and memory in modern cinema",
      theBad: "The non-linear structure can be genuinely confusing on first viewing",
      review: "Charlie Kaufman and Michel Gondry's **Eternal Sunshine of the Spotless Mind** asks a question so simple it's devastating: if you could erase the memory of a failed relationship, would you? And then, having erased it, would you fall in love with the same person all over again?\n\nJim Carrey, in the performance of his career, plays Joel Barish — a quiet, melancholy man who discovers that his ex-girlfriend Clementine (Kate Winslet, equally brilliant) has had him erased from her memory. In retaliation, he undergoes the same procedure. The film unfolds largely inside Joel's mind as his memories of Clementine are systematically destroyed.\n\nGondry's visual approach is lo-fi genius. As memories dissolve, the physical world around Joel collapses — faces blur, rooms shrink, childhood and adulthood bleed together. These effects, achieved largely through practical means rather than CGI, have a handmade quality that mirrors the fragility of memory itself.\n\n> \"How happy is the blameless vestal's lot! The world forgetting, by the world forgot. Eternal sunshine of the spotless mind!\"\n\nThe film's central insight — that pain and love are inseparable, that you cannot erase one without destroying the other — is delivered not through dialogue but through the architecture of Joel's collapsing memories. As he realizes what he's losing, he tries to hide Clementine in memories where she doesn't belong: his childhood, his humiliations, his most private moments. It's a desperate, doomed act of preservation that is heartbreaking to witness.\n\nThe ending — Joel and Clementine, knowing their relationship will likely end in the same pain, choosing to try again anyway — is neither optimistic nor pessimistic. It is something rarer: honest. Love is not about avoiding pain. It's about deciding that someone is worth the inevitable pain."
    },
    {
      title: "Apocalypse Now",
      director: "Francis Ford Coppola",
      releaseYear: 1979,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/gQB8Y5RCMkv2zwzFHbUjHCh4ODT.jpg",
      theGood: "An hallucinatory journey into the heart of darkness that redefines the war film",
      theBad: "The final act with Kurtz can feel anticlimactic after the river journey's intensity",
      review: "Francis Ford Coppola's **Apocalypse Now** is not a war film in any conventional sense. It is a fever dream, a descent into madness, a journey upriver that is simultaneously a journey inward. By the time Captain Willard (Martin Sheen) reaches Colonel Kurtz (Marlon Brando) in the Cambodian jungle, the film has left realism so far behind that it has become myth.\n\nThe production itself was mythic — Coppola mortgaged his house, Sheen had a heart attack, a typhoon destroyed the sets, and Brando arrived overweight and unprepared. These disasters seeped into the film, giving it an authenticity that no amount of planning could have achieved. The chaos on screen mirrors the chaos behind the camera.\n\nVittorio Storaro's cinematography is among the finest ever committed to celluloid. The famous helicopter attack — set to Wagner's 'Ride of the Valkyries' — is simultaneously exhilarating and horrifying, forcing the viewer to confront their own seduction by spectacular violence. Robert Duvall's Colonel Kilgore, who loves the smell of napalm in the morning, is America's id given a cavalry hat and a surfboard.\n\n> \"The horror. The horror.\"\n\nThe river journey structures the film as a series of encounters, each more surreal than the last: a USO show featuring Playboy Bunnies that devolves into chaos, a bridge at the edge of the war zone that is destroyed and rebuilt nightly, a French plantation where time has stopped. Each station is a circle of hell, and Willard is Dante with an M-16.\n\nThe Doors' 'The End' opens the film, and its narcotic, spiraling structure provides a template for everything that follows. Carmine Coppola and Francis's father's score, combined with the synthesizer work, creates an aural landscape of dread and beauty that is utterly unique.\n\nCoppola went looking for a definitive statement about Vietnam and found instead a definitive statement about the human capacity for darkness. The film does not explain the war. It *becomes* the war."
    },
    {
      title: "The Seventh Seal",
      director: "Ingmar Bergman",
      releaseYear: 1957,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/sBTxoSsKqDkeeGMXvfMHpAJCJt4.jpg",
      theGood: "Cinema's most profound meditation on mortality and the search for meaning",
      theBad: "The allegorical, theatrical style can feel stilted to modern audiences",
      review: "Ingmar Bergman's **The Seventh Seal** opens with one of cinema's most iconic images: a medieval knight playing chess with Death on a beach. The knight, Antonius Block (Max von Sydow), has returned from the Crusades to find Sweden ravaged by plague. He challenges Death to a game to buy time — not to save himself, but to perform one meaningful act before the end.\n\nThe film's central question — does God exist, and if not, does life have meaning? — is asked with a directness that is almost shocking. Bergman, the son of a Lutheran minister, spent his career wrestling with faith, and **The Seventh Seal** is the most concentrated expression of that struggle. Block's anguished confession to a figure he believes is a priest — *I want knowledge, not faith, not assumptions, but knowledge* — is the cry of a modern mind trapped in a medieval body.\n\nGunnar Fischer's black-and-white cinematography is stark and beautiful, drawing on medieval woodcuts and the paintings of Pieter Bruegel. The flagellants' procession, the burning of the young woman accused of witchcraft, the dance of death along the hilltop — each image has the power of a woodblock print, simplified to essential shapes and shadows.\n\n> \"Is it so cruelly inconceivable to grasp God with the senses? Why should He hide himself in a mist of half-spoken promises and unseen miracles?\"\n\nBergman's genius is in balancing Block's existential despair with the earthy joy of Jof and Mia, a young couple of traveling players. Their scenes — eating wild strawberries, watching their baby, performing simple entertainments — represent everything that makes life worth living, even in the shadow of death. The milk and strawberries scene is, quietly, one of the most beautiful in all of cinema.\n\nThe final image — Death leading his victims in a dance along the horizon — has become so iconic that it's easy to forget how deeply it is earned by everything that precedes it. Bergman doesn't fear death. He fears meaninglessness. And by making a film this beautiful about that fear, he defeats it."
    },
    {
      title: "Goodfellas",
      director: "Martin Scorsese",
      releaseYear: 1990,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
      theGood: "The most kinetically entertaining gangster film ever made, with a soundtrack that is itself a masterpiece",
      theBad: "The women are largely peripheral, serving mainly as witnesses to male self-destruction",
      review: "Martin Scorsese's **Goodfellas** moves at the speed of a bullet, and like a bullet, it doesn't stop to ask how you feel about where it's going. Based on Nicholas Pileggi's book *Wiseguy*, it chronicles the rise and fall of Henry Hill (Ray Liotta) from awestruck teenager to paranoid informant, and every frame vibrates with the manic energy of a life lived at the edge of annihilation.\n\nThe Copacabana tracking shot — an unbroken Steadicam take that follows Henry and Karen through a side entrance, down stairs, through a kitchen, and into the club where a table materializes for them out of thin air — is cinema's most efficient three-minute character study. It shows us seduction in real time: this is what power looks like, and it looks intoxicating.\n\nJoe Pesci's Tommy DeVito is a force of nature — funny, terrifying, and utterly unpredictable. The *funny how?* scene was largely improvised, and Pesci won the Oscar for what amounts to a sustained eruption of charisma and menace. Robert De Niro's Jimmy Conway, quieter and more calculating, provides the counterweight: the gangster as businessman, calm until the moment he decides you need to die.\n\n> \"As far back as I can remember, I always wanted to be a gangster.\"\n\nScorsese's soundtrack — a jukebox of pop hits from the '50s through the '80s, each one precisely placed — serves as the film's emotional calendar. The shift from Bobby Vinton's romantic crooning to the cocaine-fueled paranoia scored by the Rolling Stones and Nilsson tracks the trajectory of the American mob from glamour to dissolution.\n\nThe final act, depicting Henry's last day as a free man — cutting between cooking dinner, picking up guns, snorting cocaine, and dodging a helicopter he may or may not be imagining — is one of the most virtuosic sequences in American cinema. Scorsese edits at the speed of Henry's disintegrating mind, and the audience feels every frayed nerve.\n\nThe film's famous final shot — Henry, in witness protection, retrieving a newspaper from his suburban doorstep — is the ultimate anticlimax. After a life of excess, Henry Hill ended up in the place every gangster fears most: normalcy."
    },
    {
      title: "The Lives of Others",
      director: "Florian Henckel von Donnersmarck",
      releaseYear: 2006,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/hVWzkBjWrsFO4LJE8fSJGhOOAOw.jpg",
      theGood: "A masterclass in restraint — the film's power builds through accumulation, not spectacle",
      theBad: "The final act's plot mechanics strain credulity slightly",
      review: "Florian Henckel von Donnersmarck's **The Lives of Others** is set in 1984 East Berlin, where Stasi Captain Gerd Wiesler (Ulrich Mühe) is assigned to surveil a playwright suspected of disloyalty. What begins as a routine operation becomes something far more dangerous: an education in empathy.\n\nUlrich Mühe, himself a former East German who discovered after reunification that his own wife had informed on him to the Stasi, brings an extraordinary authenticity to Wiesler. His face — gaunt, controlled, expressionless — gradually reveals the micro-tremors of a conscience awakening. It is one of the great minimalist performances, a masterclass in showing transformation through the smallest possible gestures.\n\nThe surveillance scenes are riveting precisely because they are mundane. Wiesler sits in an attic wearing headphones, listening to conversations, typing reports. But as he listens to the playwright Georg Dreyman and his actress lover Christa-Maria Sieland live their lives — argue, make love, play Beethoven, discuss literature — something shifts in him. He begins to realize that he is not watching enemies of the state. He is watching life itself, and he has never had one.\n\n> \"It's for me.\"\n\nThe film's pivotal scene occurs when Wiesler hears Dreyman play a piano piece called *Sonata for a Good Man*. Something in the music breaks through decades of ideological conditioning. Mühe's face in this moment — tears forming in eyes that have been trained never to show emotion — is one of the most moving images in modern cinema.\n\nVon Donnersmarck reconstructs East Berlin with meticulous accuracy: the grey buildings, the institutional furniture, the ever-present fear of denunciation. But the film is never merely a historical exercise. It asks a question that transcends its setting: can beauty redeem a person who has built their life on the suppression of beauty?\n\nThe final scene — Wiesler in a bookshop, years after reunification, discovering a novel dedicated to him by the code name he used in his surveillance reports — delivers the film's answer with devastating simplicity. Two words: *It's for me.* After two hours of restraint, these words carry the emotional weight of an avalanche."
    },
    {
      title: "Drive",
      director: "Nicolas Winding Refn",
      releaseYear: 2011,
      rating: 8,
      posterUrl: "https://image.tmdb.org/t/p/w500/602vevIURmpDfzbnv5Ubi6wIkQm.jpg",
      theGood: "Ryan Gosling's near-silent performance and the neon-soaked aesthetic create something genuinely hypnotic",
      theBad: "The sudden eruptions of extreme violence will shock viewers seduced by the romantic first half",
      review: "Nicolas Winding Refn's **Drive** is a fairy tale dipped in gasoline and lit with neon. Ryan Gosling plays a nameless stunt driver and getaway specialist in Los Angeles who falls for his neighbor Irene (Carey Mulligan) and her young son, then descends into violence to protect them when her husband's criminal past resurfaces.\n\nGosling speaks perhaps two hundred words in the entire film. His performance is constructed from silences, from the way he holds a toothpick between his teeth, from the almost imperceptible softening of his expression when he looks at Irene. It's a performance that understands what most actors don't: that withholding is more magnetic than displaying.\n\nNewton Thomas Sigel's cinematography transforms Los Angeles into a dreamscape of amber streetlights, blue shadows, and the hot pink of the Driver's scorpion jacket. The city has rarely looked this beautiful or this dangerous. Every shot is composed with the precision of a fashion photograph and the menace of a crime scene photo.\n\nCliff Martinez's electronic score — pulsing, melancholic, and deeply romantic — defines the film's emotional register. Combined with songs by College, Kavinsky, and Chromatics, it creates a sonic world that is simultaneously retro and futuristic, warm and cold. The soundtrack became a cultural phenomenon in its own right.\n\n> \"There's a hundred-thousand streets in this city. You don't need to know the route. You give me a time and a place, I give you a five minute window.\"\n\nThe elevator scene is the film's thesis compressed into ninety seconds. The Driver kisses Irene — tender, slow, backlit in golden light — then turns and stomps a man's skull into fragments. Love and violence, beauty and horror, exist not in opposition but in terrifying proximity. Refn refuses to separate them, and the audience must sit with that discomfort.\n\nAlbert Brooks, cast against type as a fatherly mobster, is a revelation. His Bernie Rose is polite, reasonable, and utterly lethal — a villain who kills not out of cruelty but out of the calm logic of self-preservation. His final scene with Gosling is one of the most tense confrontations in modern cinema."
    },
    {
      title: "Rashomon",
      director: "Akira Kurosawa",
      releaseYear: 1950,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/vL3HxQf7jptbbiAHfBRBggesqsV.jpg",
      theGood: "Invented a narrative structure so influential that 'Rashomon effect' entered the dictionary",
      theBad: "The theatrical acting style can feel exaggerated to modern Western audiences",
      review: "Akira Kurosawa's **Rashomon** did something that cinema had never done before: it told the same story four times, from four perspectives, and refused to tell the audience which version was true. In doing so, it didn't just create a masterpiece — it created a new way of thinking about truth itself.\n\nThe story is simple: a samurai is found dead in a forest clearing. A bandit, the samurai's wife, the samurai himself (speaking through a medium), and a woodcutter each tell their version of what happened. Each version is self-serving. Each version is plausible. None can be reconciled with the others.\n\nToshiro Mifune's bandit Tajōmaru is a whirlwind of physical energy — laughing, scratching, leaping through the undergrowth like an animal. His performance operates at a level of intensity that would be grotesque in a lesser film but here perfectly embodies the story's themes of unchecked ego and self-deception.\n\n> \"It's human to lie. Most of the time we can't even be honest with ourselves.\"\n\nKurosawa's use of the forest — dappled sunlight, swaying branches, the interplay of light and shadow — is not merely decorative. The forest is the film's metaphor for truth itself: beautiful, disorienting, and impossible to see clearly. Cinematographer Kazuo Miyagawa famously pointed the camera directly at the sun, a technique considered impossible at the time, creating images of almost painful luminosity.\n\nThe film's framing device — three men sheltering from rain in the ruined Rashomon gate, debating the meaning of what they've witnessed — provides the philosophical container for the narrative experiment. The rain itself becomes symbolic: a world washed of certainty, where even the sky weeps at human dishonesty.\n\n**Rashomon** won the Golden Lion at Venice and introduced Japanese cinema to the West. More importantly, it proved that cinema could be philosophy — that the arrangement of images could pose questions as profound as any written by Plato or Descartes."
    }
  ];

  const books = [
    {
      title: "One Hundred Years of Solitude",
      author: "Gabriel García Márquez",
      publishYear: 1967,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/14709382-L.jpg",
      theGood: "A novel that feels less written than dreamed — magical realism at its absolute peak",
      theBad: "The repetition of names across generations can be genuinely confusing",
      review: "Gabriel García Márquez's **One Hundred Years of Solitude** reads as though someone transcribed the dreams of an entire continent. The Buendía family, across seven generations in the fictional town of Macondo, lives through miracles and massacres, love affairs and civil wars, ascensions into heaven and descents into obsession — and Márquez narrates all of it in a tone of serene matter-of-factness that makes the impossible feel inevitable.\n\nThe novel's opening sentence — *Many years later, as he faced the firing squad, Colonel Aureliano Buendía was to remember that distant afternoon when his father took him to discover ice* — contains in miniature everything the book will do: collapse time, juxtapose violence and wonder, and remind us that the extraordinary hides inside the ordinary.\n\nMárquez's magical realism is often imitated but never equaled because imitators misunderstand its purpose. The magic in this novel isn't decorative; it's *true*. When Remedios the Beauty ascends to heaven while folding laundry, it tells us something about beauty that realism cannot. When it rains for four years, eleven months, and two days, we understand something about grief that meteorology cannot explain.\n\n> \"The secret of a good old age is simply an honorable pact with solitude.\"\n\nThe novel's structure is circular — the Buendías are doomed to repeat their mistakes, trapped in patterns of solitude and passion that no generation can break. Names repeat: José Arcadio, Aureliano, Remedios. Each repetition is both echo and variation, creating a musical structure that builds toward the devastating final pages, where the family's entire history is revealed to have been written in advance by a gypsy prophet.\n\nMárquez wrote this novel in eighteen months of feverish composition, selling his car to support his family, and the urgency shows. Every page crackles with the energy of a writer who knows he is creating something that will outlast him. He was right. **One Hundred Years of Solitude** is the great novel of the Americas — north, south, and everywhere in between."
    },
    {
      title: "The Master and Margarita",
      author: "Mikhail Bulgakov",
      publishYear: 1967,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12978109-L.jpg",
      theGood: "A wildly entertaining satire that operates simultaneously as farce, romance, and theological meditation",
      theBad: "The interleaving of storylines can be disorienting, especially in early chapters",
      review: "Mikhail Bulgakov's **The Master and Margarita** is the most joyful act of defiance in Russian literature. Written in secret during Stalin's Terror, unpublishable during Bulgakov's lifetime, it is a novel that laughs at tyranny — not with the bitter laugh of the dissident, but with the uncontrollable laughter of a man who has decided that the truth is funnier than any lie.\n\nThe Devil arrives in Moscow in the form of Professor Woland, a gentleman magician who proceeds to expose the corruption, cowardice, and petty cruelty of the Soviet intelligentsia. His retinue — a giant talking cat named Behemoth, a fanged assassin named Azazello, and a naked witch named Hella — wreaks havoc that is simultaneously terrifying and hilarious.\n\nInterwoven with this satire is the story of Pontius Pilate and Yeshua Ha-Notsri (Jesus of Nazareth), as imagined by the Master, a novelist who has been driven mad by the Soviet literary establishment's rejection of his work. These chapters, written in a completely different register — spare, luminous, deeply serious — provide the novel's moral and philosophical foundation.\n\n> \"Manuscripts don't burn.\"\n\nMargarita, the Master's lover, volunteers to become a witch and host Satan's annual ball in exchange for the Master's freedom. Her flight over Moscow — naked, riding a broomstick, wreaking vengeance on the critic who destroyed her lover's career — is one of the most exhilarating sequences in all of fiction. Bulgakov writes her liberation with such infectious joy that the reader feels airborne.\n\nThe novel's central thesis — that cowardice is the greatest of sins, more destructive than cruelty or greed — runs through every storyline. Pilate's cowardice in condemning Yeshua mirrors the cowardice of Soviet intellectuals who betrayed their colleagues. Only the Master and Margarita, who risk everything for love and art, are granted peace.\n\nBulgakov died in 1940 without seeing publication. The novel appeared in censored form in 1966, then in full in 1973. It has since become the most beloved novel in Russian culture — proof of its own thesis that manuscripts don't burn."
    },
    {
      title: "Beloved",
      author: "Toni Morrison",
      publishYear: 1987,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12044440-L.jpg",
      theGood: "Morrison's prose achieves a poetic density that makes every sentence feel carved from stone",
      theBad: "The fragmentary, non-linear structure demands significant effort from the reader",
      review: "Toni Morrison's **Beloved** is a ghost story, a love story, and the most devastating reckoning with American slavery ever written. Set in Cincinnati in 1873, it follows Sethe, an escaped slave haunted — literally — by the baby daughter she killed rather than allow to be returned to bondage. The ghost materializes as a young woman named Beloved, and what follows is an exorcism of both a house and a history.\n\nMorrison's prose in this novel operates at the border between language and music. Her sentences refuse linearity, circling back on themselves, approaching trauma obliquely, then suddenly striking with devastating directness. The description of Sethe's escape — crawling through a field while in labor, her back a canvas of scars shaped like a tree — is written with a beauty that makes the horror more, not less, unbearable.\n\nThe novel's structure mirrors the psychology of trauma: fractured, repetitive, unable to proceed in a straight line. Memories surface unbidden. Stories are told and retold, each telling revealing a new layer of pain. Morrison understood that trauma doesn't respect chronology — it erupts, subsides, and erupts again.\n\n> \"Freeing yourself was one thing; claiming ownership of that freed self was another.\"\n\nBeloved herself — part ghost, part memory, part embodiment of the sixty million who died in the Middle Passage — is one of the most complex figures in American literature. She is simultaneously a specific dead child and a collective haunting, and Morrison holds both meanings in suspension without collapsing either into the other.\n\nThe novel's climax — the community of women who gather to exorcise Beloved from Sethe's house — is an act of collective healing that Morrison renders with the power of a spiritual. Voices rise, bodies move, and something shifts. The haunting doesn't end neatly, but it loosens its grip.\n\nMorrison won the Pulitzer Prize for **Beloved** and later the Nobel Prize for Literature. These honors, while deserved, cannot capture what the novel actually does: it makes you *feel* what slavery was, not as a historical fact but as a lived catastrophe whose aftershocks continue to this day."
    },
    {
      title: "The Wind-Up Bird Chronicle",
      author: "Haruki Murakami",
      publishYear: 1994,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/10527843-L.jpg",
      theGood: "Murakami's most ambitious novel — a sprawling, dreamlike epic that defies easy categorization",
      theBad: "The novel's extreme length and digressiveness can feel self-indulgent",
      review: "Haruki Murakami's **The Wind-Up Bird Chronicle** begins with a man looking for a cat and ends with him confronting the darkest chapters of Japanese history. The distance between those two points is roughly six hundred pages of the most hypnotic fiction of the late twentieth century.\n\nToru Okada, an unemployed young man in suburban Tokyo, is the quintessential Murakami protagonist: passive, introspective, slightly bewildered by the world around him. When his cat disappears, followed by his wife, he is drawn into a subterranean world — literally and metaphorically — that connects his personal crisis to Japan's buried wartime atrocities in Manchuria.\n\nThe novel's digressions are its substance. A veteran's account of a massacre at a Mongolian zoo. A psychic's description of drowning in a hotel room. A politician's rise to power through the manipulation of pain. These stories, seemingly disconnected, gradually reveal themselves as tributaries of the same dark river.\n\n> \"I think that inside every person there's a kind of darkness. Something dark and huge is moving.\"\n\nMurakami's prose — translated with extraordinary sensitivity by Jay Rubin — has a quality of lucid dreaming. Events that should be impossible feel perfectly natural. A man sits at the bottom of a dry well for days. A woman calls him on the phone and describes sexual fantasies in clinical detail. A blue mark appears on his cheek and won't wash off. In Murakami's hands, the surreal and the domestic exist on the same plane.\n\nThe Manchurian War chapters — including a prolonged, graphically detailed account of a man being skinned alive — represent Murakami's most direct engagement with Japanese historical trauma. These passages are almost unbearably intense, and their placement within a novel about a missing cat is precisely what gives them their devastating power. Private and public violence, Murakami insists, share the same root.\n\n**The Wind-Up Bird Chronicle** is messy, sprawling, and occasionally baffling. It is also, for those willing to surrender to its rhythms, one of the most immersive reading experiences available. Murakami builds a world you don't want to leave, even when — especially when — it frightens you."
    },
    {
      title: "Slaughterhouse-Five",
      author: "Kurt Vonnegut",
      publishYear: 1969,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/11473784-L.jpg",
      theGood: "Vonnegut found a way to write about the unspeakable — the firebombing of Dresden — by writing around it",
      theBad: "The deliberately flat prose style can read as simplistic to those unfamiliar with Vonnegut's method",
      review: "Kurt Vonnegut's **Slaughterhouse-Five** is a novel about the impossibility of writing a novel about war. Vonnegut himself survived the firebombing of Dresden as a POW in 1945, sheltered in an underground slaughterhouse while the city above him was incinerated. He spent twenty-three years trying to write about it and finally succeeded by writing a book about failing to write about it.\n\nBilly Pilgrim, Vonnegut's protagonist, has become 'unstuck in time.' He experiences his life non-sequentially — childhood, war, old age, his time as an exhibit in a zoo on the planet Tralfamadore — in random fragments. This is not science fiction gimmickry. It is the most accurate literary representation of PTSD ever achieved.\n\nVonnegut's prose is deceptively simple — short sentences, small words, a flatness of tone that borders on affectlessness. But this flatness *is* the message. When every other sentence might describe a child's birthday party or the death of 135,000 people, the inability to modulate one's emotional response is itself the trauma.\n\n> \"So it goes.\"\n\nThat phrase — repeated over a hundred times in the novel, after every mention of death — is Vonnegut's most famous invention. It is simultaneously a Tralfamadorian philosophical acceptance of mortality and a human being's desperate attempt to process an unprocessable amount of death. Its effect is cumulative: by the end of the novel, those three words carry more weight than any extended lamentation could.\n\nThe Tralfamadorians, who see all of time simultaneously, provide the novel's structural metaphor. Billy doesn't experience time linearly because linear time implies causality, and causality implies that the firebombing of Dresden made *sense* — that it was the logical result of preceding events. Vonnegut refuses to grant it that dignity.\n\n**Slaughterhouse-Five** is a short book about a large horror. Vonnegut's genius was understanding that brevity was the only honest response. You cannot write a long, serious novel about the firebombing of Dresden. You can only write a short, funny, heartbroken one."
    },
    {
      title: "Invisible Man",
      author: "Ralph Ellison",
      publishYear: 1952,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12818814-L.jpg",
      theGood: "The most virtuosic prose style in American fiction — every chapter is written in a different register",
      theBad: "The novel's density and allusiveness can be overwhelming",
      review: "Ralph Ellison's **Invisible Man** begins with one of the most arresting declarations in American literature: *I am an invisible man.* Not a ghost, not a phantom — simply a Black man in America, rendered invisible by a society that refuses to see him. What follows is a picaresque odyssey through every corner of the African American experience in the mid-twentieth century.\n\nThe unnamed narrator's journey — from a Southern college modeled on Tuskegee to a paint factory in New York to the underground headquarters of a political organization called the Brotherhood — is simultaneously realistic and allegorical. Each episode represents a different mode of Black survival: accommodation, labor, activism, art, rage. None is sufficient. None is dismissed.\n\nEllison's prose shifts register with each chapter, demonstrating a virtuosity that few American novelists have matched. The Battle Royal scene — where Black boys are forced to fight blindfolded for white entertainment — is written with naturalistic brutality. The paint factory chapters achieve a Kafkaesque absurdism. The Harlem riot that climaxes the novel is rendered in apocalyptic, jazz-inflected prose that pushes English to its limits.\n\n> \"I am invisible, understand, simply because people refuse to see me.\"\n\nThe novel's political sophistication is remarkable. Ellison critiques not only white supremacy but also the institutions that claim to fight it. The Brotherhood (modeled partly on the Communist Party) uses the narrator as a tool, valuing his utility to their ideology over his humanity. Ras the Exhorter, a Black nationalist, offers an alternative that is principled but ultimately self-destructive. Ellison refuses to offer easy solutions because easy solutions are lies.\n\nThe novel took seven years to write, and Ellison never completed another. This fact — tragic or liberating, depending on your perspective — has given **Invisible Man** an aura of singular achievement. It stands alone, unsequeled and unsurpassed, the single novel that contains everything its author knew about being Black, being American, and being alive."
    },
    {
      title: "The Left Hand of Darkness",
      author: "Ursula K. Le Guin",
      publishYear: 1969,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12944563-L.jpg",
      theGood: "A profound thought experiment about gender wrapped in a gripping story of political intrigue and survival",
      theBad: "The anthropological approach can create emotional distance in early chapters",
      review: "Ursula K. Le Guin's **The Left Hand of Darkness** takes place on Gethen, a planet whose inhabitants are ambisexual — neither male nor female except during a monthly period of sexual receptivity called *kemmer*, when they may become either. Into this world comes Genly Ai, a human envoy whose mission to bring Gethen into a galactic federation is complicated by his inability to stop thinking in terms of gender.\n\nLe Guin uses the science fiction premise not as a gimmick but as a lens. By removing the constant hum of gendered assumptions, she forces the reader to confront how deeply those assumptions structure perception. Genly's narration is full of unconscious biases that he — and, by implication, the reader — must learn to recognize. *The king was pregnant* is more than a striking image; it's a detonation of categorical thinking.\n\nThe political plot — a struggle between two rival nations on Gethen, one a monarchy and one a bureaucratic state — provides narrative drive, but the novel's emotional center is the relationship between Genly and Estraven, a disgraced politician who risks everything to help him. Their journey across the Gobrin Ice — eighty days of harrowing travel through a glacial wilderness — is one of the great survival narratives in literature.\n\n> \"Light is the left hand of darkness, and darkness the right hand of light.\"\n\nLe Guin's prose is precise, elegant, and deceptively simple. She writes like a poet who has chosen the novel as her form — every word selected for its sound as well as its meaning. The Gethenian creation myths and folk tales, interspersed throughout the narrative, add cultural depth that most science fiction worlds entirely lack.\n\nThe novel won both the Hugo and the Nebula Awards, and Le Guin later acknowledged that her use of the masculine pronoun for Gethenians was a limitation she would have handled differently. This self-criticism is itself instructive: **The Left Hand of Darkness** is not a perfect novel about gender, but it is a perfect novel about the difficulty of seeing beyond one's own assumptions."
    },
    {
      title: "Norwegian Wood",
      author: "Haruki Murakami",
      publishYear: 1987,
      rating: 8,
      coverUrl: "https://covers.openlibrary.org/b/id/12996084-L.jpg",
      theGood: "Murakami's most emotionally direct novel — a devastating portrait of love and loss in youth",
      theBad: "The male gaze and passive female characters reflect attitudes that have aged poorly",
      review: "Haruki Murakami's **Norwegian Wood** is the anomaly in his catalogue: a realistic novel about love and death, stripped of the surrealist elements that define his other work. Set in the late 1960s during Tokyo's student uprisings, it follows Toru Watanabe as he navigates the gravitational pull of two women — the fragile, grieving Naoko and the vibrant, life-affirming Midori — while the shadow of his best friend Kizuki's suicide hangs over everything.\n\nThe novel opens on a plane, with Watanabe hearing the Beatles' 'Norwegian Wood' and being overwhelmed by memory. This Proustian trigger sets the tone for everything that follows: a novel saturated in nostalgia, in the ache of remembering a time when everything — love, friendship, music, weather — felt unbearably intense.\n\nMurakami's prose, translated by Jay Rubin, achieves a limpid simplicity that is the opposite of his usual style. There are no talking cats, no parallel worlds, no mysterious women who vanish. There is only a young man trying to understand why people he loves keep dying or disappearing, and whether it's possible to love someone without being destroyed by the loving.\n\n> \"Death is not the opposite of life, but a part of it.\"\n\nNaoko, confined to a sanatorium in the mountains, represents the pull of death — beautiful, heartbreaking, and ultimately unreachable. Midori, with her frank sexuality and relentless appetite for life, represents everything that survival requires. That Watanabe loves both women simultaneously is not a moral failing; it's an honest acknowledgment that the human heart contains both the desire to live and the desire to stop.\n\nThe novel was an unprecedented bestseller in Japan, selling millions of copies and making Murakami a reluctant celebrity. Its popularity embarrassed him — he considered it too conventional, too sentimental. But readers understood what Murakami perhaps didn't: that sometimes the bravest thing a writer can do is write simply about simple things. Love. Death. The song that brings it all back."
    }
  ];

  console.log('Seeding additional Movies...');
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

  console.log('\nSeeding additional Books...');
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

  console.log('\n🎬📚 Additional data seeded successfully!');
  
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
