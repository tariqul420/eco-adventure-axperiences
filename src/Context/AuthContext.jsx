import PropTypes from "prop-types";
import auth from "../Firebase/Firebase";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    console.log(user);

    const socialAuth = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error.code);
            })
    };

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser.emailVerified);
                if (currentUser.emailVerified) {
                    setUser(currentUser);
                } else {
                    setUser(null);
                }
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => {
            unSubscribe();
        };

    }, []);

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const resetEmail = (email) => {
        sendPasswordResetEmail(auth, email)
    }

    const authAllData = {
        socialAuth,
        createUser,
        signInUser,
        signOutUser,
        resetEmail,
        emailVerification,
        user,
        loading
    }

    return (
        <AuthContext.Provider value={authAllData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.array
}

export default AuthProvider;