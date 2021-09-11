import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Progress = () => {
  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "Progress" />
        <h1>Progress page</h1>
        <Footer />
      </div>
    );
  }
}

export default Progress;