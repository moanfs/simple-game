import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import LemmeGuess from "../pages/lemmeguess";
import Tictactoe from "../pages/tictactoe";
import NotFound from "../components/notFound";
// import {lazy } from 'react';

// const Home = lazy(() => import("../pages/home"));
// const LemmeGuess = lazy(() => import("../pages/lemmeguess"))

const routerConfig  = [
    {
        path: "/",
        element: <Home/>,
    },
    {
        path: "lemme-guess",
        element: <LemmeGuess/>,
    },
    {
        path: "tic-tac-toe",
        element: <Tictactoe/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    },
   
]
const router = createBrowserRouter(routerConfig);

export default router