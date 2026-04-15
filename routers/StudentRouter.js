import * as StudentController from '../controllers/StudentController.js';
import express from 'express';

const studentRoutes = express.Router();

studentRoutes.get('/all', StudentController.fetchStudents);
studentRoutes.post('/new', StudentController.createStudnts);
studentRoutes.delete('/delete/:studentId',StudentController.deleteStudent);
studentRoutes.put('/edit/:studentId',StudentController.editStudent);

export default studentRoutes;
