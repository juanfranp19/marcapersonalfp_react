import { Link } from 'react-router-dom';
import Imagen from '../Imagen/Imagen';

const Menu = () => {
    return (
        <div className="row">
            <div className="col-12">
                <div className='row menu'>
                    <div className='menu-item col-4'><Link to='/empresa'><Imagen clase='imgMenu' cual='empresa'></Imagen></Link></div>
                    <div className='menu-item col-4'><Link to='/centroeducativo'><Imagen clase='imgMenu' cual='centroeducativo'></Imagen></Link></div>
                    <div className='menu-item col-4'><Link to='/alumno'><Imagen clase='imgMenu' cual='alumno'></Imagen></Link></div>
                </div>
            </div>
        </div>
    );
}

export default Menu;
