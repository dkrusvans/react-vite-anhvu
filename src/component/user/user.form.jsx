import { Button, Input, notification } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";



const UserForm = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    
    const handleClickBtn = async () => {
        const res = await createUserAPI(fullName, email, passWords, phoneNumber);
        if (res.data) {
            notification.success({
                message: "Erorr Create User",
                description: " Tao User Thanh Cong !"
                
            })
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            })
        }
            
    }
    return (
        <div className="user-form"style={{margin:"20px"}}>
            <div style={{display:"flex",gap:"10px",flexDirection:"column"}}>
                <div>
                    <span>FullName</span>
                    <Input value={fullName}
                        onChange={(event)=>{setFullname(event.target.value)}}
                    />
                </div>
                <div>
                    <span>Email</span>
                    <Input value={email}
                        onChange={(event) => { setEmail(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Passwords</span>
                    <Input value={passWords}
                        onChange={(event) => { setPasswords(event.target.value) }}
                    />
                </div>
                <div>
                    <span>Phone Number</span>
                    <Input value={phoneNumber}
                        onChange={(event) => { setPhonenumber(event.target.value) }}
                    />
                </div>
                <div> 
                    <Button
                        type="primary"
                        onClick={handleClickBtn}
                    >Create User</Button>
                </div>
            </div>
        </div>
    )
}
export default UserForm;