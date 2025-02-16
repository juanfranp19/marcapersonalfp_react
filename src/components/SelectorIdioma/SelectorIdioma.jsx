// librerías
import React, { useState } from 'react';
// componentes
import Imagen from '../Imagen/Imagen';

const SelectorIdioma = (props) => {

    function cambiarIdioma(idioma) {
        props.manejarSeleccion(idioma);
        console.log(idioma);
    }

    return (
        <div>
            <Imagen clase='imgBandera' cual='es' onClick={() => cambiarIdioma('es')}></Imagen>
            <Imagen clase='imgBandera' cual='en' onClick={() => cambiarIdioma('en')}></Imagen>
        </div>
    );
}

export default SelectorIdioma;
