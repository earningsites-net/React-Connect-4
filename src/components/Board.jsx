import React, { useContext, useEffect, useState } from "react";
import Row from "./Row";
import Arrow from "./Arrow";
import { cellsContext } from "./cells-context";
import checkWinner from "./checkWinner";

function Board() {
  const context = useContext(cellsContext);

  const [gameIsOver, setGameOver] = useState(false);
  const [turn, setTurn] = useState("Player 1");
  const [columnLast, setColumnLast] = useState({
    column1: 0,
    column2: 0,
    column3: 0,
    column4: 0,
    column5: 0,
    column6: 0,
    column7: 0
  });

  function detectCell(column, row) {
    let cell = "cell" + column + row;
    context.setFilledCells((prev) => {
      return { ...prev, [cell]: turn };
    });
  }

  //context viene inoltrato correttamente, valutare come fare setturn o setgameover
  function setWinner() {
    if (checkWinner(context.filledCells).setGameOver == true) {
      setTurn(checkWinner(context.filledCells).setTurn);
      setGameOver(checkWinner(context.filledCells).setGameOver);
    }
  }

  function initializeGame() {
    setGameOver(false);
    setTurn("Player 1");
    setColumnLast({
      column1: 0,
      column2: 0,
      column3: 0,
      column4: 0,
      column5: 0,
      column6: 0,
      column7: 0
    });
    context.setFilledCells({
      cell11: "",
      cell12: "",
      cell13: "",
      cell14: "",
      cell15: "",
      cell16: "",
      cell21: "",
      cell22: "",
      cell23: "",
      cell24: "",
      cell25: "",
      cell26: "",
      cell31: "",
      cell32: "",
      cell33: "",
      cell34: "",
      cell35: "",
      cell36: "",
      cell41: "",
      cell42: "",
      cell43: "",
      cell44: "",
      cell45: "",
      cell46: "",
      cell51: "",
      cell52: "",
      cell53: "",
      cell54: "",
      cell55: "",
      cell56: "",
      cell61: "",
      cell62: "",
      cell63: "",
      cell64: "",
      cell65: "",
      cell66: "",
      cell71: "",
      cell72: "",
      cell73: "",
      cell74: "",
      cell75: "",
      cell76: ""
    });
  }

  useEffect(setWinner, [context.filledCells]);

  return (
    <div className="board">
      <table className="arrows">
        <tr>
          <Arrow
            value="1"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="2"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="3"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="4"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="5"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="6"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
          <Arrow
            value="7"
            turn={turn}
            setTurn={setTurn}
            columnLast={columnLast}
            setColumnLast={setColumnLast}
            detectCell={detectCell}
            gameIsOver={gameIsOver}
          />
        </tr>
      </table>
      <table className="">
        <Row
          v1="16"
          v2="26"
          v3="36"
          v4="46"
          v5="56"
          v6="66"
          v7="76"
          turn={turn}
        />
        <Row
          v1="15"
          v2="25"
          v3="35"
          v4="45"
          v5="55"
          v6="65"
          v7="75"
          turn={turn}
        />
        <Row
          v1="14"
          v2="24"
          v3="34"
          v4="44"
          v5="54"
          v6="64"
          v7="74"
          turn={turn}
        />
        <Row
          v1="13"
          v2="23"
          v3="33"
          v4="43"
          v5="53"
          v6="63"
          v7="73"
          turn={turn}
        />
        <Row
          v1="12"
          v2="22"
          v3="32"
          v4="42"
          v5="52"
          v6="62"
          v7="72"
          turn={turn}
        />
        <Row
          v1="11"
          v2="21"
          v3="31"
          v4="41"
          v5="51"
          v6="61"
          v7="71"
          turn={turn}
        />
      </table>
      <p>Turn: {turn}</p>
      {gameIsOver && <button onClick={initializeGame}>Play again?</button>}
    </div>
  );
}

export default Board;
