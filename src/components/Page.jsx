import { Link } from "react-router-dom";
import Header from "./Header";

export default function Page({ children }) {
  return (
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
    </div>
  );
}
