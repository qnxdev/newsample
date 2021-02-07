import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { useState } from "react";
import Error from "./pages/ErorrPage";

function App() {
  const [isDark, setDark] = useState(false);
  let a = 1;
  const some2 = (a) => {
    console.log("Nothing", a);
  };
  console.log(isDark);
  return (
    <div className="App">
      <div className="header" >
        Header
        <button onClick={() => setDark(!isDark)}>{isDark ? "Dark Mode" : "Bright Mode"}</button>
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage darkMode={isDark} text="Sometext" />
          </Route>
          <Route exact path="/about">
            <AboutPage darkMode={isDark}/>
          </Route> 
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
