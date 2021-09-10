import React, { useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';

const Home = () => {
  let history = useHistory();
  useEffect(() => {
      fetchResults()
  }, []);

  async function fetchResults() {
    const url_results = 'https://dry-brushlands-93092.herokuapp.com/auth/results';
    let response = await fetch(url_results);
    let data = await response.text();
  }

  const logOut = () => {
      sessionStorage.removeItem('token');
      console.log('token:', sessionStorage.getItem('token'));
      history.push('/log_in');
  }

  if (sessionStorage.getItem('token') === 'undefined' || sessionStorage.getItem('token') === null) {
    return <Redirect to='/log_in'/> 
  } else {
    return (
      <div>
          <h1>Home page</h1>
          <button type="button" onClick={logOut}>Log out</button>
      </div>
    );
  }
}

export default Home;