import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import ReactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([
    { id: 1, name: "Learning REACTJS" },
    { id: 2, name: "Watching Youtube" }
  ])
    const tenhang = "Thép Cuộn ";
    const macuon = "TZ244";
    const data = {
      soluong: "167",
      khoiluong: "29000"
  }
  
  const AddNewTodo = (name) => {
    alert(`Call Me ${name}`)
  }
  
  //{key:value}
  return ( 
    
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo = {AddNewTodo}
      />
      <TodoData
        name={tenhang}
        macuon={macuon}
        data={data}
        todoList={todoList}
        
        />
      <div className='todo-image'>
      <img src={ReactLogo} className='logo'/>  
        </div>
      </div>
    
  )
}

export default App
