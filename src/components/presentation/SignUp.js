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
                sessionStorage.setItem('token', JSON.stringify(data.auth_token));
                let token = sessionStorage.getItem('token');
                console.log("session > token: ", token);
                history.push('/measurement');
            });
    }


    return (
        <div className="App">
            <h1>Sign Up page</h1>
            <form onSubmit={ (e) => handleSignUp(e) }>
                <input type="text" placeholder="Your name" required />
                <br />
                <input type="email" placeholder="Your email" required />
                <br />
                <input type="password" placeholder="Your password" required />
                <br />
                <input type="password" placeholder="Confirm Your password" required />
                <br /><br />
                <label name="level_initial">Your current level</label><br />
                <input type="number" step=".5" min="0" max="9" name="level_initial" defaultValue="6.5" required />
                <br />
                <label name="level_plan">Your desired level</label><br />
                <input type="number" step=".5" min="0" max="9" name="level_plan" defaultValue="8.0" required />
                <br /><br />
                <input type="date" placeholder="Your due_date" required />
                <br />
                <button type="submit">Submit</button>
            </form>
            <br />
            <div>Go back to the <Link to='/log_in'>Log in page</Link></div>
        </div>
    );
}

export default SignUp;