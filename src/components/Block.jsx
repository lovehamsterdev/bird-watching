import anime from "animejs";
import { useRef } from "react";
import styled from "styled-components";
import { useGame } from "../GameContext";

const BlockStyled = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  background-color: ${props => props.bg};
`;

const colorMap = {
  0: "tomato",
  1: "forestgreen",
  2: "dodgerblue",
};

function blinking(target) {
  anime({
    targets: target,
    duration: 100,
    loop: 2,
    opacity: [0, 1],
    easing: "linear",
  });
}

export default function Block({ color }) {
  const { correctColor, onCorrect, onIncorrect } = useGame();
  const blockRef = useRef();

  function check() {
    if (correctColor === color) {
      onCorrect();
    } else {
      blinking(blockRef.current);
      onIncorrect();
    }
  }
  return <BlockStyled ref={blockRef} bg={colorMap[color]} onClick={check} />;
}
