import { useEffect, useState } from "react";
import { Input, notification, Modal } from "antd";
import { updateUserAPI } from "../../services/api.service";

const UpdateUserModal = (props) => {
    const [id, setId] = useState("");
    const [fullName, setFullname] = useState("");
    // const [email, setEmail] = useState("");
    // const [passWords, setPasswords] = useState("");
    const [phoneNumber, setPhonenumber] = useState("");

    const { isModalUpdateOpen, setIsModalUpdateOpen,
        dataUpdate, setDataUpdate, loadUser } = props;
    
    useEffect(() => {
        // console.log("check dataUpdate: ", dataUpdate)
        if (dataUpdate) {
            setId(dataUpdate._id)
            setFullname(dataUpdate.fullName);
            // setEmail(dataUpdate.email);
            setPhonenumber(dataUpdate.phone);

        }
    },[dataUpdate])

    const handleSubmitBtn = async () => {
        
        const res = await updateUserAPI(id, fullName, phoneNumber);
        
        
        
        if (res.data) {
            notification.success({
                message: "Update User",
                description: " Update User Thanh Cong !"
                
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
        setIsModalUpdateOpen(false);
        setId("");
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
                                <h3>ID</h3>
                                <Input value={id}
                                    disabled
                                />
                            </div>
                            <div>
                                <h3>FullName</h3>
                                <Input value={fullName}
                                    onChange={(event)=>{setFullname(event.target.value)}}
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