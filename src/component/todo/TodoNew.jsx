const TodoNew = (props) => {
  console.log(">>> check point: ", props)
  const { AddNewTodo } = props;
  AddNewTodo("Anh vu")
    return (
        <div className='todo-new'>
          <input type="text" />
          <button>Add</button>
        </div>
    )
}
export default TodoNew;