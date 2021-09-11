import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Track = () => {
  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "Track" />
        <h1>Track page</h1>
        <Footer />
      </div>
    );
  }
}

export default Track;