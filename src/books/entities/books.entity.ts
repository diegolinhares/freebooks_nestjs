import { Borrowing } from '../../../src/borrowings/entities/borrowing.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './authors.entity';
import { Genre } from './genres.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  title: string;

  @Column({ nullable: false })
  isbn: string;

  @Column({ nullable: false, default: 0 })
  totalCopies: number;

  @Column({ nullable: false, default: 0 })
  availableCopies: number;

  @ManyToOne(() => Author, (author) => author.books)
  author: Author;

  @ManyToOne(() => Genre, (genre) => genre.books)
  genre: Genre;

  @OneToMany(() => Borrowing, (borrowing) => borrowing.book)
  borrowings: Borrowing[];
}
