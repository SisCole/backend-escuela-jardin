import { Model, Column, Table, PrimaryKey, ForeignKey, BelongsTo} from 'sequelize-typescript';
import { Alumno, Apoderado } from '../../models';

@Table({
    tableName: 'alumno_apoderados',
})
export class AlumnoApoderado extends Model {
    @PrimaryKey
    @ForeignKey(() => Alumno)
    @Column({ field: 'idAlumno' })
    idAlumno!: number;

    @PrimaryKey
    @ForeignKey(() => Apoderado)
    @Column({ field: 'idApoderado' })
    idApoderado!: number;

    @BelongsTo(() => Alumno)
    alumno!: Alumno;

    @BelongsTo(() => Apoderado)
    apoderado!: Apoderado;  
}