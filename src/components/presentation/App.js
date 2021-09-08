import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Home from './Home';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/" component={Home} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
