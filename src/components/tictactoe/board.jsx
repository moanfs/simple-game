/* eslint-disable react/prop-types */
import { useState } from 'react';
import Square from "./square"

function Board () {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function handleClick(i) {
      if (currentSquares[i] || calculateWinner(currentSquares)) return;

      const nextSquares = currentSquares.slice();
      nextSquares[i] = xIsNext ? 'X' : 'O';
      // onPlay(nextSquares);
      const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
      setHistory(nextHistory);
      setCurrentMove(nextHistory.length - 1);
    }

    // function jumpTo(nextMove) {
    //   setCurrentMove(nextMove);
    // }

    const winner = calculateWinner(currentSquares);
    let status = '';
    status = winner ? 'Player ' + winner + ' Win' : 'Now Player : ' + (xIsNext ? 'X' : 'O');

    const moves = history.map((squares, move) => {
      let description = '';
      if (move > 0) {
        description = 'Go to move #' + move;
      }   
      return (
        <li key={move}>
          {/* <button onClick={() => jumpTo(move)}>{description}</button> */}
          <p >{description}</p>
        </li>
      );
    })

    const renderSquare = (i) => {
      return (
        <Square value={currentSquares[i]} onSquareClick={() => handleClick(i)} />
      );
    };

    return (
    <div className="grid md:grid-cols-3 gap-8">
        <div className='font-mono font-semibold text-lg flex md:justify-end justify-center'>{status}</div>

        {/* <div>
          <div className='grid grid-cols-3 border'>
          <Square value={currentSquares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={currentSquares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={currentSquares[2]} onSquareClick={() => handleClick(2)} />
          <Square value={currentSquares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={currentSquares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={currentSquares[5]} onSquareClick={() => handleClick(5)} />
          <Square value={currentSquares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={currentSquares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={currentSquares[8]} onSquareClick={() => handleClick(8)} />
          </div>
        </div> */}

        <div className=''>
          <div className='flex items-center'>
            <div className=''>1</div>
            <div className='grid grid-cols-3 mx-2 border-x border-t'>
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
          </div>

          <div className='flex items-center '>
            <div className=''>2</div>
            <div className='grid grid-cols-3 mx-2 border-x'>
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
          </div>

          <div className='flex items-center '>
            <div className=''>3</div>
            <div className='grid grid-cols-3 mx-2 border-x border-b'>
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>

          <div className='px-2'>
            <div className='grid grid-cols-3 ms-2'>
              <div className='text-center'>A</div>
              <div className='text-center'>B</div>
              <div className='text-center'>C</div>
            </div>
          </div>

          {/* <div className='flex justify-center mt-5'>
            <button>Reset Game</button>
          </div> */}

        </div>

        <div className='relative'>
          <div className='absolute'>
            <h1 className='font-mono font-semibold text-lg'>History :</h1>
            <ol>{moves}</ol>
          </div>
      </div>
    </div>
    )
}

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
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
}

export default Board