import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MeasurementForm from './MeasurementForm';

const Measurement = () => {
  let history = useHistory();

  const handleAddingScores = (e) => {
    e.preventDefault();
    let writing = e.target[0].value;
    let speaking = e.target[1].value;
    let reading = e.target[2].value;
    let listening = e.target[3].value;
    
    let preOverAll = (parseFloat(writing) + parseFloat(speaking) + parseFloat(reading) + parseFloat(listening)) / 4
    let roundeedOverAll = Math.round(preOverAll * 10) / 10;

    const user_input = {
      writing_score: writing,
      speaking_score: speaking,
      reading_score: reading,
      listening_score: listening,
      overall_score: roundeedOverAll
    }
    
    const url = 'https://dry-brushlands-93092.herokuapp.com/results';
    postData(url, user_input);
  }

  async function postData(url = '', data = {}) {
    const token = sessionStorage.getItem('token');
      const response = await fetch(url, {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
          Authorization: token,
      },
      body: JSON.stringify(data)
      });
      return response.json()
          .then(() => {
              history.push('/track');
          });
  }

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
        <Navbar title = "Add measurement" />
        <main>
          <form onSubmit={ (e) => handleAddingScores(e) } className="measurement">
            <MeasurementForm exam="writing_score" focus="true" />
            <MeasurementForm exam="speaking_score" />
            <MeasurementForm exam="reading_score" />
            <MeasurementForm exam="listening_score" />
            <button type="submit">Submit</button>
          </form>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Measurement;