import styled from "styled-components";
import BirdWatchingGame from "./BirdWatchingGame";
import GameProvider from "./GameContext";

const AppStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
function App() {
  return (
    <AppStyled>
      <GameProvider>
        <BirdWatchingGame />
      </GameProvider>
    </AppStyled>
  );
}

export default App;
