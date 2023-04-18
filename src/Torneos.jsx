import { Navbar } from "./Navbar";
import { Link } from "react-router-dom";
import tfifa2022 from "./images/torneo-fifa-2022.png";
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
                                <Link to="/torneos/torneo-fifa-2022">
                                    <img
                                        src={tfifa2022}
                                        className="card-img-top imgLinks tfifa2022"
                                        alt="Horarios"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Torneo Fifa Kartel de las Moritaz 2022
                                    </h5>
                                    <p className="card-text">
                                        Primer torneo de Fifa oficial del
                                        kartel, disputado entre diciembre de
                                        2022 y enero de 2023. El campeón se
                                        llevó una estrella para su escudo.
                                        Felicitaciones a Ayala en su hazaña.
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
                                        Torneo Fifa Kartel de las Moritaz 2023-1
                                    </h5>
                                    <p className="card-text">
                                        Segundo torneo de Fifa oficial del
                                        kartel, que se disputará entre junio y
                                        julio de 2023. (Próximamente)
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
                                        Torneo Fifa Kartel de las Moritaz 2023-2
                                    </h5>
                                    <p className="card-text">
                                        Tercer torneo de Fifa oficial del
                                        kartel, que se disputará en diciembre de
                                        2023. (Próximamente)
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/*
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
                                    <h5 className="card-title">Herramientas</h5>
                                    <p className="card-text">
                                        Más herramientas próximamente. (Antes de
                                        la 2.2)
                                    </p>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
