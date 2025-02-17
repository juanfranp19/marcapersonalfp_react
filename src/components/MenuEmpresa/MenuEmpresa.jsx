import React from 'react';
import { Link } from 'react-router-dom';

const MenuEmpresa = () => {

    return (


        <nav className='row'>



            <div className="col-12 menu-empresa">

                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <div className="nav-link active" data-bs-toggle="pill">
                            <Link to='/empresa'>empresa</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-bs-toggle="pill">
                            <Link to='/empresa/proyectos'>proyectos</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <div className="nav-link" data-bs-toggle="pill">
                            <Link to='/empresa/alumnos'>alumnos</Link>
                        </div>
                    </li>
                </ul>


            </div>






        </nav>
    );
}

export default MenuEmpresa;
