const ProyectoMinCard = () => {

    return (
        <div className="row justify-content-center">
            <div className="col-12 col-sm-6 col-lg-4 col-xl-3">
                <div className="card m-2">

                    <div className="row p-4 card-body">
                        <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" alt="Proyecto" className="w-100" />
                        </div>

                        <div className="col-6 col-sm-12 col-md-6 col-lg-12 col-xxl-6">

                            <h1>Diseño Gráfico</h1>

                            <h2>ALUMNOS</h2>
                            <p>Nombre Nombre</p>

                            <p><span>Tutor:</span> 2</p>
                            <p><span>Ciclos:</span> DAW | DAM</p>

                        </div>

                        <div className="col-12 boton-ver">
                            <button type="button" className=" w-100 btn btn-outline-primary">Ver</button>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default ProyectoMinCard;
