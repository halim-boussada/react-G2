import { useState } from "react";
import "./TodoList.css";
function TodoList() {
  const [todos, setTodos] = useState([
    { title: "go shopping", isCompleted: true },
    { title: "study js", isCompleted: false },
  ]);
 const [text , setText] = useState("")

    
    function addNewElementToList (){
        setTodos([...todos , { title : text , isCompleted : false }])
        setText("")
    }

    function ElementClicked(index){
        const copy = Object.create(todos) 
        copy[index].isCompleted = !copy[index].isCompleted
        setTodos(copy)
    }
  return (
    <div>
    <input type="text" value={text} onChange={(e)=>{ setText(e.target.value) }} />
      <button onClick={addNewElementToList} >Add</button>
      <ul className="list">
        {todos.map((e , i) => {
          return (
            <li >
              {e.title} 
              <span className={e.isCompleted == true ? "success" : "pending"}>
                   {e.isCompleted == true ? "completed" : "Pendign"}
              </span>
              <button onClick={()=>{ ElementClicked(i) }}>toggle status</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
