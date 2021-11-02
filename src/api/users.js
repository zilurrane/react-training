export const getUserList = async () => {
    const response = await fetch('https://crudcrud.com/api/d4ebb38e0e384a728626fb79193c7533/users', { method: "GET" });
    return await response.json();
}
export const createUser = async (createUserRequest) => {
    const response = await fetch('https://crudcrud.com/api/d4ebb38e0e384a728626fb79193c7533/users', {
        method: "POST", headers: {
            'Content-Type': 'application/json'
        }, body: JSON.stringify(createUserRequest)
    });
    return await response.json();
}