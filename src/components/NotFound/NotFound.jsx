// component - NotFound page - 404
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
    const navigate = useNavigate();

    return (
        <main>
            <section className={`${styles.notFound} ${styles.notFoundPage}`}>
                <div className={styles.notFoundInfoWrap}>
                    <h1 className={styles.notFoundPageErr}>404</h1>
                    <p className={styles.notFoundPageText}>Такая страница не найдена</p>
                </div>
                <Link onClick={() => navigate(-1)} className={styles.linkBack}>Назад</Link>
            </section>
        </main>
    );
}

export default NotFound;
