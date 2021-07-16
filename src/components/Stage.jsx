import styled from "styled-components";
import { useGame } from "../GameContext";
import Block from "./Block";
import FadeIn from "./common/FadeIn";

const StageStyled = styled.div`
  user-select: none;
  border: 1px dashed dodgerblue;
  padding: 20px;
  display: grid;
  grid-template-columns: auto auto auto auto; // 4x4
  gap: 15px;
  width: 600px;
  height: 600px;

  @media (max-width: 500px) {
    width: 300px;
    height: 300px;
    gap: 10px;
  }
`;

export default function Stage() {
  const { colors } = useGame();

  return (
    <FadeIn duration={50} watch={colors}>
      <StageStyled>
        {colors.map(color => (
          <Block color={color} />
        ))}
      </StageStyled>
    </FadeIn>
  );
}
