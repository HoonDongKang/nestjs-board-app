import { Injectable } from '@nestjs/common';
import { Repository, DataSource } from 'typeorm';
import { User } from './user.entity';
import { AuthcredentialsDto } from './dto/auth-credential.dto';

@Injectable()
export class UserRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(authCredentialsDto: AuthcredentialsDto): Promise<void> {
    const { userName, password } = authCredentialsDto;
    const user = this.create({ userName, password });
    await this.save(user);
  }
}
