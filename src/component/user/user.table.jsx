import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from 'antd';
import UpdateUserModal from './update.user.modal';




const UserTable = (props) => {
  const { dataUsers } = props
  
  
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
          <a href='#'>{record.fullName}</a>
          
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
          <EditOutlined style={{cursor:"pointer",color:"blue"}}/>
          <DeleteOutlined style={{cursor:"pointer",color:"red"}}/>
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
      <UpdateUserModal/>
      </>
    )
}
export default UserTable;