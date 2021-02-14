import { useState } from "react";
import { Router, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";
import bcrypt from "bcryptjs";
import { useEffect } from "react";

export default function LoginPage({ loggedUser, signUp, loginControl, err }) {
  const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const handleLoginChange = (e) => {
    switch (e.target.id) {
      case "email":
        setCurrentUser({
          email: e.target.value,
          password: currentUser.password || "",
        });
        break;
      case "password":
        setCurrentUser({
          email: currentUser.email,
          password: e.target.value || "",
        });
        break;
      default:
        setCurrentUser({});
        break;
    }
  };
  const handleLoginSubmit = async () => {
    loginControl(currentUser);
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        setUser({
          name: e.target.value,
          email: user.email || "",
          password: user.password || "",
        });

        break;
      case "email":
        setUser({
          name: user.name || "",
          email: e.target.value,
          password: user.password || "",
        });
        break;
      case "password":
        setUser({
          name: user.name || "",
          email: user.email,
          password: e.target.value || "",
        });
        break;
      default:
        setUser({});
        break;
    }
  };
  const handleSubmit = async () => {
    signUp(user);
    alert("Successfully signed up, now login");
  };
  useEffect(() => {
    if (loggedUser.email) {
      history.push(`/${query.get("redirect")}`);
    }
  });
  return (
    <Page>
      <div className="login">
        Login
        <input
          type="text"
          id="email"
          onChange={handleLoginChange}
          placeholder="mail"
        />
        <input
          type="text"
          id="password"
          onChange={handleLoginChange}
          placeholder="pw"
        />
        <button onClick={handleLoginSubmit}>Login</button>
        {err}
      </div>
      <br />
      <div className="signup">
        Sign Up
        <input
          type="text"
          id="name"
          onChange={handleChange}
          placeholder="name"
        />
        <input
          type="text"
          id="email"
          onChange={handleChange}
          placeholder="mail"
        />
        <input
          type="text"
          id="password"
          onChange={handleChange}
          placeholder="pw"
        />
        <button onClick={handleSubmit}>Sign Up</button>
      </div>
    </Page>
  );
}
