import React, {useContext, useEffect} from 'react';
import {Navigate, useNavigate} from "react-router-dom";
import {AuthContext} from "../hoc/AuthProvider";

const LogOut = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        logOut(() => navigate('/login', {replace: true}))
    }, [])

    return (
        <Navigate to='/login' replace />
    );
};

export default LogOut;