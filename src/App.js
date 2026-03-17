import { Component } from 'react';
import CssBaseline from '@mui/material/CssBaseline';

import { Route, Routes } from 'react-router-dom'
import MainNav from './components/MainNav';
import Footer from './components/Footer/Footer';

import Contact from './pages/ContactPage/Contact';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import About from './pages/AboutPage/About';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';
import Home from './pages/HomePage/Home';

import './App.css';
import Login from './components/Staff/Login';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <MainNav />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/career-opportunities' element={<CareerOpportunities />} />
            <Route path='/about' element={<About />} />
            <Route path='/staffing-solutions' element={<StaffingSolutions />} />
            <Route path="/staff/login"         element={<Login />} />
          </Routes>
        </div>
        <Footer />
        <CssBaseline />
      </div>
    );
  }
}

export default App;
