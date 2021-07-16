import { useState } from "react";
import { useGame } from "../GameContext";
import Heading from "./common/Heading";
import useTimeout from "../hooks/useTimeout";
import styled from "styled-components";
import Button from "./common/Button";
import AccuracyRatio from "./AccuracyRatio";

const GameResultStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const ResultStyled = styled.div`
  display: flex;
  align-items: center;
  margin: 50px;
`;

export default function GameResult() {
  const { result, newGame } = useGame();
  const [show, setShow] = useState(false);

  useTimeout(() => {
    setShow(true);
  }, 1100);

  if (!show) {
    return null;
  }

  return (
    <GameResultStyled>
      <Heading>🐧 Bird watching</Heading>
      <ResultStyled>
        <center>
          <div style={{ color: "tomato", marginBottom: "10px" }}>Incorrect</div>
          <Heading size="sm">{result.incorrect}</Heading>
        </center>
        <AccuracyRatio correct={result.correct} incorrect={result.incorrect} />
        <center>
          <div style={{ color: "dodgerblue", marginBottom: "10px" }}>Correct</div>
          <Heading size="sm">{result.correct}</Heading>
        </center>
      </ResultStyled>
      <Button onClick={newGame} w="300px">
        New game
      </Button>
    </GameResultStyled>
  );
}
