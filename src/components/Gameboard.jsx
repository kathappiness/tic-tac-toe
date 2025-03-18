import { useState } from "react";

const initialBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]

export default function GameBoard() {
    return (
        <ol id="game-board">
            {initialBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((col, colIndex) =>
                            <li key={colIndex}>{col}</li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    );
}