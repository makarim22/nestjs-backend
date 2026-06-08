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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const notifications_service_1 = require("../notifications/notifications.service");
let CommentsService = class CommentsService {
    prisma;
    notifications;
    constructor(prisma, notifications) {
        this.prisma = prisma;
        this.notifications = notifications;
    }
    async create(data) {
        const comment = await this.prisma.comment.create({ data });
        if (data.movieReviewId) {
            const review = await this.prisma.movieReview.findUnique({ where: { id: data.movieReviewId } });
            if (review) {
                await this.notifications.createNotification({
                    userId: review.authorId,
                    type: 'COMMENT',
                    message: `${data.authorName || 'Someone'} commented on your review of ${review.title}`,
                    link: `/review/movies/${review.id}`
                });
            }
        }
        else if (data.bookReviewId) {
            const review = await this.prisma.bookReview.findUnique({ where: { id: data.bookReviewId } });
            if (review) {
                await this.notifications.createNotification({
                    userId: review.authorId,
                    type: 'COMMENT',
                    message: `${data.authorName || 'Someone'} commented on your review of ${review.title}`,
                    link: `/review/books/${review.id}`
                });
            }
        }
        return comment;
    }
    async findAllByMovie(movieId) {
        return this.prisma.comment.findMany({
            where: { movieReviewId: movieId },
            orderBy: { createdAt: 'desc' }
        });
    }
    async findAllByBook(bookId) {
        return this.prisma.comment.findMany({
            where: { bookReviewId: bookId },
            orderBy: { createdAt: 'desc' }
        });
    }
};
exports.CommentsService = CommentsService;
exports.CommentsService = CommentsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        notifications_service_1.NotificationsService])
], CommentsService);
//# sourceMappingURL=comments.service.js.map