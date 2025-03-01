import { db } from "../../firebase/firebaseConfig";
import { ref, get, set, update } from "firebase/database";

//fetch books

export const fetchBooks = () => async (dispatch) => {
    try {
        const snapshot = await get(ref(db, "books"));
        dispatch({ type: "FETCH_BOOKS_SUCCESS" , payload: snapshot.val() });
    } catch (error) {
        console.error(error);
    }
};

//Add book to MyBooks

export const addBookToMyBooks = (userId, book) => async (dispatch) => {
    try {
        await set(ref(db, `users/${userId}/myBooks/${book.id}`), book);
        dispatch({ type: "ADD_BOOK_TO_MY_BOOKS", payload: book})
    } catch (error){
        console.error(error);
    }
};