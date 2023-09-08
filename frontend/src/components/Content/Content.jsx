import React, { useEffect, useState } from 'react';
import styles from './content.module.css';
import { server } from '../../server';
import Loading from '../Loading/Loading';
import Utils from '../../utils/util';

const Content = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [content, setContent] = useState('');
    const [currentVote, setCurrentVote] = useState('');

    useEffect(() => {
        setIsLoading(true);
        const userId = Utils.getCookie('userId');

        fetch(`${server}/joke?id=${userId ?? ''}`, {
            method: 'GET',
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                const { joke, id } = data;
                setContent(joke);
                if (!userId || userId !== id) {
                    Utils.setCookie('userId', id, 7);
                    Utils.eraseCookie('votes');
                }
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => setIsLoading(false));
    }, []);

    const handleLike = (like) => {
        if (currentVote) {
            alert('You have already voted for this joke!');
            return;
        }
        const userId = Utils.getCookie('userId');
        const votes = Utils.getCookie('votes');
        const dataVote = { idJoke: content._id, like };
        let arrVotes = [dataVote];

        fetch(`${server}/joke/vote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Credentials': true,
            },
            body: JSON.stringify({ ...dataVote, userId }),
            credentials: 'include',
        })
            .then((res) => res.json())
            .then((data) => {
                if (votes) {
                    arrVotes = arrVotes.concat(JSON.parse(votes));
                }
                Utils.setCookie('votes', JSON.stringify(arrVotes), 7);
                setCurrentVote(content._id);
                alert(`${data.message}\nReload the page to read a new joke!`);
            });
    };

    return (
        <div className={`${styles.container} wrapper`}>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div className={styles.content}>
                        {content?.description
                            ? content.description
                            : "That's all the jokes for today! Come back another day!"}
                    </div>
                    <div className={styles.lineGray}></div>
                    <div className={styles.action}>
                        <button
                            className={`${styles.btn} ${styles.btnFun}`}
                            onClick={() => handleLike(true)}
                            disabled={!content}
                        >
                            This is Funny!
                        </button>
                        <button
                            type='button'
                            className={`${styles.btn} ${styles.btnNotFun}`}
                            onClick={() => handleLike(false)}
                            disabled={!content}
                        >
                            This is not Funny.
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Content;
