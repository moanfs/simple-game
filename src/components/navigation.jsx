import { useState } from "react";
import { NavLink } from "react-router-dom"
import { VscGithubAlt } from "react-icons/vsc";
import { SiGamebanana } from "react-icons/si";
import { PiHamburger } from "react-icons/pi";
import { TbMeatOff } from "react-icons/tb";
import { FaHandPointLeft } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navigation = () => {
    const [toggle, setToggle] = useState(false);
    function openMenu(){
        setToggle(true);
    }

    function closeMenu(){
        setToggle(false);
    }
    return(
        <nav className="fixed inset-x-0 z-30 mx-auto border bg-inherit p-3 shadow top-6 rounded-3xl sm:w-11/12 md:w-10/12 lg:w-6/12">
            <div className="flex items-center justify-between mx-2">
                <div className="flex shrink-0">
                    <NavLink to='/'>
                        <div className="p-2 hover:ring-1 rounded-full hover:ring-yellow-500 hover:bg-yellow-500  hover:text-white text-yellow-500">
                            <SiGamebanana size={30} className=""/>
                        </div>
                    </NavLink>
                </div>
                <div className="hidden md:flex md:items-center md:justify-center md:gap-5 font-medium text-md font-mono">
                    <NavLink to='/lemme-guess' className={({isActive}) => isActive ? 'underline decoration-wavy opacity-100 font-semibold decoration-violet-500': 'opacity-80' }>Guess bday</NavLink>
                    <NavLink to='/tic-tac-toe' className={({isActive}) => isActive ? 'underline decoration-wavy opacity-100 font-semibold decoration-violet-500': 'opacity-80' }>TicTacToe</NavLink>
                </div>
                <div className="hidden md:flex md:items-center justify-end gap-3">
                    <NavLink to='https://github.com/moanfs' target="_blank">
                        <div className="p-2 hover:ring-1 rounded-full ring-[#252525] hover:bg-[#252525] hover:text-white">
                            <VscGithubAlt size={30} className=""/>
                        </div>
                    </NavLink>
                </div>
                <div className="md:hidden">
                {toggle ? (
                    <>
                        <ul className="bg-[#fff] right-0 grid h-screen w-[60%] fixed z-40 transition duration-1000 ease-in-out lg:hidden content-center space-y-6 top-0 pl-[1.19rem] to-[#373A40] shadow-xl font-mono font-medium text-md">
                            <li className="absolute top-9 right-9 text-red-500 hover:ring-1 hover:bg-red-500 hover:text-white ring-red-500 rounded-full p-2 "><TbMeatOff onClick={closeMenu} size={30}/></li>
                            <li>
                                <NavLink to='/' end>  
                                    {({ isActive }) => ( 
                                        <div className="flex items-center gap-2">
                                            Home {isActive ? <FaHandPointLeft /> : ''} 
                                        </div>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/lemme-guess' end>
                                    {({ isActive }) => ( 
                                        <div className="flex items-center gap-2">
                                        Guess bday {isActive ? <FaHandPointLeft /> : ''}
                                        </div>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/tic-tac-toe'>
                                    {({ isActive }) => ( 
                                        <div className="flex items-center gap-2">
                                        TicTacToe {isActive ? <FaHandPointLeft /> : ''}
                                        </div>
                                    )}
                                </NavLink>
                            </li>

                            <li className="flex flex-col ">
                                <h1 className="text-sm">Follow me on:</h1>
                                <div className="flex items-center mt-2 gap-2">
                                    <NavLink to='https://www.instagram.com/moan.fs/' target="_blank">
                                        <div className="p-1 hover:ring-1 rounded-xl ring-[#db329b] hover:bg-[#db329b] hover:text-white">
                                            <FaInstagram size={24}/>
                                        </div>
                                    </NavLink>
                                    <NavLink to='https://github.com/moanfs' target="_blank">
                                        <div className="p-1 hover:ring-1 rounded-xl ring-[#252525] hover:bg-[#252525] hover:text-white">
                                            <VscGithubAlt size={24}/>
                                        </div>
                                    </NavLink>
                                </div>
                            </li>
                        </ul>
                        <div className="left-0 opacity-100 bg-black/60 lg:hidden transition duration-500  ease-in-out z-50 fixed top-0 w-[40%] h-screen"></div>
                    </>
                ):(
                <div className="p-2 hover:ring-1 rounded-full ring-violet-500 hover:bg-violet-500 hover:text-white text-violet-500">
                    <PiHamburger onClick={openMenu}  size={30} className=""/>
                </div>
                )}
                </div>
            </div>
        </nav>
    )
}

export default Navigation