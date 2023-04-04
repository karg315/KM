import React from "react";
import "./navbar.css";
import logo from "./images/kartel v1.png";
import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <header className="bd-navbar navbar-dark bg-dark sticky-top">
            <nav className="navbar-dark bg-dark navbar navbar-expand-lg container-xxl bd-gutter flex-wrap flex-lg-nowrap">
                <div className="container-fluid">
                    <Link className="navbar-brand imgLogo" to="/">
                        <img
                            src={logo}
                            alt="Logo del Kartel de las Moritaz"
                            width="252"
                            height="54"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div
                        className="collapse navbar-collapse justify-content-end"
                        id="navbarNavAltMarkup"
                    >
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">
                                    Página Principal
                                </Link>
                            </li>
                            <li className="nav-item active dropdown">
                                <Link
                                    className="nav-link dropdown-toggle"
                                    aria-current="page"
                                    to="/horarios"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Horarios
                                </Link>
                                <ul className="dropdown-menu">
                                    <li>
                                        <Link
                                            className="dropdown-item disabled"
                                            to="/horarios/2023-1"
                                        >
                                            2023-1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item disabled"
                                            to="/horarios/2022-2"
                                        >
                                            2022-2
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item disabled"
                                            to="/horarios/2022-1"
                                        >
                                            2022-1
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            className="dropdown-item disabled"
                                            to="/horarios/2021-2"
                                        >
                                            2021-2
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to="/torneos">
                                    Torneos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link 
                                className="nav-link" 
                                to="/eventos">
                                    Eventos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link
                                className="nav-link" 
                                to="/herramientas">
                                    Herramientas
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}
