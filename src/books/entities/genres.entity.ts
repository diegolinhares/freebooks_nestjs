import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './books.entity';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;

  @OneToMany(() => Book, (book) => book.genre)
  books: Book[];
}
