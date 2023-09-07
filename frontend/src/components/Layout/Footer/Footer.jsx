import React from 'react';
import styles from './footer.module.css';
const Footer = () => {
    return (
        <>
            <div className={styles.lineDark}></div>
            <div className={`${styles.container} wrapper`}>
                <div className={styles.containerContent}>
                    <p className={styles.desc}>
                        This website is created as part of Hlsolutions program.
                        The marterials contained on this website are provided
                        for general information only and do not constitute any
                        form of advice. HLS assumes no responsibility for
                        accuracy of any particular statement and accepts no
                        liability for any loss of damage which may arise from
                        relience on the information contained on this site
                    </p>
                    <p className={styles.copyright}>Copyright 2021 HLS</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
