import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square(props) { // Controlled Components: Board 컴포넌트에서 값을 받고 언제 클릭되었는지를 Board에 알려줌. (Maintain state X)
  return (
    <button 
      className="square" 
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  );
}

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick(i) {
    const newSquares = squares.slice(); // .slice() creates a copy of the squares array
    newSquares[i] = 'X';
    setSquares(newSquares);
  }

  function renderSquare(i) {
    return (
      <Square
        value={squares[i]} 
        onClick={() =>handleClick(i)}
      />
    );
  }

  const status = 'Next player: X';

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}

function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board />
      </div>
      <div className="game-info">
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  );
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
