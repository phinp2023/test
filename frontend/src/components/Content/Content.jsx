import React from 'react';
import styles from './content.module.css';

const Content = () => {
    return (
        <div className={`${styles.container} wrapper`}>
            <div className={styles.content}>
                A child asked his father, "How were people born?" So his father
                said, "Adam and Eve made babies, then their babies became adults
                and made babies, and so on." The child then went to his mother,
                asked her the same question and she told him, "We were monkeys
                then we evolved to become like we are now." The child ran back
                to his father and said, "You lied to me!" His father replied,
                "No, your mom was talking about her side of the family."
            </div>
            <div className={styles.lineGray}></div>
            <div className={styles.action}>
                <button className={`${styles.btn} ${styles.btnFun}`}>
                    This is Funny!
                </button>
                <button className={`${styles.btn} ${styles.btnNotFun}`}>
                    This is not Funny.
                </button>
            </div>
        </div>
    );
};

export default Content;
