const getProyectos = () => {

    return fetch('http://marcapersonalfp.test/api/v1/proyectos')
        .then(response => {
            const data = response.json();
            console.log(data);
            return data;
        })
        .catch(error => {
            console.error('Error: ', error);
        });
}

export default getProyectos;
