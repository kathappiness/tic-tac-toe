const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ onSelectSquare, turns }) {
  // deriving state
  let gameBoard = initialBoard;
  for (const turn of turns) {
    // destructuring turn object
    const { square, player } = turn;
    // destructuring turn object second time
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  // const [gameBoard, setGameBoard] = useState(initialBoard);
  // function handleClick(rowIndex, colIndex) {
  //     setGameBoard((prevGameBoard) => {
  //         const updatedBoard = [...prevGameBoard.map((innerArray) => [...innerArray])];
  //         updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //         return updatedBoard;
  //     });
  //     onSelectSquare();
  // }
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  onClick={() => onSelectSquare(rowIndex, colIndex)}
                  disabled={playerSymbol !== null}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
