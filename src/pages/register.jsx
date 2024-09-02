import { Button, Form, Input, message, notification } from "antd";
import { registerUserAPI } from "../services/api.service";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = async (values) => {
        console.log("check value", values)
        //call APIvalues.
        const res = await registerUserAPI(
            values.fullName,
            values.email,
            values.passWords,
            values.phoneNumber);
        if (res.data) {
            notification.success({
                message: "Register User",
                description: "Dang ky user thanh cong !"
            })
            
            navigate("/login");
        } else {
            notification.error({
                message: "Register User Error",
                description:JSON.stringify(res.message)
            })
        }
    }
    return (
        <Form
            form={form}
            layout="vertical"
            // name="basic"
            // labelCol={{
            // span: 8,
            // }}
            // wrapperCol={{
            // span: 16,
            // }}
            // style={{
            // maxWidth: 600,
            // }}
            
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            // autoComplete="off"
        >

        <div style={{
            margin: "50px",
            
            }}>
            
                {/* <Form.Item
                label="Username"
                name="username"
                // rules={[
                //     {
                //     required: true,
                //     message: 'Please input your username!',
                //     },
                // ]}
                >
                    <Input />
                </Form.Item> */}
                <Form.Item
                label="Full Name"
                name="fullName"
                rules={[
                    {
                    required: true,
                    message: 'Please input your fullname!',
                    },
                ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Email!',
                    },
                ]}
                >
                    <Input />
                
                </Form.Item>
                <Form.Item
                label="Passworld"
                name="passWords"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Passworld!',
                    },
                ]}
                >
                    <Input.Password/>
                
                </Form.Item>
                <Form.Item
                label="Phone Number"
                name="phoneNumber"
                rules={[
                    {
                    required: true,
                    // type: "regexp",
                    pattern: new RegExp(/\d+/g),
                    message: 'Wrong format!',
                    },
                ]}
                >
                    <Input />
                
                </Form.Item>
                
                
            <div>
                    <Button onClick={() => form.submit()}
                        type="primary">Register</Button>
                    
                    {/* tu field data */}
                    {/* <Button onClick={() => { 
                        form.setFieldsValue({
                            email: "dkrusvan18091985@gmail.com"
                        })
                        
                    }}>Test</Button> */}
                
            </div>
            </div>
        </Form>
    )
}
export default RegisterPage;