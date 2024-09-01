import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';




const UserTable = (props) => {
  const { dataUsers, loadUser } = props;
  
  const [isModalUpdateOpen, setIsModalUpdateOpen] = useState(false);
  const [dataUpdate, setDataUpdate] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  const handleDeleteUser = async (id) => {
    const res = await deleteUserAPI(id);
    if (res.data) {
      notification.success({
        message: "Delete User",
        description: "Xoa user thanh cong"
      })
      await loadUser();
    } else {
      notification.error({
        message: "Error Delete user",
        description: JSON.stringify(res.message)
        
      })
    }
  }

  const columns = [
    // {
    //   title: 'Id',
    //   dataIndex: '_id',
          
    // },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      render: (_, record) => {
        
        return (
          <>
            <a href='#'
              onClick={() => {
                setDataDetail(record);
                setIsDetailOpen(true);
                }}
            >{record.fullName}</a>
          
          </>
        )
      }
          
    },
    {
      title: 'Email',
      dataIndex: 'email',
          
    },
    {
      title: 'Phone Number',
      dataIndex: 'phone',
          
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <div style={{display:"flex",gap:"20px"}}>
          <EditOutlined
            onClick={() => {
              setDataUpdate(record);
              setIsModalUpdateOpen(true);
            }}
            style={{ cursor: "pointer", color: "blue" }} />
          <Popconfirm
            title="Xoa nguoi dung"
            description="Ban chac chan xoa user nay ?"
            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
            placement='left'
          >
            <DeleteOutlined style={{ cursor: "pointer", color: "red" }} />
          </Popconfirm>
          
        </div>
      ),
    },
];
  

  
  
  
    
    return (
      <>
      <Table
        columns={columns}
        dataSource={dataUsers} 
        rowKey={"_id"}
        />
        <UpdateUserModal
          isModalUpdateOpen={isModalUpdateOpen}
          setIsModalUpdateOpen={setIsModalUpdateOpen}
          dataUpdate={dataUpdate}
          setDataUpdate={setDataUpdate}
          loadUser={loadUser}
        />
        <ViewUserDetail
          dataDetail={dataDetail}
          setDataDetail={setDataDetail}
          isDetailOpen={isDetailOpen}
          setIsDetailOpen={setIsDetailOpen}
          loadUser={loadUser}
        />
      </>
    )
}
export default UserTable;