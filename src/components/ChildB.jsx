import { useContext } from "react"
import { UserContext } from "../App"

const ChildB=()=>{
    const User=useContext(UserContext)
    console.log("nanna",User)
return(
    <div>name is:{User.name}</div>
)
}
export default ChildB