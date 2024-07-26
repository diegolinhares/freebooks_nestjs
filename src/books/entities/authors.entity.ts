import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('authors')
export class Author {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({ nullable: false })
  name: string;
}
