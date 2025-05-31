import { sculptureList } from "../../data"

const Nohook=()=>{
    let index=0
    const handleClick=()=>{
        console.log(index)
        index=index+1
    }

    let sculpture=sculptureList[index]

return(
    <>
    <button onClick={handleClick}>Next</button>
    <h2><i>{sculpture.name}</i> by {sculpture.artist}</h2>
    <h3>({index} of {sculptureList.length})</h3>
    <img src={sculpture.url} alt={sculpture.alt}/>
    <p>{sculpture.description}</p>
    </>
)
}
export default Nohook