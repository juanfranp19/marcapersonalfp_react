// librerías
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// componentes
import TituloMP from '../TituloMP/TituloMP';
import Imagen from '../Imagen/Imagen';
import SelectorIdioma from '../SelectorIdioma/SelectorIdioma';
// contextos
import TraduccionContext from '../../contexts/TraduccionContext';

const Cabecera = (props) => {

  const navegateTo = useNavigate();
  const idiomaSeleccionado = useContext(TraduccionContext);

  function aHome() {
    navegateTo('/');
  }

  function manejarSeleccionIdioma(idioma) {
    props.manejarSeleccionIdioma(idioma);
    console.log(idioma);
  }

  return (
    <nav className='row'>
      <div className='col-12 cabecera navbar navbar-expand-md'>
        <div className='container-fluid'>
          <div className='navbar-brand' onClick={aHome}>
            <Imagen clase='logoMP' cual='logoMP'></Imagen>
          </div>
          <button className='navbar-toggler btn btn-seconday btn-lg' type='button' data-bs-toggle='collapse' data-bs-target='#mynavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='mynavbar'>
            <div className='navbar-nav mx-auto'>
              <h1><TituloMP></TituloMP></h1>
            </div>
            <SelectorIdioma idioma={idiomaSeleccionado} manejarSeleccion={manejarSeleccionIdioma}></SelectorIdioma>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Cabecera;
