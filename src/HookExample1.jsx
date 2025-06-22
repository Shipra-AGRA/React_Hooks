import { useEffect, useState } from "react"
import Component1 from "./components/component1"
import Component2 from "./components/component2"
import DataFetcher from "./components/DataFetcher"

const HookExample1 = () => {
    const [count, setCount] = useState(0)

    const [input, setInput] = useState("")

    const [toggle,setToggle]=useState(true)

    const [toggleBtn,setToggleBtn]=useState(true)

    useEffect(()=>{
        console.log("useEffect Called")
    },[count])


    return (
        <div>
            <p>You Clicked {count} times</p>
            <button onClick={() => { setCount(count + 1) }}>increment</button>

            <br />
            <br />

            <input onChange={(event) => { setInput(event.target.value) }} value={input} />
            <p>you typed: {input}</p>


            {toggle && <Component1/>}
            <button onClick={()=>{setToggle(!toggle)}}>toggle</button>
            

            {toggleBtn && <Component2/>}
            <button onClick={()=>{setToggleBtn(!toggleBtn)}}>toggleBtn</button>


            <DataFetcher/>
        </div>
    )
}
export default HookExample1