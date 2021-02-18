import { useHistory } from "react-router-dom";
import Page from "../components/Page";

export default function FaciltiesPage({ user }) {
  let history=useHistory();
  if(user.email){
    return (
      <Page>
        Facilities
        <br />
        {user.name + " " + user.email}
      </Page>
    );
  }
  else{
    history.replace("/login?redirect=facilities");
    return "";
  }
}
