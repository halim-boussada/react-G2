import { useState } from "react"

function List(){
    const [text , setText] = useState("")
    const [arr , setArr ] = useState(["hello world" , "this is the good" , "full stack dev"])
    
    function addNewElementToList (){
        setArr([...arr , text])
        setText("")
    }

    return <div>
        <input type="text" value={text} onChange={(e)=>{ setText(e.target.value) }} />
        <button onClick={addNewElementToList}>Add</button>
        <ul>
           {arr.map((e , i)=><li key={i}>{e}</li>)}
        </ul>

    </div>
}

export default List