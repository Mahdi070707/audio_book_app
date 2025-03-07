import React from "react";
import { renderStars } from "../utils";

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  onClick?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  rating,
  onClick,
}) => (
  <div
    className="card bg-dark text-light"
    style={{ width: "18rem" }}
    onClick={onClick}
  >
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{author}</p>
      <div>{renderStars(rating)}</div>
    </div>
  </div>
);

export default BookCard;
