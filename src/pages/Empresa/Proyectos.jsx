// librerías
import React from 'react';
// componentes
import MenuEmpresa from '../../components/MenuEmpresa/MenuEmpresa';
import ListaFamiliasProfesionales from '../../components/ListaFamiliasProfesionales/ListaFamiliasProfesionales';

const Proyectos = () => {
    return (
        <div className="row">
            <div className="col-12">
                <MenuEmpresa></MenuEmpresa>
                <ListaFamiliasProfesionales></ListaFamiliasProfesionales>
            </div>
        </div>
    );
}

export default Proyectos;
