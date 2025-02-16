// librerías
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// componentes
import Imagen from '../Imagen/Imagen';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';
// mock 
import traducciones from '../../mock-traducciones';

const MenuHome = () => {

    const idioma = useContext(TraduccionContext);

    return (
        <div className='row'>
            <div className='col-12'>
                <div className='row menuHome'>
                    <div className='menuHome-item col-12 col-md-4'>
                        <Link to='/empresa'>
                            <Imagen clase='imgMenuHome' cual='empresa'></Imagen>
                            <div className='capa'>
                                <h1 className='titulo'>
                                    {traducciones[idioma].menuHome.empresa}
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className='menuHome-item col-12 col-md-4'>
                        <Link to='/centroeducativo'>
                            <Imagen clase='imgMenuHome' cual='centroeducativo'></Imagen>
                            <div className='capa'>
                                <h1 className='titulo'>
                                    {traducciones[idioma].menuHome.centro}
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className='menuHome-item col-12 col-md-4'>
                        <Link to='/alumno'>
                            <Imagen clase='imgMenuHome' cual='alumno'></Imagen>
                            <div className='capa'>
                                <h1 className='titulo'>
                                    {traducciones[idioma].menuHome.alumnos}
                                </h1>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuHome;
