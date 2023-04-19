import React from "react";
import { Navbar } from "../Navbar";
import wip from "../images/wip.png";

export default function TFifa2022() {
    return (
        <div className="Torneo-Fifa">
            <Navbar />
            {/* <h2>Eventos</h2> */}
            <div className="container">
                <div className="seccion-bienvenida container-sm">
                    <h1 className="titulo-bienvenida">
                        <span className="bienvenidos">Página </span>
                        <span>en </span>
                        <br />
                        <span className="kartel">Mantenimiento </span>
                        <span>xd</span>
                        <span className="moritaz">xd</span>
                        <br />
                        <img
                            src={wip}
                            alt="Work In Progress"
                            height="500px"
                            width="500px"
                        />
                    </h1>
                </div>
            </div>
        </div>
    );
}
