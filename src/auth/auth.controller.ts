import { Controller, Post, Body, UseGuards, Request, HttpCode, HttpStatus, UnauthorizedException, Get, Res } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signup(@Body() body: any) {
    return this.authService.signup(body);
  }

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async login(@Body() body: any) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }
    return this.authService.login(user);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Request() req: any) {
    // Initiates the Google OAuth2 login flow
  }

  @Get('google/redirect')
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Request() req: any, @Res() res: any) {
    // Generate JWT token and redirect to frontend
    const result = await this.authService.login((req as any).user);
    const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
    // Redirect to frontend auth callback route
    res.redirect(`${frontendUrl}/auth/callback?token=${result.access_token}`);
  }
}
