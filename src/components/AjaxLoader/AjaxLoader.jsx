// assets
import ajaxloader from '../../assets/ajax/ajaxloader.gif';

const AjaxLoader = () => {

    return (
        <div className='row'>
            <div className='col-12 ajax-loader'>
                <img src={ajaxloader} alt='Cargando...' className='ajax-loader-img' />
            </div>
        </div>
    );
}

export default AjaxLoader;
