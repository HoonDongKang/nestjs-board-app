import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Board } from 'src/boards/board.entity';
import { BoardRepository } from 'src/boards/board.repository';
// export const typeORMConfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'postgres',
//   database: 'board-app',
//   entities: [__dirname + '../**/*.entity.{js,ts}'],
//   synchronize: true,
// };
export const typeORMConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'rkdehdgns0824@!',
  database: 'board-app',
  entities: [Board],
  synchronize: true,
};
