import Nohook from "./src/Hooks/Nohook"
import ReactDOM from 'react-dom/client';

const App=()=>{
    return(
        <Nohook/>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App