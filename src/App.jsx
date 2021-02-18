import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
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
import PropTypes from "prop-types";

import bcrypt from "bcryptjs";

function App() {
  const [isDark, setDark] = useState(true);
  const [isLoggedIn, setLogin] = useState("");
  const [user, setUser] = useState({});
  const [err, setErr] = useState("");
  const [users, setUsers] = useState([]);
  
  const createUser = async (user) => {
    let hashedPassword = await bcrypt.hash(user.password, 10);

    setUsers([
      ...users,
      {
        name: user.name,
        email: user.email,
        password: hashedPassword,
      },
    ]);
    console.log(users);
  };
  const loginChecker = async (currentUser) => {
    let check = users.find((i) => i.email == currentUser.email);
    if (check) {
      if (await bcrypt.compare(currentUser.password, check.password)) {
        setUser(check);
        setErr("Success Logged in");
      } else {
        setErr("Wrong password");
      }
    } else {
      setErr("User doesn't exist");
    }
  };

  return (
    <div className="App" >
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
            {isLoggedIn ? (
              <AdmissionPage
                loginControl={() => setLogin(false)}
                user={isLoggedIn}
              />
            ) : (
              <LoginPage loginControl={() => setLogin(true)} />
            )}
          </Route>
          <Route exact path="/facilities">
            <FaciltiesPage user={user} />
          </Route>
          <Route exact path="/login">
            <LoginPage
              signUp={(user) => createUser(user)}
              loginControl={(user) => loginChecker(user)}
              err={err}
              loggedUser={user}
            />
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
      <style>{`
       body{
         background: ${isDark ? "#222" : "#fff"};
         color: ${isDark ? "#fff" : "#000"}
       }
      `}</style>
    </div>
  );
}

App.propTypes = {
  isDark: PropTypes.object,
  isLoggedIn: PropTypes.object,
  createUser: PropTypes.func,
  HomePage: PropTypes.func,
 /*  customProp2 : function(props,propName,componentName) {
    if(!ite)
    
  } */
};

export default App;
