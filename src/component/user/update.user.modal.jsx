import { useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = () => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");

    const [isModalOpen, setIsModalOpen] = useState(true);
    
    const handleSubmitBtn = async () => {
        
        const res = await createUserAPI(fullName, email, passWords, phoneNumber);
        if (res.data) {
            notification.success({
                message: "Erorr Create User",
                description: " Tao User Thanh Cong !"
                
            })
            resetAndCloseModal();
            // await loadUser();
        } else {
            notification.error({
                message: "Create User",
                description: JSON.stringify(res.message)
            })
        }
            
    }
    
    return (
        <Modal
                        title="Update User"
                        open={isModalOpen}
                        onOk={()=>handleSubmitBtn()}
                        onCancel={() => resetAndCloseModal()}
                        maskClosable={false}
                        okText={"SAVE"}
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
    )
}
export default UpdateUserModal;