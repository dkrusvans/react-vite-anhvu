import { Table } from 'antd';




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
          
        },
        {
          title: 'Email',
          dataIndex: 'email',
          
        },
        {
          title: 'Phone Number',
          dataIndex: 'phone',
          
        }
        // {
        //   title: 'Tags',
        //   key: 'tags',
        //   dataIndex: 'tags',
        //   render: (_, { tags }) => (
        //     <>
        //       {tags.map((tag) => {
        //         let color = tag.length > 5 ? 'geekblue' : 'green';
        //         if (tag === 'loser') {
        //           color = 'volcano';
        //         }
        //         return (
        //           <Tag color={color} key={tag}>
        //             {tag.toUpperCase()}
        //           </Tag>
        //         );
        //       })}
        //     </>
        //   ),
        // },
        // {
        //   title: 'Action',
        //   key: 'action',
        //   render: (_, record) => (
        //     <Space size="middle">
        //       <a>Invite {record.name}</a>
        //       <a>Delete</a>
        //     </Space>
        //   ),
        // },
      ];
      // const data = [
      //   {
      //     key: '1',
      //     name: 'John Brown',
      //     age: 32,
      //     address: 'New York No. 1 Lake Park',
      //     tags: ['nice', 'developer'],
      //   },
      //   {
      //     key: '2',
      //     name: 'Jim Green',
      //     age: 42,
      //     address: 'London No. 1 Lake Park',
      //     tags: ['loser'],
      //   },
      //   {
      //     key: '3',
      //     name: 'Joe Black',
      //     age: 32,
      //     address: 'Sydney No. 1 Lake Park',
      //     tags: ['cool', 'teacher'],
      //   },
      // ];
  
  
  

    return (
      <Table
        columns={columns}
        dataSource={dataUsers} 
        rowKey={"_id"}
        />
    )
}
export default UserTable;