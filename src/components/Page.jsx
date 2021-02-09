import { Link } from "react-router-dom";
import Header from "./Header";

export default function Page({ children }) {
  return (
    <div className="header">
      <Header />
      {children}
    </div>
  );
}
