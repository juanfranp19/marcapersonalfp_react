const getCount = (cual) => {

    return fetch(`http://marcapersonalfp.test/api/v1/${cual}/count`)
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
