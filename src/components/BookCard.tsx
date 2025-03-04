import React from 'react';
import { renderStars } from '../utils'; 

interface BookCardProps {
    title: string;
    author: string;
    rating: number;
    onClick: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ title, author, rating, onClick }) => {
    return (
        <div onClick={onClick} className="card" style={{ width: '18rem', cursor: 'pointer' }}>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className="card-text">{author}</p>
                <div>{renderStars(rating)}</div>
            </div>
        </div>
    );
};

export default BookCard;
