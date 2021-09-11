import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from './LogIn';
import SignUp from './SignUp';
import Measurement from './Measurement';
import Track from './Track';
import TrackDetail from './TrackDetail';
import Progress from './Progress';
import More from './More';
import Error from './Error';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/log_in" component={LogIn} />
        <Route exact path="/sign_up" component={SignUp} />
        <Route exact path="/measurement" component={Measurement} />
        <Route exact path="/track" component={Track} />
        <Route exact path="/track/:id" component={TrackDetail} />
        <Route exact path="/progress" component={Progress} />
        <Route exact path="/more" component={More} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
