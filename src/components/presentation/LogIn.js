import { Link, useHistory, Redirect } from "react-router-dom";

const LogIn = () => {
  let history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    const user_input = {
      email: e.target[0].value,
      password: e.target[1].value
    }

    const url_log_in = 'https://dry-brushlands-93092.herokuapp.com/auth/login';
    postData(url_log_in, user_input);
  }

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data)
    });
    return response.json()
      .then(data => {
        sessionStorage.setItem('token', JSON.stringify(data.auth_token));
        let token = sessionStorage.getItem('token');
        console.log("session > token: ", token);
        history.push('/measurement');
      });
  }

  return (
      <>
        <h1>Login page</h1>
            <div className="App">
                <form onSubmit={ (e) => handleLogin(e) }>
                    <input type="email" placeholder="Your email" defaultValue="robert@mail.com" required />
                    <br />
                    <input type="password" placeholder="Your password" defaultValue="robert" required />
                    <br />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
        <br />
        <div>Have not you signed up yet?</div>
        <div>Go to the <Link to='/sign_up'>Sign up page</Link></div>
      </>
  );
}

export default LogIn;