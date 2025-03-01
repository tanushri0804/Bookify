import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBooks } from "../redux/actions/booksActions";
import BookCard from "../components/BookCard";

const Home = () => {
    const dispatch = useDispatch();
    const { books, loading } = useSelector((state) => state.book);

    useEffect(() => {
        dispatch(fetchBooks());
    }, [dispatch]);
    return(
        <div>
            <h2>Available Books</h2>
            {loading ? (
                <p>Loading Books....</p>
            ) : (
                <div className="book-list">
                    {books.map((book) => (
                        <BookCard key={book.id} book={book}/>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;