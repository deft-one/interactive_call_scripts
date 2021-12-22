import Header from './components/Header';
import styles from './app.module.css';

export default function App() {

  return(
    <div className={`App ${styles.app}`}>
      <Header />
    </div>
  );
}