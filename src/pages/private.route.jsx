import { useContext } from "react";
import { AuthContext } from "../component/context/auth.context";
import { Link, Navigate } from "react-router-dom";
import { Button, Result } from "antd";

const PrivateRoute = (props) => {
    const { user } = useContext(AuthContext);
    
    if (user && user.id) {
        return (
            <>
                {props.children}
            </>
        )
    }
    // cho chay vao thang trang login
    // return (<Navigate to="/login" replace />);
    return (
        <Result
            status="403"
            title="Unauthorize !"
            subTitle={"Ban can Dang Nhap de truy cap"}
            extra={<Button type="primary">
                <Link to="/">
                    <span>Back to Homepages</span>
                </Link>
            </Button>}
        />
    )
}

export default PrivateRoute;