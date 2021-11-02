import { useEffect, useState } from "react";
import { getUserList } from "../api/users";

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUserList().then(usersResponse => {
            setUsers(usersResponse)
        }).catch((error) => {
            console.log(error);
            setUsers([]);
        });
    }, []);
    return (
        <div>
            {
                users.map((user, index) => {
                    return <div key={user._id}>{index + 1}. {user.name}</div>
                })
            }
        </div>
    )
}
export default UserList;
