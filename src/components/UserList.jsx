
const UserList = ({ users }) => {
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
