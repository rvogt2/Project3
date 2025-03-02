import React from 'react';
import ReactDOM from 'react-dom/client';
import {Route,Routes,BrowserRouter} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
//functions, prefabs
import './App.css';
//styling
import App from './pages/App';
import Layout from './pages/Layout';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
//pages


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<App/>}/>
          <Route path="Contact" element={<Contact/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
