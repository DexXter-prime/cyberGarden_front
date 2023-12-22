import React from 'react';
import landing from '../../assets/imgs/landing.png'
import styles from './Landing.module.css'
import teamImg from '../../assets/imgs/img-aboutUs.png'

const Landing = () => {
    return (
        <div className={styles.landing_page}>
            <section className={styles.section__train}>
                <div className={styles.landing__Banner}>
                    <img src={landing} />
                </div>
            </section>
            <section className={styles.section__aboutUs}>
                <div className={styles.aboutUs__Info}>
                    <h2 className={styles.aboutUs}>О нас</h2>
                    <p>HaPalm - это команда молодых и талантливых программистов, которая дебютирует в хакатоне CyberGarden. Участники команды имеют различные навыки в веб разработке и андроид разработке. Они объединились, чтобы выиграть данный хакатон и продемонстрировать свои способности в разработке инновационных проектов в кейсе Евраз.</p>
                </div>
                <div className={styles.team__icon}>
                    <img src={teamImg} />
                </div>
            </section>
        </div>
    );
};

export default Landing;