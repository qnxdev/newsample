import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Page({ user,loginControl,children }) {
  return (
<<<<<<< HEAD
    <div className="page" >
      <Header />
      {children}
      <style jsx>{`

       .page{
         background: #222;
         color: #fff;
         min-height: 100vh;
       }
       a{
         color: #ccc;
       }
      `}</style>
=======
    <div className="header">
      <Header loginControl={loginControl}  user={user}/>
      {children}
      <Footer />
>>>>>>> main
    </div>
  );
}
