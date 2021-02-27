import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";
import './LoginPage.css'

export default function LoginPage({ user }) {
  const history = useHistory();
  if (!user) {
    return (
      <Page>
        <div className="LoginPage" id="lp">
          <h4>LOGIN</h4>
          <button>Login</button>
        </div>
        <style jsx>{`

          #lp {
          }
          div {
          }
        `}</style>
      </Page>
    );
  } else {
    return <Error />;
  }
}

/*18 -feb*/
