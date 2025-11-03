import { Model, Column, Table, PrimaryKey, AutoIncrement, AllowNull, Unique, Length, IsEmail, DataType, ForeignKey, BelongsTo, BelongsToMany } from 'sequelize-typescript';
import { ApoderadoEntity} from '../types/apoderado.type';
import { User, AlumnoApoderado, Alumno } from '../../models';

@Table({
    tableName: 'apoderados'
})
export class Apoderado extends Model<ApoderadoEntity> {
    @PrimaryKey
    @AutoIncrement
    @Column({ field: 'idApoderado' })
    idApoderado!: number;

    @ForeignKey(() => User)
    @AllowNull
    @Column({ field: 'idUser', type: DataType.INTEGER, allowNull: true })
    idUser?: number | null;

    @BelongsTo(() => User)
    user?: User;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({ field: 'nombre', allowNull: false, type: DataType.STRING(50) })
    nombre!: string;

    @Length({
        min: 5,
        max: 50,
    })
    @Column({ field: 'apellido', allowNull: false, type: DataType.STRING(50) })
    apellido!: string;

    @Length({
        min: 8,
        max: 8,
    })
    @Unique('idx_dni_apoderado')
    @Column({ field: 'dni', allowNull: false, unique: true, type: DataType.CHAR(8) })
    dni!: string;

    @IsEmail
    @Column({ field: 'email', allowNull: false, type: DataType.STRING(100) })
    email!: string;

    @Length({
        min: 1,
        max: 100,
    })
    @AllowNull
    @Column({ field: 'direccion', allowNull: true })
    direccion?: string;

    @Length({
        min: 9,
        max: 9,
    })
    @AllowNull
    @Column({ field: 'telefono', allowNull: true, type: DataType.CHAR(9) })
    telefono?: string;

    @BelongsToMany(() => Alumno, () => AlumnoApoderado)
    alumnos?: Alumno[];
}