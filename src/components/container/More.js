import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from '../presentation/Navbar';
import Footer from '../presentation/Footer';

const More = () => {
  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "More" />
        <h1>More page</h1>
        <Footer />
      </div>
    );
  }
}

export default More;