import React from "react";
import { renderStars } from "../../client/utils";

interface BookCardProps {
  title: string;
  author: string;
  rating: number;
  image: string;
  onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, rating, image, onClick }) => (
  <div className="card bg-dark text-light" style={{ width: "18rem", cursor: "pointer" }} onClick={onClick}>
    <img src={image} className="card-img-top" alt={`${title} cover`} />
    <div className="card-body">
      <h5 className="card-title text-truncate" style={{ maxWidth: "100%" }} title={title}>
        {title}
      </h5>
      <p className="card-text">{author}</p>
      <div>{renderStars(rating)}</div>
    </div>
  </div>
);

export default BookCard;
