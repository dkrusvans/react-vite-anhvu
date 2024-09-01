import { Drawer } from "antd";
import { Button } from 'antd';
import { useState } from "react";

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
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
    console.log("Check File: ",preview)

    return (
        <Drawer
            width={"40vw"}
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
                    height: "100px", width: "150px",
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
                
                <div style={{
                    marginTop: "10px",
                    height: "100px", width: "150px",
                    border: "1px solid#ccc"
                    
                }}>
                    <img
                        style={{ height: "100%", width: "100%",objectFit:"contain"}}
                        src={preview} />
                </div>
                
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