import { useState } from "react";
import Page from "../components/Page";

export default function ApiPage() {
  const [newUser, setNewUser] = useState({ name: "", email: "", password: "" });

  async function handleSignUp() {
    const res = await fetch("https://nextjs-mongodb.now.sh/api/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
      Origin: "https://nextjs-mongodb.now.sh/"
    });
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
              setNewUser({ name: e.target.value, email: newUser.email, password: newUser.password  });
            }}
          />
          <input
            type="email"
            name="email"
            id=""
            value={newUser.email}
            placeholder="Email"
            onChange={function (e) {
              setNewUser({ email: e.target.value, name: newUser.name, password: newUser.password });
            }}
          />
          <input
            type="password"
            name="password"
            id=""
            value={newUser.password}
            placeholder="Password"
            onChange={function (e) {
              setNewUser({ password: e.target.value,  email: newUser.email, name: newUser.name });
            }}
          />
          
          <button onClick={handleSignUp}>Sign Up</button>
        </div>
      </div>
      <div className="login">
        <h2>Login & Logout</h2>
      </div>
      <div className="posts">
        <h2>See posts</h2>
      </div>
      <div className="post">
        <h2>Create Post</h2>
      </div>
    </Page>
  );
}
