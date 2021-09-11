import React from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MeasurementForm from './MeasurementForm';

const Measurement = () => {
  const handleAddingScores = (e) => {
    e.preventDefault();
    const user_input = {
      writing_score: e.target[0].value,
      speaking_score: e.target[1].value,
      reading_score: e.target[2].value,
      listening_score: e.target[3].value
    }
  }

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "Add Measurement" />
        <h1>Measurement page</h1>
        <form onSubmit={ (e) => handleAddingScores(e) }>
          <MeasurementForm exam="writing_score" /><br/>
          <MeasurementForm exam="speaking_score" /><br/>
          <MeasurementForm exam="reading_score" /><br/>
          <MeasurementForm exam="listening_score" /><br/>
          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>
    );
  }
}

export default Measurement;