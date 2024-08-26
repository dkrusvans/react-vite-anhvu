import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import ReactLogo from './assets/react.svg';

const App = () => {
  
  const tenhang = "Thép Cuộn ";
  const macuon = "TZ244";
  const data = {
    soluong: "167",
    khoiluong: "29000"
  }
  //{key:value}
  return ( 
    
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
      <TodoNew/>
      <TodoData
        name={tenhang}
        macuon={macuon}
        data={data}
        />
      <div className='todo-image'>
      <img src={ReactLogo} className='logo'/>  
        </div>
      </div>
    
  )
}

export default App
