/* eslint-disable react/prop-types */
const Square = ({ value, onSquareClick })=>{
    return (
        <button className="border w-16 h-16" onClick={onSquareClick}>
            {value}
        </button>
    )
}
export default Square