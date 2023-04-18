import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import wip from "./images/wip.png";

export default function Torneos() {
    return (
        <div className="Torneos">
            <Navbar />
            <div className="container">
                <h1 className="my-5">Torneos</h1>
                <div className="seccion-enlaces">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <Link to="/horarios/2023-I" className="mx-auto">
                                    <img
                                        src={wip}
                                        className="card-img-top wip"
                                        alt="Horarios"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Horarios 2023-1
                                    </h5>
                                    <p className="card-text">
                                        No hace falta descripción. (Disponible ya mismo)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link to="/eventos" className="mx-auto">
                                    <img
                                        src={wip}
                                        className="card-img-top wip"
                                        alt="Torneos"
                                        height="300px"
                                        width="300px"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Horarios 2022-2
                                    </h5>
                                    <p className="card-text">
                                    No hace falta descripción. (Próximamente)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card">
                                <Link to="/eventos" className="mx-auto">
                                    <img
                                        src={wip}
                                        className="card-img-top wip"
                                        alt="Eventos"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Horarios 2022-1
                                    </h5>
                                    <p className="card-text">
                                        No hace falta descripción (Próximamente)
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col mb-5">
                            <div className="card ">
                                <Link to="/eventos" className="mx-auto">
                                    <img
                                        src={wip}
                                        className="card-img-top wip"
                                        alt="Herramientas"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Horarios 2021-2</h5>
                                    <p className="card-text">
                                        No hace falta descripción (Próximamente)
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
