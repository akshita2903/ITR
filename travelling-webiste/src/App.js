import React from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import Navbar from './components/nav-bar/Navbar';
import Home from './components/pages/Home';
import './App.css';
import Booking from './components/pages/Booking';
import Services from './components/pages/AboutUs';
import SignUp from './components/pages/SignUp';

function App() {
  let User=true;
  return (
    <>
     {/* const {user}=useContext(Context); */}
   
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/booking" element={ <Booking />}/>
          <Route exact path="/services" element={<Services />}/>
          <Route exact path="/sign-up" element={<SignUp />}/>  
        </Routes>
      </Router>
    </>
  );
}

export default App;
