// librerías
import React from 'react';
// componentes
import ListaFamiliasProfesionales from '../../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';
import ProyectoMinCard from '../../components/ProyectoMincard/ProyectoMincard';

const Proyectos = () => {
    return (
        <div className="row">
            <div className="col-12">
                <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
                <ProyectoMinCard></ProyectoMinCard>
            </div>
        </div>
    );
}

export default Proyectos;
