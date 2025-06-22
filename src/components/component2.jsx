import { useEffect, useState } from "react"

const Component2=()=>{
    
    const [seconds,setSeconds]=useState(0)

  useEffect(()=>{
        const interval=setInterval(()=>{
            setSeconds((prevSec)=>
                prevSec+1)
        },1000)

        return()=>{
            clearInterval(interval)
            console.log("interval cleared")
        }
    },[])

    return(
        <div>
            <p>seconds elapsed: {seconds}</p>
        </div>
    )
}
export default Component2