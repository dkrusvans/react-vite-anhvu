import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { notification, Popconfirm, Table } from 'antd';
import UpdateUserModal from './update.user.modal';
import { useState } from 'react';
import ViewUserDetail from './view.user.detail';
import { deleteUserAPI } from '../../services/api.service';




const UserTable = (props) => {
  const { dataUsers, loadUser,
          current,pageSize,total,setCurrent, setPageSize
        } = props;
  
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
    {
      title: 'STT',
      render: (_, record, index) => { 
        return (
          <>{(index + 1) + (current - 1)* pageSize}</>
          
        )
      }
    },
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
  const onChange = (pagination, filters, sorter, extra) => { 
    //setCurrent, setPageSize
    // neu thay doi trang chu: current
    if (pagination && pagination.current) {
      if (+pagination.current !== current) {
        setCurrent(+pagination.current)
      }
    }
    // neu thay doi tong so phan tu: pageSize
    if (pagination && pagination.pageSize) {
      if (+pagination.pageSize !== pageSize) {
        setPageSize(+pagination.pageSize)
      }
    }
  };  
    return (
      <>
      <Table
        columns={columns}
        dataSource={dataUsers} 
        rowKey={"_id"}
        pagination={
          {
          current: current,
          pageSize: pageSize,
          showSizeChanger: true,
          total: total,
          showTotal: (total, range) => { return (<div> {range[0]}-{range[1]} trên {total} rows</div>) }
          }
        }
          onChange={onChange}
          
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