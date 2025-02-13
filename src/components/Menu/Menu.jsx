import { Link } from 'react-router-dom';
import MenuImagen from '../MenuImagen/MenuImagen';

const Menu = () => {
    return (
        <div className='menu'>
            <div><Link to='/empresa'><MenuImagen cual='empresa'></MenuImagen></Link></div>
            <div><Link to='/centroeducativo'><MenuImagen cual='centroeducativo'></MenuImagen></Link></div>
            <div><Link to='/alumno'><MenuImagen cual='alumno'></MenuImagen></Link></div>
        </div>
    );
}

export default Menu;
