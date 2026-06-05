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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findOne(email) {
        return this.prisma.user.findUnique({
            where: { email },
        });
    }
    async findById(id) {
        return this.prisma.user.findUnique({
            where: { id },
        });
    }
    async create(data) {
        return this.prisma.user.create({
            data,
        });
    }
    async findAll() {
        return this.prisma.user.findMany();
    }
    async findOrCreateByGoogleId(profile) {
        let user = await this.prisma.user.findFirst({
            where: {
                OR: [
                    { googleId: profile.googleId },
                    { email: profile.email }
                ]
            }
        });
        if (user) {
            if (!user.googleId || !user.avatarUrl) {
                user = await this.prisma.user.update({
                    where: { id: user.id },
                    data: {
                        googleId: profile.googleId,
                        avatarUrl: profile.avatarUrl,
                        name: user.name || profile.name
                    }
                });
            }
            return user;
        }
        const randomPassword = Math.random().toString(36).slice(-10) + Math.random().toString(36).slice(-10);
        return this.prisma.user.create({
            data: {
                email: profile.email,
                googleId: profile.googleId,
                name: profile.name,
                avatarUrl: profile.avatarUrl,
                password: randomPassword,
                role: 'USER'
            }
        });
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            include: {
                savedMovies: {
                    include: { movieReview: true },
                    orderBy: { createdAt: 'desc' }
                },
                savedBooks: {
                    include: { bookReview: true },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });
        if (user) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
    async toggleSavedMovie(userId, movieReviewId) {
        const existing = await this.prisma.savedMovie.findUnique({
            where: { userId_movieReviewId: { userId, movieReviewId } }
        });
        if (existing) {
            await this.prisma.savedMovie.delete({ where: { id: existing.id } });
            return { status: 'removed' };
        }
        else {
            await this.prisma.savedMovie.create({
                data: { userId, movieReviewId }
            });
            return { status: 'added' };
        }
    }
    async toggleSavedBook(userId, bookReviewId) {
        const existing = await this.prisma.savedBook.findUnique({
            where: { userId_bookReviewId: { userId, bookReviewId } }
        });
        if (existing) {
            await this.prisma.savedBook.delete({ where: { id: existing.id } });
            return { status: 'removed' };
        }
        else {
            await this.prisma.savedBook.create({
                data: { userId, bookReviewId }
            });
            return { status: 'added' };
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map