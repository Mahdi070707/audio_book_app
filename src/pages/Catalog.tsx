import React, { useState } from 'react';
import { books, Book } from '../data/books'; 
import BookCard from '../components/BookCard';
import Modal from '../components/Modal';

const Catalog: React.FC = () => {
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isModalOpen, setModalOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const handleBookClick = (book: Book) => {
        setSelectedBook(book);
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value.toLowerCase());
    };

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchQuery) || book.author.toLowerCase().includes(searchQuery)
    );

    return (
        <div className="container mt-4">
            <input
                type="text"
                className="form-control mb-4"
                placeholder="Search Books..."
                value={searchQuery}
                onChange={handleSearchChange}
            />
            <div className="d-flex flex-wrap justify-content-center">
                {filteredBooks.map((book, index) => (
                    <BookCard
                        key={index}
                        title={book.title}
                        author={book.author}
                        rating={book.rating}
                        onClick={() => handleBookClick(book)}
                    />
                ))}
            </div>
            {selectedBook && (
                <Modal
                    show={isModalOpen}
                    onClose={closeModal}
                    book={selectedBook}
                />
            )}
        </div>
    );
};

export default Catalog;
