import { Button, Input } from "antd";
import { useState } from "react";
import axios from "axios";


const UserForm = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");
    
    const handleClickBtn = () => {
        const URL_BACKEND="http://localhost:8080/api/v1/user";
        const data={
            fullName:fullName,
            email: email,
            password: passWords,
            phone: phoneNumber
        }
        axios.post(URL_BACKEND,data)
        console.log("Check: ",{fullName,email,passWords,phoneNumber})
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