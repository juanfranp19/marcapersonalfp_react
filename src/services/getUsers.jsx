const getUsers = () => {

    return fetch('http://marcapersonalfp.test/api/v1/users')
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
