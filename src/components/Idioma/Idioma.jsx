import React from 'react';
import useImagen from '../../hooks/useImagen';

const Idioma = (props) => {

    const idioma = useImagen(props.idioma);

    return (
        <div className='cambioIdioma'>
            <img className='imgBandera' src={idioma.img} alt={idioma.alt} />
        </div>
    );
}

export default Idioma;
