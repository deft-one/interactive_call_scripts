import styles from './scriptsloading.module.css';

const ScriptsLoading = () => {
    return(
        <div className={styles.loadingContainer}>
            <p className={styles.loader}>Loading...</p>
        </div>
    );   
}

export default ScriptsLoading;