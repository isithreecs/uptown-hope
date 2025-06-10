import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainNav from './components/MainNav/MainNav';
import Footer from './components/Footer/Footer';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import Contact from './pages/ContactPage/Contact';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';

// new pages
// import Login from './pages/Login/Login';
// import SignUp from './pages/Login/SignUp';

import Employees from './pages/EmployeePage/Employees';
import CareerOpportunities2 from './pages/CareerOpportunities/CareerOpportunities';
import About2 from './pages/AboutPage/About';
import StaffingSolutions2 from './pages/StaffingSolutionsPage/StaffingSolutions';
import Home2 from './pages/HomePage/Home';
import Services2 from './pages/ServicesPage/Services2';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <MainNav />
        <div>
          <Routes>
            <Route path='/' element={<Home2 />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/employment/' element={<CareerOpportunities />} />
            <Route path='/staffing-solutions' element={<StaffingSolutions />} />
            <Route path='/contact' element={<Contact />} />

            <Route path='/employees' element={<Employees />} />
            <Route path='/career-opportunities' element={<CareerOpportunities2 />} />
            <Route path='/about2' element={<About2 />} />
            <Route path='/StaffingSolutions2' element={<StaffingSolutions2 />} />
            <Route path='/Home2' element={<Home2 />} />
            <Route path='/Services2' element={<Services2 />} />
          </Routes>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
