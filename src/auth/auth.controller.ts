import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthcredentialsDto } from './dto/auth-credential.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() authcredentialsDto: AuthcredentialsDto): Promise<void> {
    return this.authService.signUp(authcredentialsDto);
  }
}
