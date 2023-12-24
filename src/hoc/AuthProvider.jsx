import React, {useState} from 'react';
import {useLocalStorage} from "../hooks/useLocalStorage";

export const AuthContext = React.createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage(null)


    const logIn = (user, redirect) => {
        setUser(user)
        redirect()
    }

    const logOut = (redirect) => {
        setUser(null)
        redirect()
    }

    return (
        <AuthContext.Provider value={{ user, logOut, logIn}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;