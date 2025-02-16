import { Link } from 'react-router-dom';
import Imagen from '../Imagen/Imagen';

const MenuHome = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className='row menuHome'>
                    <div className='menuHome-item col-4'>
                        <Link to='/empresa'>
                            <Imagen clase='imgMenuHome' cual='empresa'></Imagen>
                            <div className='capa'>
                                <h1 className="titulo">
                                    Empresas
                                </h1>
                            </div>
                        </Link>
                    </div>
                    <div className='menuHome-item col-4'>
                        <Link to='/centroeducativo'>
                            <Imagen clase='imgMenuHome' cual='centroeducativo'></Imagen>
                            <div className='capa'>
                                <h1 className="titulo">
                                    Centro educativo
                                </h1>
                            </div>
                        </Link></div>
                    <div className='menuHome-item col-4'>
                        <Link to='/alumno'>
                            <Imagen clase='imgMenuHome' cual='alumno'></Imagen>
                            <div className='capa'>
                                <h1 className="titulo">
                                    Alumnos
                                </h1>
                            </div>
                        </Link></div>
                </div>
            </div>
        </div>
    );
}

export default MenuHome;
