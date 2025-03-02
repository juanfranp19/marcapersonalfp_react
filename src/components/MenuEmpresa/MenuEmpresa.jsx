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
                    <Link to='/empresa'>
                        <li className="nav-item">
                            <div className={`nav-link nav-link-nohover ${activePath === '/empresa' ? 'active' : ''}`} data-bs-toggle="pill">
                                {traducciones[idioma].menuEmpresa.empresa}
                            </div>
                            <div className={`nav-link nav-link-hover ${activePath === '/empresa' ? 'active' : ''}`} data-bs-toggle="pill">
                                [ {traducciones[idioma].menuEmpresa.empresa} ]
                            </div>
                        </li>
                    </Link>
                    <Link to='/empresa/proyectos'>
                        <li className="nav-item">
                            <div className={`nav-link nav-link-nohover ${activePath === '/empresa/proyectos' ? 'active' : ''}`} data-bs-toggle="pill">
                                {traducciones[idioma].menuEmpresa.proyectos}
                            </div>
                            <div className={`nav-link nav-link-hover ${activePath === '/empresa/proyectos' ? 'active' : ''}`} data-bs-toggle="pill">
                                [ {traducciones[idioma].menuEmpresa.proyectos} ]
                            </div>
                        </li>
                    </Link>
                    <Link to='/empresa/alumnos'>
                        <li className="nav-item">
                            <div className={`nav-link nav-link-nohover ${activePath === '/empresa/alumnos' ? 'active' : ''}`} data-bs-toggle="pill">
                                {traducciones[idioma].menuEmpresa.alumnos}
                            </div>
                            <div className={`nav-link nav-link-hover ${activePath === '/empresa/alumnos' ? 'active' : ''}`} data-bs-toggle="pill">
                                [ {traducciones[idioma].menuEmpresa.alumnos} ]
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </nav>
    );
}

export default MenuEmpresa;
