import { NavLink } from "react-router-dom"
import App from "../layout/app"

const Home = () =>{
    return(
        <App>
            <div className="sm:w-11/12 md:w-10/12 lg:w-6/12 h-screen mx-auto">
                <div className="mt-32">
                    <h1 className="font-mono text-2xl">Simple Game :</h1>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 my-12">
                    <NavLink to='/lemme-guess'>
                        <div className="border-2 rounded-md p-2">
                            <img src="/img/lemmeguess.png" alt="lemme guess" className="w-full" />
                            <div className="mx-4">
                                <h1 className="font-mono font-bold">Guess bday</h1>
                                <p className="text-sm text-[#252525]/70">Lemme guess bday is a childhood game where you guess your friend bday, i build this game using react.</p>
                            </div>
                        </div>
                    </NavLink>
                </div>
                <div className="flex items-center justify-center mt-20 font-mono text-black/60 hover:underline text-sm">
                    <a href="https://halomoan-xi.vercel.app/" target="_blank">Build by Halomoan</a>
                </div>
            </div>
        </App>
    )
}

export default Home