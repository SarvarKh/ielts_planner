import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MeasurementForm from './MeasurementForm';

const Measurement = () => {
  const history = useHistory();

  async function postData(url = '', data = {}) {
    const token = sessionStorage.getItem('token');
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
      body: JSON.stringify(data),
    });
    return response.json()
      .then(() => {
        history.push('/track');
      });
  }

  const handleAddingScores = (e) => {
    e.preventDefault();
    const writing = e.target[0].value;
    const speaking = e.target[1].value;
    const reading = e.target[2].value;
    const listening = e.target[3].value;

    const preOverAll = (
      parseFloat(writing) + parseFloat(speaking) + parseFloat(reading) + parseFloat(listening)
    ) / 4;
    const roundeedOverAll = Math.round(preOverAll * 10) / 10;

    const userInput = {
      writing_score: writing,
      speaking_score: speaking,
      reading_score: reading,
      listening_score: listening,
      overall_score: roundeedOverAll,
    };

    const url = 'https://dry-brushlands-93092.herokuapp.com/results';
    postData(url, userInput);
  };

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to="/log_in" />;
  }
  return (
    <div>
      <Navbar title="Add measurement" />
      <main>
        <form onSubmit={(e) => handleAddingScores(e)} className="measurement">
          <MeasurementForm exam="Writing score" />
          <MeasurementForm exam="Speaking score" />
          <MeasurementForm exam="Reading score" />
          <MeasurementForm exam="Listening score" />
          <button type="submit">Submit</button>
        </form>
      </main>
      <Footer />
    </div>
  );
};

export default Measurement;
