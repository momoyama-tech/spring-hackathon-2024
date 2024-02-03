import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Footer from './components/Footer';
import EventDetails from './components/EventDetails';
import No1 from './pages/No1'; 
import No22 from './pages/No22'; 
import No33 from './pages/No33'; 
import No44 from './pages/No44'; 
import No55 from './pages/No55'; 
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Add this line */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/EventDetails" element={<EventDetails />} />
        <Route path="/topic-page-1" element={<No1 />} /> 
        <Route path="/topic-page-2" element={<No22 />} /> 
        <Route path="/topic-page-3" element={<No33/>} /> 
        <Route path="/topic-page-4" element={<No44 />} /> 
        <Route path="/topic-page-5" element={<No55 />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;