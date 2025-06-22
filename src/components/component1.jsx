import { useEffect } from "react"

const Component1=()=>{
useEffect(()=>{
    console.log("component called")

    return(()=>{
        console.log("unmount")
    })
})

return(
    <div>Hook Example</div>
)
}
export default Component1