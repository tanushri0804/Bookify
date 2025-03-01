import { auth } from "../../firebase/firebaseConfig";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";

export const registerUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        dispatch({ type: "REGISTER_USER", payload: userCredential.user });
    } catch (error){
        console.error(error);
    }
};

export const loginUser = (email, password) => async (dispatch) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        dispatch ({ type: "LOGIN_USER", payload: userCredential.user})
    } catch (error) {
        console.error(error);
    }
}
export const logoutUser = () => async (dispatch) => {
    try{
        await signOut(auth);
        dispatch({ type: "LOGOUT_USER" });
    } catch (error) {
        console.error(error);
    }
};