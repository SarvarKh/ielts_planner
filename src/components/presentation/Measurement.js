import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MeasurementForm from './MeasurementForm';

const Measurement = () => {
  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "Add Measurement" />
        <h1>Measurement page</h1>
        
        <MeasurementForm />
        <Footer />
      </div>
    );
  }
}

export default Measurement;