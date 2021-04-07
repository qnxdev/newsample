import { Link } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

interface PageProps {
  user: any;
  loginControl: any;
  children: any;
}

export default function Page({ user, loginControl, children }: PageProps) {
  return (
    <div className="page">
      <Header currentUser={{}}/>
      {children}
      <style>{`
        .page {
          background: #222;
          color: #fff;
          min-height: 100vh;
        }
        a {
          color: #ccc;
        }
      `}</style>
    </div>
  );
}
