import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthcredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(
    @Body(ValidationPipe) authcredentialsDto: AuthcredentialsDto,
  ): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }

  @Post('/signin')
  signIn(
    @Body(ValidationPipe) authcredentialsDto: AuthcredentialsDto,
  ): Promise<string> {
    return this.authService.signIn(authcredentialsDto);
  }
}
