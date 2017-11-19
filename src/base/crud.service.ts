import {BaseEntity, Repository} from 'typeorm';

export class CrudService<T extends BaseEntity> {
	protected repository: Repository<T>;

	public async findAll(): Promise<T[]> {
		return await this.repository.find();
	}

	public async create(entity: T): Promise<T> {
		return await entity.save();
	}
}
