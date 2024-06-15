/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Board from "../components/tictactoe/board"
import App from "../layout/app"

function Tictactoe (){
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const xIsNext = currentMove % 2 === 0;
    const currentSquares = history[currentMove];

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
      }
    
    function handlePlay(nextSquares) {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
      }

      const moves = history.map((squares, move) => {
        let description = '';
        if (move > 0) {
          description = 'Go to move #' + move;
        } else {
          description = 'History :';
        }
    
        return (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>{description}</button>
          </li>
        );
      });
    
    return(
        <App>
            <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
                <div>
                    <h1 className="font-mono font-medium text-3xl underline text-center ">Tic Tac Toe</h1>
                </div>
                <div className="flex sm:flex-col md:flex-row gap-5">
                    <div className=''>
                        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
                    </div>
                    <div className=''>
                        <ol>{moves}</ol>
                    </div>
                </div>       
            </div>
        </App>
    )
}
export default Tictactoe

