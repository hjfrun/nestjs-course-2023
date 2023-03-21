import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateUserDto } from './dto/create-user.dto'
import { UpdateUserDto } from './dto/update-user.dto'
import { User } from './entity/user.entity'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  getAll() {
    return this.userRepository.find()
  }

  getOne(id: number) {
    return this.userRepository.findOne({ where: { id } })
  }

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto)
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update(id, updateUserDto)
  }

  delete(id: number) {
    return this.userRepository.delete(id)
  }
}
