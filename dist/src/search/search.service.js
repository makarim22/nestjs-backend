"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let SearchService = class SearchService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async globalSearch(query) {
        if (!query || query.trim().length === 0) {
            return [];
        }
        const searchStr = query.trim();
        const [movies, books] = await Promise.all([
            this.prisma.movieReview.findMany({
                where: {
                    OR: [
                        { title: { contains: searchStr } },
                        { director: { contains: searchStr } },
                    ],
                },
                take: 5,
                select: { id: true, title: true, director: true, posterUrl: true }
            }),
            this.prisma.bookReview.findMany({
                where: {
                    OR: [
                        { title: { contains: searchStr } },
                        { author: { contains: searchStr } },
                    ],
                },
                take: 5,
                select: { id: true, title: true, author: true, coverUrl: true }
            })
        ]);
        const formattedMovies = movies.map(m => ({
            type: 'movies',
            id: m.id,
            title: m.title,
            creator: m.director,
            image: m.posterUrl
        }));
        const formattedBooks = books.map(b => ({
            type: 'books',
            id: b.id,
            title: b.title,
            creator: b.author,
            image: b.coverUrl
        }));
        return [...formattedMovies, ...formattedBooks];
    }
};
exports.SearchService = SearchService;
exports.SearchService = SearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SearchService);
//# sourceMappingURL=search.service.js.map