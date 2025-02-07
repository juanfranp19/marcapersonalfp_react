import Idioma from "./Idioma";
import LogoMP from "./LogoMP";
import MarcaPersonalFP from "./MarcaPersonalFP";

const Cabecera = () => {
  return (
    <>
        <LogoMP donde="cabecera"></LogoMP>

        <MarcaPersonalFP clase="titulo"></MarcaPersonalFP>

        <Idioma idioma="es"></Idioma>
        <Idioma idioma="en"></Idioma>
    </>
  );
}

export default Cabecera;
