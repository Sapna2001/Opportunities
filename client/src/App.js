import "./App.css";
import About from "./About";
import Home from "./Home";
import Login from "./components/Login";
import React from "react";
import { useRoutes, Link } from "raviger";

const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/login": () => <Login />,
};

function App() {
  let route = useRoutes(routes);

  return <div className="h-full">{route}</div>;
}

export default App;
