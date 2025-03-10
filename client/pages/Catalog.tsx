import React, { useState } from "react";
import axios from "axios";
import BookCard from "../components/BookCard";
import BookModal from "../components/Modal";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  spotifyUrl?: string;
}

const Catalog: React.FC = () => {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState<Book[]>([]);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [showModal, setShowModal] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    try {
      const response = await axios.get(`http://localhost:3001/api/books?query=${encodeURIComponent(query)}`);
      console.log("API full response:", response.data);
      setBooks(Array.isArray(response.data) ? response.data : []);
    } catch (error) {
      console.error("API call error:", error);
      setBooks([]);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="container my-4">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search for audiobooks"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyPress} 
          style={{
            backgroundColor: "var(--cream)",
            color: "black",
            border: "1px solid var(--charcoal)",
            padding: "10px",
          }}
        />
      </div>

      <div className="row">
        {Array.isArray(books) && books.length > 0 ? (
          books.map((book) => (
            <div className="col-md-4 mb-3" key={book.id}>
              <BookCard
                title={book.title}
                author={book.author}
                rating={book.rating}
                image={book.image}
                onClick={() => {
                  setSelectedBook(book);
                  setShowModal(true);
                }}
              />
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>

      {selectedBook && (
        <BookModal
          show={showModal}
          onClose={() => setShowModal(false)}
          book={selectedBook}
        />
      )}
    </div>
  );
};

export default Catalog;
