import { Borrowing } from '../../../src/borrowings/entities/borrowing.entity';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Author } from './authors.entity';
import { Genre } from './genres.entity';

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  title: string;

  @Index({ unique: true })
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
