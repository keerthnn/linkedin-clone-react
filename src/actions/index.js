import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";  // Corrected import statement

export function signInAPI() {
    return (dispatch) => {
        // No need to create a new auth instance here
        signInWithPopup(auth, new GoogleAuthProvider())
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
                alert(error.message);
            });
    };
}
