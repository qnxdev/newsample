import { useEffect } from "react";
import { useState } from "react";
import { Router, useHistory } from "react-router-dom";
import Page from "../components/Page";



export default function GamePage() {
  const [view, setView] = useState("initial");
  const [dime, setDime] = useState(2);
  const [time, setTime] = useState(60);


  useEffect(() => {
    if(view=="game" && time > 0){
        setTimeout(() => {
            setTime(time - 1);
          }, 1000);
    }
    if (time == 0) {
      setView("error");
    }
  });
  let init = [2, 3, 4, 5];
  return (
    <Page>
      <div className="timeout">
        {view == "game" && <h1 id="time">{time}s <br/>Your score: {dime}</h1>}
      </div>
      {view == "initial" && (
        <div className="initial">
          <h1>Start with</h1>
          {init.map((i) => (
            <>
              <br />
              <button
                onClick={() => {
                  setView("game");
                  setDime(i);
                }}
              >
                {i}x{i}
              </button>
              <br />
            </>
          ))}
        </div>
      )}
      {view == "game" && (
        <div className="game">
          <GameTable
            dimension={dime}
            pass={(next) => setDime(next)}
            fail={() => setView("error")}
          />
        </div>
      )}
      {view == "error" && (
        <div className="error">
          <h1>Game Over !</h1>
          <br/>
          <h1>Your score: {dime}</h1>
        </div>
      )}
      <br />
      <br />
      <button
        onClick={() => {
            window.location.reload();
        }}
      >
        Reset
      </button>
    </Page>
  );
}

const GameTable = ({ dimension, pass, fail }) => {
  const [differentRow, setRow] = useState(
    Math.floor(Math.random() * dimension)
  );
  const [differentCol, setCol] = useState(
    Math.floor(Math.random() * dimension)
  );

  let rows = [];
  for (let i = 0; i < dimension; i++) {
    let col = [];
    for (let j = 0; j < dimension; j++) {
      col.push(
        <td
          className={
            i == differentRow && j == differentCol ? "different" : "col"
          }
          onClick={
            i == differentRow && j == differentCol
              ? () => {
                  pass(dimension + 1);
                  setCol(Math.floor(Math.random() * dimension + 1));
                  setRow(Math.floor(Math.random() * dimension + 1));
                }
              : () => fail()
          }
        >
          {j}
        </td>
      );
    }
    
    rows.push(<tr className="row">{col}</tr>);
  }
  return (
    <>
      <table>{rows}</table>
      <style jsx>{`
        .col {
          background: #777;
          color: #fff;
        }
        .different {
          background: #222;
          color: red;
        }
        td {
          cursor: pointer;
        }
      `}</style>
    </>
  );
};
