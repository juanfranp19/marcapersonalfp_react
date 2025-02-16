// librerías
import React from 'react';
// componentes
import Contador from '../Contador/Contador';
import InfoCarlosIII from '../InfoCarlosIII/InfoCarlosIII';
import Imagen from '../Imagen/Imagen';
import TituloMP from '../TituloMP/TituloMP';

const Pie = () => {

    return (
        <footer className='row'>
            <div className='col-12'>
                <div className='row'>
                    <div className='offset-1 col-10 contadores'>
                        <div className='row text-center'>
                            <div className='col-4 contador'><Contador cual='empresas'></Contador></div>
                            <div className='col-4 contador'><Contador cual='proyectos'></Contador></div>
                            <div className='col-4 contador'><Contador cual='users'></Contador></div>
                        </div>
                    </div>
                </div>
                <InfoCarlosIII></InfoCarlosIII>
                <div className='row'>
                    <div className='col-12'>
                        <p><Imagen clase='logoFooter' cual='logoMPfooter'></Imagen> <span className='tituloMP'><TituloMP></TituloMP></span> | Diseño Web CFGS Desarrollo de Aplicaciones Web &copy; 2025</p>
                    </div>
                </div>
            </div>
        </footer>
    );

}

export default Pie;
