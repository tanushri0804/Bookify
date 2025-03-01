import React from "react";
import { link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/actions/authActions";

const Navbar  = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);

    return (
        <nav>
            <h1>My Library</h1>
            <ul>
            <li><link to="">Home</link></li>
            {user ? (
                <>
                <li><link to="/my-books">My Books</link></li>
                <li>{user.email}</li>
                <li><button onClick={() => dispatch(logout())}>Logout</button></li>
                </>
            ) : (
                <li><link to="/login">Login/Register</link></li>
            )}
            </ul>
        </nav>
    )
}

export default Navbar;