import React, {useContext} from 'react';
import {Navigate, useLocation} from "react-router-dom";
import {AuthContext} from "./AuthProvider";

const RequireAuth = ({ children }) => {
    const { user: auth } = useContext(AuthContext)

    if (!auth) {
        return <Navigate to='/login' />
    }


    return (
        <>
            {children}
        </>
    );
};

export default RequireAuth;