import { Table, Column, Model, PrimaryKey, AutoIncrement, AllowNull, Unique, Length, IsEmail, DataType, ForeignKey, BelongsToMany, BelongsTo } from 'sequelize-typescript';
import { DocenteEntity } from '../types/docente.type';
import { User } from '../../models';

@Table({
    tableName: 'docentes',
})
export class Docente extends Model<DocenteEntity> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'idDocente' })
    idDocente!: number;

    @ForeignKey(() => User)
    @AllowNull
    @Column({ field: 'isUser', type: DataType.INTEGER, allowNull: true })
    idUser?: number | null;

    @BelongsTo(() => User)
    user?: User;

    @Column({
        field: 'nombre',
        allowNull: false,
        type: DataType.STRING(50),
    })
    nombre!: string;

    @Column({
        field: 'apellido',
        allowNull: false,
        type: DataType.STRING(50),
    })
    apellido!: string;

    @Length({
        min: 8,
        max: 8,
    })
    @Unique
    @Column({
        field: 'dni',
        allowNull: false,
        unique: true,
        type: DataType.CHAR(8),
    })
    dni!: string;

    @IsEmail
    @Column({
        field: 'email',
        allowNull: false,
        type: DataType.STRING(100),
    })
    email!: string;

    @Length({
        min: 1,
        max: 100,
    })
    @AllowNull
    @Column({
        field: 'direccion',
        allowNull: true,
    })
    direccion?: string;

    @Length({
        min: 9,
        max: 9,
    })
    @AllowNull
    @Column({
        field: 'telefono',
        allowNull: true,
        type: DataType.CHAR(9),
    })
    telefono?: string;

    @AllowNull
    @Column({
        field: 'fecha_nacimiento',
        type: DataType.DATE,
        allowNull: true,
    })
    fechaNacimiento?: Date;

    @AllowNull
    @Column({
        field: 'fecha_ingreso',
        type: DataType.DATE,
        allowNull: true,
    })
    fechaIngreso?: Date;
}