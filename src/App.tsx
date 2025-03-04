import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Welcome from './pages/Welcome';
import Header from './components/Header';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/login" element={<Login />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/welcome" element={<Welcome />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
