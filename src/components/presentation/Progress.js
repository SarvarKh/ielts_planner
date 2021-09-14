import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MyChart from './MyChart';

const Progress = () => {
    const [results, setResults] = useState([]);
    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = () => {
        const url = 'https://dry-brushlands-93092.herokuapp.com/results';
        const token = sessionStorage.getItem('token');
        console.log(token);
        fetch(url, {
          headers: {
            Authorization: token,
          }
        })
          .then(res => res.json())
          .then(data => setResults(data));
    }

    if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
        return <Redirect to='/log_in'/> 
    } else {
        let current_scores = results[results.length-1];
        return (
        <div>
            <Navbar title = "Progress" />
                <main>
                    <h2>Progress page</h2>
                    <MyChart results={results} />
                    {
                        current_scores
                        ? <>
                            <h3>Current scores</h3>
                            <div>Speaking: {current_scores.speaking_score}</div>
                            <div>Listening: {current_scores.listening_score}</div>
                            <div>Writing: {current_scores.writing_score}</div>
                            <div>Reading: {current_scores.reading_score}</div>
                        </>
                        : <div>Loading...</div>
                    }
                </main>
            <Footer />
        </div>
        );
    }
}

export default Progress;