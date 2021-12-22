import { Outlet, Link } from "react-router-dom";
import styles from './header.module.css';

const Header = () => {
    return(
        <>
            <nav>
                <ul className={styles.navUl}>
                    <li className={styles.linkLi}><Link className={styles.link} to="/scripts">Scripts</Link></li>
                    <li className={styles.linkLi}><Link className={styles.link} to="/editor">Editor</Link></li>
                    <li className={styles.linkLi}><Link className={styles.link} to="/dashboard">Dashboard</Link></li>
                </ul>
            </nav>
            <Outlet />
        </>
    );
}

export default Header;