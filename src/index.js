import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Scripts from './routes/Scripts';
import Editor from './routes/Editor';
import Dashboard from './routes/Dashboard';
import HomePage from './components/HomePage';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <App /> } >
          <Route index element={ <HomePage /> } />
          <Route path="scripts" element={ <Scripts /> } />
          <Route path="editor" element={ <Editor /> } />
          <Route path="dashboard" element={ <Dashboard /> } />
          <Route path="*" element={ <h2>There's Nothing Here!</h2> } />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();