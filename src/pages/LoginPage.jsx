import { useState } from "react";
import { Router, useHistory, useLocation } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";
import bcrypt from "bcryptjs";
import { useEffect } from "react";
import NewsPage from "./NewsPage";
import "../styles/Pages.css";

export default function LoginPage({ loggedUser, signUp, loginControl, err }) {
  const history = useHistory();
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const [user, setUser] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [err2, setErr2] = useState("");
  const [selected, setSelect] = useState("Why are you signing up man?");
  const [dropdown, setDrop] = useState(false);
  const [range, setRange] = useState("");
  const [ccode, setCode] = useState("+91");

  const copyPhone = () => {
    let copyText = document.getElementById("copyPhone");
    copyText.select();
    document.execCommand("copy");
  };


  let clist = [
    {
      code: "+91",
      len: "10",
      cname: "India",
    },
    {
      code: "+1",
      len: "11",
      cname: "US",
    },
    {
      code: "+44",
      len: " 9",
      cname: "Schweiz",
    },
  ];

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
    if (currentUser.password == "regex") {
      loginControl(currentUser);
    } else {
      setErr2("Password should contain numbers, letters, special");
    }
  };

  const handleChange = (e) => {
    switch (e.target.id) {
      case "name":
        if (e.target.value !== "") {
          let regex = /dfjgbfd/;
          if (regex.test()) {
            setUser({
              name: e.target.value,
              email: user.email || "",
              password: user.password || "",
            });
          } else {
            setErr2(" sfkgns\\");
          }
        } else {
          alert("Name is invalid");
        }
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
          type="email"
          id="email"
          onChange={handleLoginChange}
          placeholder="mail"
          required
        />
        <input
          type="password"
          id="password"
          onChange={handleLoginChange}
          placeholder="pw"
          required
        />
        <input
          type="file"
          name="r"
          id="2"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        />
        {err2}
        <button onClick={handleLoginSubmit}>Login</button>
        {err}
      </div>
      <br />
      <div className="signup">
        Sign Up
        <input
          defaultValue="Rohin k"
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
        <select
          value={selected}
          onChange={(e) => {
            setSelect(e.target.value);
            console.log(selected);
          }}
          name="why"
        >
          <option value="">Why are you signing up man?</option>
          <option value="nothiung">nothiung</option>
          <option value="none">none</option>
          <option value="every">every</option>
        </select>
        <div className="custom-dropdown">
          <div
            className="drop-action"
            onClick={() => {
              if (dropdown == true) {
                setDrop(false);
              } else {
                setDrop(true);
              }
            }}
          >
            {" "}
            {/*It will toggle the dropdown state*/}
            {selected}
          </div>
          {dropdown && (
            <div className="custom-dropdown-container">
              <div
                className="drop-item"
                id="Why are you signing up man?"
                onClick={(e) => {
                  setSelect(e.target.id);
                  setDrop(false);
                  console.log(selected);
                }}
              >
                Why are you signing up man?
              </div>
              <div
                className="drop-item"
                id="nothiung"
                onClick={(e) => {
                  setSelect(e.target.id);
                  setDrop(false);
                  console.log(selected);
                }}
              >
                nothiung
              </div>
              <div
                className="drop-item"
                id="none"
                onClick={(e) => {
                  setSelect(e.target.id);
                  setDrop(false);
                  console.log(selected);
                }}
              >
                none
              </div>
              <div
                className="drop-item"
                id="every"
                onClick={(e) => {
                  setSelect(e.target.id);
                  setDrop(false);
                  console.log(selected);
                }}
              >
                every
              </div>
            </div>
          )}
        </div>
        <br />
        <br />
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="50"
          value={range}
          onChange={(e) => {
            setRange(e.target.value);
            console.log(e.target.value);
          }}
        ></input>{" "}
        {}
      </div>
      <div className="range">{range}</div>
      <br />
      <br />
      <select name="ccode" id="" onChange={(e)=>{setCode(e.target.value);console.log(ccode);}}>
        {clist.map((i) => (
          <option value={i.code} >{i.cname}{" "}({i.code})</option>
        ))}
      </select>
      <input
      readOnly
        type="tel"
        id="copyPhone"
        name="phone"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
        required
        value="+919605613222"
        maxLength={clist[clist.findIndex(i=>i.code==ccode)].len}
      />
  <button onClick={copyPhone}>Copy Phone number</button>
      <style jsx>{`
        .range {
          font-size: ${0 + parseInt(range)}px;
        }
        select, option, input{
          font-size: 1rem
        }
      `}</style>
    </Page>
  );
}


/*18 -feb*/