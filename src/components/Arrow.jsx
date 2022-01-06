import React, {useState} from "react"

function Arrow(props){
  const [arrowActive, setArrowActive] = useState(false);

  function handleMouseOver() {
    setArrowActive(true);
  }

  function handleMouseLeave() {
    setArrowActive(false);
  }

  function handleClick(){
    let editedColumn = "column" + props.value;
    props.setColumnLast( prev => {
      return {...prev, [editedColumn] : prev.[editedColumn] + 1};
    })
    props.detectCell(props.value,props.columnLast.[editedColumn]+1);
    if (props.turn == "Player 1") {
      props.setTurn("Player 2");
    } else {
      props.setTurn("Player 1");
    }
  
  }

  return(
    <td className={`arrow-down ${!arrowActive ? 'hidden-arrow' : null}`}
    onMouseOver={handleMouseOver} 
    onMouseLeave={handleMouseLeave}
    onClick={!props.gameIsOver ? handleClick : null}></td>
  );
}
export default Arrow;