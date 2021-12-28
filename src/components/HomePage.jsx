import styles from './homePage.module.css';

const HomePage = () => {
    return(
        <main>
            <article className={styles.homeContainer}>
                <h1 className={styles.h1}>Interactive Call Scripts</h1>
                <h2 className={styles.h2}>Scripts</h2>
                <p className={styles.p}>Call scripts that can be tailored to fit any business and any type of call.</p>
                <p className={styles.p}><b>Inbound Calls:</b> Common usages are sales and support.</p>
                <p className={styles.p}><b>Outbound Calls:</b> Common usages are sales, birthdays, thank yous and appointment remainders.</p>
                <h2 className={styles.h2}>Editor</h2>
                <p className={styles.p}>Here you can edit and save your call scripts.  The editor supports basic HTML to help enhance your scripts visibility and readability.</p>
                <h2 className={styles.h2}>Dashboard</h2>
                <p className={styles.p}>Your dashboard is your central hub to edit, add and remove users of your application.</p>
            </article>
        </main>
    );
}

export default HomePage;