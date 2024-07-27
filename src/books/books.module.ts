import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Author } from './entities/authors.entity';
import { Genre } from './entities/genres.entity';
import { Book } from './entities/books.entity';

@Module({ imports: [TypeOrmModule.forFeature([Author, Genre, Book])] })
export class BooksModule {}
