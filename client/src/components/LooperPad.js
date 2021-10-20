import React, { useState, useEffect } from "react";
import axios from "axios";
import Pad from "./Pad";
import StopAndPlay from "./StopAndPlay";

import {
  futureFunkObj,
  stutterObj,
  electricObj,
  classicObg,
  StompySloshObj,
  TangguObj,
  mazePolitObj,
  grooveObj,
  silentStarObj,
} from "../constant/soundsList";

const LooperPad = () => {
  const [userName, setUserName] = useState("Unknown");
  const [isPlay, setIsPlay] = useState(false);
  const [loopNotActive, setLoopNotActive] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [currPlay, setCurrPlay] = useState([]);
  const [recordList, setRecordList] = useState([]);

  const [pad, setPad] = useState([
    { tuneObj: futureFunkObj[0], icon: futureFunkObj[1], toggleIsOn: false },
    { tuneObj: stutterObj[0], icon: stutterObj[1], toggleIsOn: false },
    { tuneObj: electricObj[0], icon: electricObj[1], toggleIsOn: false },
    { tuneObj: classicObg[0], icon: classicObg[1], toggleIsOn: false },
    { tuneObj: StompySloshObj[0], icon: StompySloshObj[1], toggleIsOn: false },
    { tuneObj: TangguObj[0], icon: TangguObj[1], toggleIsOn: false },
    { tuneObj: mazePolitObj[0], icon: mazePolitObj[1], toggleIsOn: false },
    { tuneObj: grooveObj[0], icon: grooveObj[1], toggleIsOn: false },
    { tuneObj: silentStarObj[0], icon: silentStarObj[1], toggleIsOn: false },
  ]);

  const postData = (UName, clickStop, clickPlay, clickRec) => {
    axios.post("/posts", {
      id: UName + " at " + Date().toLocaleString(),
      clickStop: clickStop,
      clickPlay: clickPlay,
      clickRec: clickRec,
    });
  };

  const nextLoop = pad
    .filter((pad) => {
      return pad.toggleIsOn;
    })
    .map((obj) => obj.tuneObj);

  useEffect(() => {
    if (isPlay) {
      handlePlay();
    }
  }, [loopNotActive]);

  const handlePlay = () => {
    if (!currPlay && !nextLoop) {
      return null;
    }
    currPlay?.forEach((howl) => {
      howl.stop();
    });
    nextLoop[nextLoop.length - 1].on("end", () => {
      setLoopNotActive(!loopNotActive);
    });
    nextLoop.forEach((howl) => {
      howl.play();
    });
    setCurrPlay(nextLoop);
    setIsPlay(true);
    postData(userName, " ", "Pressed", "");
    if (isRecording) {
      setRecordList([...recordList, nextLoop]);
    }
  };

  const handleStop = () => {
    setIsPlay(false);
    currPlay.forEach((s) => {
      s.stop();
    });
    postData(userName, "Pressed", "", "");
  };

  const handleRec = () => {
    !isRecording
      ? setIsRecording(true) && setRecordList([])
      : setIsRecording(false);
    postData(userName, "", "", "Pressed");
  };

  const playElement = async (howl) => {
    howl.forEach((element) => element.play());
  };

  const playRecordedSounds = async (e) => {
    setRecordList(recordList);
    currPlay?.forEach((howl) => {
      howl.stop();
    });

    recordList.forEach((h) => {
      playElement(h);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(event.target.username.value);
    if (event.target.username.value !== "") {
      alert("Welcome " + event.target.username.value);
    }
  };

  return (
    <div className="looper-container">
      <form onSubmit={handleSubmit}>
        <label>
          <h3>User Name:</h3>
          <input
            type="text"
            name="username"
            placeholder="Enter your User Name"
          />
        </label>
        <button type="submit" className="submit-style">
          Submit
        </button>
      </form>
      <br></br>
      <div className="pad-container">
        {pad.map((data) => (
          <Pad data={data} pad={pad} setPad={setPad} />
        ))}
      </div>
      <StopAndPlay
        handlePlay={handlePlay}
        handleStop={handleStop}
        handleRec={handleRec}
        playRecordedSounds={playRecordedSounds}
        isPlay={isPlay}
        isRecording={isRecording}
        recordList={recordList}
      />
    </div>
  );
};

export default LooperPad;
