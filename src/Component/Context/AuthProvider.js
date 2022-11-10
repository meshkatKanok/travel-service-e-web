import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, signInWithPopup } from "firebase/auth"
import app from '../firebase/firebase.confiq';
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContex = createContext()
const provider = new GoogleAuthProvider();
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const signup = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
      
    }
    const login = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
      
    }
    const logout=()=>{
        return signOut(auth)
    }
    const GoogleSign=()=>{
        return signInWithPopup(auth,provider)
    }
    useEffect(() => {
        const unScrbscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        })
        return () => {
            return unScrbscribe()
        }
    }, [])

    const authinfo = {
        signup,
        login,
        logout,
        GoogleSign,
        user,
        loading
    }
    return (
        <div>
            <AuthContex.Provider value={authinfo}>
                {children}
            </AuthContex.Provider>
        </div>
    );
};

export default AuthProvider;