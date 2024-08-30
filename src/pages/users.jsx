import UserForm from "../component/user/user.form";
import UserTable from "../component/user/user.table";
import { useEffect, useState } from 'react';
import { fetchAllUserAPI } from '../services/api.service';
const UsersPage = () => {
    // Lift-up State
    const [dataUsers, setdataUsers] = useState([]);
  
    useEffect(() => {
    //console.log("Run useEffect 1111")
    loadUser();
    }, []);
    
    const loadUser = async () => {
        const res = await fetchAllUserAPI()
        setdataUsers(res.data)
    }
    
    return (
        <div style={{padding:"20px"}}>
            <UserForm loadUser={loadUser} />
            <UserTable dataUsers={ dataUsers} />
        </div>
        
    )
}
export default UsersPage;