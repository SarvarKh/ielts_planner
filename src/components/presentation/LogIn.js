const LogIn = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    const user_input = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    const url_log_in = 'https://dry-brushlands-93092.herokuapp.com/auth/login';
    postData(url_log_in, user_input)
  }

  async function postData(url = '', data = {}) {
    console.log("From postData: ...", url, data)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    console.log("After fetch: ...", response);
    return response.json()
      .then(data => {
        console.log(data.auth_token);
      });
  }




  return (
    <div className="App">
      <form onSubmit={ (e) => handleLogin(e) }>
        <input type="email" placeholder="Your email" defaultValue="brad@mail.com" required />
        <br />
        <input type="password" placeholder="Your password" defaultValue="brad" required />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LogIn;