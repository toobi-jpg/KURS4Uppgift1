import { useEffect } from "react";
import "./App.css";
import Board from "./components/Board";
import Button from "./components/Button";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const game = useGameLogic();

  useEffect(() => {
    game.handleRestart();
  }, []);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      <Button {...game} />
      <Board {...game} />
    </main>
  );
}

export default App;
