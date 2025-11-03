import { Router } from 'express';
import { getAlumnoById, getAlumnos, createAlumno, updateAlumno, deleteAlumno } from './alumno.controller';
import { validateAlumnoBody, validateAlumnoParams } from './middlewares/alumno.middleware';

const router = Router();

router.get('/:id', validateAlumnoParams, getAlumnoById);
router.get('/', getAlumnos);
router.post('/', validateAlumnoBody , createAlumno);
router.put('/:id',validateAlumnoParams, validateAlumnoBody, updateAlumno);
router.delete('/:id', validateAlumnoParams, deleteAlumno);

export default router;