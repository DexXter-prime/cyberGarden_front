import React from 'react';
import {NavLink} from "react-router-dom";
import cl from './customLink.module.css'

const CustomLink = ({ to, children, ...props}) => {
    return (
        <NavLink to={to} {...props} className={({isActive}) => isActive ? `${cl.activeLink}` :`${cl.notActive}`}>
            {children}
        </NavLink>
    );
};

export default CustomLink;