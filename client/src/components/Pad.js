import React from "react";
import "./Pad.css";

const Pad = ({ data, pad, setPad }) => {
  const handleClick = () => {
    let newArr = pad.map((p) => {
      p.tuneObj === data.tuneObj && (p.toggleIsOn = !p.toggleIsOn);
      return p;
    });
    setPad(newArr);
  };

  return (
    <div
      id="pad"
      className={data.toggleIsOn ? "single-pad-on" : "single-pad-off"}
      onClick={(e) => {
        handleClick(e.target);
      }}
    >
      <img
        className="logos-style"
        src={data.icon}
        id="icon"
        alt="there is a problem"
      />
    </div>
  );
};

export default Pad;
