import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from 'typeorm';

@Entity()
export class RoleEntity extends BaseEntity {

	@PrimaryGeneratedColumn()
	public id: number;

	@Column()
	public name: string;
}
