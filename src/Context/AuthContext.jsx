import PropTypes from "prop-types";
import auth from "../Firebase/Firebase";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toast } from "react-toastify";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const socialAuth = (provider) => {
        setLoading(true);
        return signInWithPopup(auth, provider)
            .then(() => {
                // sign up/sign in successful
            })
            .catch((error) => {
                if (error.code === "auth/account-exists-with-different-credential") {
                    return toast.error("User already exists!");
                }
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

    const updateUserProfile = (updateData) => {
        return updateProfile(auth.currentUser, updateData)
    }

    const resetEmail = (email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const authAllData = {
        socialAuth,
        createUser,
        signInUser,
        signOutUser,
        resetEmail,
        emailVerification,
        updateUserProfile,
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