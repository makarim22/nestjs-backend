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
      title: "Whiplash",
      director: "Damien Chazelle",
      releaseYear: 2014,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
      theGood: "J.K. Simmons delivers the most electrifying antagonist performance of the decade",
      theBad: "The film's glorification of abusive mentorship is deliberately uncomfortable and morally unresolved",
      review: "Damien Chazelle's **Whiplash** is a horror film disguised as a music drama. The monster is Terence Fletcher (J.K. Simmons), a jazz instructor at a prestigious conservatory who hurls chairs at students, reduces them to tears, and uses psychological warfare with the precision of a military interrogator — all in pursuit of the next Charlie Parker.\n\nSimmons's performance is volcanic. Fletcher operates in a constant state of controlled explosion, shifting from avuncular warmth to savage cruelty in the time it takes to snap a downbeat. His face — tanned, shaved, predatory — has the quality of a weapon. When he whispers *not quite my tempo*, the phrase enters the lexicon of cinematic menace alongside *here's Johnny* and *I drink your milkshake*.\n\nMiles Teller's Andrew Neiman is Fletcher's willing victim — a drumming prodigy so desperate for greatness that he practices until his hands bleed, dumps his girlfriend because she might distract him, and ultimately meets Fletcher on his own terms. The question Chazelle poses is devastatingly simple: is greatness worth the destruction it demands?\n\n> \"There are no two words in the English language more harmful than 'good job.'\"\n\nThe final scene — a nine-minute drum solo that resolves the entire film's tension in a single sustained performance — is edited with the rhythmic precision of jazz itself. Chazelle cuts between Neiman's hands, Fletcher's face, and the audience with an intensity that leaves viewers physically exhausted. It is triumph and damnation simultaneously, and Chazelle refuses to tell you which.\n\nThe film cost $3.3 million and grossed $49 million. Simmons won every award available to him. Chazelle, twenty-eight years old, announced himself as a major filmmaker. But the film's real achievement is more intimate: it made you *feel* the difference between good and great, and it made you wonder whether the distance between them is worth crossing."
    },
    {
      title: "Pan's Labyrinth",
      director: "Guillermo del Toro",
      releaseYear: 2006,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/bPJOOFCiXTiIRrY5aP0qqALcfFq.jpg",
      theGood: "Del Toro creates a fantasy world of terrifying beauty as counterpoint to the horrors of fascism",
      theBad: "The graphic violence in the realistic sequences may overwhelm viewers expecting a fairy tale",
      review: "Guillermo del Toro's **Pan's Labyrinth** is set in 1944 Spain, where young Ofelia accompanies her pregnant mother to the rural outpost of her new stepfather, Captain Vidal — a fascist officer methodically hunting Republican guerrillas in the hills. Ofelia discovers an ancient labyrinth and meets a faun who tells her she is the reincarnation of a princess from an underground kingdom. To return, she must complete three tasks.\n\nThe genius of del Toro's film lies in its refusal to separate fantasy and reality. The fairy tale world is not an escape from fascism; it is a parallel response to it. Captain Vidal's meticulous cruelty — he repairs a pocket watch obsessively, he stitches his own cheek wound while looking in a mirror — finds its dark reflection in the Pale Man, a child-eating monster who sits at a banquet table with his eyeballs on a plate before him. Both are figures of voracious, methodical consumption.\n\nIvana Baquero, eleven years old during filming, gives a performance of astonishing maturity as Ofelia. She navigates del Toro's horrors — giant toads, carnivorous fairies, the Pale Man's pursuit — with a combination of terror and determination that anchors the film's emotional truth. Her faith in the fairy tale is not naïveté; it is the only rational response to a world where adults murder children.\n\n> \"I am Princess Moanna, and I am not afraid of you.\"\n\nSergi López's Captain Vidal is one of cinema's great villains — not because he is inhuman but because he is terrifyingly human. His devotion to his father's memory, his desire for a son, his fastidious grooming — these are recognizable human qualities twisted by ideology into instruments of murder. Del Toro understands that fascism doesn't require monsters; it requires ordinary men who have decided that some people don't count.\n\nThe film's final sequence — Ofelia's ultimate task, which requires an act of self-sacrifice — is heartbreaking and transcendent. Del Toro leaves ambiguous whether the underground kingdom is real or a dying child's fantasy, and the ambiguity is essential. In a world of fascist certainty, the ability to hold two truths simultaneously is itself an act of resistance."
    },
    {
      title: "The Social Network",
      director: "David Fincher",
      releaseYear: 2010,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRhcootU.jpg",
      theGood: "Aaron Sorkin's screenplay crackles with the velocity and wit of a great screwball comedy",
      theBad: "The real-life figures depicted have contested the film's accuracy, particularly the characterization of Zuckerberg",
      review: "David Fincher and Aaron Sorkin's **The Social Network** is the defining film of the digital age — not because it accurately depicts the founding of Facebook (it doesn't, and doesn't try to), but because it captures the emotional truth of a generation that built tools for connection out of the raw material of loneliness.\n\nJesse Eisenberg's Mark Zuckerberg is a creation as compelling as any fictional character: brilliant, socially catastrophic, simultaneously pitiable and insufferable. The opening scene — a date with Erica Albright (Rooney Mara) that disintegrates in real time as Zuckerberg's conversational cruelty becomes unbearable — is Sorkin's writing at its most devastating. In five minutes, we understand everything we need to know about a man who can build a network of five hundred million friends but can't maintain a single friendship.\n\nThe dual-deposition structure — two lawsuits, told in parallel, framing the flashback narrative — gives the film a propulsive legal thriller energy. But underneath the depositions and the coding montages and the billion-dollar valuations, this is a story about betrayal. Eduardo Saverin (Andrew Garfield, heartbreakingly earnest) is the best friend who gets left behind, and his gradual realization that loyalty means nothing in the face of ambition is the film's emotional spine.\n\n> \"You're going to go through life thinking that girls don't like you because you're a nerd. And I want you to know, from the bottom of my heart, that that won't be true. It'll be because you're an asshole.\"\n\nTrent Reznor and Atticus Ross's score — all glitchy electronics and muted piano — won the Oscar and deserved it. It sounds like the internet *feels*: simultaneously intimate and impersonal, warm and cold, connecting and isolating. The rowing sequence at Henley, scored to Reznor's adaptation of Grieg, is one of the most beautiful marriage of image and music in modern cinema.\n\nThe final image — Zuckerberg refreshing his ex-girlfriend's Facebook page, waiting for her to accept his friend request — is the loneliest shot in Fincher's filmography. The man who connected the world sits alone in a conference room, hitting refresh. The irony requires no commentary."
    },
    {
      title: "Memories of Murder",
      director: "Bong Joon-ho",
      releaseYear: 2003,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/x9XVbfNmbTPsHfnSmknKhORWBXi.jpg",
      theGood: "Song Kang-ho delivers a career-best performance as a detective unraveling alongside his case",
      theBad: "The tonal shifts between dark comedy and genuine horror may disorient viewers unfamiliar with Korean cinema",
      review: "Before **Parasite**, before the Palme d'Or and the Oscars, Bong Joon-ho made **Memories of Murder** — a film about South Korea's first serial killer case that functions simultaneously as a procedural thriller, a political allegory, and a meditation on the limits of human understanding.\n\nSet in 1986, during South Korea's authoritarian period, the film follows two detectives investigating a series of brutal murders in a rural province. Detective Park (Song Kang-ho) relies on intuition and the occasional use of violence against suspects. Detective Seo (Kim Sang-kyung), arriving from Seoul, brings forensic methodology and rational analysis. Neither approach works.\n\nBong's genius lies in his ability to make you laugh and then make you ashamed of laughing. A scene where Detective Park kicks a suspect while his partner holds the man's legs is choreographed like slapstick comedy — until you realize you're watching a man being tortured, and your laughter curdles in your throat. This tonal whiplash is Bong's signature, and he has never wielded it more effectively.\n\n> \"Detective Park... isn't the face of the killer something you'd see in your neighborhood?\"\n\nThe rural setting — endless rice paddies, muddy irrigation ditches, dark tunnels — becomes a landscape of dread. Bong and cinematographer Kim Hyung-ku shoot the countryside with a beauty that makes its horrors more disturbing, not less. The rain that consistently destroys crime scene evidence becomes a metaphor for the erasure of truth itself.\n\nThe film's final shot is one of the most haunting in Korean cinema. Years later, now a businessman, Park returns to the site of the first murder. A child tells him that another man recently visited the same spot and looked into the same drainage pipe. Park turns to the camera and stares directly at the audience. He is looking at us, and through us, at the real killer — who was in the audience, who was never caught, who was living among them all along.\n\nIn 2019, DNA evidence finally identified the killer. When told the news, Song Kang-ho said nothing for a long time."
    },
    {
      title: "Mad Max: Fury Road",
      director: "George Miller",
      releaseYear: 2015,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg",
      theGood: "The purest expression of kinetic cinema since the silent era — two hours of sustained vehicular poetry",
      theBad: "The minimalist dialogue and characterization may feel insufficient for viewers who prioritize story over spectacle",
      review: "George Miller was seventy years old when he made **Mad Max: Fury Road**, and it is the most physically vital action film of the century. Where younger directors hide behind CGI and shaky-cam, Miller puts real vehicles in a real desert and crashes them into each other with a precision that borders on choreography. Every collision is a ballet. Every explosion is a brushstroke.\n\nThe plot is elemental: Imperator Furiosa (Charlize Theron) steals the five wives of the tyrant Immortan Joe and flees across the Wasteland. Max (Tom Hardy) is caught up in the pursuit. They drive. They fight. They drive some more. That's it. That's everything.\n\nTheron's Furiosa is the film's true protagonist — a one-armed warrior of terrifying capability and suppressed grief. Her performance is almost entirely physical: the way she grips the steering wheel, the way she steadies a rifle barrel on Max's shoulder, the way her face collapses when she discovers that the Green Place of her childhood no longer exists. Theron creates a fully realized character with perhaps fifty lines of dialogue.\n\n> \"Who killed the world?\"\n\nJohn Seale came out of retirement to shoot the film, and his work is extraordinary. The Namibian desert — filmed in blazing orange and saturated blue — becomes a canvas of primal beauty. Miller's decision to center the frame and use quick cuts creates a visual rhythm that is exhausting and exhilarating in equal measure.\n\nThe Doof Warrior — a blind guitarist strapped to a moving truck, playing a flame-throwing electric guitar — is the film's most inspired invention. He is simultaneously absurd and awesome, a figure who belongs in the same pantheon as Kubrick's nuclear cowboy. Miller understands that the apocalypse will have a soundtrack, and it will shred.\n\nThe film's feminist subtext — *We are not things* — is woven into the action rather than bolted onto it. The wives' rebellion is not a subplot; it is the plot. Miller, who consulted with *Vagina Monologues* creator Eve Ensler, made a blockbuster about women's bodily autonomy that never stops moving long enough to become a lecture.\n\n**Fury Road** won six Academy Awards and redefined what action cinema could achieve. It is a masterpiece of pure cinema — a film that communicates entirely through movement, rhythm, and fire."
    },
    {
      title: "Moonlight",
      director: "Barry Jenkins",
      releaseYear: 2016,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/4911T5FbJ9eD2Faz5Z8cT3SUhU3.jpg",
      theGood: "An achingly tender film that redefines what a story about Black masculinity can look like",
      theBad: "The episodic three-act structure means some characters appear only briefly before vanishing",
      review: "Barry Jenkins's **Moonlight** tells the story of Chiron — a Black boy growing up poor and queer in Miami — across three chapters: childhood, adolescence, and adulthood. Each chapter is named for a different version of Chiron: Little, Chiron, Black. Together, they form a triptych of identity, a portrait of a man assembled from the fragments that pain and tenderness left behind.\n\nThe film's visual language is extraordinary. James Laxton's cinematography bathes Miami in blues and purples that make poverty look beautiful without romanticizing it. The ocean — where Chiron learns to swim in the arms of a drug dealer named Juan, where he is later baptized and later still approaches a lover — is the film's central metaphor: vast, powerful, capable of holding you up or pulling you under.\n\nMahershala Ali, in a role of perhaps twenty minutes, creates one of the most indelible characters in modern cinema. Juan teaches Chiron to swim, feeds him, gives him a bed, and answers his most dangerous question — *What's a faggot?* — with devastating honesty. That Juan is also the man selling drugs to Chiron's mother is a contradiction the film refuses to resolve. People are not one thing.\n\n> \"At some point, you gotta decide for yourself who you're going to be. Can't let nobody make that decision for you.\"\n\nNicholas Britell's score — chopped and screwed classical music, violin processed through effects pedals — creates a sonic world that is simultaneously elegant and wounded. The music sounds the way Chiron feels: something beautiful distorted by pressure.\n\nThe final chapter, where an adult Chiron — now muscled, gold-grilled, and dealing drugs — reconnects with Kevin, his childhood love, is almost unbearably tender. The diner scene, scored to Barbara Lewis's 'Hello Stranger,' is a masterclass in restraint. Two men who have spent their entire lives unable to be themselves sit across from each other and, for the first time, allow vulnerability. When Kevin cooks for Chiron, and when Chiron admits that Kevin is the only person who has ever touched him, the film achieves a level of intimacy that most cinema never approaches.\n\n**Moonlight** won Best Picture at the 89th Academy Awards in the most dramatic finale in Oscar history. The drama was external. The film itself is quiet — quiet as a boy learning to swim, quiet as two men sitting in a car, quiet as the ocean at night."
    },
    {
      title: "Come and See",
      director: "Elem Klimov",
      releaseYear: 1985,
      rating: 10,
      posterUrl: "https://image.tmdb.org/t/p/w500/bWoAHQosEIMOxKOXYK6JHRm7cTx.jpg",
      theGood: "The most unflinching depiction of war's impact on a human being ever committed to film",
      theBad: "So harrowing that many viewers cannot finish it — this is not a flaw but a warning",
      review: "Elem Klimov's **Come and See** is the film that ends all arguments about war films. After seeing it, the debate about whether *Saving Private Ryan* or *Apocalypse Now* is the greatest anti-war film becomes irrelevant. Klimov went somewhere neither Spielberg nor Coppola dared go, and he brought back footage of what he found.\n\nThe film follows Flyora, a Belarusian teenager who joins the Soviet partisans in 1943 and, over the course of two hours, witnesses the systematic extermination of his people by the Nazi Einsatzgruppen. Klimov's camera stays on Flyora's face as the atrocities mount, and actor Aleksei Kravchenko's transformation — from bright-eyed boy to grey-haired, hollow-eyed old man — is not acting in any conventional sense. It is a document of what sustained exposure to horror does to a human face.\n\nKlimov uses sound as a weapon. After an artillery bombardment early in the film, Flyora's hearing is damaged, and the soundtrack shifts to a muffled, ringing register that persists for long stretches. The audience experiences his trauma acoustically, trapped inside his damaged perception. When sound returns, it returns as screaming.\n\n> \"Come and see\" — Revelation 6:1\n\nThe film's title comes from the Book of Revelation — the command issued as each of the four horsemen of the apocalypse is summoned. Klimov is not being metaphorical. He is showing you the apocalypse as it actually occurred, in specific historical detail, in a specific country, to specific people.\n\nThe Khatyn massacre sequence — where the inhabitants of a village are herded into a barn and burned alive while German soldiers laugh and take photographs — is the most difficult thing I have ever watched in a cinema. Klimov filmed it with real fire, real extras, and a relentlessness that allows no escape. There is no cutaway, no relief, no music to aestheticize the horror.\n\nThe final sequence — Flyora firing at a portrait of Hitler while documentary footage of the war plays in reverse, rewinding history through the Holocaust, through Kristallnacht, through the beer halls, back to a photograph of Hitler as an infant — poses a question the film refuses to answer. Could you kill a baby to prevent all of this? The film ends before Flyora can pull the trigger.\n\n**Come and See** was Klimov's last film. He never directed again. Some fires, once witnessed, leave nothing left to say."
    },
    {
      title: "Arrival",
      director: "Denis Villeneuve",
      releaseYear: 2016,
      rating: 9,
      posterUrl: "https://image.tmdb.org/t/p/w500/x2FJsf1ElAgr63Y3PNPtJrcmpoe.jpg",
      theGood: "A science fiction film that is genuinely about ideas — and makes those ideas emotionally devastating",
      theBad: "The reveal's logical implications create paradoxes that don't fully withstand scrutiny",
      review: "Denis Villeneuve's **Arrival** begins with the death of a child and ends with the choice to have her anyway, knowing she will die. Between those two poles, the film constructs a first-contact narrative that is really about the structure of grief, the nature of time, and the radical proposition that knowing the future might not change what you choose to do with the present.\n\nAmy Adams's Dr. Louise Banks is cinema's most unlikely action hero: a linguist called in to communicate with alien visitors. Her weapon is language itself, and the film treats the process of deciphering an alien writing system with the tension and stakes of a military operation. Adams's performance is quiet, precise, and devastating — she does more with a single tear in the final scene than most actors do with entire monologues.\n\nThe aliens' written language — circular, non-linear, existing outside of time — is the film's central conceit and its most beautiful visual invention. Bradford Young's cinematography, all fog and grey light and the monolithic darkness of the alien ships, creates an atmosphere of awe that is genuinely spiritual. The first entry into the alien vessel, with its disorienting shift in gravity, is one of the great sequences in modern science fiction.\n\n> \"If you could see your whole life from start to finish, would you change things?\"\n\nJóhann Jóhannsson's score (his last before his untimely death) is otherworldly in the truest sense. Vocal drones, treated strings, and processed sounds create a musical language as alien as the heptapods themselves. The main theme builds slowly, like revelation, and when it arrives in full force during the film's climactic montage, it is overwhelming.\n\nTed Chiang's source story, *Story of Your Life*, is one of the great works of modern science fiction, and Eric Heisserer's adaptation captures its philosophical core while making it cinematic. The Sapir-Whorf hypothesis — that the language you speak shapes the way you think — becomes literal: learning the alien language changes how Louise experiences time. The twist, when it comes, recontextualizes everything you've seen and turns a cerebral sci-fi film into a profound meditation on love and loss.\n\n**Arrival** is that rarest of things: a blockbuster that respects its audience's intelligence and rewards it with genuine emotional transcendence."
    }
  ];

  const books = [
    {
      title: "Kafka on the Shore",
      author: "Haruki Murakami",
      publishYear: 2002,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/8769386-L.jpg",
      theGood: "Murakami's most structurally ambitious novel, weaving two seemingly disconnected narratives into a unified dream",
      theBad: "The Oedipal themes and sexual content involving a minor are deeply problematic",
      review: "Haruki Murakami's **Kafka on the Shore** operates on dream logic, and like the best dreams, it resists interpretation while insisting on meaning. Two narratives alternate: Kafka Tamura, a fifteen-year-old runaway fleeing a father's Oedipal curse, and Nakata, an elderly man who lost his intelligence in a mysterious childhood incident but gained the ability to talk to cats.\n\nThese two stories, set in different cities with no apparent connection, converge through a series of increasingly surreal events: fish rain from the sky, a man's shadow detaches from his body, a mystical stone called the Entrance Stone opens a passage between worlds. Murakami offers no explanation for any of this, and the novel is better for the refusal.\n\nNakata is Murakami's most lovable creation — a simple, kind man who speaks about himself in the third person and whose conversations with stray cats have a warmth and humor that counterbalance the novel's darker currents. His journey westward, accompanied by the young truck driver Hoshino, has the picaresque charm of a road novel by Kerouac, if Kerouac had been interested in talking cats and cosmic gateways.\n\n> \"Sometimes fate is like a small sandstorm that keeps changing directions.\"\n\nThe Komura Memorial Library, where Kafka takes refuge, is one of Murakami's great settings: a private library in Takamatsu, presided over by the elegant, enigmatic Miss Saeki. Her backstory — a love affair ended by violence, a life frozen in grief — gives the novel its emotional gravity. The image of her as a young woman, listening to a record she composed for her dead lover, is one of the most melancholy in Murakami's work.\n\nThe novel draws on Greek tragedy, Japanese folklore, Beethoven, Prince, Colonel Sanders (yes, the chicken franchise icon, reimagined as a supernatural pimp), and the metaphysics of consciousness. It should be a mess. Instead, it achieves a dreamlike coherence that rational plotting could never produce.\n\nMurakami has said that he writes his novels without knowing where they're going, following the story as if reading it himself. **Kafka on the Shore** is the most persuasive evidence that this method can produce genuine art."
    },
    {
      title: "Frankenstein",
      author: "Mary Shelley",
      publishYear: 1818,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12647888-L.jpg",
      theGood: "A novel written by a teenager that invented science fiction, Gothic horror, and the modern myth of the creator destroyed by creation",
      theBad: "The nested narrative structure and 19th-century prose can feel distancing to modern readers",
      review: "Mary Shelley was eighteen years old when she wrote **Frankenstein**, and two centuries later, literature is still catching up. The novel she produced during that famous summer on Lake Geneva — while Byron, Percy Shelley, and Polidori told ghost stories — didn't just create a monster. It created an entire way of thinking about the relationship between creator and creation, science and morality, ambition and responsibility.\n\nVictor Frankenstein is not the cackling madman of Hollywood. He is a grieving young scientist, driven by the death of his mother to conquer death itself. His creation of the Creature is an act of love perverted by revulsion: the moment the thing opens its yellow eyes, Victor flees in horror, abandoning his child. Every tragedy that follows flows from this original sin of rejection.\n\nThe Creature's narrative — told in his own voice, in the novel's central section — is one of literature's great first-person accounts. His education through observation, his yearning for connection, his discovery that his appearance makes love impossible, his descent into vengeance — Shelley gives the monster more humanity than she gives the man who made him.\n\n> \"I ought to be thy Adam, but I am rather the fallen angel.\"\n\nThe novel's structure — a story within a story within a story, narrated by an Arctic explorer, then by Victor, then by the Creature — creates a Russian doll of perspective that was formally radical for its time. Each narrator is unreliable in different ways. Walton romanticizes. Victor self-justifies. The Creature self-pities. The truth lives in the gaps between their accounts.\n\nShelley's prescience is staggering. She anticipated the ethical dilemmas of genetic engineering, artificial intelligence, and reproductive technology two centuries before they became real. Her question — what responsibility does a creator bear toward a creation that suffers? — has only grown more urgent.\n\n**Frankenstein** is not a horror novel. It is a novel about loneliness so acute that it becomes monstrous. Read it not for the lightning and the laboratory, but for the Creature standing at Victor's bedside, reaching out a hand, and being refused."
    },
    {
      title: "Catch-22",
      author: "Joseph Heller",
      publishYear: 1961,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12003091-L.jpg",
      theGood: "The funniest novel about the horror of war ever written — every page contains at least one line of comic genius",
      theBad: "The circular, repetitive structure is deliberately maddening and can exhaust less patient readers",
      review: "Joseph Heller's **Catch-22** is a novel that makes you laugh until you realize you're laughing at murder, and then makes you laugh again anyway. Set on a fictional Mediterranean island during World War II, it follows Captain John Yossarian, a bombardier who is absolutely certain that everyone is trying to kill him — and who is absolutely correct.\n\nThe novel's titular paradox — you can be grounded if you're crazy, but asking to be grounded proves you're sane, so you can never be grounded — is the operating logic of the entire book. Every institution, every regulation, every chain of command exists in a state of perfect, self-defeating absurdity. Colonel Cathcart keeps raising the number of required missions. Milo Minderbinder, the mess officer, builds a global trading syndicate that eventually bombs his own squadron for profit. Major Major Major Major can only be seen in his office when he's not there.\n\nHeller's prose style — repetitive, circular, obsessively revisiting the same events from different angles — mirrors the experience of being trapped in a system designed to use you up. Sentences loop back on themselves. Conversations devolve into logical paradoxes. Time itself becomes circular, with chapters arranged out of sequence.\n\n> \"He was going to live forever, or die in the attempt.\"\n\nBeneath the comedy is something genuinely terrifying. The novel's most devastating scene — Snowden dying in the back of a bomber, his secret spilling out with his insides — is revisited in fragments throughout the book, each iteration revealing more detail, until the full horror is finally confronted in the penultimate chapter. Heller understood that trauma is repetitive, and he structured his novel accordingly.\n\nThe word 'Catch-22' entered the English language immediately upon publication and has never left. It names something that had no name before: the bureaucratic trap, the logical prison, the system that uses your own rationality against you. Heller gave the twentieth century one of its essential concepts, wrapped in a novel that is both hilariously funny and deeply, fundamentally angry."
    },
    {
      title: "The Name of the Rose",
      author: "Umberto Eco",
      publishYear: 1980,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/10471861-L.jpg",
      theGood: "A dazzling intellectual thriller that wears its erudition as entertainment rather than burden",
      theBad: "The opening hundred pages of medieval theological detail may defeat readers before the mystery begins",
      review: "Umberto Eco's **The Name of the Rose** is a murder mystery set in a 14th-century Benedictine monastery, and it is also a novel about semiotics, heresy, the politics of laughter, the nature of truth, and the relationship between books and power. That it manages to be all of these things while remaining a genuinely suspenseful page-turner is a miracle of literary engineering.\n\nWilliam of Baskerville — Franciscan friar, proto-detective, and obvious homage to Sherlock Holmes — arrives at the abbey with his young novice Adso of Melk just as monks begin dying in ways that mirror the Book of Revelation. His investigation leads him through the labyrinthine library, where a secret book — Aristotle's lost treatise on comedy — is guarded by a blind librarian willing to kill to keep it hidden.\n\nEco, a professor of semiotics, understood that detection is fundamentally a process of reading signs. William interprets footprints, facial expressions, architectural layouts, and obscure texts with the same analytical tools. The monastery itself is a semiotic system — every corridor, every prohibition, every ritual carries meaning. The reader, following William, learns to read as he does.\n\n> \"Books are not made to be believed, but to be subjected to inquiry.\"\n\nThe novel's villain — the venerable Jorge of Burgos, modeled on Jorge Luis Borges — kills to prevent the dissemination of Aristotle's argument that laughter is a virtue. His position is that comedy undermines the fear of God, and without fear, the church loses its power. It is a thesis about censorship that transcends its medieval setting and applies to every era, including our own.\n\nEco's prose (translated by William Weaver) is dense with period detail — descriptions of monastic routines, theological debates, architectural features — that would be tedious in lesser hands but here create an immersive world so complete that you can smell the scriptorium's ink and feel the chill of the dormitory stones.\n\nThe library's destruction in the novel's climax is one of literature's great conflagrations — a fire that consumes not just books but the idea that knowledge should be controlled. Eco, a man who lived surrounded by fifty thousand volumes, understood that the burning of a library is a form of murder."
    },
    {
      title: "Lolita",
      author: "Vladimir Nabokov",
      publishYear: 1955,
      rating: 10,
      coverUrl: "https://covers.openlibrary.org/b/id/12858647-L.jpg",
      theGood: "The most brilliantly written novel in the English language by a non-native speaker — every sentence is a gem",
      theBad: "The subject matter is genuinely monstrous, and Nabokov's seductive prose can make readers uncomfortably complicit",
      review: "Vladimir Nabokov's **Lolita** is the most dangerous novel in the English language — not because of its subject matter, but because of its prose. Humbert Humbert, the pedophile narrator, writes with such beauty, wit, and self-awareness that the reader is constantly in danger of forgetting what he actually is: a predator who destroys a child's life. This is the novel's purpose. It forces you to confront the relationship between aesthetic pleasure and moral horror.\n\nHumbert's narration is a masterwork of unreliable self-justification. He frames his obsession with twelve-year-old Dolores Haze as a grand romance, deploying French phrases, literary allusions, and wordplay of dazzling ingenuity to aestheticize his crimes. The reader who is seduced by his language is implicated in his delusion. Nabokov designed the trap with full awareness of its cruelty.\n\nDolores — never truly 'Lolita,' which is Humbert's invention — emerges through the gaps in his narration as a real child: gum-chewing, comic-book-reading, ordinary. Her suffering is visible only in the moments when Humbert's rhetorical control slips — when he admits she cried every night, when he notes her flinching at his touch. These details are all the more devastating for being buried in beautiful prose.\n\n> \"Lolita, light of my life, fire of my loins. My sin, my soul.\"\n\nNabokov, who was Russian-born and wrote the novel in his third language, achieves feats of English prose that native speakers have never matched. His sentences are machines of compressed meaning, where every word does multiple jobs simultaneously. The description of Humbert's first glimpse of Dolores — *She was Lo, plain Lo, in the morning, standing four feet ten in one sock* — is a thesis on the gap between name and person, fantasy and reality.\n\nThe novel's second half — a cross-country road trip that is both picaresque comedy and prolonged kidnapping — maps the American landscape with a European outsider's acid eye. Motels, diners, tourist traps — Nabokov catalogs Americana with a precision that is simultaneously mocking and affectionate.\n\n**Lolita** has been misread as erotica, as a love story, as a celebration of its narrator's crimes. It is none of these things. It is a study of tyranny — the tyranny of an eloquent adult over a powerless child — and a warning about the power of beautiful language to make the monstrous seem acceptable."
    },
    {
      title: "The Stranger",
      author: "Albert Camus",
      publishYear: 1942,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12645340-L.jpg",
      theGood: "Camus distills existentialist philosophy into 123 pages of crystalline, devastating prose",
      theBad: "Meursault's emotional flatness can make the reading experience feel cold and detached",
      review: "Albert Camus's **The Stranger** opens with four words that detonate like a bomb: *Aujourd'hui, maman est morte* — Mother died today. Or maybe yesterday, Meursault isn't sure. This uncertainty — not about facts but about appropriate emotional responses — is the novel's engine and its protagonist's fatal flaw.\n\nMeursault is a clerk in Algiers who attends his mother's funeral without crying, begins an affair the next day, and eventually kills an Arab man on a beach for no reason he can articulate. The murder — committed because of the sun, because of the heat, because of the light glinting off a knife — is the most nihilistic act of violence in modern literature. Meursault doesn't kill out of rage, fear, or desire. He kills because the universe is indifferent, and he has absorbed that indifference into his bones.\n\nCamus's prose, rendered in Matthew Ward's definitive translation, is stripped to the bone. Short, declarative sentences. No metaphors, no embellishment, no interiority. Meursault reports the world as a camera would: surfaces, temperatures, colors, sensations. The Mediterranean sun — blazing, oppressive, inescapable — is the novel's most vivid character.\n\n> \"I opened myself to the gentle indifference of the world.\"\n\nThe trial that follows the murder is the novel's bitter comedy. Meursault is condemned not for killing a man but for failing to cry at his mother's funeral. The prosecutor builds his case around Meursault's emotional inadequacy: he smoked cigarettes at the vigil, he went to a comedy film the next day, he showed no remorse. Society, Camus argues, can tolerate murder more easily than it can tolerate the refusal to perform expected emotions.\n\nThe final chapter — Meursault's confrontation with a prison chaplain, in which he rejects the consolation of God and embraces the absurdity of existence — is the climax of Camus's philosophical project. It is not nihilism; it is a fierce, defiant affirmation of the only life we have, stripped of illusion.\n\n**The Stranger** is a novel you can read in an afternoon and spend a lifetime thinking about. Camus proved that philosophy doesn't need jargon or systems. It needs a man, a beach, a gun, and the wrong amount of sunlight."
    },
    {
      title: "Atonement",
      author: "Ian McEwan",
      publishYear: 2001,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/8485380-L.jpg",
      theGood: "McEwan's most structurally ambitious novel, with a devastating final twist that redefines everything that precedes it",
      theBad: "The shift in perspective and style between parts can feel jarring",
      review: "Ian McEwan's **Atonement** begins on a sweltering English summer day in 1935, when thirteen-year-old Briony Tallis witnesses a scene between her older sister Cecilia and the housekeeper's son Robbie Turner that she misinterprets — with catastrophic consequences. Her misunderstanding, compounded by a child's certainty and an imagination fed by too many novels, leads to a false accusation that destroys lives.\n\nThe first section, set at the Tallis country house, is McEwan at his most Austenian: a precise, merciless dissection of class, desire, and the dangerous power of narrative. Every detail — the heat, the broken vase at the fountain, the letter that goes to the wrong person — contributes to a mechanism of tragedy that feels both inevitable and agonizingly preventable.\n\nRobbie's experience in the retreat to Dunkirk — the second section — is one of the most harrowing depictions of war in modern fiction. McEwan describes the chaos, the arbitrary death, the landscape of abandoned equipment and rotting corpses with a specificity that makes you smell the cordite. The leg in the tree. The boy in the field. Each image is placed with a novelist's precision to create maximum impact.\n\n> \"How can a novelist achieve atonement when, with her absolute power of deciding outcomes, she is also God?\"\n\nBriony's journey from girl to nurse to novelist provides the novel's structural spine, and McEwan layers the meta-fictional implications with patience and skill. The reader gradually realizes that the novel they are reading may itself be Briony's attempt at atonement — that the happy ending may be fiction within fiction.\n\nThe final section — a coda set in 1999, when Briony is a celebrated author dying of vascular dementia — delivers the novel's devastating revelation. The lovers did not reunite. Robbie died at Dunkirk. Cecilia died in the Blitz. The novel we have read is Briony's final draft, the version where she gives them the happiness she stole from them in life. The atonement of the title is literary: she cannot undo what she did, so she rewrites it.\n\nMcEwan asks whether fiction can repair what life has broken. His answer — tentative, anguished, and ultimately uncertain — is that the attempt is all we have."
    },
    {
      title: "The Handmaid's Tale",
      author: "Margaret Atwood",
      publishYear: 1985,
      rating: 9,
      coverUrl: "https://covers.openlibrary.org/b/id/12951426-L.jpg",
      theGood: "Atwood's most visceral novel — a dystopia built entirely from things that have already happened",
      theBad: "The fragmentary narrative voice, while deliberate, can feel frustratingly opaque in places",
      review: "Margaret Atwood's **The Handmaid's Tale** derives its horror from a single authorial principle: nothing in the novel is invented. Every mechanism of control, every degradation, every violation inflicted on women in the Republic of Gilead has a historical precedent. Atwood simply gathered them and placed them in Cambridge, Massachusetts.\n\nOffred — her name a patronymic meaning 'of Fred,' marking her as the property of her Commander — narrates in a voice that is simultaneously numb and hyper-aware. She notices everything: the texture of a pat of butter she uses as hand cream, the shape of tulips that remind her of wounds, the scratch of her winged bonnet against her peripheral vision. Her attention to sensory detail is a survival mechanism — if she stops noticing, she stops existing.\n\nThe novel's most chilling achievement is its depiction of how quickly the unthinkable becomes normal. Offred remembers her old life — her husband Luke, her daughter, her job, her bank account — with the specificity of recent memory. The transition from freedom to bondage took months, not years, and it was accomplished through a series of reasonable-seeming steps: the identification cards, the women's bank accounts frozen, the new laws. Each step was small enough to absorb.\n\n> \"Nolite te bastardes carborundorum. Don't let the bastards grind you down.\"\n\nThe Ceremony — the ritualized rape at the novel's center, during which Offred must lie between the Commander's wife's legs while the Commander attempts to impregnate her — is described with a flat, clinical precision that makes it more horrifying than any graphic depiction could. Offred's dissociation during the act is the act's true violence: she has learned to leave her body, which means the regime has achieved its goal of reducing her to reproductive function.\n\nThe epilogue — a transcript of an academic conference in 2195, analyzing Offred's narrative as a historical document — is Atwood's cruelest masterstroke. Gilead has fallen, but the male academics who study it treat Offred's suffering with the same detached analytical interest they might bring to any historical curiosity. The objectification continues, just in a different register.\n\n**The Handmaid's Tale** was written in 1985 in West Berlin, within sight of the Wall. Atwood has said that proximity to a functioning totalitarian state focused her mind wonderfully. The novel functions as both warning and documentation — a record of what has been done to women throughout history, arranged in the future tense."
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
