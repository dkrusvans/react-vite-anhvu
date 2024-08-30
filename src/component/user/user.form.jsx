import { Button, Input, notification, Modal } from "antd";
import { useState } from "react";
import { createUserAPI } from "../../services/api.service";




const UserForm = (props) => {
    const { loadUser } = props;
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(false);
    
    
    const handleSubmitBtn = async () => {
        
        const res = await createUserAPI(fullName, email, passWords, phoneNumber);
        if (res.data) {
            notification.success({
                message: "Erorr Create User",
                description: " Tao User Thanh Cong !"
                
            })
            resetAndCloseModal();
            await loadUser();
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            })
        }
            
    }

    const resetAndCloseModal = () => {
        setIsModalOpen(false)
        setFullname("");
        setEmail("");
        setPasswords("");
        setPhonenumber("");

    }

    return (
        <div className="user-form"style={{margin:"10px"}}>
                <div> 
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <h3>Table Users</h3>
                        <Button
                        type="primary"
                        onClick={() => setIsModalOpen(true)}
                        >Create User</Button>
                    </div>
                    <Modal
                        title="Create User"
                        open={isModalOpen}
                        onOk={()=>handleSubmitBtn()}
                        onCancel={() => resetAndCloseModal()}
                        maskClosable={false}
                        okText={"CREATE"}
                    >

                        <div style={{display:"flex",gap:"15px",flexDirection:"column"}}>
                            <div>
                                <h3>FullName</h3>
                                <Input value={fullName}
                                    onChange={(event)=>{setFullname(event.target.value)}}
                                />
                            </div>
                        
                            <div>
                                <h3>Email</h3>
                                <Input value={email}
                                    onChange={(event) => { setEmail(event.target.value) }}
                                />
                            </div>
                                <div>
                                <h3>Passwords</h3>
                                <Input value={passWords}
                                    onChange={(event) => { setPasswords(event.target.value) }}
                                />
                                </div>
                            <div>
                                <h3>Phone Number</h3>
                                <Input value={phoneNumber}
                                    onChange={(event) => { setPhonenumber(event.target.value) }}
                                />
                                </div>
                        </div>
                    </Modal>
                </div>
        </div>
    )
}
export default UserForm;