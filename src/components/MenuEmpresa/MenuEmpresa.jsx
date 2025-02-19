// librerías
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';
// mocks
import traducciones from '../../mock-traducciones';

const MenuEmpresa = () => {

    const idioma = useContext(TraduccionContext);
    const location = useLocation();
    const url = location.pathname;
    const [activePath, setActivePath] = useState(url);

    function actualizarActivePath() {
        setActivePath(url);
    }

    useEffect(actualizarActivePath, [url]);

    return (

        <nav className='row'>
            <div className="col-12 menu-empresa">
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <div className={`nav-link nav-link-nohover ${activePath === '/empresa' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa'>{traducciones[idioma].menuEmpresa.empresa}</Link>
                        </div>
                        <div className={`nav-link nav-link-hover ${activePath === '/empresa' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa'>[ {traducciones[idioma].menuEmpresa.empresa} ]</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={`nav-link nav-link-nohover ${activePath === '/empresa/proyectos' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa/proyectos'>{traducciones[idioma].menuEmpresa.proyectos}</Link>
                        </div>
                        <div className={`nav-link nav-link-hover ${activePath === '/empresa/proyectos' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa/proyectos'>[ {traducciones[idioma].menuEmpresa.proyectos} ]</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className={`nav-link nav-link-nohover ${activePath === '/empresa/alumnos' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa/alumnos'>{traducciones[idioma].menuEmpresa.alumnos}</Link>
                        </div>
                        <div className={`nav-link nav-link-hover ${activePath === '/empresa/alumnos' ? 'active' : ''}`} data-bs-toggle="pill">
                            <Link to='/empresa/alumnos'>[ {traducciones[idioma].menuEmpresa.alumnos} ]</Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MenuEmpresa;
