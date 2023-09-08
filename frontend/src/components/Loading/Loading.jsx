import React from 'react';
import styles from './loading.module.css';
import { ThreeDots } from 'react-loader-spinner';

const Loading = () => {
    return (
        <div className={styles.container}>
            <ThreeDots
                height='80'
                width='80'
                radius='9'
                color='#4fa94d'
                ariaLabel='three-dots-loading'
                wrapperStyle={{}}
                wrapperClassName=''
                visible={true}
            />
        </div>
    );
};

export default Loading;
