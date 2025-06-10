import React, { Component } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainNav from '../src/components/MainNav/MainNav';
import Footer from '../src/components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';

import Home from './pages/HomePage/Home';
import About from './pages/AboutPage/About';
import Services from './pages/ServicesPage/Services';
import CareerOpportunities from './pages/CareerOpportunities/CareerOpportunities';
import Contact from '../src/pages/ContactPage/Contact';
import StaffingSolutions from './pages/StaffingSolutionsPage/StaffingSolutions';

// new pages
import Employees from './pages/EmployeePage/Employees';
import Login from './pages/Login/Login';
import SignUp from './pages/Login/SignUp';

import CareerOpportunities2 from '../src/pages/CareerOpportunities/CareerOpportunities2';
import About2 from '../src/pages/AboutPage/About2';
import StaffingSolutions2 from '../src/pages/StaffingSolutionsPage/StaffingSolutions2';
import Home2 from '../src/pages/HomePage/Home2';
import Services2 from './pages/ServicesPage/Services2';

class App extends Component {
  
  render() {

    return (
      <div className="App">
        <MainNav />
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/services' element={<Services />} />
            <Route path='/employment/' element={<CareerOpportunities />} />
            <Route path='/staffing-solutions' element={<StaffingSolutions />} />
            <Route path='/contact' element={<Contact />} />
            
            {/*Added Login, Employee, Sign Up*/}
            <Route path='/Login' element={<Login />} />
            <Route path='/Employees' element={<Employees />} />
            <Route path='/SignUp' element={<SignUp />} />

            <Route path='/career-opportunities' element={<CareerOpportunities2 />} />
            <Route path='/about2' element={<About2 />} />
            <Route path='/StaffingSolutions2' element={<StaffingSolutions2 />} />
            <Route path='/Home2' element={<Home2 />} />
            <Route path='/Services2' element={<Services2 />} />
          </Routes>
        </div>
        <Chatbot />
        <Footer />
      </div>
    );
  }
}

export default App;
