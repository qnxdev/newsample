import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";

export default function LoginPage({ user }) {
    const history=useHistory();
  if (!user) {
    return (
      <Page>
      Login

      </Page>
    );
  } else {
     return<Error/>
  }
}


/*18 -feb*/