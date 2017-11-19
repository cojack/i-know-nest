import {All, Controller} from '@nestjs/common';
import {ModuleRef} from '@nestjs/core';
import {OnModuleInit} from '@nestjs/common/interfaces/modules';
import {UserEntity} from '../users/entity/user.entity';
import {USER_REPO_TOKEN} from '../users/users.constant';

@Controller('/graphql')
export class GraphqlController implements OnModuleInit {

	private service: UserEntity;

	constructor(private readonly moduleRef: ModuleRef) {}

	public onModuleInit() {
		this.service = this.moduleRef.get<UserEntity>(USER_REPO_TOKEN);
	}

	@All()
	public index(): void {
		// just for middleware
	}
}
