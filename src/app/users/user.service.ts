import {Component, Inject} from '@nestjs/common';
import {Repository} from 'typeorm';
import {UserEntity} from './entity/user.entity';
import {CrudService} from '../../base/crud.service';

@Component()
export class UserService extends CrudService<UserEntity> {
	constructor(@Inject('UserRepositoryToken') protected repository: Repository<UserEntity>) {
		super();
	}
}
