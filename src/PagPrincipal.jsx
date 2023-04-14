import React from "react";
import "./pagPrincipal.css";
import imgHorarios from "./images/horarios.jpg";
import imgTorneos from "./images/torneos.jpg";
import imgEventos from "./images/eventos.jpg";
import imgHerramientas from "./images/herramientas.jpg";
import { Navbar } from "./Navbar";
import { Link } from 'react-router-dom'

export default function PagPrincipal() {
    return (
        <>
        <Navbar />
            <div className="container">
                <div className="seccion-bienvenida container-sm">
                    <h1 className="titulo-bienvenida">
                        <span className="bienvenidos">Bienvenidos </span>
                        <span>a la página del</span>
                        <br />
                        <span className="kartel">Kartel </span>
                        <span>de las </span>
                        <span className="moritaz">Moritaz</span>
                    </h1>
                </div>

                <div className="seccion-enlaces">
                    <div className="row row-cols-1 row-cols-md-2 g-4">
                        <div className="col">
                            <div className="card">
                                <Link 
                                    to="/horarios">
                                    <img
                                        src={imgHorarios}
                                        className="card-img-top imgLinks"
                                        alt="Horarios"
                                    />
                                    {/*<h2 className="txt-links">Horarios</h2>*/}
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Horarios</h5>
                                    <p className="card-text">
                                        En esta página se encuentran publicados
                                        los horarios tanto de miembros del
                                        Kartel como personas cercanas a él.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <Link 
                                to="/torneos">
                                    <img
                                        src={imgTorneos}
                                        className="card-img-top"
                                        alt="Torneos"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Torneos</h5>
                                    <p className="card-text">
                                        Acá puedes ver información acerca de los
                                        torneos que se han disputado en el
                                        Kartel y próximos a disputarse.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card">
                                <Link 
                                    to="/eventos">
                                    <img
                                        src={imgEventos}
                                        className="card-img-top"
                                        alt="Eventos"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Eventos</h5>
                                    <p className="card-text">
                                        En este Kartel siempre hay eventos, por
                                        lo cual consultar la información acerca
                                        de ellos puede ser útil desde esta
                                        página.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col mb-5">
                            <div className="card">
                                <Link to="/herramientas">
                                    <img
                                        src={imgHerramientas}
                                        className="card-img-top"
                                        alt="Herramientas"
                                    />
                                </Link>
                                <div className="card-body">
                                    <h5 className="card-title">Herramientas</h5>
                                    <p className="card-text">
                                        ¿Calculadoras? ¿Herramientas desde otras
                                        páginas? Acá hay eso y mucho más, “se
                                        supone”.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
