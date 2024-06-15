/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick })=>{
    return (
        <button className="border w-20 h-20 text-5xl" onClick={onSquareClick}>
            {value}
        </button>
    )
}
export default Square