import banderas from '../../mock-banderas';

const AlumnoMincard = (props) => {

    function bandera(idioma) {
        return banderas[idioma] ? banderas[idioma].flag : banderas['unknown'].flag;
    }

    function centificado(certificado) {
        if (certificado === 0) return 'SC';
        if (certificado === 1) return 'C';
    }

    function tablaIdiomas() {

        return (
            <table>
                <tbody>
                    <tr>{props.idiomas.map((i, key) => {
                            return (
                                <td key={key}>{bandera(i.alpha2)}</td>
                            )
                        })}</tr>
                    <tr>
                        {props.idiomas.map((i, key) => {
                            return (
                                <td key={key}>{i.nivel}</td>
                            )
                        })}
                    </tr>
                    <tr>
                        {props.idiomas.map((i, key) => {
                            return (
                                <td key={key}>{centificado(i.certificado)}</td>
                            )
                        })}
                    </tr>
                </tbody>
            </table>
        );
    }

    return (
        
        <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
            <div className="card m-2">

                <div className="row p-4 card-body">
                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">
                        {/* <img src={imagenProyecto} alt="Proyecto" className="w-100" /> */}
                    </div>

                    <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">

                        <h1>{props.name}</h1>

                        {tablaIdiomas()}

                        <p><span>Perfiles.</span></p>
                        <p><span>Ciclos:</span> {props.ciclos}</p>

                    </div>

                    {/* <div className="col-12 boton-ver">
                        <button type="button" className=" w-100 btn btn-outline-primary">Ver</button>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default AlumnoMincard;
