import { useState } from "react";

const TodoNew = (props) => {
  // useState hook (getter/setter)
  const [valueInput, setValueInput] = useState("Anh Vu")
  const { AddNewTodo } = props;
  // AddNewTodo("Anh vu")
  const handleClick = () => {
    console.log("Check valueInput",valueInput)
  }
  const handleOnChange = (name) => {
    setValueInput(name)
  }
    return (
        <div className='todo-new'>
        <input type="text"
          onChange={(event) => handleOnChange(event.target.value)}
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