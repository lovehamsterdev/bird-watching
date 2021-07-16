import styled from "styled-components";
import Heading from "./common/Heading";
import Img from "./common/Img";
import gameImg from "../assets/game_img.png";
import Button from "./common/Button";
import { useGame } from "../GameContext";

const GameEntryStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);
`;
export default function GameEntry() {
  const { newGame } = useGame();

  return (
    <GameEntryStyled>
      <Heading color="white">How to play</Heading>
      <Img src={gameImg} />
      <p style={{ color: "white" }}>Select the color that appears the most</p>
      <Button onClick={newGame} w="300px">
        New game
      </Button>
    </GameEntryStyled>
  );
}
