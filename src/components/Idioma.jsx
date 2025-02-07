
import { useState } from 'react';
import esIcon from '../assets/icons/flag-for-flag-spain-svgrepo-com.svg';
import enIcon from '../assets/icons/united-kingdom-uk-svgrepo-com.svg';

const Idioma = (props) => {

    const idioma = props.idioma;

    const [icono, setIcono] = useState();

    if (idioma === "es") setIcono(esIcon);
    if (idioma === "en") setIcono(enIcon);
// HACER UN USEEFFECT
    return (
        <button>
            <img src={icono} alt="" />
        </button>
    );
}

export default Idioma;
