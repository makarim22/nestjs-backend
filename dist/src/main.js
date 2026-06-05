"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const path_1 = require("path");
const client_1 = require("@prisma/client");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads'), {
        prefix: '/uploads/',
    });
    const prisma = new client_1.PrismaClient();
    await prisma.movieReview.updateMany({
        where: { status: 'PENDING' },
        data: { status: 'APPROVED' }
    });
    await prisma.bookReview.updateMany({
        where: { status: 'PENDING' },
        data: { status: 'APPROVED' }
    });
    await prisma.$disconnect();
    const port = parseInt(process.env.PORT, 10) || 3000;
    await app.listen(port, '0.0.0.0');
    console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
//# sourceMappingURL=main.js.map