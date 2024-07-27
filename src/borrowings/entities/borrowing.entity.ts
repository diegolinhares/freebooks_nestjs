import { User } from '../../../src/users/entities/users.entity';
import { Book } from '../../../src/books/entities/books.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('borrowings')
export class Borrowing {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  borrowedAt: Date;

  @Column({ type: 'timestamp', nullable: false })
  dueDate: Date;

  @Column({ type: 'timestamp', nullable: true })
  returnedAt: Date;

  @ManyToOne(() => User, (user) => user.borrowings)
  user: User;

  @ManyToOne(() => Book, (book) => book.borrowings)
  book: Book;
}
