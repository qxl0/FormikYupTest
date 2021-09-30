import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { FormikApp } from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <FormikApp />
  </StrictMode>,
  rootElement
);
