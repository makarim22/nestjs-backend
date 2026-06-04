"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const adapter_libsql_1 = require("@prisma/adapter-libsql");
const bcrypt = __importStar(require("bcrypt"));
const url = process.env.DATABASE_URL || 'file:./dev.db';
const authToken = process.env.TURSO_AUTH_TOKEN;
const adapter = new adapter_libsql_1.PrismaLibSql({
    url,
    ...(authToken ? { authToken } : {}),
});
const prisma = new client_1.PrismaClient({ adapter });
const movies = [
    {
        title: "Mulholland Drive",
        director: "David Lynch",
        releaseYear: 2001,
        rating: 10,
        watchDate: new Date("2024-01-14"),
        posterUrl: "https://image.tmdb.org/t/p/w500/gg3lgh7bnWOSz4lWWBpjDtZr0ck.jpg",
        theGood: "A hypnotic labyrinth of identity, desire, and Hollywood's devouring machinery.",
        theBad: "Deliberately opaque — those seeking linear narrative will find themselves unmoored.",
        review: "David Lynch's Mulholland Drive is not a film to be decoded — it is a film to be inhabited. Opening with a jitterbug contest bathed in golden light and ending in the grim darkness of the Winkie's diner, Lynch inverts the dream of Los Angeles with surgical, surrealist precision.\n\nNaomi Watts delivers a performance of extraordinary duality as Betty Elms, the bright-eyed ingenue arriving in Hollywood with wide-open hope, and Diane Selwyn, the hollowed-out wreck she becomes when the dream turns predatory. Laura Harring matches her every step as the amnesiac Rita, a figure who is simultaneously every classic film noir femme fatale and an act of radical subversion of that archetype.\n\nAngelo Badalamenti's score is the film's spine: lush, ominous, suffused with longing. It tells you everything Lynch refuses to say aloud. The Club Silencio sequence — one of the most devastating scenes in cinema — strips illusion down to its bones and dares you to feel something anyway.\n\nThis is cinema as psychoanalysis. It excavates obsession, failure, and the violence that Hollywood commits daily against the people who love it most. A genuine masterpiece.",
    },
    {
        title: "There Will Be Blood",
        director: "Paul Thomas Anderson",
        releaseYear: 2007,
        rating: 9,
        watchDate: new Date("2024-02-08"),
        posterUrl: "https://image.tmdb.org/t/p/w500/fa0RDkAlCec0STeMNAhPaF89q6U.jpg",
        theGood: "Daniel Day-Lewis commands every frame; an operatic portrait of American greed.",
        theBad: "At nearly three hours, it demands complete surrender — and offers no easy comfort in return.",
        review: "There Will Be Blood is an American epic drenched in the smell of oil and ambition. Paul Thomas Anderson adapts Upton Sinclair's Oil! into something far stranger and more personal: a character study of Daniel Plainview, a man who has sublimated every human impulse into the pure machinery of acquisition.\n\nDaniel Day-Lewis gives the most physically inhabited performance of the 21st century. His Daniel Plainview is a creature assembled from the raw materials of the frontier — cunning, contemptuous, magnificent. He speaks to community whilst despising it, adopts a son as a business prop, and ultimately cannot tolerate the company of anyone who might equal him.\n\nJohnny Greenwood's score is the film's dark heart — atonal, violent, mechanical. It refuses all sentimentality, just as Plainview refuses all sentiment. The final sequence in the bowling alley is both grotesque and cathartic, the logical endpoint of everything Anderson has been building.\n\nThis is a film about the founding myth of American capitalism: that the man willing to do anything will win everything. Anderson examines that myth without flinching.",
    },
    {
        title: "Chinatown",
        director: "Roman Polanski",
        releaseYear: 1974,
        rating: 10,
        watchDate: new Date("2023-11-20"),
        posterUrl: "https://image.tmdb.org/t/p/w500/bLHBh91MOSSPlrqelEkuvS1mU3j.jpg",
        theGood: "The definitive neo-noir. Faye Dunaway and Jack Nicholson are flawless.",
        theBad: "The bleak ending, while perfect, offers no catharsis — only recognition.",
        review: "Robert Towne's screenplay for Chinatown is the gold standard of Hollywood writing. Roman Polanski's direction is the gold standard of neo-noir filmmaking. Jack Nicholson plays J.J. Gittes with a confidence that curdles into helplessness as the conspiracy widens. Faye Dunaway is extraordinary as Evelyn Mulwray — withholding, wounded, finally tragic.\n\nThe film works as a detective story on its surface — water rights, land corruption, murder — but its true subject is the impossibility of doing good in a world structured by power. Gittes is a competent man who believes competence is enough. Polanski shows us exactly how wrong that assumption is.\n\nJerry Goldsmith's trumpet theme is aching, beautiful, inevitable. The period recreation of 1930s Los Angeles is immaculate. But what stays with you is the ending: a single, irrevocable act of violence, and the command to forget it. Polanski knows we cannot. Neither should we.",
    },
    {
        title: "The Godfather",
        director: "Francis Ford Coppola",
        releaseYear: 1972,
        rating: 10,
        watchDate: new Date("2023-09-05"),
        posterUrl: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsLegHzr4d4lc.jpg",
        theGood: "A seamless marriage of commerce and art. Every performance is definitive.",
        theBad: "None. This is cinema at its absolute apex.",
        review: "Fifty years on, The Godfather remains not simply a great film but an act of cultural geology — something so foundational that it is difficult to see it freshly, because it has become the lens through which we see everything else. Coppola's achievement is the complete translation of a pulp novel into Shakespearean tragedy.\n\nMarlon Brando's Don Corleone is one of cinema's great performances precisely because it is so withholding. He is a man who speaks quietly because he never needs to speak loudly. Al Pacino's Michael is the film's true subject: the transformation of an innocent into exactly the kind of man he swore never to become.\n\nThe baptism sequence — intercutting Michael's godfather ceremony with the orchestrated murders of every rival family — is the supreme montage in American cinema. Gordon Willis's cinematography is darkness used as meaning. Nino Rota's score is grief made audible.\n\nThe Godfather is not about the mafia. It is about America: the dream of safety, the price of power, the family as both refuge and prison.",
    },
    {
        title: "Blade Runner 2049",
        director: "Denis Villeneuve",
        releaseYear: 2017,
        rating: 9,
        watchDate: new Date("2024-03-12"),
        posterUrl: "https://image.tmdb.org/t/p/w500/gajva2L0rPYkEWjzgFlBXCAVBE5.jpg",
        theGood: "Roger Deakins shoots the future as a fever dream of beautiful desolation.",
        theBad: "Its meditative pacing will lose viewers expecting a thriller; it demands patience.",
        review: "Denis Villeneuve does the impossible: he makes a sequel to Blade Runner that honors the original's melancholy without merely imitating it. Blade Runner 2049 is a film about what it means to have a story — to believe you are the protagonist of your own life — and about what happens when that belief is dismantled.\n\nRyan Gosling plays K with magnificent stillness. He is a replicant who hunts other replicants, a man without guaranteed interiority, who discovers a memory that might be real. Villeneuve spends 163 minutes with that question, refusing easy answers.\n\nRoger Deakins' cinematography rightfully won every award available to it. Each frame is a composition of desolate beauty: the orange dust storms over the ruins of Las Vegas, the cold grey of K's apartment, the white nothingness of the protein farm.\n\nThis is science fiction that trusts its audience to sit with loneliness and call it beauty.",
    },
    {
        title: "Rashomon",
        director: "Akira Kurosawa",
        releaseYear: 1950,
        rating: 9,
        watchDate: new Date("2023-12-01"),
        posterUrl: "https://image.tmdb.org/t/p/w500/kYAOlBHOXKR4YV8njkusTGgCfRV.jpg",
        theGood: "The invention of subjective narrative in cinema. Absolutely essential.",
        theBad: "The theatrical acting style of the period may initially create distance for modern viewers.",
        review: "Akira Kurosawa's Rashomon is the film that taught cinema how to lie, and in doing so, revealed the deepest truth about human nature: we are all the heroes of our own stories, and we will reshape reality to maintain that position.\n\nA samurai is dead. A bandit is accused. A wife is shamed. A woodcutter witnessed something. Over the course of 88 razor-precise minutes, Kurosawa presents four versions of a single event — each one internally consistent, each one self-serving, each one incompatible with the others. The film does not resolve the contradiction. It insists on it.\n\nToshiro Mifune's bandit is a force of nature — all sweat and laughter and animal energy. Kazuo Miyagawa's cinematography, particularly the sequences of sunlight through forest canopy, remains among the most beautiful in the medium.\n\nRashomon is not nihilistic about truth — it is realistic about self-deception. The final image is an act of faith in humanity that the rest of the film makes genuinely earned.",
    },
];
const books = [
    {
        title: "Blood Meridian",
        author: "Cormac McCarthy",
        publishYear: 1985,
        rating: 10,
        readDate: new Date("2024-01-30"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/0679722342-L.jpg",
        theGood: "The most uncompromising novel in the American canon. McCarthy at his absolute apex.",
        theBad: "The violence is relentless and purposeful — not for the faint-hearted or the incurious.",
        review: "Blood Meridian is the great American novel that no one wants to name as such, because to do so is to confront what it says about America. Cormac McCarthy's 1985 masterwork recounts the exploits of the Glanton Gang — a historical band of mercenaries hired to scalp Apache along the US-Mexico border in 1849 — and renders this history as something between an Old Testament epic and a philosophical nightmare.\n\nThe Judge is one of literature's supreme villains and one of its supreme ideas: a seven-foot albino polymath who dances, plays the fiddle, speaks every language, and articulates a philosophy of war as the supreme human sacrament. He is terrifying not because he is irrational but because he is entirely too coherent. His arguments are difficult to refute. That difficulty is the point.\n\nMcCarthy's prose in Blood Meridian is biblical in its cadence and geological in its patience. He describes violence with the same attention he gives to landscape — without horror, without extenuation. The scalping scenes are not worse than the sunrise scenes. Both are described with the same unstinting clarity.\n\nThis is a book that believes the capacity for violence is not aberrant but central to human nature, and it presents that belief with such extraordinary artistry that you cannot dismiss it. You can only survive it.",
    },
    {
        title: "Middlemarch",
        author: "George Eliot",
        publishYear: 1871,
        rating: 10,
        readDate: new Date("2023-10-15"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/0141439548-L.jpg",
        theGood: "The most psychologically precise portrait of human failing and grace in the English language.",
        theBad: "Its length demands sustained attention that the algorithmic era conspires against.",
        review: "Virginia Woolf called Middlemarch one of the few English novels written for grown-up people. After repeated readings across two decades, I find myself unable to improve on that assessment. George Eliot's novel of provincial English life in the 1830s is not merely a great book — it is a complete account of human moral experience.\n\nDorothea Brooke wants to do good in the world and discovers, repeatedly, that the world is not structured to reward that impulse. Lydgate arrives with scientific ambitions and is slowly consumed by financial anxiety and a fatal marriage. Bulstrode, the town's pious banker, holds his respectability together with compounding lies until the weight becomes insupportable.\n\nEven Casaubon — the dried-out pedant Dorothea wrongly marries — is given an interior life Eliot refuses to ridicule. Her famous Finale describes Dorothea's unhistoric acts — the small kindnesses, the personal sacrifices, the moments of grace — as the cumulative stuff of the growing good of the world.\n\nThis is moral philosophy in novelistic form, and it remains the most convincing version of that form I have encountered.",
    },
    {
        title: "Moby-Dick",
        author: "Herman Melville",
        publishYear: 1851,
        rating: 9,
        readDate: new Date("2024-02-20"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/0142437247-L.jpg",
        theGood: "The ocean as metaphysics. Ahab as the apotheosis of American obsessive individualism.",
        theBad: "The cetological chapters require a tolerance for digression that not all readers possess.",
        review: "Call me Ishmael. Three words, and you are already inside one of the strangest, most capacious novels in the language. Melville's Moby-Dick is not a whaling adventure with philosophical pretensions — it is a philosophical treatise that uses whaling as its vehicle, its symbol, its object of obsessive, encyclopedic love.\n\nCaptain Ahab is the great American archetype: the man whose singular purpose has curdled into madness, who has converted personal grievance into cosmic principle, and who will drag everyone around him toward destruction in service of his private war with the universe. He is magnificent. He is insane. He is impossible to look away from.\n\nThe cetological chapters — on the whiteness of the whale, on the taxonomy of cetaceans, on the try-works — are not the novel's flaw. They are where Melville builds the whale into something larger than narrative can contain. They are essays in wonder.\n\nThis is the novel that invented American ambition as literary subject. Everything from Blood Meridian to contemporary literary fiction stands in its enormous shadow.",
    },
    {
        title: "In Search of Lost Time",
        author: "Marcel Proust",
        publishYear: 1913,
        rating: 10,
        readDate: new Date("2023-08-10"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/0812972325-L.jpg",
        theGood: "The most complete examination of memory, time, and consciousness in literary history.",
        theBad: "It is seven volumes long and absolutely uninterested in accommodating the impatient.",
        review: "Marcel Proust's novel is not a novel one reads so much as one inhabits. Over the course of seven volumes — approximately 1.5 million words in French — Proust builds an entire civilization of consciousness, a complete account of what it is to be a self in time.\n\nThe famous madeleine scene, in which the taste of a small cake dipped in tea triggers a cascade of involuntary memory, is rightly iconic — but it is only the first note of a symphony. Proust's great subject is the gap between what we experience and what we remember, between who we are and who we imagine ourselves to be.\n\nThe social world of the novel — the Faubourg Saint-Germain, the salons, the seaside at Balbec — is rendered with a sociological precision that rivals Balzac. But Proust is ultimately uninterested in society as spectacle. He is interested in society as the medium through which the self encounters and misunderstands other selves.\n\nThe tragedy of Swann's love for Odette — loving an illusion, discovering the reality too late — is the pattern that repeats throughout, always with different names, never with different conclusions.",
    },
    {
        title: "Beloved",
        author: "Toni Morrison",
        publishYear: 1987,
        rating: 10,
        readDate: new Date("2024-04-05"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/1400033411-L.jpg",
        theGood: "Morrison's prose is incantatory, devastating. The most necessary novel about American slavery.",
        theBad: "It demands emotional courage that not all readers arrive with — and that is entirely appropriate.",
        review: "Toni Morrison's Beloved is the novel that made the ghost story into moral history. Published in 1987, it tells the story of Sethe, a former enslaved woman living in Cincinnati in 1873, haunted by the malevolent spirit of her dead infant daughter — a daughter she killed herself, to spare her from slavery.\n\nMorrison does not explain this act, mitigate it, or sentimentalize it. She places it at the center of her novel and asks us to inhabit its logic. Slavery, she argues, is not merely a historical institution but a violence against the self — against one's capacity to love, to remember, to be known.\n\nThe prose is unlike any other American novelist's: incantatory, circling, moving through time with a logic that is emotional rather than chronological. The novel's famous last pages are an act of formal genius that enacts in language what the novel argues about memory: we cannot pass it on; we cannot not pass it on.\n\nBeloved won the Pulitzer Prize in 1988. Morrison won the Nobel Prize in 1993. Both awards were insufficient.",
    },
    {
        title: "The Master and Margarita",
        author: "Mikhail Bulgakov",
        publishYear: 1967,
        rating: 9,
        readDate: new Date("2024-03-28"),
        coverUrl: "https://covers.openlibrary.org/b/isbn/0140455044-L.jpg",
        theGood: "A satirical masterpiece of astonishing range — funny, tragic, metaphysically wild.",
        theBad: "The dual narrative requires patience to bridge; the novel rewards but demands full commitment.",
        review: "Mikhail Bulgakov began The Master and Margarita in 1928 and worked on it until his death in 1940, knowing it would never be published in his lifetime. It was finally published in censored form in 1966. That gap between creation and revelation is not incidental — it is part of the novel's meaning.\n\nThe Devil visits Soviet Moscow in the form of Professor Woland, accompanied by a naked witch, a giant talking black cat, and a hitman who moonlights as a choirmaster. The chaos they unleash on the literary and bureaucratic establishment of 1930s Moscow is savage satire.\n\nIntercut with this Satanic farce is a parallel narrative: Pontius Pilate's encounter with Yeshua Ha-Nozri — a version of the Passion that is neither hagiography nor debunking, but something stranger and more honest.\n\nThe love story between the Master — a writer whose novel about Pilate has been destroyed by Soviet critics — and Margarita, who makes a bargain with the Devil to save him, gives the novel its heart. This is a novel that believes in art as the one power that outlasts all systems of power.",
    },
];
async function main() {
    console.log("Seeding database...");
    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = await prisma.user.upsert({
        where: { email: "admin@example.com" },
        update: { password: hashedPassword },
        create: {
            email: "admin@example.com",
            password: hashedPassword,
            name: "The Editor",
            role: "ADMIN",
        },
    });
    console.log("Admin user ready:", user.email);
    await prisma.movieReview.deleteMany({ where: { authorId: user.id } });
    await prisma.bookReview.deleteMany({ where: { authorId: user.id } });
    console.log("Cleared previous reviews");
    for (const movie of movies) {
        const created = await prisma.movieReview.create({
            data: { ...movie, authorId: user.id },
        });
        console.log("Movie:", created.title, "->", created.posterUrl);
    }
    for (const book of books) {
        const created = await prisma.bookReview.create({
            data: { ...book, authorId: user.id },
        });
        console.log("Book:", created.title, "->", created.coverUrl);
    }
    console.log("\nSeed complete: 6 movies (TMDB CDN) + 6 books (Open Library)");
}
main()
    .then(async () => {
    await prisma.$disconnect();
})
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
});
//# sourceMappingURL=seed.js.map