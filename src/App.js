import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import No1 from './pages/No1'; 
import No22 from './pages/No22'; 
import No3 from './pages/No3'; 
import No4 from './pages/No4'; 
import No55 from './pages/No55'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/topic-page-1" element={<No1 />} /> 
        <Route path="/topic-page-2" element={<No22 />} /> 
        <Route path="/topic-page-3" element={<No3 />} /> 
        <Route path="/topic-page-4" element={<No4 />} /> 
        <Route path="/topic-page-5" element={<No55 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

