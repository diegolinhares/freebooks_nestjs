import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './books.entity';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.author)
  books: Book[];
}
