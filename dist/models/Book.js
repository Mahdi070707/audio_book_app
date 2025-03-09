import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
class Book extends Model {
}
Book.init({
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
        type: DataTypes.STRING, // ✅ Add spotifyUrl here
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
}, {
    sequelize,
    timestamps: false,
    underscored: true,
    freezeTableName: true,
});
export default Book;
