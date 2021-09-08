import React, { useEffect } from 'react';

  const Home = () => {
    useEffect(() => {
      fetchResults()
  }, []);

  async function fetchResults() {
    const url_results = 'https://dry-brushlands-93092.herokuapp.com/auth/results';
    let response = await fetch(url_results);
    let data = await response.text();
    console.log(data);
  }

  return (
    <div className="App">
        <h1>Home</h1>
    </div>
  );
}

export default Home;