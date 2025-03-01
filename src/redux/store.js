import { configureStore } from "reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import bookReducer from "./reducers/bookReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        books: bookReducer,
    },
});

export default store;