import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ContextProvider from "./components/cells-context";
import App from "./App";
const rootElement = document.getElementById("root");

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  rootElement
);
