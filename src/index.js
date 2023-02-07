import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

function tick() {
  const element = (
    <div>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </div>
  );
  root.render(element);
}

setInterval(tick, 1000);

reportWebVitals();
