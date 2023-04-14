import { Navbar } from "./Navbar";
import wip from "./images/wip.png";
import { Link } from "react-router-dom";
import pokedex from "./images/Pokedex.png";
import "./herramientas/pokedex.css"

export default function Herramientas() {
    return (
        <div className="Herramientas">
            <Navbar />
            <div className="container">
                <h1 className="my-5">Herramientas</h1>
                <div className="seccion-enlaces">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <Link to="/herramientas/pokedex">
                                    <img
                                        src={pokedex}
                                        className="card-img-top imgLinks"
                                        alt="Horarios"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Pokedex</h5>
                                    <p className="card-text">
                                        Acá se pueden encontrar la mayoría de
                                        pokemones con sus estadísticas, imágen y
                                        tipos.
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
                                        Calculadora de Promedio
                                    </h5>
                                    <p className="card-text">
                                        Calculadora para saber el promedio en
                                        base de las notas en las materias y sus
                                        respectivos créditos. (Próximamente)
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
                                        Conversor de Unidades
                                    </h5>
                                    <p className="card-text">
                                        Porque todos queremos saber cuantos a
                                        kilometros equivale un pie o cuantos
                                        galones tiene un barril, ¿cierto?.
                                        (Próximamente)
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
                                    <h5 className="card-title">Herramientas</h5>
                                    <p className="card-text">
                                        Más herramientas próximamente. (Antes de
                                        la 2.2)
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
