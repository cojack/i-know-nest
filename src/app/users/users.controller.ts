import {Controller, Get, HttpCode, Post} from '@nestjs/common';
import {UserService} from './user.service';
import {RestController} from '../../base/rest.controller';
import {UserEntity} from './entity/user.entity';

@Controller('/users')
export class UsersController extends RestController<UserEntity> {

	constructor(protected service: UserService) {
		super();
	}
}
