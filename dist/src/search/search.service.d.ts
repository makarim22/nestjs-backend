import { PrismaService } from '../prisma/prisma.service';
export declare class SearchService {
    private prisma;
    constructor(prisma: PrismaService);
    globalSearch(query: string): Promise<{
        type: string;
        id: string;
        title: string;
        creator: string;
        image: string | null;
    }[]>;
}
