const getUsers = (countUsers) => {

    return fetch(`http://marcapersonalfp.test/api/v1/users?_end=${countUsers}`)
        .then(response => {
            const data = response.json();
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export default getUsers;
