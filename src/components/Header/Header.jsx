import React, {useContext} from 'react';
import styles from './Header.module.css'
import logo from '../../assets/imgs/logo.svg'
import {Link} from "react-router-dom";
import {PrivateLinks, PublicLinks} from "./index";
import {AuthContext} from "../../hoc/AuthProvider";

const Header = () => {

    const { user: auth } = useContext(AuthContext)

    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to='/' >
                    <img src={logo}/>
                </Link>
            </div>

            <div className={styles.menu}>
                {auth ? PrivateLinks.map((link) =>
                    <p key={link.link} className={styles.menu_link}>
                        <Link to={link.link}>{link.text}</Link>
                    </p>
                )
                    :
                    PublicLinks.map((link) =>
                            <p key={link.link} className={styles.menu_link}>
                                <Link to={link.link}>{link.text}</Link>
                            </p>

                        )
                }
            </div>


        </div>
    );
};

export default Header;
