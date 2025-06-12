import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';

import Contact from './pages/ContactPage/Contact';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import About from './pages/AboutPage/About';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';
import Home from './pages/HomePage/Home';


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
            <Route path='/home' element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
