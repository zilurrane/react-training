import { useEffect, useState } from "react";
import { getUserList } from "../api/users";
import AddUser from "./AddUser";
import UserList from "./UserList";

function App() {
  const [users, setUsers] = useState([]);

  const getSetUsers = () => {
    getUserList().then(usersResponse => {
      setUsers(usersResponse)
    }).catch((error) => {
      console.log(error);
      setUsers([]);
    });
  }

  useEffect(() => {
    getSetUsers();
  }, []);

  return (
    <div>
      <h3>Users</h3>
      <UserList users={users} />
      <AddUser onUserAddition={getSetUsers} />
    </div>
  );
}

export default App;
