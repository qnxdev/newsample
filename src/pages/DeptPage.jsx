<<<<<<< HEAD
import { useState } from "react";
import { connect } from "react-redux";
import Page from "../components/Page";
import { Button } from "../components/tippyComponents/input";
import play from "../static/play.png";
import pause from "../static/pause.png";
import audio1 from "../static/audio1.mp3";
import audio2 from "../static/audio2.mp3";

function DeptPage({ currentUser }) {
  let audioArray = [
    "https://suteassets.s3.us-east-1.amazonaws.com/Sute_Podcasts/soundbath-meditations/02.mp3",
    "https://suteassets.s3.us-east-1.amazonaws.com/Sute_Podcasts/soundbath-meditations/01.wav",
  ];
  const [isPlaying, setPlaying] = useState(false);
  const [selected, setSelect] = useState(audioArray[0]);

  function playFunction() {
    setPlaying(!isPlaying);
    if (isPlaying) document.getElementById("audio").pause();
    else document.getElementById("audio").play();
  }
  return (
    <Page>
      <div className="user">
        <h1>Department</h1>
        <br />
        {currentUser.email ? (
          <h3>
            You are {currentUser.name} your department email address is{" "}
            {currentUser.email}
          </h3>
        ) : (
          <button>Please Login</button>
        )}
      </div>
      <br />
      <br />
      <div className="audios">
        <img
          src={isPlaying && selected == audioArray[0] ? pause : play}
          alt=""
          width="50px"
          onClick={function () {
            setSelect(audioArray[0]);
            playFunction();
          }}
        />{" "}
        Audio 1
        <br />
        <img
          src={isPlaying && selected == audioArray[1] ? pause : play}
          alt=""
          width="50px"
          onClick={function () {
            setSelect(audioArray[1]);
            playFunction();
          }}
        />{" "}
        Audio 2
      </div>

      <br />
      <br />

      {/* <div className="mp3">
        <audio src={selected} id="audio"></audio>
        <img
          src={isPlaying ? pause : play}
          alt=""
          width="100px"
          onClick={playFunction}
        />
        <div className="progress">
          <div className="progress-inner"></div>
        </div>
        {document.getElementById("audio").currentTime/60} <br/> {document.getElementById("audio").duration/60}
      </div>
       */}{/* <style jsx>{`
        .progress {
          background: #ccc;
          min-height: 10px;
          border-radius: 5px;
          width: 50vw;
        }
        .progress-inner {
          min-height: 10px;
          background: #555;
          border-radius: 5px;
          max-width: 50vw;
          width: ${(document.getElementById("audio").currentTime / document.getElementById("audio").duration) * 50}vw;
        }
      `}</style> */}
    </Page>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

export default connect(mapStateToProps)(DeptPage);
=======
/* import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

// Since routes are regular React components, they
// may be rendered anywhere in the app, including in
// child elements.
//
// This helps when it's time to code-split your app
// into multiple bundles because code-splitting a
// React Router app is the same as code-splitting
// any other React app.

export default function NestingExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics() {
  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  let { path, url } = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();
  console.log(topicId)
  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
   */
>>>>>>> main
