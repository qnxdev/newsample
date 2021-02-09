import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import Page from "../components/Page";
import Error from "./ErorrPage";
import LoginPage from "./LoginPage";

export default function AdmissionPage({ user }) {
  const history = useHistory();
  if (!user) {
    return (
        <Page>
            Admission
        </Page>
    );
  } else {
    return <LoginPage />;
  }
}
