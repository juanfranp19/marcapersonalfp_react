const getFamiliasProfesionales = () => {

    return fetch('http://marcapersonalfp.test/api/v1/familias_profesionales?_end=50')
        .then(response => {
            const data = response.json();
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error: ', error);
            return 0;
        });
}

export default getFamiliasProfesionales;
