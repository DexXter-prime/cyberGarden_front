import React from 'react';
import styles from './Header.module.css'
import logo from '../../assets/imgs/logo.svg'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <Link to='/' >
                    <img src={logo}/>
                </Link>
            </div>

            <div className={styles.menu}>
                <p className={styles.menu_link}>
                    <Link to="/">Лендос</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/main">Первая</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/second">Вторая</Link>
                </p>
            </div>
        </div>
    );
};

export default Header;