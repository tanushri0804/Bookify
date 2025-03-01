import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyBooks } from "../redux/actions/booksActions";
import MyBookCard from "../components/MyBookCard";

const MyBooksPage = () => {
    const dispatch = useDispatch();
    const { myBooks } = useSelector((state) => state.books);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user){
            dispatch(fetchMyBooks(user.uid));
        }  
    }, [dispatch, user]);

    return (
        <div>
            <h2>My Books</h2>
            <div className="book-list">
                {myBooks.map((book) => (
                    <MyBookCard key={book.id} book={book} />
                ))}
            </div>
        </div>
    );
};

export default MyBooksPage;