import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Page({ user,loginControl,children }) {
  return (
    <div className="header">
      <Header loginControl={loginControl}  user={user}/>
      {children}
      <Footer />
    </div>
  );
}
