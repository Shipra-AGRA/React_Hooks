import { useState } from "react"
import { sculptureList } from "../../data"

function Usestatehook(){
    const [index,setIndex]=useState(0)
    const [showMore,setShowMore]=useState(false)
    const sculpture=sculptureList[index]

return(
    <>
    <button onClick={()=>{setIndex(index+1)}}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>({index} of {sculptureList.length})</h3>
    <button onClick={()=>{setShowMore(!showMore)}}>{showMore?"Hide":"Show"}details</button>
    <img src={sculpture.url} alt={sculpture.alt}/>
    {showMore && <p>{sculpture.description}</p>}
    </>
)
}
export default Usestatehook