import ReactAudioPlayer from "react-audio-player";
import { useContext } from "react";
import { ObyektContext } from "../state";
import "./style.scss";

export default function Audiyo() {
  const { dat, setDat, neme, setNeme } = useContext(ObyektContext);

  return (
    <>
      <div className="muzik">
        <ReactAudioPlayer  style={{ width:"100%", color: "black" } }
        src={dat?.data?.data?.ayahs[neme]?.audio}
        autoPlay
        controls
        onEnded={() => setNeme(neme + 1)}
      />
      </div>
    </>
  );
};
