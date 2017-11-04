import {Controller, Get} from '@nestjs/common';
import {UserService} from './user.service';
import {UserEntity} from './entity/user.entity';


@Controller('/users')
export class UsersController {

	constructor(private userService: UserService) {
	}

	@Get('/')
	async findAll(): Promise<UserEntity[]> {
		return this.userService.findAll();
	}
}