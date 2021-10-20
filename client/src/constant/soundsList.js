import { Howl } from "howler";
import futureFunk from "../loops/120_future_funk_beats_25.mp3";
import stutterBreakbeats from "../loops/120_stutter_breakbeats_16.mp3";
import bassWarwick from "../loops/Bass Warwick heavy funk groove on E 120 BPM.mp3";
import electricGuitar from "../loops/electric guitar coutry slide 120bpm - B.mp3";
import StompySlosh from "../loops/FUD_120_StompySlosh.mp3";
import Tanggu from "../loops/GrooveB_120bpm_Tanggu.mp3";
import mazePolitics from "../loops/MazePolitics_120_Perc.mp3";
import groove from "../loops/PAS3GROOVE1.03B.mp3";
import silentStar from "../loops/SilentStar_120_Em_OrganSynth.mp3";

import futureFunkImg from "../looperLogos/lightning.png";
import stutterImg from "../looperLogos/dynamite.png";
import electricImg from "../looperLogos/guitar.png";
import classicImg from "../looperLogos/classic-guitar.png";
import StompySloshImg from "../looperLogos/cymbals.png";
import TangguImg from "../looperLogos/african-drum.png";
import mazePolitImg from "../looperLogos/ufo.png";
import grooveImg from "../looperLogos/drum.png";
import silentStarImg from "../looperLogos/volume-adjustment.png";

const futureFunkObj = [new Howl({ src: [futureFunk] }), futureFunkImg];
const stutterObj = [new Howl({ src: [stutterBreakbeats] }), stutterImg];
const electricObj = [new Howl({ src: [electricGuitar] }), electricImg];
const classicObg = [new Howl({ src: [bassWarwick] }), classicImg];
const StompySloshObj = [new Howl({ src: [StompySlosh] }), StompySloshImg];
const TangguObj = [new Howl({ src: [Tanggu] }), TangguImg];
const mazePolitObj = [new Howl({ src: [mazePolitics] }), mazePolitImg];
const grooveObj = [new Howl({ src: [groove] }), grooveImg];
const silentStarObj = [new Howl({ src: [silentStar] }), silentStarImg];

export {
  futureFunkObj,
  stutterObj,
  electricObj,
  classicObg,
  StompySloshObj,
  TangguObj,
  mazePolitObj,
  grooveObj,
  silentStarObj,
};
