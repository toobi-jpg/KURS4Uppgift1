export type CellType = {
  id: number;
  value: "" | "X" | "O";
};

export type CellProps = {
  cell: CellType;
  onClick: () => void;
};

export type BoardProps = {
  isStarted: boolean;
  boardCells: CellType[];
  handleClickCell: (id: number) => void;
};

export type ButtonProps = {
  handleRestart: () => void;
  setIsStarted: React.Dispatch<React.SetStateAction<boolean>>;
  setInitialClick: React.Dispatch<React.SetStateAction<boolean>>;
  initialClick: boolean;
  isStarted: boolean;
};
