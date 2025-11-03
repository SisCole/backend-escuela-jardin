import { Request } from 'express';

export interface AlumnoRequest extends Request {
    body: Omit<AlumnoEntity, 'idAlumno'>;

    params: {
        id: string;
    }
}

export interface AlumnoEntity {
    idAlumno?: number;
    nombre: string;
    apellido: string;
    dni?: string;
    fechaNacimiento: Date;
    genero?: 'M' | 'F';
    direccion?: string;
    telefonoEmergencia?: string;
    informacionMedica?: string;
}
