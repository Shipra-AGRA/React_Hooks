import { useEffect, useRef, useState } from "react"
import ThemeSwitcher from "./components/ThemeSwitcher"

const HookExample2=()=>{

    //useref hook is use to create mutable objects which can persists across re-renders

    //a state triggers a re-renders for a component while useRef does not triggers re-renders for a component
    //but the value persists across renders
    const [input,setInput]=useState("")
    const inputRef=useRef(null)

    const [count1,setCount1]=useState(0)

    const count2=useRef(0)

    useEffect(()=>{
        console.log("abcf")
        inputRef.current && inputRef.current.focus()
        inputRef.current.style.backgroundColor="red"
    },[])
return(
    <div>
        <input type="text" placeholder="type something..." 
        onChange={(e)=>{setInput(e.target.value)}} ref={inputRef} value={input}/>
        <p>You Typed: {input}</p>

        <p>count using state: {count1}</p>
        <button onClick={()=>{setCount1(count1+1)}}>increment using state</button>

        <p>count using ref: {count2.current}</p>
        <button onClick={()=>{count2.current+=1}}>increment using ref</button>

        <br/><br/>
        <ThemeSwitcher/>
    </div>
)
}
export default HookExample2