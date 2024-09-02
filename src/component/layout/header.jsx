import { Link, useNavigate, } from 'react-router-dom';
import { Menu, message } from 'antd';
import { AliwangwangOutlined, AppstoreOutlined, LoginOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';
import { logoutAPI } from '../../services/api.service';



const Header = () => {
  const [current, setCurrent] = useState('');
  const navigate = useNavigate();
  const { user, setUser } = useContext(AuthContext);
    // console.log("check data", user)
  const onClick = (e) => {
    // console.log('click ', e);
    setCurrent(e.key);
  };
  const handleLogOut = async() => {
    const res = await logoutAPI();
    if (res.data) {
      //clear Data
      localStorage.removeItem("access_token");
      setUser({
            email: "",
            phone: "",
            fullName: "",
            role: "",
            avatar: "",
            id: ""
      })
      message.success("Logout Thanh Cong !");
      // redirect to home
      navigate("/");
    }
  }
  const items = [
    {
      label: <Link to={"/"}>Home</Link>,
      key: 'home',
      icon: <MailOutlined />,
    },
    {
      label: <Link to={"/users"}>Users</Link>,
      key: 'users',
      icon: <AppstoreOutlined />,
          
    },
    {
      label: <Link to={"/products"}>Lệnh Nhập Xuất</Link>,
      key: 'products',
      icon: <SettingOutlined />,
          
    },
    // neu nhu ko co user.id thi bien mat
    ...(!user.id ? [{
      label: <Link to={"/login"}>Dang nhap</Link>,
      key: 'login',
      icon: <LoginOutlined />,
      
    }]: []),
    // neu nhu co user.id thi show ra
    ...(user.id ? [{
        label: `Wecome ${user.fullName}`,
        key: "setting",
        icon: <AliwangwangOutlined />,
        children: [
          {
            label: <span onClick={()=>handleLogOut()}>LogOut</span>,
            key: 'logout',
          },
        ],
    }]: []),
  ];
    // sử dụng Link để ko load lại trang
    //sử dụng NavLink tạo thanh điều hướng đẹp hơn
    return (
        <Menu onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    
    )
}
export default Header;