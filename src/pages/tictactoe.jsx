/* eslint-disable react/no-unescaped-entities */

import Board from "../components/tictactoe/board"
import App from "../layout/app"

function Tictactoe (){ 
    return(
        <App>
            <div className="flex flex-col gap-5 items-center justify-center min-h-screen">
                <div>
                    <h1 className="font-mono font-medium text-3xl underline text-center ">Tic Tac Toe</h1>
                </div>
                <div className="">
                    <Board/>
                </div>       
            </div>
        </App>
    )
}
export default Tictactoe

