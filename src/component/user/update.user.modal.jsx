import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { createUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    // const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen, dataUpdate, setDataUpdate } = props;
    
    useEffect(() => {
        console.log("check dataUpdate: ", dataUpdate)
        if (dataUpdate) {
            setFullname(dataUpdate.fullName);
            setEmail(dataUpdate.email);
            setPhonenumber(dataUpdate.phone);

        }
    },[dataUpdate])

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
    const resetAndCloseModal = () => {
        setIsModalUpdateOpen(false);
        setFullname("");
        // setEmail("");
        // setPasswords("");
        setPhonenumber("");
        setDataUpdate(null);
    }
    
    return (
        <Modal
                        title="Update User"
                        open={isModalUpdateOpen}
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
                                {/* <div>
                                <h3>Passwords</h3>
                                <Input value={passWords}
                                    onChange={(event) => { setPasswords(event.target.value) }}
                                />
                                </div> */}
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