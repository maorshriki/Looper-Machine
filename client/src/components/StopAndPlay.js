import PlayIcon from "@material-ui/icons/PlayCircleOutline";
import StopIcon from "@material-ui/icons/Stop";
import RecIcon from "@material-ui/icons/Album";
import { Button } from "@material-ui/core";

const StopAndPlay = ({
  handlePlay,
  handleStop,
  handleRec,
  playRecordedSounds,
  isPlay,
  isRecording,
  recordList,
}) => {
  return (
    <div className="control-panel">
      <div className="play-stop">
        <PlayIcon
          onClick={handlePlay}
          style={{
            fontSize: "20rem",
            color: isPlay && "green",
          }}
        />
        <StopIcon
          onClick={handleStop}
          style={{
            fontSize: "20rem",
            color: isPlay && "red",
          }}
        />
        <RecIcon
          className="rec"
          style={{
            fontSize: "20rem",
            color: isRecording && "blue",
          }}
          onClick={!isPlay ? (e) => e.preventDefault() : handleRec}
        />
        <br></br>
        {recordList && (
          <Button
            onClick={(e) => playRecordedSounds(e)}
            style={{
              fontSize: "5rem",
              width: "100%",
            }}
          >
            play recorded
          </Button>
        )}
      </div>
    </div>
  );
};

export default StopAndPlay;
