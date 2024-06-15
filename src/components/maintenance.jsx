/* eslint-disable react/no-unescaped-entities */
import { GrVmMaintenance } from "react-icons/gr";

const Maintenance = () =>{
    return(
        <div className="min-h-screen flex flex-col justify-center items-center">
            <GrVmMaintenance size={120}/>
            <h1 className="text-2xl font-mono font-bold text-center text-gray-700 mb-4">Site is under maintenance</h1>
            <p className="text-center text-gray-500 text-lg font-mono">We're working hard to improve the user experience. Stay tuned!</p>
        </div>
    )
}
export default Maintenance