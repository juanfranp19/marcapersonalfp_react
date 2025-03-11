// componentes
import MenuHome from '../components/MenuHome/MenuHome';
import Pie from '../components/Pie/Pie';

const Home = () => {
    
    return (
        <div className='row'>
            <div className='col-12'>
                <MenuHome></MenuHome>
                <Pie></Pie>
            </div>
        </div>
    );
}

export default Home;
