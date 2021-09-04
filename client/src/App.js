import logo from './logo.svg';
import './App.css';
import About from './About'
import Main from './Main';
import Login from './components/Login';
import React from "react"
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !!localStorage.getItem("payload")
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  const [data, setData] = React.useState(null);

  return (
    <>
      <Router>
        <Switch>
          {/* Add routes over here */}
          <Route path="/" exact component={() => <Main />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path='/about' component={() => <About/>} />
        </Switch>
      </Router>
      </>
  );
}



export default App;
