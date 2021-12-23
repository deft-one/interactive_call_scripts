import Header from './components/Header';
import styles from './app.module.css';
import { Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Scripts from './routes/Scripts';
import Editor from './routes/Editor';
import Dashboard from './routes/Dashboard';
import HomePage from './components/HomePage';

export default function App() {

  return(
    <div className={`App ${styles.app}`}>
      <Header />
      <Routes>
        <Route index element={ <HomePage /> } />
        <Route path="/" element={ <HomePage /> } />
        <Route path="/scripts" element={ <Scripts /> } />
        <Route path="/editor" element={ <Editor /> } />
        <Route path="/dashboard" element={ <Dashboard /> } />
        <Route path="*" element={ <h2>There's Nothing Here!</h2> } />
      </Routes>
      <Outlet />
    </div>
  );
}