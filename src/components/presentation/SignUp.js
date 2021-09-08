const SignUp = () => {
    const handleSignUp = async (e) => {
        e.preventDefault();
        const user_input = {
            name: e.target[0].value,
            occupation: e.target[1].value,
            photo: e.target[2].value,
            email: e.target[3].value,
            password: e.target[4].value,
            password_confirmation: e.target[5].value,
            age: e.target[6].value,
            gender: e.target[7].value,
            level_initial: e.target[8].value,
            level_plan: e.target[9].value,
            due_date: e.target[10].value
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
            console.log(data.auth_token); // JSON data parsed by `data.json()` call
        });
    }


    return (
        <div className="App">
            <form onSubmit={ (e) => handleSignUp(e) }>
                <input type="text" placeholder="Your name" defaultValue="james" required />
                <br />
                <input type="text" placeholder="Your occupation" defaultValue="Trainer" required />
                <br />
                <input type="text" placeholder="Your photo" defaultValue="her_img" required />
                <br />
                <input type="email" placeholder="Your email" defaultValue="james@mail.com" required />
                <br />
                <input type="password" placeholder="Your password" defaultValue="james" required />
                <br />
                <input type="password" placeholder="Confirm Your password" defaultValue="james" required />
                <br />
                <input type="number" min="1" max="100" required />
                <br />
                <input type="text" placeholder="Your gender" defaultValue="male" required />
                <br />
                <input type="text" placeholder="Your level_initial" defaultValue="7.0" required />
                <br />
                <input type="text" placeholder="Your level_plan" defaultValue="8.0" required />
                <br />
                <input type="text" placeholder="Your due_date" defaultValue="2022-03-30" required />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;