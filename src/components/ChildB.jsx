import { useContext } from "react"
import { UserContext } from "../App"
import { ThemeContext } from "../App"

const ChildB=()=>{
    const User=useContext(UserContext)

    const {theme,setTheme}=useContext(ThemeContext)

    const handleClick=()=>{
        const changeTheme=theme==='light'?'dark':"light"
        setTheme(changeTheme)
    }
return(
    <>
    <div>name is:{User.name}</div>

    <div>Theme is: {theme}</div>
    <button onClick={handleClick}>change theme</button>
    </>
    
)
}
export default ChildB