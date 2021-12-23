import { NavLink } from "react-router-dom";
import styles from './header.module.css';

const Header = () => {
    return(
        <>
            <nav>
                <ul className={styles.navUl}>
                    <li className={styles.linkLi}>
                        <NavLink 
                            className={
                                ({isActive}) => {
                                    return isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`;
                                }
                            } 
                            to="/">Home</NavLink>
                    </li>
                    <li className={styles.linkLi}>
                        <NavLink 
                            className={
                                ({isActive}) => {
                                    return isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`;
                                }
                            } 
                            to="/scripts">Scripts</NavLink>
                    </li>
                    <li className={styles.linkLi}>
                        <NavLink 
                            className={
                                ({isActive}) => {
                                    return isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`;
                                }
                            }
                            to="/editor"
                            >Editor</NavLink>
                    </li>
                    <li className={styles.linkLi}>
                        <NavLink 
                            className={
                                ({isActive}) => {
                                    return isActive ? `${styles.link} ${styles.activeLink}` : `${styles.link}`;
                                }
                            }
                            to="/dashboard"
                            >Dashboard</NavLink>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Header;