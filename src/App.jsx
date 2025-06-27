import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import ContactPage from './ContactPage';
import HireUsPage from './HireUsPage';
import AdminPanel from './AdminPanel';
import WorkerProfile from './WorkerProfile';
import ScrollToTop from './components/ScrollTop';

const App = () => {
  return (
    <Router>
        <ScrollToTop/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/HireUs" element={<HireUsPage />} />
        <Route path="/Admin" element={<AdminPanel/>}/>
        <Route path="/worker-profile" element={<WorkerProfile/>}/>
      </Routes>
    </Router>
  );
};

export default App;