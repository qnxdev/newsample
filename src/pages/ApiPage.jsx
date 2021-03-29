import { useEffect, useState } from "react";
import { withCookies } from "react-cookie";
import { connect } from "react-redux";
import { userAction } from "../actions/userAction";
import Page from "../components/Page";

function ApiPage({ currentUser, setCurrentUser, cookies }) {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });
  const [loginUser, setLoginUser] = useState({ email: "", password: "" });
  console.log();
  async function accessApi() {
    const data = await fetch("http://localhost:4000/users?uid=1001");
    setCurrentUser(await data.json());
  }

  async function handleSignUp() {
    console.log(newUser);
    const res = await fetch("http://localhost:4000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    if (res.status == 201) {
    }
  }

  async function handleLogin() {
    const res = await fetch("http://localhost:4000/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginUser),
    });
    if (res.status == 200) {
      setCurrentUser(await res.json());
    }
    if (res.status == 401) {
      alert("Incorrect password");
    }
    if (res.status == 404) {
      alert("User doesn't exist");
    }
  }

  function handleLogout() {
    setCurrentUser({}); 
    cookies.set("UID","");
  }

  useEffect(function () {
    if (currentUser.id) {
      cookies.set("UID", currentUser.id);
    }
  },[currentUser.id]);

  async function handleUpdate() {
    if (newUser.name == "") {
      const res = await fetch("http://localhost:4000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          password: newUser.password,
          id: currentUser.id,
        }),
      });
      setCurrentUser(await res.json());
    } else if (newUser.password == "") {
      const res = await fetch("http://localhost:4000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newUser.name,
          id: currentUser.id,
        }),
      });
      setCurrentUser(await res.json());
    } else {
      const res = await fetch("http://localhost:4000/user", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newUser.name,
          password: newUser.password,
          id: currentUser.id,
        }),
      });
      setCurrentUser(await res.json());
    }
  }

  return (
    <Page>
      <h1>Full APIs </h1>
      <div className="signup">
        <h2>Sign Up</h2>
        <div>
          <input
            type="text"
            name="name"
            id=""
            value={newUser.name}
            placeholder="Name"
            onChange={function (e) {
              setNewUser({
                name: e.target.value,
                email: newUser.email,
                password: newUser.password,
              });
            }}
          />
          <input
            type="email"
            name="email"
            id=""
            value={newUser.email}
            placeholder="Email"
            onChange={function (e) {
              setNewUser({
                email: e.target.value,
                name: newUser.name,
                password: newUser.password,
              });
            }}
          />
          <input
            type="password"
            name="password"
            id=""
            value={newUser.password}
            placeholder="Password"
            onChange={function (e) {
              setNewUser({
                password: e.target.value,
                email: newUser.email,
                name: newUser.name,
              });
            }}
          />

          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      <div className="login">
        <h2>Login & Logout</h2>
        <div>
          <input
            type="email"
            name=""
            id=""
            placeholder="email"
            value={loginUser.email}
            onChange={function (e) {
              setLoginUser({
                email: e.target.value,
                password: loginUser.password,
              });
            }}
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="password"
            value={loginUser.password}
            onChange={function (e) {
              setLoginUser({
                email: loginUser.email,
                password: e.target.value,
              });
            }}
            onKeyDown={function (e) {
              if(e.key=='Enter'){
                handleLogin()
              }
            }}
          />
          <button onClick={handleLogin}>Login</button>
          <br />
          <br />
          {currentUser.email && <button onClick={handleLogout}>Logout</button>}
        </div>
      </div>
      <div className="posts">
        <h2>See User details</h2>
        <button onClick={accessApi}>Fetch API</button>
        {currentUser && (
          <h3>
            {currentUser.name} <br /> {currentUser.email}
          </h3>
        )}
      </div>
      <div className="post">
        <h2>Profile Settings</h2>
        {currentUser.email && (
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="Edit name"
              onChange={function (e) {
                setNewUser({
                  name: e.target.value,
                  password: newUser.password,
                });
              }}
            />
            <input
              type="password"
              name=""
              id=""
              placeholder="Change password"
              onChange={function (e) {
                setNewUser({
                  name: newUser.name,
                  password: e.target.value,
                });
              }}
            />
            <button onClick={handleUpdate}>Save</button>
          </div>
        )}
        {!currentUser.email && <h4>Please login</h4>}
      </div>
    </Page>
  );
}

const mapStateToProps = (state) => ({
  ...state,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (userValue) => {
    console.log(userValue);
    dispatch(userAction(userValue));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withCookies(ApiPage));
