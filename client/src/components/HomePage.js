import React from "react";
import LooperPad from "./LooperPad.js";
import HeaderBar from "./HeaderBar.js";

const HomePage = () => {
  return (
    <div>
      <div>
        <HeaderBar />
        <LooperPad />
      </div>
    </div>
  );
};

export default HomePage;
