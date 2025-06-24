import React, { createContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import HookExample1 from "./HookExample1";
import HookExample2 from "./HookExample2";
import { ThemeProvider } from "./ThemeProvider";
import ChildA from "./components/ChildA";

export const UserContext=createContext()
const App=()=>{

    const [contextExample,setContextExample]=useState({name:"shipra"})
return(
    <>
        {/* <HookExample1/> */}

        <ThemeProvider>
             <HookExample2/>
        </ThemeProvider>

        <UserContext.Provider value={contextExample}>
            <ChildA/>
        </UserContext.Provider>
    </>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App