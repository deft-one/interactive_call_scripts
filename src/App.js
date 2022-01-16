import Header from './components/Header';
import styles from './app.module.css';
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Scripts from './routes/Scripts';
import Editor from './routes/Editor';
import HomePage from './components/HomePage';
import PageNotFound from './components/PageNotFound';

export default function App() {

  return(
    <div className={`App ${styles.app}`}>
      <Header />
      <Routes>
        <Route exact path="/interactive_call_scripts" element={ <HomePage /> } />
        <Route path="/scripts" element={ <Scripts /> } />
        <Route path="/editor" element={ <Editor /> } />
        <Route path="*" element={ <PageNotFound /> } />
      </Routes>
      <Outlet />
    </div>
  );
}