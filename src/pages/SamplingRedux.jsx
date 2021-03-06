import { useState } from "react";
import Loader from "../components/Loader";
import Page from "../components/Page";

export default function Sampler() {
  const [btcValue, setBtc] = useState(0.0);
  const [btcValue2, setBtc2] = useState(0.0);
  const [user,setUser] = useState({});


  async function Getter() {
    let btc = await fetch("https://blockchain.info/tobtc?currency=USD&value=1");
    if (btc.ok) {
      setBtc(await btc.json());
    }
  }
  async function Getter2() {
    try {
      let btc = await fetch(
        "https://blockchain.info/tobtc?currency=INR&value=1"
      );

      if (btc.ok) {
        setBtc2(await btc.json());
      }
    } catch (e) {
      console.log(e);
    }
  }
  Getter();
  Getter2();

  async function Sender() {
    try {
      let newUser = await fetch("https://reqres.in/api/users", {
        method: "POST",
        body: JSON.stringify({
          name: "morpheus",
          job: "leader",
        }),
      });

      if (newUser.ok) {
        setUser(await newUser.json());
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <Page>
      <h1>
        1 BTC = {btcValue == 0.0 ? <Loader /> : parseInt(1 / btcValue)} USD
      </h1>
      <h1>
        1 BTC = {btcValue2 == 0.0 ? <Loader /> : parseInt(1 / btcValue2)} INR
      </h1>
      <button onClick={Getter}>Get Rate</button>

      <br/>
      <br/>
      <h1>{JSON.stringify(user)}</h1>
      <button onClick={Sender}>Set User</button>
    </Page>
  );
}
