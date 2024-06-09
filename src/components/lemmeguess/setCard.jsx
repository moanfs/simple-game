/* eslint-disable react/prop-types */
import { FaHandPointLeft } from "react-icons/fa";
import { FaHandPointUp } from "react-icons/fa";

const SetCard = ({ set, index, onRespond, onBack, isBackEnabled, showGuessButton, onGuess, guessedDate, onReset}) =>{
    const hidden = !isBackEnabled ? 'hidden' : '';
    const disable = showGuessButton ? 'opacity-50 cursor-not-allowed' :'';
    return(
        <div className="sm:w-72 md:w-96 rounded-sm  ">
            <div className="relative">
                <span className="absolute -z-10  w-full h-full inset-1 bg-violet-500 rounded-xl"></span>
                <button className="absolute py-1 z-10 px-3 -left-6 -top-4 -rotate-[24deg] shadow-3xl bg-violet-500 text-white font-bold">
                    <h3 className="text-center font-mono">{index + 1}/5 Card</h3>
                </button>
                <div className="p-4 border border-black bg-white rounded-xl z-20">
                    <div className="grid grid-cols-4">
                        {set.map((number)=>(
                            <div key={number} className="flex items-center justify-center p-2 font-medium cursor-pointer">
                                {number}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="my-4">
                {guessedDate ? (
                <div className="flex flex-col items-center mt-4">
                    <button className="font-mono text-center flex items-center gap-2 cursor-pointer underline underline-offset-2" onClick={onReset}> <FaHandPointUp /> Play again</button>
                </div>
                ):(
                <>
                    <h1 className="text-center my-2 font-mono">Does your bday exist?</h1>
                    <div className="flex items-center justify-center gap-4 text-black font-mono font-semibold">
                        <button className={`border border-violet-500 hover:bg-violet-500 text-violet-500 rounded hover:text-white px-4 py-1 text-lg ${disable}`} onClick={() => onRespond(false)}>No</button>
                        <button className={`border border-violet-500 hover:bg-violet-500 text-violet-500 rounded hover:text-white px-4 py-1 text-lg ${disable}`}  onClick={() => onRespond(true)}>Ya</button>
                    </div>
                    <div className="flex justify-center mt-3">
                        <button className={`font-mono text-center flex items-center gap-2 cursor-pointer underline underline-offset-2 ${hidden}`} onClick={onBack}><FaHandPointLeft />previous</button>
                    </div>
                    {showGuessButton && !guessedDate &&(  
                    <div className="flex justify-center mt-4">
                        <div className="flex justify-center my-4">
                            <button className='items-center hover:opacity-95 justify-center ring-none rounded-lg shadow font-medium py-2 px-4 font-mono bg-violet-500 border-b-violet-700 ring-white text-white border-b-4 hover:border-0 hover:text-gray-100' onClick={onGuess}>okey lemme guess your bday</button>
                        </div>
                    </div>
                    )}
                </>
                )}
            </div>
        </div>
    )
}
export default SetCard