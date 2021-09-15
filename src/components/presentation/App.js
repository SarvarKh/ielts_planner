import {
  BrowserRouter, Switch, Route,
} from 'react-router-dom';
import LogIn from '../container/LogIn';
import SignUp from '../container/SignUp';
import Measurement from '../container/Measurement';
import Track from '../container/Track';
import TrackDetail from '../container/TrackDetail';
import Progress from '../container/Progress';
import More from '../container/More';
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
