import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import No1 from './pages/No1'; 
import No2 from './pages/No2'; 
import No3 from './pages/No3'; 
import No4 from './pages/No4'; 
import No5 from './pages/No5'; 

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/topic-page-1" element={<No1 />} /> 
        <Route path="/topic-page-2" element={<No2 />} /> 
        <Route path="/topic-page-3" element={<No3 />} /> 
        <Route path="/topic-page-4" element={<No4 />} /> 
        <Route path="/topic-page-5" element={<No5 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

