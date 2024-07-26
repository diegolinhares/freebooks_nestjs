import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
import { NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create_user.dto';
import { UpdateUserDto } from './dto/update_user.dto';

export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  findAll() {
    return this.userRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return user;
  }

  create(createUserDto: CreateUserDto) {
    const user = this.userRepository.create(createUserDto);

    return this.userRepository.save(user);
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id: +id,
      ...updateUserDto,
    });

    if (!user) {
      throw new NotFoundException(`User #${id} not found`);
    }

    return this.userRepository.save(user);
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne({ where: { id } });

    return this.userRepository.remove(user);
  }
}
