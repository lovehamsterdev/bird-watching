import { createContext, useContext, useState } from "react";
import { findMostFrequent, randomIntArray } from "./util";

const GameContext = createContext();

export function useGame() {
  return useContext(GameContext);
}

const config = {
  numBlock: 16,
  numColor: 3,
  playTime: 10,
};

export default function GameProvider({ children }) {
  const [colors, setColors] = useState([]);
  const [correctColor, setCorrectColor] = useState(-1);
  const [playing, setPlaying] = useState(true);
  const [time, setTime] = useState(config.playTime);
  const [result, setResult] = useState({
    correct: 0,
    incorrect: 0,
  });
  const [firstTime, setFirstTime] = useState(true);

  function newGameStage() {
    const colors = randomIntArray(config.numBlock, config.numColor);
    setColors(colors);
    setCorrectColor(+findMostFrequent(colors));
  }

  function newGame() {
    setPlaying(true);
    setTime(config.playTime);
    setResult({
      correct: 0,
      incorrect: 0,
    });
    setFirstTime(false);
    newGameStage();
  }

  function endGame() {
    setPlaying(false);
    setTime(0);
  }

  function recordResult(key) {
    setResult(rs => ({ ...rs, [key]: rs[key] + 1 }));
  }

  function onCorrect() {
    recordResult("correct");
    newGameStage();
  }

  function onIncorrect() {
    recordResult("incorrect");
  }

  const value = {
    colors,
    correctColor,
    newGame,
    onCorrect,
    playing,
    time,
    endGame,
    result,
    onIncorrect,
    firstTime,
  };

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
