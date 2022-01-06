import React, { useState } from "react";

export const cellsContext = React.createContext({});

const ContextProvider = (props) => {
  const [filledCells, setFilledCells] = useState({
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

  return (
    <cellsContext.Provider
      value={{
        filledCells: filledCells,
        setFilledCells: setFilledCells
      }}
    >
      {props.children}
    </cellsContext.Provider>
  );
};

export default ContextProvider;
