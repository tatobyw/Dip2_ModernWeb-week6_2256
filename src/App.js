import React from "react";

import "./App.css";
import About from "./compoments/pages/About";
import Contact from "./compoments/pages/Photo";
import Photo from "./compoments/pages/Profile";
import Profile from "./compoments/pages/contact";

const App = () => {
  return (
    <>
      <div className="App-header">
        <h1>Welcome to React</h1>
        <hr />
        <Contact />
        <About />
        <Profile />
        <Photo />
      </div>
    </>
  );
};
export default App;

