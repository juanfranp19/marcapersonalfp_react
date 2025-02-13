import Idioma from "../Idioma/Idioma";
import LogoMP from "../LogoMP/LogoMP";
import MarcaPersonalFP from "../MarcaPersonalFP/MarcaPersonalFP";

const Cabecera = () => {

  return (
    <div className="row cabecera align-items-center">

      <div className="col-1">
        <LogoMP donde="cabecera"></LogoMP>
      </div>

      <div className="col-10">
          <MarcaPersonalFP></MarcaPersonalFP>
      </div>

      <div className="col-1 idioma">
          <div className="row">
            <Idioma className="col-6" idioma="es"></Idioma>
            <Idioma className="col-6" idioma="en"></Idioma>
          </div>
      </div>
    </div>
  );
}

export default Cabecera;
