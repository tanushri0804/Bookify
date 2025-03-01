const initialState = {
    books: [],
    myBooks: [],
};

const bookReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case "FETCH_BOOKS_SUCCESS":
            return { ...state, books: Object.values(action.payload) };
        case "ADD_BOOKS_TO_MY_BOOKS":
            return { ...state, myBooks: [...state.myBooks, action.payload] };
        default:
            return state;
    }
};

export default bookReducer;