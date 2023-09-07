import React from 'react';
import styles from './banner.module.css';

const Banner = () => {
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                A joke a day keeps the doctor away
            </div>
            <div className={styles.desc}>
                If you joke wrong way, your teeth have to pay. (Serious)
            </div>
        </div>
    );
};

export default Banner;
