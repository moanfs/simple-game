/* eslint-disable react/prop-types */
import Navigation from "../components/navigation"

const App = (props) =>{
    return (
        <div className="">
            <Navigation/>
            <main className="">
            {props.children}
            </main>
        </div>
    )
}
export default App