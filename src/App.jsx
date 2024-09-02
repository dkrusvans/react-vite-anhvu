import { Spin } from 'antd';
import Header from './component/layout/header';
import Footer from './component/layout/footer';
import { Outlet } from 'react-router-dom';
import { getAccountAPI } from './services/api.service';
import { useContext, useEffect } from 'react';
import { AuthContext } from './component/context/auth.context';


const App = () => {
  const { setUser, isAppLoading, setIsAppLoading } = useContext(AuthContext);
  useEffect(() => {
    fetchUserInfo();
  }, [])
  // ham tao delay loading
  // const delay = (milSeconds) => {
  //   return new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve()
  //     }, milSeconds)
  //   })
  // }

  const fetchUserInfo = async () => {
    const res = await getAccountAPI();
    // await delay(3000)
    if (res.data) {
      setUser(res.data.user)
    }
    setIsAppLoading(false);
  }
  
  //{key:value}
  //sử dụng Outlet để tạo các trang con ko chứa pages cha
  return ( 
  <>
      {isAppLoading === true ?
        <div style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          
        }}>
          <Spin />
        </div>
        :
        <>
          <Header/>
          <Outlet/>
          <Footer/>
        </>
      }
  </>
  )
}

export default App
