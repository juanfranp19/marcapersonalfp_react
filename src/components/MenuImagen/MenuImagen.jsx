import useImagen from '../../hooks/useImagen';

const MenuImagen = (props) => {

    const imagen = useImagen(props.cual);

    return (
        <img src={imagen.img} alt={imagen.alt} />
    );
}

export default MenuImagen;
