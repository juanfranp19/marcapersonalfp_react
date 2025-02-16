
import TituloMP from "../TituloMP/TituloMP";
import Imagen from "../Imagen/Imagen";

const Cabecera = () => {

  return (
    <nav className="row">
      <div className="col-12 cabecera navbar navbar-expand-md">
          <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)">
              <Imagen clase='logoMP' cual='logoMP'></Imagen>
            </a>
            <button className="navbar-toggler btn btn-seconday btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <div className="navbar-nav mx-auto">
                <h1><TituloMP></TituloMP></h1>
              </div>
              <div className="d-flex">
                <Imagen clase='imgBandera' cual="es"></Imagen>
                <Imagen clase='imgBandera' cual="en"></Imagen>
              </div>
            </div>
          </div>
      </div>
    </nav>
  );
}

export default Cabecera;
