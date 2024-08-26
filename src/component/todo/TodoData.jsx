const TodoData = (props) => {
    const {name,age,data } = props;
    // console.log(">>> check props: ", props)
    return (
        <div className='todo-data'>
            <div>My Name is {name}</div>
          <div>Learning REACTJS</div>
          <div>Watching Youtube</div>
        </div>
    )
}
export default TodoData;