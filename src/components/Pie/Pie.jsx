// librerías
import React, { useContext } from 'react';
// componentes
import Contador from '../Contador/Contador';
import InfoCarlosIII from '../InfoCarlosIII/InfoCarlosIII';
import Imagen from '../Imagen/Imagen';
import TituloMP from '../TituloMP/TituloMP';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';
// mock
import traducciones from '../../mock-traducciones';

const Pie = () => {

    const idioma = useContext(TraduccionContext);

    return (
        <footer className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='col-12 col-md-10 offset-md-1 contadores'>
                        <div className='row text-center'>
                            <div className='col-12 col-sm-4 contador'><Contador tabla='empresas'></Contador></div>
                            <div className='col-12 col-sm-4 contador'><Contador tabla='proyectos'></Contador></div>
                            <div className='col-12 col-sm-4 contador'><Contador tabla='users'></Contador></div>
                        </div>
                    </div>
                </div>
                <InfoCarlosIII></InfoCarlosIII>
                <div className='row'>
                    <div className='col-12'>
                        <p><Imagen clase='logoFooter' cual='logoMPfooter'></Imagen> <span className='tituloMP'><TituloMP></TituloMP></span> | {traducciones[idioma].footer.ciclo} &copy; 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Pie;
