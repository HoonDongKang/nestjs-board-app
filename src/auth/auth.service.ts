import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthcredentialsDto } from './dto/auth-credential.dto';
import * as bcrypt from 'bcryptjs';
//
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
  ) {}

  async signUp(authcredentialsDto: AuthcredentialsDto): Promise<void> {
    return this.userRepository.createUser(authcredentialsDto);
  }

  async signIn(authcredentialsDto: AuthcredentialsDto): Promise<string> {
    const { userName, password } = authcredentialsDto;
    const user = await this.userRepository.findOne({ where: { userName } });

    if (user && (await bcrypt.compare(password, user.password))) {
      return 'login success';
    } else {
      throw new UnauthorizedException('login failed');
    }
  }
}
