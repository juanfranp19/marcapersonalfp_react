const ProyectoMinCard = () => {

    return (
        <section className="w-100 px-4 py-5" style="background-color: #9de2ff; border-radius: .5rem .5rem 0 0;">
            <div className="row d-flex justify-content-center">
                <div className="col col-md-9 col-lg-7 col-xl-6">
                    <div className="card" style="border-radius: 15px;">
                        <div className="card-body p-4">
                            <div className="d-flex">
                                <div className="flex-shrink-0">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp" 
                                        alt="Generic placeholder image" className="img-fluid" style="width: 180px; border-radius: 10px;"/>
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-1">Danny McLoan</h5>
                                    <p className="mb-2 pb-1">Senior Journalist</p>
                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2 bg-body-tertiary">
                                        <div>
                                            <p className="small text-muted mb-1">Articles</p>
                                            <p className="mb-0">41</p>
                                        </div>
                                        <div className="px-3">
                                            <p className="small text-muted mb-1">Followers</p>
                                            <p className="mb-0">976</p>
                                        </div>
                                        <div>
                                            <p className="small text-muted mb-1">Rating</p>
                                            <p className="mb-0">8.5</p>
                                        </div>
                                    </div>
                                    <div className="d-flex pt-1">
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-outline-primary me-1 flex-grow-1">Chat</button>
                                        <button type="button" data-mdb-button-init data-mdb-ripple-init className="btn btn-primary flex-grow-1">Follow</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProyectoMinCard;
