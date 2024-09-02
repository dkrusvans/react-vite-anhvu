import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { AuthContext } from '../context/auth.context';

const Header = () => {
    const [current, setCurrent] = useState('');
    const {user} = useContext(AuthContext);
    // console.log("check data", user)
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };
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
          label: <Link to={"/products"}>Products</Link>,
          key: 'products',
          icon: <SettingOutlined />,
          
        },
        {
          label: "Cai Dat",
          key: "setting",
          icon: <SettingOutlined />,
          children: [
            {
            label: <Link to={"/login"}>Dang Nhap</Link>,
            key:'login',
            },
            {
              label: "Dang Xuat",
              key:"logout",
            },
          ],
        },
        
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