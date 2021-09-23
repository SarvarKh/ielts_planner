import { Link, useHistory } from 'react-router-dom';

const SignUp = () => {
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

  const handleSignUp = async (e) => {
    e.preventDefault();
    const userInput = {
      name: e.target[0].value,
      email: e.target[1].value,
      password: e.target[2].value,
      password_confirmation: e.target[3].value,
      level_initial: e.target[4].value,
      level_plan: e.target[5].value,
      due_date: e.target[6].value,
    };

    const urlSignUp = 'https://dry-brushlands-93092.herokuapp.com/signup';
    postData(urlSignUp, userInput);
  };

  return (
    <div className="authen-page">
      <div>
        <i className="fas fa-user-circle" />
      </div>
      <form onSubmit={(e) => handleSignUp(e)}>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <input type="password" placeholder="Password" required />
        <input type="password" placeholder="Confirm password" required />

        <label htmlFor="level_initial">
          <span>Your current IELTS score</span>
          <input type="number" step=".5" min="0" max="9" name="level_initial" id="level_initial" placeholder="Enter 0 ~ 9" required />
        </label>

        <label htmlFor="level_plan">
          <span>Your desired IELTS score</span>
          <input type="number" step=".5" min="0" max="9" name="level_plan" id="level_plan" placeholder="Enter 0 ~ 9" required />
        </label>

        <button type="submit">Submit</button>
      </form>
      <div className="authen-text">
        Go back to the
        {' '}
        <Link to="/log_in">Log in page</Link>
      </div>
    </div>
  );
};

export default SignUp;
