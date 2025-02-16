// librerías
import React from 'react';
// hooks
import useImagen from '../../hooks/useImagen';

const Imagen = (props) => {

    const imagen = useImagen(props.cual);

    return (
        <img className={props.clase} src={imagen.img} alt={imagen.alt} onClick={props.onClick}/>
    );
}

export default Imagen;
