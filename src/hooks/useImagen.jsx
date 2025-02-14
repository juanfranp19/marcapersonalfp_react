import { useEffect, useState } from 'react';
import esIcon from '../assets/icons/flag-for-flag-spain-svgrepo-com.svg';
import enIcon from '../assets/icons/united-kingdom-uk-svgrepo-com.svg';
import empresaJPG from '../assets/images/empresa.jpg';
import centroJPG from '../assets/images/school.jpg';
import alumnoJPG from '../assets/images/student.jpg';

import logoMP from "../assets/logo/mp-logoNaranja100.png";

const useImagen = (props) => {

    const [imagen, setImagen] = useState({ img: 'sin imagen', alt: '' });

    function seleccionarImagen() {

        switch (props) {
            case 'es':
                setImagen({ ...imagen, img: esIcon, alt: 'Español' });
                break;
            case 'en':
                setImagen({ ...imagen, img: enIcon, alt: 'Inglés' });
                break;
            case 'empresa':
                setImagen({ ...imagen, img: empresaJPG, alt: 'Empresa' });
                break;
            case 'centroeducativo':
                setImagen({ ...imagen, img: centroJPG, alt: 'Centro Educativo' });
                break;
            case 'alumno':
                setImagen({ ...imagen, img: alumnoJPG, alt: 'Alumno' });
                break;
            case 'logoMP':
                setImagen({ ...imagen, img: logoMP, alt: 'Logo Marca Personal' });
                break;
        }
    }

    useEffect(seleccionarImagen, []);

    return imagen;
}

export default useImagen;
