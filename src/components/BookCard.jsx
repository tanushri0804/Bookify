import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBookToUserList } from "../redux/actions/booksActions";

const BookCard = ({ book }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    const handleAddToMyBooks = () => {
        if(user) {
            dispatch(addBookToUserList(user.uid, book));
        } else {
            alert("Please log in to add books!");
        }
    };
    return (
        <div className="book-card">
            <img src={book.coverImage} alt={book.title} />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <button onClick={handleAddToMyBooks}>Want To Read</button>
        </div>
    );
};

export default BookCard;