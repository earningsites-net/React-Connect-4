import React from "react";
import { cellsContext } from "./cells-context";

function checkWinner(filledCells, setTurn, setGameOver) {
  //horizontal check
  for (var y = 1; y <= 6; y++) {
    for (var i = 1; i <= 4; i++) {
      if (
        filledCells["cell" + i + y] !== "" &&
        filledCells["cell" + i + y] === filledCells["cell" + (i + 1) + y] &&
        filledCells["cell" + (i + 1) + y] ===
          filledCells["cell" + (i + 2) + y] &&
        filledCells["cell" + (i + 2) + y] === filledCells["cell" + (i + 3) + y]
      ) {
        return {
          setTurn: filledCells["cell" + i + y] + " wins",
          setGameOver: true
        };
      }
    }
  }
  //vertical check
  for (var x = 1; x <= 7; x++) {
    for (var z = 1; z <= 3; z++) {
      if (
        filledCells["cell" + x + z] !== "" &&
        filledCells["cell" + x + z] === filledCells["cell" + x + (z + 1)] &&
        filledCells["cell" + x + (z + 1)] ===
          filledCells["cell" + x + (z + 2)] &&
        filledCells["cell" + x + (z + 2)] === filledCells["cell" + x + (z + 3)]
      ) {
        return {
          setTurn: filledCells["cell" + x + z] + " wins",
          setGameOver: true
        };
      }
    }
  }
  //diagonal check
  //diagonal 11,22,33,...
  for (var d = 1; d <= 3; d++) {
    if (
      filledCells["cell" + d + d] !== "" &&
      filledCells["cell" + d + d] === filledCells["cell" + (d + 1) + (d + 1)] &&
      filledCells["cell" + (d + 1) + (d + 1)] ===
        filledCells["cell" + (d + 2) + (d + 2)] &&
      filledCells["cell" + (d + 2) + (d + 2)] ===
        filledCells["cell" + (d + 3) + (d + 3)]
    ) {
      return {
        setTurn: filledCells["cell" + d + d] + " wins",
        setGameOver: true
      };
    }
  }
  //diagonal 12,23,34
  for (var d1 = 1; d1 <= 2; d1++) {
    if (
      filledCells["cell" + d1 + (d1 + 1)] !== "" &&
      filledCells["cell" + d1 + (d1 + 1)] ===
        filledCells["cell" + (d1 + 1) + (d1 + 2)] &&
      filledCells["cell" + (d1 + 1) + (d1 + 2)] ===
        filledCells["cell" + (d1 + 2) + (d1 + 3)] &&
      filledCells["cell" + (d1 + 2) + (d1 + 3)] ===
        filledCells["cell" + (d1 + 3) + (d1 + 4)]
    ) {
      return {
        setTurn: filledCells["cell" + d1 + d1] + " wins",
        setGameOver: true
      };
    }
  }
  //diagonal 21,32,43
  for (var d2 = 1; d2 <= 3; d2++) {
    if (
      filledCells["cell" + (d2 + 1) + d2] !== "" &&
      filledCells["cell" + (d2 + 1) + d2] ===
        filledCells["cell" + (d2 + 2) + (d2 + 1)] &&
      filledCells["cell" + (d2 + 2) + (d2 + 1)] ===
        filledCells["cell" + (d2 + 3) + (d2 + 2)] &&
      filledCells["cell" + (d2 + 3) + (d2 + 2)] ===
        filledCells["cell" + (d2 + 4) + (d2 + 3)]
    ) {
      return {
        setTurn: filledCells["cell" + (d2 + 1) + d2] + " wins",
        setGameOver: true
      };
    }
  }
  //diagonal 31,42,53,...
  for (var d3 = 1; d3 <= 2; d3++) {
    if (
      filledCells["cell" + (d3 + 2) + d3] !== "" &&
      filledCells["cell" + (d3 + 2) + d3] ===
        filledCells["cell" + (d3 + 3) + (d3 + 1)] &&
      filledCells["cell" + (d3 + 3) + (d3 + 1)] ===
        filledCells["cell" + (d3 + 4) + (d3 + 2)] &&
      filledCells["cell" + (d3 + 4) + (d3 + 2)] ===
        filledCells["cell" + (d3 + 5) + (d3 + 3)]
    ) {
      return {
        setTurn: filledCells["cell" + (d3 + 2) + d3] + " wins",
        setGameOver: true
      };
    }
  }

  if (
    filledCells.cell13 !== "" &&
    filledCells.cell13 === filledCells.cell24 &&
    filledCells.cell24 === filledCells.cell35 &&
    filledCells.cell35 === filledCells.cell46
  ) {
    return {
      setTurn: filledCells.cell13 + " wins",
      setGameOver: true
    };
  }
  if (
    filledCells.cell41 !== "" &&
    filledCells.cell41 === filledCells.cell52 &&
    filledCells.cell52 === filledCells.cell63 &&
    filledCells.cell63 === filledCells.cell74
  ) {
    return {
      setTurn: filledCells.cell13 + " wins",
      setGameOver: true
    };
  }
  if (
    filledCells.cell14 !== "" &&
    filledCells.cell23 === filledCells.cell52 &&
    filledCells.cell32 === filledCells.cell63 &&
    filledCells.cell41 === filledCells.cell74
  ) {
    return {
      setTurn: filledCells.cell13 + " wins",
      setGameOver: true
    };
  }
  if (
    filledCells.cell46 !== "" &&
    filledCells.cell55 === filledCells.cell52 &&
    filledCells.cell64 === filledCells.cell63 &&
    filledCells.cell73 === filledCells.cell74
  ) {
    return {
      setTurn: filledCells.cell13 + " wins",
      setGameOver: true
    };
  }

  //diagonal 16,25,34

  for (var d4 = 1; d4 <= 3; d4++) {
    if (
      filledCells["cell" + d4 + (7 - d4)] !== "" &&
      filledCells["cell" + d4 + (7 - d4)] ===
        filledCells["cell" + (d4 + 1) + (6 - d4)] &&
      filledCells["cell" + (d4 + 1) + (6 - d4)] ===
        filledCells["cell" + (d4 + 2) + (5 - d4)] &&
      filledCells["cell" + (d4 + 2) + (5 - d4)] ===
        filledCells["cell" + (d4 + 3) + (4 - d4)]
    ) {
      return {
        setTurn: filledCells["cell" + d4 + (7 - d4)] + " wins",
        setGameOver: true
      };
    }
  }

  //diagonal 15,24,33,...
  for (var d5 = 1; d5 <= 2; d5++) {
    if (
      filledCells["cell" + d5 + (6 - d5)] !== "" &&
      filledCells["cell" + d5 + (6 - d5)] ===
        filledCells["cell" + (d5 + 1) + (5 - d5)] &&
      filledCells["cell" + (d5 + 1) + (5 - d5)] ===
        filledCells["cell" + (d5 + 2) + (4 - d5)] &&
      filledCells["cell" + (d5 + 2) + (4 - d5)] ===
        filledCells["cell" + (d5 + 3) + (3 - d5)]
    ) {
      return {
        setTurn: filledCells["cell" + d5 + (6 - d5)] + " wins",
        setGameOver: true
      };
    }
  }

  //diagonal 26,35,44,...
  for (var d6 = 1; d6 <= 3; d6++) {
    if (
      filledCells["cell" + (8 - d6) + d6] !== "" &&
      filledCells["cell" + (8 - d6) + d6] ===
        filledCells["cell" + (7 - d6) + (d6 + 1)] &&
      filledCells["cell" + (7 - d6) + (d6 + 1)] ===
        filledCells["cell" + (6 - d6) + (d6 + 2)] &&
      filledCells["cell" + (6 - d6) + (d6 + 2)] ===
        filledCells["cell" + (5 - d6) + (d6 + 3)]
    ) {
      return {
        setTurn: filledCells["cell" + (8 - d6) + d6] + " wins",
        setGameOver: true
      };
    }
  }

  //diagonal 36,45,54...
  for (var d7 = 2; d7 <= 3; d7++) {
    if (
      filledCells["cell" + (9 - d7) + d7] !== "" &&
      filledCells["cell" + (9 - d7) + d7] ===
        filledCells["cell" + (8 - d7) + (d7 + 1)] &&
      filledCells["cell" + (8 - d7) + (d7 + 1)] ===
        filledCells["cell" + (7 - d7) + (d7 + 2)] &&
      filledCells["cell" + (7 - d7) + (d7 + 2)] ===
        filledCells["cell" + (6 - d7) + (d7 + 3)]
    ) {
      return {
        setTurn: filledCells["cell" + (9 - d7) + d7] + " wins",
        setGameOver: true
      };
    }
  }

  return { setGameOver: false };
}

export default checkWinner;
