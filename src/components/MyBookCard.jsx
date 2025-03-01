import React from "react";
import { useDispatch } from "react-redux";
import { updateBookStatus, updateBookRating } from "../redux/actions/booksActions";

const MyBookCard = ({ book }) => {
    const dispatch = useDispatch();

    const handleStatusChange = (event) => {
        dispatch(updateBookStatus(book.id, event.target.value));
    };
    const handleRatingChange = (event) => {
        dispatch(updateBookRating(book.id, parseInt(event.target.value)));
    };

    return (
        <div className="book-card">
            <img src={book.coverImage} alt="{book.title}" />
            <h3>{book.title}</h3>
            <p>{book.author}</p>
            <label>status: </label>
            <select value={book.status} onChange={handleStatusChange}>
                <option value="Want To Read">Want to read</option>
                <option value="Currently Reading">Currently Reading</option>
                <option value="Read">Read</option>
            </select>

            <label>Rating:</label>
            <select value={book.rating} onChange={handleRatingChange}>
                {[1, 2, 3, 4, 5].map((num) =>{
                    <option key={num} value={num}>{num}</option>
                })}
            </select>
        </div>
    );
};

export default MyBookCard;