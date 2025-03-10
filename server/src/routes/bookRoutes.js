import express from 'express';
import { addBook } from '../controllers/bookControllers.js';
const router = express.Router();
// GET route to retrieve books
// router.get('/books', getBooks);
// POST route to search and add books from Spotify
router.post('/books', addBook);
export default router;
