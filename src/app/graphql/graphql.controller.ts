import {All, Controller} from '@nestjs/common';
import {ModuleRef} from '@nestjs/core';
import {OnModuleInit} from '@nestjs/common/interfaces/modules';
import {UserService} from '../users/user.service';

@Controller('/graphql')
export class GraphqlController implements OnModuleInit {

	private service: UserService;

	constructor(private readonly moduleRef: ModuleRef, private readonly userService: UserService) {}

	public onModuleInit() {
		this.service = this.moduleRef.get<UserService>(UserService);
		console.log('Modulre ref:', this.service);
		console.log('Constructor inject:', this.userService);
	}

	@All()
	public index(): void {
		// just for middleware
	}
}
