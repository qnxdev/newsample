import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import { useState } from "react";
import Error from "./pages/ErorrPage";
import Contact from "./pages/ContactPage";
import { Project } from "./components/Project";
import Header from "./components/Header";
import FaciltiesPage from "./pages/FaciltiesPage";
import AdmissionPage from "./pages/AdmnPage";
import DeptPage from "./pages/DeptPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [isDark, setDark] = useState(false);
  const [isLoggedIn, setLogin] = useState(false);
  let a = 1;
  const some2 = (a) => {
    console.log("Nothing", a);
  };
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage darkMode={isDark} text="Sometext" />
          </Route>
          <Route exact path="/about">
            <AboutPage darkMode={isDark} />
          </Route>
          <Route exact path="/dept">
            <DeptPage darkMode={isDark} />
          </Route>
          <Route exact path="/admin">
            <AdmissionPage user={isLoggedIn} />
          </Route>
          <Route exact path="/facilities">
            <FaciltiesPage  />
          </Route>
          <Route exact path="/login">
            <LoginPage  />
          </Route>

          <Route
            exact
            path="/users/:id/:project"
            render={({ match }) => (
              <Contact id={match.params.id}>
                <Project id={match.params.project} />
              </Contact>
            )}
          />
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
