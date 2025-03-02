const Book = require('../models/Book');
const { searchAudiobooks } = require('../services/spotifyService');

// GET handler for retrieving books from the database or searching Spotify
const getBooks = async (req, res) => {
  try {
    const books = await Book.findAll();
    res.json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving books', error: err });
  }
};

// POST handler to add a book by fetching data from Spotify
const addBook = async (req, res) => {
  try {
    const { query } = req.body;  // Expecting a query string (e.g., audiobook title, genre)
    const spotifyBooks = await searchAudiobooks(query);
    
    // Process the data and save it to the database
    const addedBooks = [];
    for (const spotifyBook of spotifyBooks) {
      const newBook = await Book.create({
        title: spotifyBook.name,
        author: spotifyBook.artists.map(artist => artist.name).join(', '),
        genre: spotifyBook.genres ? spotifyBook.genres.join(', ') : 'Unknown',
        spotifyUrl: spotifyBook.external_urls.spotify,
      });
      addedBooks.push(newBook);
    }

    res.status(201).json(addedBooks);
  } catch (err) {
    res.status(500).json({ message: 'Error adding book', error: err });
  }
};

module.exports = { getBooks, addBook };
