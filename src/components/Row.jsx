import React from "react";
import Cell from "./Cell";

function Row(props) {
  return (
    <div>
      <tr>
        <Cell
          value={props.v1}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v2}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v3}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v4}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v5}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v6}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
        <Cell
          value={props.v7}
          turn={props.turn}
          filledCells={props.filledCells}
          cellToFill={props.cellToFill}
        />
      </tr>
    </div>
  );
}

export default Row;
