const getCount = (tabla) => {

    return fetch(`http://marcapersonalfp.test/api/v1/${tabla}/count`)
        .then(response => {
            const data = response.json();
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export default getCount;
