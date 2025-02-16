// librerías
import React from 'react';
// mooks
import infoCentro from '../../mock-infoCentro';

const InfoCarlosIII = () => {

    const nombre = infoCentro.nombre;
    const direccion = infoCentro.direccion;
    const email = infoCentro.email;
    const telefono = infoCentro.telefono;
    const web = infoCentro.web;

    function redesSociales() {

        return infoCentro.redes.map(red => {

            const nombreRed = red.nombre;
            const url = red.url;
            const icono = `bi bi-${red.nombre}`;

            return (
                <a key={nombreRed} href={url} target='_blank'><i className={icono}></i></a>
            );
        });
    }

    return (
        <div className='row'>
            <div className='col-12 infoCarlosIII'>
                <h1 className='nombreCarlosIII'><a href={web} target='_blank'>{nombre}</a></h1>
                <p>{direccion} | {email} | {telefono}</p>
                <div className='redes-sociales'>
                    {redesSociales()}
                </div>
            </div>
        </div>
    );
}

export default InfoCarlosIII;
