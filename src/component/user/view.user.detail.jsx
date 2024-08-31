import { Drawer } from "antd";
import { Button } from 'antd';

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;


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
                <div>
                    <img
                        height={350} width={350}
                        src={`${import.meta.env.VITE_BACKEND_URL}/images/avatar/${dataDetail.avatar}`} />
                </div>
                <div>
                    <label htmlFor="btnUpload" style={{
                        display: "flex",
                        width: "block",
                        marginTop: "15px",
                        padding: "5px 10px",
                        background: "orange",
                        borderRadius: "5px",
                        cursor:"pointer"
                    }}>
                        Upload
                    </label>
                    <input type="file" hidden id="btnUpload"/>
                </div>
                {/* <Button type="primary">Upload Avatar</Button> */}
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