import Button from "./components/common/Button";
import Heading from "./components/common/Heading";
import FadeIn from "./components/common/FadeIn";
import Img from "./components/common/Img";
import gameImg from "./assets/game_img.png";

function App() {
  return (
    <FadeIn duration={500}>
      <Button w="300px">Hello</Button>
      <Heading>Large heading</Heading>
      <Heading size="sm">Small heading</Heading>
      <Img src={gameImg} alt="" />
    </FadeIn>
  );
}

export default App;
