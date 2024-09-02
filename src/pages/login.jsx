import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Col, Divider, Form, Input, message, notification, Row } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api.service";
import { useContext, useState } from "react";
import { AuthContext } from "../component/context/auth.context";


const LoginPage = () => {

    const [loading, setLoading] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const {setUser} = useContext(AuthContext); 

    const onFinish = async (values) => {
        setLoading(true)
        const res = await loginAPI(values.email, values.password);
        if (res.data) {
            message.success("Dang nhap thanh cong");
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/");
        } else {
            notification.error({
                message: "Error Login",
                description:JSON.stringify(res.message)
            })
        }
        setLoading(false)
    }
    return (
        <Row justify={"center"} style={{ marginTop: "30px" }}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin: "5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Dang Nhap</legend>
                    <Form
                        form={form}
                        layout="vertical"
                        onFinish={onFinish}
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                            {
                                required: true,
                                message: 'Email khong duoc de trong !',
                                },
                                {
                                    type: "email",
                                    message:"Email khong dung dinh dang",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                            {
                                required: true,
                                message: 'Please input your Password !',
                            },
                            ]}
                        >
                            <Input.Password onKeyDown={(event) => {
                                if (event.key === "Enter") form.submit()
                        }}/>
                        </Form.Item>
                        <Form.Item>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems:"center"
                            }}>
                                <Button
                                    loading={loading}
                                    type="primary" onClick={() => form.submit()}>
                                    Login
                                </Button>
                                <Link to="/">Go to HomePages <ArrowRightOutlined/></Link>
                            </div>
                        </Form.Item>
                    </Form>
                    <Divider />
                    <div style={{textAlign:"center"}}>Chua cho tai khoan ? <Link to={"/register"}>Dang ky</Link></div>
                </fieldset>
            </Col>

        </Row>
    )
}
export default LoginPage;