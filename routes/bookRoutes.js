const express = require('express');
const router = express.Router();
const { getBooks, addBook } = require('../controllers/bookController');

// GET route to retrieve books
router.get('/books', getBooks);

// POST route to search and add books from Spotify
router.post('/books', addBook);

module.exports = router;
