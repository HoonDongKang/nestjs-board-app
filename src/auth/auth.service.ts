import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { AuthcredentialsDto } from './dto/auth-credential.dto';
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
}
