import React, { useEffect, useState } from 'react';
import esIcon from '../../assets/icons/flag-for-flag-spain-svgrepo-com.svg';
import enIcon from '../../assets/icons/united-kingdom-uk-svgrepo-com.svg';

const Idioma = (props) => {

    const idioma = props.idioma;

    const [icono, setIcono] = useState();
    const [alt, setAlt] = useState();

    function asignarIdioma() {
        if (idioma === 'es') setIcono(esIcon)
            setAlt('Español');
        if (idioma === 'en') setIcono(enIcon)
            setAlt('Inglés');
    }

    useEffect(asignarIdioma, []);

    return (
        <div className='cambioIdioma'>
            <img className='imgBandera' src={icono} alt={alt} />
        </div>
    );
}

export default Idioma;
