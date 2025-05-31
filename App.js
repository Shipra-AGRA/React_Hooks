import Nohook from "./src/Hooks/Nohook"
import ReactDOM from 'react-dom/client';
import Usestatehook from "./src/Hooks/Usestatehook";

const App=()=>{
    return(
        <>
        <Nohook/>
        <Usestatehook/>
        </>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App