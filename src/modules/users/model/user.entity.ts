import { Model, Column, Table, PrimaryKey, AutoIncrement, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Role } from '../../roles/model/role.model';
import { UserEntity } from '../types/user.type';

@Table({
    tableName: 'users',
})
export class User extends Model<UserEntity> {
    @PrimaryKey
    @AutoIncrement
    @Column({ 
        field: 'idUser',
        allowNull: false,
        type: DataType.INTEGER,
    })
    idUser!: number;

    @Column({
        field: 'email',
        allowNull: false,
        type: DataType.STRING(100),
    })
    email!: string;

    @Column({
        field: 'password',
        allowNull: false,
        type: DataType.TEXT,
    })
    password!: string;

    @ForeignKey(() => Role)
    @Column({ field: 'idRole', type: DataType.INTEGER, allowNull: false })
    idRole!: number;

    @BelongsTo(() => Role)
    role!: Role;
}