import type { ButtonProps } from "../types/types";

export default function Button({
  handleRestart,
  setIsStarted,
  setInitialClick,
  initialClick,
  isStarted,
}: ButtonProps) {
  return isStarted && initialClick ? (
    <button
      className="border rounded-sm pt-1 px-2 mb-4 hover:scale-110 cursor-pointer
          transition-transform duration-200"
      onClick={handleRestart}
    >
      <h2 className="mb-1 text-2xl">Restart</h2>
    </button>
  ) : (
    <button
      className="border rounded-sm pt-1 px-2 mb-4 hover:scale-110 cursor-pointer
          transition-transform duration-200"
      onClick={() => {
        setIsStarted(true);
        setInitialClick(true);
      }}
    >
      <h2 className="mb-1 text-2xl">Start</h2>
    </button>
  );
}
