import { Link, useHistory } from "react-router-dom";

const SignUp = () => {
    let history = useHistory();

    const handleSignUp = async (e) => {
        e.preventDefault();
        const user_input = {
            name: e.target[0].value,
            email: e.target[1].value,
            password: e.target[2].value,
            password_confirmation: e.target[3].value,
            level_initial: e.target[4].value,
            level_plan: e.target[5].value,
            due_date: e.target[6].value
        }

        const url_sign_up = 'https://dry-brushlands-93092.herokuapp.com/signup';
        postData(url_sign_up, user_input)
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
                history.push('/measurement');
            });
    }


    return (
        <div className='authen-page'>
            <div>
                <i className="fas fa-user-circle"></i>
            </div>
            <form onSubmit={ (e) => handleSignUp(e) }>
                <input type="text" placeholder="Your name" required />
                <input type="email" placeholder="Your email" required />
                <input type="password" placeholder="Your password" required />
                <input type="password" placeholder="Confirm Your password" required />
                
                <label htmlFor="level_initial">Your current IELTS score</label>
                <input type="number" step=".5" min="0" max="9" name="level_initial" placeholder="Enter 0 ~ 9" required />
                
                <label htmlFor="level_plan">Your desired IELTS score</label>
                <input type="number" step=".5" min="0" max="9" name="level_plan" placeholder="Enter 0 ~ 9" required />
                
                <button type="submit">Submit</button>
            </form>
            <div className="authen-text">Go back to the <Link to='/log_in'>Log in page</Link></div>
        </div>
    );
}

export default SignUp;