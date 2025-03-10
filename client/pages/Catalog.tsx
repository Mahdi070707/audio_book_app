import React, { useState } from "react";
import { books, Book } from "../data/books";
import BookCard from "../components/BookCard";
import Modal from "../components/Modal";

const Catalog: React.FC = () => {
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery) ||
      book.author.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container-fluid min-vh-100 d-flex flex-column align-items-center p-4" style={{ background: "linear-gradient(to bottom, var(--navy), var(--dark-gray))" }}>
      <input
        type="text"
        className="form-control mb-4 w-50 text-center border-0 shadow-sm"
        style={{ backgroundColor: "var(--light-gray)", color: "var(--charcoal)", borderRadius: "8px" }}
        placeholder="Search Books..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="row g-4 justify-content-center w-100" style={{ maxWidth: "80%", margin: "0 auto" }}>
        {filteredBooks.map((book, index) => (
          <div key={index} className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-center">
              <BookCard
                title={book.title}
                author={book.author}
                rating={book.rating}
                onClick={() => handleBookClick(book)}
              />
            </div>
        ))}
      </div>
      {selectedBook && (
        <Modal show={isModalOpen} onClose={closeModal} book={selectedBook} />
      )}
    </div>
  );
};

export default Catalog;