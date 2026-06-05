import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(body: any): Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        email: string;
        googleId: string | null;
        password: string | null;
        avatarUrl: string | null;
        name: string | null;
        role: string;
    }>;
    login(body: any): Promise<{
        access_token: string;
    }>;
    googleAuth(req: any): Promise<void>;
    private readonly logger;
    googleAuthRedirect(req: any, res: any): Promise<void>;
}
