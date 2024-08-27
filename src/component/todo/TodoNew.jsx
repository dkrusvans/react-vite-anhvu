const TodoNew = (props) => {
  console.log(">>> check point: ", props)
  const { AddNewTodo } = props;
  // AddNewTodo("Anh vu")
  const handleClick = () => {
    alert("Click Me")
  }
  const handleOnChange = () => {
    console.log("handleOnChange")
  }
    return (
        <div className='todo-new'>
        <input type="text"
          onChange={handleOnChange}

        />
        <button
          style={{ cursor: "pointer" }}
          onClick={handleClick}
        >Add</button>
        </div>
    )
}
export default TodoNew;