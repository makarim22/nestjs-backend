"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const prisma_module_1 = require("./prisma/prisma.module");
const users_module_1 = require("./users/users.module");
const auth_module_1 = require("./auth/auth.module");
const posts_module_1 = require("./posts/posts.module");
const webhooks_module_1 = require("./webhooks/webhooks.module");
const uploads_module_1 = require("./uploads/uploads.module");
const movies_module_1 = require("./movies/movies.module");
const books_module_1 = require("./books/books.module");
const scheduler_module_1 = require("./scheduler/scheduler.module");
const schedule_1 = require("@nestjs/schedule");
const comments_module_1 = require("./comments/comments.module");
const search_module_1 = require("./search/search.module");
const recommendations_module_1 = require("./recommendations/recommendations.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [prisma_module_1.PrismaModule, users_module_1.UsersModule, auth_module_1.AuthModule, posts_module_1.PostsModule, webhooks_module_1.WebhooksModule, uploads_module_1.UploadsModule, movies_module_1.MoviesModule, books_module_1.BooksModule, scheduler_module_1.SchedulerModule, schedule_1.ScheduleModule.forRoot(), comments_module_1.CommentsModule, search_module_1.SearchModule, recommendations_module_1.RecommendationsModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map