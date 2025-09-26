import { useState, useEffect } from "react";
import type { CellType } from "../types/types";

export const useGameLogic = () => {
  const [boardCells, setBoardCells] = useState<CellType[]>([]);
  const [xArr, setXarr] = useState<number[]>([]);
  const [oArr, setOarr] = useState<number[]>([]);
  const [turn, setTurn] = useState<"X" | "O">("X");
  const [isStarted, setIsStarted] = useState<boolean>(false);
  const [initialClick, setInitialClick] = useState<boolean>(false);

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
    if (boardCells[cellId].value !== "") {
      alert("Already clicked");
      return;
    }

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
    const WIN_PATTERNS: number[][] = [
      [0, 1, 2], // rader
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6], // kolumner
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8], // diagonaler
      [2, 4, 6],
    ];

    if (
      WIN_PATTERNS.some((pattern) => pattern.every((pos) => xArr.includes(pos)))
    ) {
      alert("X Wins");
    } else if (
      WIN_PATTERNS.some((pattern) => pattern.every((pos) => oArr.includes(pos)))
    ) {
      alert("O Wins");
    }
  }, [xArr, oArr]);

  return {
    boardCells,
    handleClickCell,
    handleRestart,
    isStarted,
    setIsStarted,
    initialClick,
    setInitialClick,
  };
};
