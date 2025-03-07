import React from "react";
import { renderStars } from "../utils";
import { Modal } from "react-bootstrap";

interface Book {
  title: string;
  author: string;
  imageUrl: string;
  rating: number;
  review?: string;
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
      <Modal.Header closeButton>
        <Modal.Title>{book.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={book.imageUrl} alt={book.title} className="img-fluid mb-3" />
        <h5>{book.author}</h5>
        {book.review && <p>{book.review}</p>}
        <div>{renderStars(book.rating)}</div>
      </Modal.Body>
    </Modal>
  );
};

export default BookModal;
