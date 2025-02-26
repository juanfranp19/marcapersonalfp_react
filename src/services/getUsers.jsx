const getUsers = ({ limite=10, page=0 }) => {

    return fetch(`http://marcapersonalfp.test/api/v1/users?_start=0&_end=${limite+(page*limite)}`)
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
