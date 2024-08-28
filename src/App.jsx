import './component/todo/todo.css'
import TodoData from './component/todo/TodoData'
import TodoNew from './component/todo/TodoNew'
import ReactLogo from './assets/react.svg';
import { useState } from 'react';
import Header from './component/layout/header';
import Footer from './component/layout/footer';

const App = () => {
  // sử dụng Hook thực thi nhiều lần
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning REACTJS" },
    // { id: 2, name: "Watching Youtube" }
  ])
  const AddNewTodo = (name) => {
    const newTodo = {
      id: randomIntFromInterval(1,1000000),
      name: name
    }
    setTodoList([...todoList,newTodo])
    
  }
  const randomIntFromInterval = (min, max) => {
    // min and max included
      return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const deleteTodo = (id) => {
    // Xóa Dòng ý nghia code là giữ lại những item không được chọn
    const newTodo = todoList.filter(item => item.id !== id)
    // gắn giá trị ngược vào hàm setTodoList
    setTodoList(newTodo)
    
  }
  
  //{key:value}
  return ( 
    <>
      <Header/>
      <div className="todo-container">
        <div className="todo-title">Todo List</div>
      <TodoNew
        AddNewTodo = {AddNewTodo}
      />
      {/* Câu điều Kiện nếu phần tử lớn hơn 0 thì xóa logo ngược lại */}
      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
          deleteTodo={deleteTodo}
        />
        :
        <div className='todo-image'>
          <img src={ReactLogo} className='logo' />
        </div>
      }
      
      </div>
      <Footer/>
    </>
  )
}

export default App
