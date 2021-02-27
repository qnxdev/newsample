import React, { useEffect } from "react";
import { useState } from "react";
import Page from "../components/Page";

export default function GamePage2({ isTrue }) {
  console.log(isTrue);
  const [view, setView] = useState("initial");
  const [dime, setDime] = useState(6);
  let arr=[1,2,3];
  


  let init = [6];
  let table = [];
  console.log(isTrue);

  for (let i = 0; i < dime; i++) {
    let columns = [];
    for (let j = 0; j < dime; j++) {
      columns.push(Math.floor(Math.random() * 60));
    }
    table.push(columns);
  }

  return (
    <Page>
      {view == "initial" && (
        <div className="initial">
          <h2>Lets Start with</h2>
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
            dimension={6}
            table={table}
            pass={(next) => {
              if (next > 6) next = 6;
              setDime(next);
            }}
            fail={() => setView("error")}
          />
        </div>
      )}

      {view == "error" && (
        <div className="error">
          <h1>GAME OVERRRR...!!!!</h1>
        </div>
      )}
    </Page>
  );
}
const GameTable = ({ dimension, pass, fail, table }) => {
  const [random, setRandom] = useState("");

  let rows = [];

  for (let i = 0; i < dimension; i++) {
    let columns = [];

    for (let j = 0; j < dimension; j++) {
      columns.push(
        <td
          id={i * 6 + j}
          onClick={(e) => {
            if (e.target.innerHTML == random) {
              e.target.innerHTML = "";
              setRandom(list[Math.floor(Math.random() * list.length)]);
            } else {
              console.log(
                e.target.innerHTML == random,
                e.target.innerHTML,
                random
              );
            }
          }}
        >
          {Math.floor(Math.random() * 60)}
        </td>
      );
    }
    rows.push(<tr>{columns}</tr>);
  }

  let list = [];
  useEffect(
    function () {
      if (!random || random == "") {
        for (let i = 0; i < 36; i++) {
          let x = document.getElementById(i.toString());
          if (x && x.innerHTML !== "") {
            list.push(x.innerHTML);
          }
        }
        if (list.length > 0) {
          setRandom(list[Math.floor(Math.random() * list.length)]);
        } else {
          for (let i = 0; i < 36; i++) {
            let x = document.getElementById(i.toString());
            if (x && x.innerHTML !== "") {
              list.push(x.innerHTML);
            }
          }
          setRandom(list[Math.floor(Math.random() * list.length)]);
        }
      }
      /* 
      for (let i = 0; i < 36; i++) {
        let x = document.getElementById(i.toString());
        if (x && x.innerHTML != "") {
          list.push(x.innerHTML);
        }
      }
      setRandom(list[Math.floor(Math.random() * list.length)]); */
    },
    [random]
  );
  return (
    <>
      {random}
      <table onClick={() => console.log(random)}>
        {table.map((row) => (
          <tr>
            {row.map((col) => (
              <td
                id={table.indexOf(row) * 6 + row.indexOf(col)}
                onClick={(e) => {
                  if (col == random) {
                    console.log(random, list);
                    e.target.innerHTML = "";
                    for (let i = 0; i < 36; i++) {
                      let x = document.getElementById(i.toString());
                      if (x && x.innerHTML !== "") {
                        list.push(x.innerHTML);
                      }
                    }
                    setRandom(list[Math.floor(Math.random() * list.length)]);
                  } else {
                    console.log(random, list);
                  }
                }}
              >
                {col}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};
