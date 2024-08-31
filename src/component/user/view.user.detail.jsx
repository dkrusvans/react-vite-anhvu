import { Drawer } from "antd";

const ViewUserDetail = (props) => {
    const {
        dataDetail,
        setDataDetail,
        isDetailOpen,
        setIsDetailOpen
    } = props;


    return (
        <Drawer title="Chi Tiet User"
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