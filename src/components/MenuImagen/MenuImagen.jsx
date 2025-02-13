import { useEffect, useState } from 'react';
import empresaJPG from '../../assets/images/empresa.jpg';
import centroJPG from '../../assets/images/school.jpg';
import alumnoJPG from '../../assets/images/student.jpg';

const MenuImagen = (props) => {

    const [imagen, setImagen] = useState({ img: '', alt: ''});

    function seleccionarImagen() {
        props.cual === 'empresa' ?? setImagen({ ...imagen, img: empresaJPG, alt: 'Empresa' });
        props.cual === 'centroeducativo' ?? setImagen({ ...imagen, img: centroJPG, alt: 'Centro Educativo' });
        props.cual === 'alumno' ?? setImagen({ ...imagen, img: alumnoJPG, alt: 'Alumno' });
    }

    useEffect(seleccionarImagen, []);

    // HACER UN HOOK PARA CADA IMAGEN

    return (
        <img src={imagen.img} alt={imagen.alt} />
    );
}

export default MenuImagen;
