import "./App.css";
import { useEffect, useState } from "react";
import type { Cell } from "./types/types";

function App() {
  const [xArr, setXarr] = useState<number[]>([]);
  const [oArr, setOarr] = useState<number[]>([]);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [initialClick, setInitialClick] = useState<boolean>(false);

  const [boardCells, setBoardCells] = useState<Cell[]>([]);

  // initial start
  useEffect(() => {
    handleRestart();
  }, []);

  const handleRestart = () => {
    setBoardCells([
      { id: 0, value: "" },
      { id: 1, value: "" },
      { id: 2, value: "" },
      { id: 3, value: "" },
      { id: 4, value: "" },
      { id: 5, value: "" },
      { id: 6, value: "" },
      { id: 7, value: "" },
      { id: 8, value: "" },
    ]);
    setXarr([]);
    setOarr([]);
  };

  const handleClickCell = (cellId: number) => {
    if (boardCells[cellId].value !== "") alert("Already clicked");

    setBoardCells(
      boardCells.map((cell) =>
        cell.id === cellId && cell.value === ""
          ? { ...cell, value: turn }
          : cell
      )
    );

    if (turn === "X") {
      setXarr([...xArr, cellId]);
    } else {
      setOarr([...oArr, cellId]);
    }

    setTurn((prev) => (prev === "X" ? "O" : "X"));
  };

  // Jämför win-arrayer med klickade cellarrayer.
  useEffect(() => {
    const winPatterns: Array<Array<number>> = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rader
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // kolumner
      [0, 4, 8],
      [2, 4, 6], // diagonaler
    ];

    if (
      winPatterns.some((pattern) => pattern.every((pos) => xArr.includes(pos)))
    ) {
      alert("X Wins");
    } else if (
      winPatterns.some((pattern) => pattern.every((pos) => oArr.includes(pos)))
    ) {
      alert("O Wins");
    }
  }, [xArr, oArr]);

  return (
    <main className="w-screen h-screen flex flex-col justify-center items-center">
      {isStarted && initialClick ? (
        <button
          className="border rounded-sm pt-1 px-2 mb-4 hover:scale-110 cursor-pointer
          transition-transform duration-200"
          onClick={() => handleRestart()}
        >
          <h2 className="mb-1 text-2xl">Restart</h2>
        </button>
      ) : (
        <button
          className="border rounded-sm pt-1 px-2 mb-4 hover:scale-110 cursor-pointer
          transition-transform duration-200"
          onClick={() => (
            setIsStarted((prev) => (prev === false ? true : false)),
            setInitialClick(true)
          )}
        >
          <h2 className="mb-1 text-2xl">Start</h2>
        </button>
      )}

      <div
        className={`h-1/2 grid-cols-6 grid-rows-6 gap-2 sm:w-xl xl:w-2xl w-full
          ${isStarted ? "grid" : "hidden"}`}
      >
        {boardCells.map((cell, i) => (
          <div
            key={i}
            className={`relative border col-span-2 row-span-2 flex justify-center items-center 
              rounded-xl cursor-pointer hover:scale-105 transition-transform duration-200`}
            onClick={() => handleClickCell(cell.id)}
          >
            <h1 className="absolute text-6xl font-bold select-none">
              {cell.value}
            </h1>
          </div>
        ))}
      </div>
    </main>
  );
}

export default App;
