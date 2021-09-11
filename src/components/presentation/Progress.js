import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

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
        return (
        <div>
            <Navbar title = "Progress" />
                <main>
                    <h2>Progress page</h2>
                    {
                        results.map((res) => (
                            <div>{res.overall_score}</div>
                        ))
                    }
                </main>
            <Footer />
        </div>
        );
    }
}

export default Progress;