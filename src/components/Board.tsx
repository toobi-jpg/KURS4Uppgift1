import Cell from "./Cell";
import type { BoardProps } from "../types/types";

const Board = ({ isStarted, boardCells, handleClickCell }: BoardProps) => {
  return (
    <div
      className={`h-1/2 grid grid-cols-3 grid-rows-3 gap-2 sm:w-xl xl:w-2xl w-full
         ${isStarted ? "grid" : "hidden"}`}
    >
      {boardCells.map((cell) => (
        <Cell
          key={cell.id}
          cell={cell}
          onClick={() => handleClickCell(cell.id)}
        />
      ))}
    </div>
  );
};

export default Board;
