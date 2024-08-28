
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import { Outlet } from 'react-router-dom';


const App = () => {
  
  
  //{key:value}
  //sử dụng Outlet để tạo các trang con ko chứa pages cha
  return ( 
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
