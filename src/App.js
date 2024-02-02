import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import No1 from './pages/No1'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/topic-page-1" element={<No1 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

