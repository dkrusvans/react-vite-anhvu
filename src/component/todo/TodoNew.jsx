import { useState } from "react";

const TodoNew = (props) => {
  // useState hook (getter/setter)
  const [valueInput, setValueInput] = useState("")
  const { AddNewTodo } = props;
  // AddNewTodo("Anh vu")
  const handleClick = () => {
    AddNewTodo(valueInput);
    setValueInput("");
    
  }
  const handleOnChange = (name) => {
    setValueInput(name)
  }
    return (
        <div className='todo-new'>
        <input type="text"
          onChange={(event) => handleOnChange(event.target.value)}
          value={valueInput}
        />
        <button
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >Add</button>
        <div>
          My Value Data is = {valueInput}
        </div>
        </div>
    )
}

export default TodoNew;