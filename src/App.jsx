import { connect } from "react-redux";
import "./App.css";
import "./Components.css";
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
import GamePage from "./pages/GamePage";
import GamePage2 from "./pages/GamePage2";
import { brightAction } from "./actions/brightAction";
import { darkAction } from "./actions/darkAction";
import employeeAction from "./actions/employeeAction";
import 'tippy.js/dist/tippy.css'; // optional
import Tippy from '@tippyjs/react';
import ReduxEmployee from "./pages/ReduxEmployee";



function App({ employeeData,isDark, setBright, setDark}) {
  const [isLoggedIn, setLogin] = useState(false);
  const StringContent = () => (
    <Tippy content="Hello">
      <button>My button</button>
    </Tippy>
  );
  
  const JSXContent = () => (
    <Tippy content={<span>Tooltip</span>} placement="left">
      <button>My button</button>
    </Tippy>
  );

  return (
    <div className="App">
      <div className="employeeData">
        {
          employeeData.map(i=>
            <h4>{i.name} <br/> {i.email}</h4>
            )
        }
      </div>
     <StringContent/>
     <JSXContent/>


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
            <FaciltiesPage />
          </Route>
          <Route exact path="/login">
            <LoginPage />
          </Route>
          <Route exact path="/game">
            <GamePage />
          </Route>
          <Route exact path="/game2">
            <GamePage2 />
          </Route>
          <Route exact path="/emp">
            <ReduxEmployee />
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
const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setBright: () => dispatch(brightAction),
  setDark: () => dispatch(darkAction),
  setEmployee: (payload)=> dispatch(employeeAction(payload))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
