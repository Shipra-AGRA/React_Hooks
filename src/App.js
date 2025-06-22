import React from "react";
import ReactDOM from 'react-dom/client';
import HookExample1 from "./HookExample1";

const App=()=>{
return(
    <HookExample1/>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App