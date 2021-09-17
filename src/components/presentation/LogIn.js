import { Link, useHistory } from 'react-router-dom';

const LogIn = () => {
  const history = useHistory();

  async function postData(url = '', data = {}) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json()
      .then((data) => {
        sessionStorage.setItem('token', data.auth_token);
        history.push('/measurement');
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const userInput = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    const urlLogIn = 'https://dry-brushlands-93092.herokuapp.com/auth/login';
    postData(urlLogIn, userInput);
  };

  return (
    <div className="authen-page">
      <div>
        <i className="fas fa-user-circle" />
      </div>

      <form onSubmit={(e) => handleLogin(e)}>
        <input type="email" placeholder="Your email" required />

        <input type="password" placeholder="Password" required />

        <button type="submit">Log in</button>
      </form>

      <div className="authen-text">
        <div>Have not you signed up yet?</div>
        <div>
          Go to the
          <Link to="/sign_up">Sign up page</Link>
        </div>
      </div>

      <div className="ielts-text authen-text">
        <div>
          Check out
          {' '}
          <Link to={{ pathname: 'https://www.ielts.org/about-ielts/what-is-ielts' }} target="_blank">the link</Link>
          {' '}
          to find out more about IELTS.
        </div>
      </div>
    </div>
  );
};

export default LogIn;
