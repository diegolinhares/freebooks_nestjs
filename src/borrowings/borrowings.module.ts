import { Module } from '@nestjs/common';
import { BooksModule } from '../../src/books/books.module';

@Module({
  imports: [BooksModule],
})
export class BorrowingsModule {}
