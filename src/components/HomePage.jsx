import styles from './homePage.module.css';

const HomePage = () => {
    return(
        <main>
            <article>
                <h1 className={styles.h1}>Interactive Call Scripts</h1>
                <p>Interactive call scripts that can be customized and tailored for any business or call types.</p>
            </article>
        </main>
    );
}

export default HomePage;