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
                    <Link to="/operations">Отображение операций</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/trains">Поезда</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/registration">Регистрация операций</Link>
                </p>
                <p className={styles.menu_link}>
                    <Link to="/login">Логин</Link>
                </p>
            </div>
        </div>
    );
};

export default Header;
