import Idioma from "../Idioma/Idioma";
import LogoMP from "../LogoMP/LogoMP";
import MarcaPersonalFP from "../MarcaPersonalFP/MarcaPersonalFP";

const Cabecera = () => {

  return (
    <>
      <nav class="cabecera navbar navbar-expand-sm navbar-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="javascript:void(0)">
            <LogoMP donde="cabecera"></LogoMP>
          </a>
          <button class="navbar-toggler btn btn-seconday btn-lg" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">
            <div class="navbar-nav mx-auto">
              <MarcaPersonalFP></MarcaPersonalFP>
            </div>
            <div class="d-flex">
              <Idioma idioma="es"></Idioma>
              <Idioma idioma="en"></Idioma>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Cabecera;
