import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router";
import { MainApp } from "./09-useContext/MainApp";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <BrowserRouter>
    <MainApp />
  </BrowserRouter>

  //</StrictMode>
);
