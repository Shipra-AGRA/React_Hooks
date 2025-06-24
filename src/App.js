import React, { createContext, useContext, useState } from "react";
import ReactDOM from 'react-dom/client';
import HookExample1 from "./HookExample1";
import HookExample2 from "./HookExample2";
import { ThemeProvider } from "./ThemeProvider";
import ChildA from "./components/ChildA";
import "./style.css";

export const UserContext=createContext()

export const ThemeContext=createContext()
const App=()=>{

    const [contextExample,setContextExample]=useState({name:"shipra"})

    const [theme,setTheme]=useState("light")

return(
    <>
        {/* <HookExample1/> */}

        <ThemeProvider>
             <HookExample2/>
        </ThemeProvider>

        <UserContext.Provider value={contextExample}>
            <ThemeContext.Provider value={{theme,setTheme}}>
                <div id="container"
                style={{background:theme==='light'?'beige':"black"}}>
                    <ChildA/>
                </div>
            </ThemeContext.Provider>
        </UserContext.Provider>
    </>
)
}

const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)
export default App