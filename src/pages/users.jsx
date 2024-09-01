import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';
const UsersPage = () => {
    
    // Lift-up State
    const [dataUsers, setdataUsers] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(15);
    const [total, setTotal] = useState(0);

    //emty array = run once
    // not empty = next value !== prew value
    useEffect(() => {
        //console.log("Run useEffect 1111")
        loadUser();
    }, [current, pageSize]); // []+ condition
    
    const loadUser = async () => {
        const res = await fetchAllUserAPI(current, pageSize);
        if (res.data) {
            setdataUsers(res.data.result);
            setCurrent(res.data.meta.current);
            setPageSize(res.data.meta.pageSize);
            setTotal(res.data.meta.total);
        }
        
    }
    // console.log("check pageSize: ", pageSize)
    return (
        <div style={{padding:"20px"}}>
            <UserForm loadUser={loadUser} />
            <UserTable
                loadUser={loadUser}
                dataUsers={dataUsers}
                current={current}
                pageSize={pageSize}
                total={total}
                setCurrent={setCurrent}
                setPageSize={setPageSize}
            />
        </div>
        
    )
}
export default UsersPage;