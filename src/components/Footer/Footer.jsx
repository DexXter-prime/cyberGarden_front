import React from 'react';
import styles from './Footer.module.css';
import logo from '../../assets/imgs/logo.svg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.company}>
                <div className={styles.logo}>

                </div>

                <h1 className={styles.title}>© HaPalm SFEDU ICTIS, 2023</h1>
            </div>

            <div className={styles.contact}>
                <h1 className={styles.contact_text}>
                    Связаться с нами:<br/>
                    bratusev@sfedu.ru<br/>
                    +7 (988) 515 34 20
                </h1>
            </div>
        </div>
    );
};

export default Footer;
