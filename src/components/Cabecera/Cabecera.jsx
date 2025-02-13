import Idioma from "../Idioma/Idioma";
import LogoMP from "../LogoMP/LogoMP";
import TituloMP from "../TituloMP/TituloMP";

const Cabecera = () => {

  return (
    <div className="row">
      <div className="col-12">
        <nav className="cabecera navbar navbar-expand-sm">
          <div className="container-fluid">
            <a className="navbar-brand" href="javascript:void(0)">
              <LogoMP donde="cabecera"></LogoMP>
            </a>
            <button className="navbar-toggler btn btn-seconday btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="mynavbar">
              <div className="navbar-nav mx-auto">
                <TituloMP></TituloMP>
              </div>
              <div className="d-flex">
                <Idioma idioma="es"></Idioma>
                <Idioma idioma="en"></Idioma>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Cabecera;
