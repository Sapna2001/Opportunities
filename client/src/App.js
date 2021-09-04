import './App.css';
import About from './About'
import Main from './Main';
import Login from './components/Login';
import React from "react"
import { useRoutes, Link } from 'raviger'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !!localStorage.getItem("payload")
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

const routes = {
  '/': () => <Main />,
  '/about': () => <About />,
  '/login': () => <Login />
}

function App() {
  let route = useRoutes(routes)
  return (
    <div>
      <div>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/login">Login</Link>
      </div>
      {route}
    </div>
  );
}



export default App;
