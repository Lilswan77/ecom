import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Indie Flower"
    ></link>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Poor Story"
    ></link>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=DM Sans"
    ></link>
  </React.StrictMode>
);

reportWebVitals();
