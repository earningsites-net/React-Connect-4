import React, {useContext} from "react";
import {cellsContext} from './cells-context' 


function Cell(props) {
  const context = useContext(cellsContext);
  let style = { backgroundColor: "" };
  let cell = "cell" + props.value;
  if (context.filledCells.[cell] != "") {
  if (context.filledCells.[cell] == "Player 1") {
    style = { backgroundColor: "red" };
  } else {
    style = { backgroundColor: "yellow" };
  }
}
  return (
    <td className="cell" style={style}>
      
    </td>
  );
}

export default Cell;
