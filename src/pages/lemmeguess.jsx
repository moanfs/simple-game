import { useState } from 'react'
import SetCard from '../components/lemmeguess/setCard';
import App from '../layout/app';
import { GoInfo } from "react-icons/go";

const sets = [
  [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31],
  [2, 3, 6, 7, 10, 11, 14, 15, 18, 19, 22, 23, 26, 27, 30, 31],
  [4, 5, 6, 7, 12, 13, 14, 15, 20, 21, 22, 23, 28, 29, 30, 31],
  [8, 9, 10, 11, 12, 13, 14, 15, 24, 25, 26, 27, 28, 29, 30, 31],
  [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
];

const LemmeGuess = () => {
  const [responses, setResponses] = useState(new Array(sets.length).fill(null));
  const [currentSet, setCurrentSet] = useState(0);
  const [guessedDate, setGuessedDate] = useState(null);

  const handleResponse = (answer) => {
    const newResponses = [...responses];
    newResponses[currentSet] = answer;
    setResponses(newResponses);
    if (currentSet < sets.length - 1) {
      setCurrentSet(currentSet + 1);
    } 
    else {
        // Trigger the guessing process once the last set is responded
        calculateBirthday(newResponses);
      }
  };

  const handleBack = () => {    
    if (currentSet > 0) {
      setCurrentSet(currentSet - 1);
    }
  };

  const calculateBirthday = (responses) => {
    let birthday = 0;
    sets.forEach((set, index ) => {
      if (responses[index]) {
        birthday += 1 << index;
      }
    });
    setGuessedDate(birthday);
  };

  const resetGame = () => {
    setResponses(new Array(sets.length).fill(null));
    setCurrentSet(0);
    setGuessedDate(null);
  };

  return (
    <App>
        <div className='sm:w-11/12 md:w-10/12 lg:w-6/12 mx-auto flex flex-col justify-center items-center h-screen'>
            {/* <div className=""> */}
                <div className='mb-12 text-center flex items-center gap-2'>
                    <h1 className='font-mono font-medium text-3xl underline text-center '>lemme guess </h1>
                    <GoInfo size={18} />
                    {/* <span className='text-red-500 font-mono text-sm'>Beta test v1</span> */}
                </div>
                <SetCard 
                set={sets[currentSet]} 
                index={currentSet} 
                // onRespond={(answer) => handleResponse(answer)}
                onRespond={handleResponse}
                onBack={handleBack}
                isBackEnabled={currentSet > 0} 
                // showGuessButton={currentSet === sets.length}
                // onGuess={calculateBirthday}
                guessedDate={guessedDate}
                onReset={resetGame}
                />
                 {/* { !guessedDate &&(  
                    <div className="flex justify-center mt-4">
                        <div className="flex justify-center my-4">
                            <button className='items-center hover:opacity-95 justify-center ring-none rounded-lg shadow font-medium py-2 px-4 font-mono bg-violet-500 border-b-violet-700 ring-white text-white border-b-4 hover:border-0 hover:text-gray-100' onClick={onGuess}>okey lemme guess your bday</button>
                        </div>
                    </div>
                    )} */}
                {guessedDate && 
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-mono text-2xl'>your bday is <span className='underline underline-offset-2'>{guessedDate}</span> right? </h2>
                </div>
                }
            {/* </div> */}
        </div>
        
    </App>
  )
}

export default LemmeGuess
