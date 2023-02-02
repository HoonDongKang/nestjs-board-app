import { CustomRepository } from 'src/db/typeorm-ex.decorator';
import { DataSource, Repository } from 'typeorm';
import { BoardStatus } from './board-status.enum';
import { Board } from './board.entity';
import { createBoardDto } from './dto/create-board.dto';
import { Injectable } from '@nestjs/common';

// @CustomRepository(Board)
// export class BoardRepository extends Repository<Board> {
//   async createBoard(createBoardDto: createBoardDto): Promise<Board> {
//     const { title, description } = createBoardDto;
//     const board = this.create({
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//     });
//     await this.save(board);
//     return board;
//   }
// }

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(private dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }
  async createBoard(createBoardDto: createBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;
    const board = this.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    });
    await this.save(board);
    return board;
  }
}
