import { UsersService } from './users.service';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    getProfile(req: any): Promise<{
        id: string;
        email: string;
        name: string | null;
        role: string;
        createdAt: Date;
        updatedAt: Date;
    } | null>;
    toggleSavedMovie(req: any, id: string): Promise<{
        status: string;
    }>;
    toggleSavedBook(req: any, id: string): Promise<{
        status: string;
    }>;
}
