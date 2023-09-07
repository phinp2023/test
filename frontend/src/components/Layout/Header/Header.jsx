import React from 'react';
import styles from './header.module.css';

const Header = () => {
    return (
        <div className={`${styles.container} wrapper`}>
            <div className={styles.logoContainer}>
                <img
                    className={styles.logo}
                    src='https://upload.wikimedia.org/wikipedia/vi/9/9d/Logo_Al-Nassr.png'
                    alt='logo'
                />
            </div>
            <div className={styles.userContainer}>
                <div className={styles.textContainer}>
                    <span className={styles.text}>Handicrafted by</span>
                    <span className={styles.author}>Jim HLS</span>
                </div>
                <div className={styles.avatarContainer}>
                    <img
                        className={styles.avatar}
                        src='https://i.pinimg.com/736x/30/28/05/3028054903f9b9e7a415f7c44fea0bf3.jpg'
                        alt='avatar'
                    />
                </div>
            </div>
        </div>
    );
};

export default Header;
