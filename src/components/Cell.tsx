import type { CellProps } from "../types/types";

const Cell = ({ cell, onClick }: CellProps) => {
  return (
    <div
      className="border flex justify-center items-center rounded-xl cursor-pointer 
                 hover:scale-105 transition-transform duration-200
                 "
      onClick={onClick}
    >
      <h1 className="text-6xl font-bold select-none">{cell.value}</h1>
    </div>
  );
};

export default Cell;
