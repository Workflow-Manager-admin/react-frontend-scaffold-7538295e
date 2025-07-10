import React, { useState } from "react";

// PUBLIC_INTERFACE
function TicTacToe() {
  /**
   * A modern, responsive Tic Tac Toe game component adhering to the project's color scheme.
   * - Player turns alternate with "X" and "O"
   * - Shows winner or draw result
   * - Restart button to play again
   */
  const emptyBoard = Array(9).fill(null);
  const [board, setBoard] = useState(emptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  // Calculate winner
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  // On cell click
  function handleClick(idx) {
    if (winner || board[idx]) return;

    const nextBoard = [...board];
    nextBoard[idx] = xIsNext ? "X" : "O";
    setBoard(nextBoard);

    const win = calculateWinner(nextBoard);
    if (win) {
      setWinner(win);
    } else if (nextBoard.every(Boolean)) {
      setWinner("draw");
    } else {
      setXIsNext(!xIsNext);
    }
  }

  // Restart the game
  function handleRestart() {
    setBoard(emptyBoard);
    setXIsNext(true);
    setWinner(null);
  }

  // UI helpers for accessibility and modern style
  function renderStatus() {
    if (winner === "draw") return <span className="ttt-status">It's a draw!</span>;
    if (winner) return <span className="ttt-status">Winner: <b>{winner}</b></span>;
    return (
      <span className="ttt-status">
        Turn: <b style={{ color: "var(--accent)" }}>{xIsNext ? "X" : "O"}</b>
      </span>
    );
  }

  return (
    <section className="main">
      <h1 style={{ marginBottom: "0.5em" }}>Tic Tac Toe</h1>
      <div className="ttt-container">
        {renderStatus()}
        <div className="ttt-board" role="grid" aria-label="Tic Tac Toe board">
          {board.map((cell, idx) => (
            <button
              key={idx}
              className="ttt-cell"
              onClick={() => handleClick(idx)}
              disabled={!!cell || !!winner}
              aria-label={`Cell ${idx + 1}: ${cell ? cell : "empty"}`}
            >
              {cell}
            </button>
          ))}
        </div>
        {(winner || board.every(Boolean)) && (
          <button className="btn ttt-restart-btn" onClick={handleRestart}>
            Restart
          </button>
        )}
      </div>
    </section>
  );
}

export default TicTacToe;
