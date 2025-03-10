import express from 'express';
import { searchAudiobooks } from '../services/spotifyService.js';

const router = express.Router();

router.get('/books', async (req, res) => {
    try {
        const { query } = req.query;
        if (!query) {
            return res.status(400).json({ message: 'Query parameter is required' });
        }
        const books = await searchAudiobooks(query);
        const formattedBooks = books.map(book => ({
            id: book.id,
            title: book.name,
            author: book.authors?.[0]?.name || 'Unknown Author',
            image: book.images?.[0]?.url || '',
            rating: Math.floor(Math.random() * 5) + 1,
            spotifyUrl: book.external_urls?.spotify || null, 
        }));
        res.json(formattedBooks);
    } catch (error) {
        console.error('Spotify API Error:', error);
        res.status(500).json({ message: 'Server error fetching books' });
    }
});

export default router;
