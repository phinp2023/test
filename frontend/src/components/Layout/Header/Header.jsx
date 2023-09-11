import React from 'react';
import styles from './header.module.css';
import logo from '../../../images/logo.png';
import avatar from '../../../images/avatar.png';

const Header = () => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={logo} alt='logo' />
            <div className={styles.userContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Handicrafted by</span>
                    <span className={styles.author}>Jim HLS</span>
                </div>
                <img className={styles.image} src={avatar} alt='avatar' />
            </div>
        </div>
    );
};

export default Header;
