import React from "react";
import ReactDOM from 'react-dom/client';
import HookExample1 from "./HookExample1";
import HookExample2 from "./HookExample2";
import { ThemeProvider } from "./ThemeProvider";

const App=()=>{
return(
    <>
        {/* <HookExample1/> */}

        <ThemeProvider>
             <HookExample2/>
        </ThemeProvider>
    </>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App