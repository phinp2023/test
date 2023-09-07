import React, { useEffect, useState } from 'react';
import styles from './content.module.css';

const Content = () => {
    const [content, setContent] = useState('');
    const [currentVote, setCurrentVote] = useState('');

    useEffect(() => {
        fetch('http://localhost:8080/api/v2/joke', {
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => setContent(data.joke));
    }, []);

    const handleVote = (vote) => {
        if (currentVote) {
            alert('You have already voted for this joke!');
            return;
        }

        fetch('http://localhost:8080/api/v2/joke/vote', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                vote,
                currentVote: content._id,
            }),
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                setCurrentVote(content._id);
                alert(`${data.message}\nReload the page to read a new joke!`);
            });
    };
    
    return (
        <div className={`${styles.container} wrapper`}>
            <div className={styles.content}>
                {content?.description
                    ? content.description
                    : "That's all the jokes for today! Come back another day!"}
            </div>
            <div className={styles.lineGray}></div>
            <div className={styles.action}>
                <button
                    className={`${styles.btn} ${styles.btnFun}`}
                    onClick={() => handleVote(true)}
                    disabled={!content}
                >
                    This is Funny!
                </button>
                <button
                    type='button'
                    className={`${styles.btn} ${styles.btnNotFun}`}
                    onClick={() => handleVote(false)}
                    disabled={!content}
                >
                    This is not Funny.
                </button>
            </div>
        </div>
    );
};

export default Content;
