import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('books')
export class Books {
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
}
