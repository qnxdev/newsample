import { useState } from "react";
import { Link } from "react-router-dom";
import Page from "../components/Page";

export default function AboutPage({ darkMode }) {
  const [count, setCount] = useState(0);
  return (
    <Page>
      <div className="container">
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          Decrement
        </button>
        <button onClick={() => setCount(0)}>Reset</button>

        <h1>Count: {count}</h1>

        <Link to="/">back</Link>
        <style>{`.container{
        background: ${darkMode ? "#000" : "#fff"};
        color: ${darkMode ? "#fff" : "#000"}
      }`}</style>
      </div>
    </Page>
  );
}
