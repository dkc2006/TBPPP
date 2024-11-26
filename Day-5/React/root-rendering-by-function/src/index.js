import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Data } from "./components/Data";
import { UserName } from "./components/UserName";

const root = ReactDOM.createRoot(document.getElementById("root"));
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
const root2 = ReactDOM.createRoot(document.getElementById("root2"));

root.render(
  <React.StrictMode>
    <App name="Deepanshu Khandelwal" age={18} />
    <Data />
    <UserName />
  </React.StrictMode>
);

root1.render(
  <React.StrictMode>
    <Data />
  </React.StrictMode>
);

root2.render(
  <React.StrictMode>
    <UserName />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
