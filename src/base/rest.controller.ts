import {Get, Post} from '@nestjs/common';
import {CrudService} from './crud.service';
import {BaseEntity} from 'typeorm';

export class RestController<T extends BaseEntity> {
	protected service: CrudService<T>;

	@Get('/')
	public async findAll(): Promise<T[]> {
		return this.service.findAll();
	}

	@Post('/')
	public async create(entity: T): Promise<T> {
		return this.service.create(entity);
	}
}
