import {Component, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {UserEntity} from './entity/user.entity';

@Component()
export class UserService {
	constructor(@Inject('UserRepositoryToken') private readonly userRepository: Repository<UserEntity>) {
	}

	async findAll(): Promise<UserEntity[]> {
		return await this.userRepository.find();
	}
}
