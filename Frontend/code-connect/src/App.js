import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={()=><Home endpoint={"/"}/>} />
      <Route exact path="/messages" component={()=><Home endpoint={"/messages"}/>} />
      <Route path="/login" component={Login} />
    </Switch>
  </Router>
  );
}

export default App;
