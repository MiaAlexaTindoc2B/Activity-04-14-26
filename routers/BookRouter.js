import * as BookController from '../controllers/BookController.js';
import checkToken from '../middleware/authenticationHandler.js';
import express from 'express';

const bookRoutes = express.Router();

bookRoutes.use(checkToken);
bookRoutes.get('/all/', BookController.fetchBooks);
bookRoutes.post('/new', BookController.createBook);
bookRoutes.delete('/delete/:bookId', BookController.deleteBooks);
bookRoutes.put('/edit/:bookId',BookController.editBooks);
export default bookRoutes;
