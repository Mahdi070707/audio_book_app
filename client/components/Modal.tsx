import React from "react";
import { Modal } from "react-bootstrap";
import { renderStars } from "../utils";

interface Book {
  id: string;
  title: string;
  author: string;
  image: string;
  rating: number;
  spotifyUrl?: string;
}

interface ModalProps {
  show: boolean;
  onClose: () => void;
  book: Book;
}

const BookModal: React.FC<ModalProps> = ({ show, onClose, book }) => {
  if (!show || !book) return null;

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Header closeButton style={{ backgroundColor: "#29465B" }}>
        <Modal.Title style={{ color: "var(--cream)" }}>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ backgroundColor: "#29465B", color: "var(--cream)" }}>
        <img src={book.image} alt={book.title} className="img-fluid mb-3" />
        <h5 style={{ color: "var(--cream)" }}>{book.author}</h5>
        <div>{renderStars(book.rating)}</div>

        {book.spotifyUrl ? (
          <div className="mt-3 text-center">
            <iframe
              src={book.spotifyUrl.replace("open.spotify.com/", "open.spotify.com/embed/")}
              width="100%"
              height="100" 
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </div>
        ) : (
          <p className="mt-3" style={{ color: "var(--cream)" }}>
            No preview available.
          </p>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
