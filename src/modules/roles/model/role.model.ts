import { Model, Column, Table, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { User } from '../../users/model/user.entity';

@Table({
    tableName: 'roles',
})
export class Role extends Model {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'idRole' })
    idRole!: number;

    @Column({ field: 'name' })
    name!: string;

    @Column({ field: 'description' })
    description!: string;
    
    @HasMany(() => User)
    users!: User[];
}