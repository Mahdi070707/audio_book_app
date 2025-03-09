import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../config/database.js';

// Define the Book attributes interface
interface BookAttributes {
  book_id: number;
  title: string;
  author: string;
  genre: string;
  spotifyUrl:string;
  isbn: string;
  pages: number;
  edition: number;
  is_paperback: boolean;
}

// Define the Book creation attributes interface (optional fields for creation)
interface BookCreationAttributes extends Optional<BookAttributes, 'book_id'> {}

class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  book_id!: number;
  title!: string;
  author!: string;
  genre!: string;
  spotifyUrl!:string;
  isbn!: string;
  pages!: number;
  edition!: number;
  is_paperback!: boolean;
}

Book.init(
  {
    book_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    author: {
      type: DataTypes.STRING,
    },
    genre: {
      type: DataTypes.STRING,
    },
    spotifyUrl: {
      type: DataTypes.STRING,  // ✅ Add spotifyUrl here
      allowNull: true,
    },
    isbn: {
      type: DataTypes.STRING,
    },
    pages: {
      type: DataTypes.INTEGER,
    },
    edition: {
      type: DataTypes.INTEGER,
    },
    is_paperback: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
  }
);

export default Book;
