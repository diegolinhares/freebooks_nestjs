import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { BorrowingsModule } from '../../src/borrowings/borrowings.module';

@Module({
  imports: [TypeOrmModule.forFeature([User]), BorrowingsModule],
})
export class UsersModule {}
