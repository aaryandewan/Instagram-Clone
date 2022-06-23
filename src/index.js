import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import FirebaseContext from "./context/firebase";
import { fieldValue, firebase } from "./lib/firebase";
import "./styles/tailwind.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <FirebaseContext.Provider value={{ firebase, fieldValue }}>
    <App />
  </FirebaseContext.Provider>
);
