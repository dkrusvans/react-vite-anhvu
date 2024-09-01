import { Drawer, notification } from "antd";
import { Button } from 'antd';
import { useState } from "react";
import { handleUploadFile, updateUserAvatarAPI } from "../../services/api.service";

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen,
        loadUser
    } = props;

    const [selectedFile, setSelectedFile] = useState(null)
    const [preview, setPreview] = useState(null)
    

    const handleOnChangeFile = (event) => {
        // alert("me")
        if (!event.target.files || event.target.files.length === 0) {
            setSelectedFile(null);
            setPreview(null);
            return;
        }
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            setPreview(URL.createObjectURL(file))
        }
        
    }  
    const handleUpdateUserAvatar = async() => {
        //step 1 : Upload File
        const resUpload = await handleUploadFile(selectedFile, "avatar")
        if (resUpload.data) {
            //success
            const newAvatar = resUpload.data.fileUploaded;
            // step 2 : Update user
            const resUpdateAvatar = await updateUserAvatarAPI(
                newAvatar,
                dataDetail._id,
                dataDetail.fullName,
                dataDetail.phone)
            if (resUpload.data) {
                setIsDetailOpen(false);
                setSelectedFile(null);
                setPreview(null);
                await loadUser();

                notification.success({
                    message: "Update user avatar",
                    description: "Cap nhat Avatar thanh cong ! "
                })
            } else {
                notification.error({
                    message: "Error update Avatar",
                    description:JSON.stringify(resUpdateAvatar.message)
                })
            }
            
        } else {
            notification.error({
                message: "Error upload file",
                description:JSON.stringify(resUpload.message)
            })
            

        }
        
        

    }
    

    return (
        <Drawer
            width={"30vw"}
            title="Chi Tiet User"
            onClose={() => {
                setDataDetail(null);
                setIsDetailOpen(false);
            }}
            open={isDetailOpen}

        >
            {dataDetail ? <>
                <p>Id:{dataDetail._id}</p>
                <br />
                <p>Full name: {dataDetail.fullName}</p>
                <br />
                <p>Phone number: {dataDetail.phoneNumber}</p>
                <br />
                <p>Avatar</p>
                <div style={{
                    marginTop: "10px",
                    height: "650px", width: "520px",
                    border: "1px solid#ccc"
                    
                }}>
                    <img
                        style={{ height: "100%", width: "100%",objectFit:"contain"}}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "block",
                        width: "fit-content",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor:"pointer"
                    }}>
                        Upload
                    </label>
                    <input
                        // onChange={handleOnChangeFile}
                        type="file" hidden id="btnUpload"
                        onChange={(event)=>handleOnChangeFile(event)}
                    />
                    
                </div>
                {preview &&
                <>
                <div style={{
                    marginTop: "10px",
                    marginBottom:"15px",
                    height: "100px", width: "150px"
                    
                    
                }}>
                    <img
                        style={{ height: "100%", width: "100%",objectFit:"contain"}}
                        src={preview} />
                    </div>
                    <Button type="primary"
                    onClick={()=>handleUpdateUserAvatar()}
                    >Save</Button>

                </>
                }
                
                
            </>
                :
                <>
                    <p>Khong co du lieu</p>
                </>
            }

        </Drawer>
    )
}

export default ViewUserDetail;