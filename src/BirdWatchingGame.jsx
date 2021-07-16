import GameResult from "./components/GameResult";
import Stage from "./components/Stage";
import Timer from "./components/Timer";
import TimeUp from "./components/TimeUp";
import { useGame } from "./GameContext";
import GameEntry from "./components/GameEntry";

export default function BirdWatchingGame() {
  const { playing, firstTime } = useGame();

  if (firstTime) {
    return <GameEntry />;
  }

  if (!playing) {
    return (
      <div>
        <TimeUp />
        <GameResult />
      </div>
    );
  }

  return (
    <div>
      <Timer />
      <Stage />
    </div>
  );
}
