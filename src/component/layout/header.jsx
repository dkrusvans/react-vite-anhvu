import { Link, NavLink } from 'react-router-dom';
import './header.css'
const Header = () => {
    // sử dụng Link để ko load lại trang
    //sử dụng NavLink tạo thanh điều hướng đẹp hơn
    return (
    <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/users">Users</NavLink></li>
        <li><NavLink to="/products">Products</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
    </ul>
    
    )
}
export default Header;