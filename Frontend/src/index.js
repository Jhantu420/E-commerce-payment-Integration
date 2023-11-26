import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import './style.css';
import Home from './views/home';
import NotFound from './views/not-found';
import Header from './views/Header'
import Footer from './views/Footer'

const App = () => {
  return (
    <>
    <Header/>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/*" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
    <Footer/>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
