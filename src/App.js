import { Component, useEffect } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Route, Routes, useLocation } from 'react-router-dom'
import MainNav from './components/MainNav';
import Footer from './components/Footer/Footer';

import Contact from './pages/ContactPage/Contact';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import About from './pages/AboutPage/About';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';
import Home from './pages/HomePage/Home';

import './App.css';
import Login from './components/Staff/Login';

// ── ScrollToTop ───────────────────────────────────────────────────────────────

const ScrollToTop = () => {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'instant' });
    }, [pathname]);
    return null;
};

// ── App ───────────────────────────────────────────────────────────────────────

class App extends Component {
  
    render() {
        return (
            <div className="App">
                <ScrollToTop />
                <MainNav />
                <div>
                    <Routes>
                        <Route path='/'                 element={<Home />} />
                        <Route path='/contact'          element={<Contact />} />
                        <Route path='/employment'       element={<CareerOpportunities />} />
                        <Route path='/about'            element={<About />} />
                        <Route path='/staffing-solutions' element={<StaffingSolutions />} />
                        <Route path="/staff/login"      element={<Login />} />
                    </Routes>
                </div>
                <Footer />
                <CssBaseline />
            </div>
        );
    }
}

export default App;