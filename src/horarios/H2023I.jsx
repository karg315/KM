import React from "react";
import { Navbar } from "../Navbar";
import "./horarios.css";

export default function H2023I() {
    return (
        <div className="H2023I">
            <Navbar />
            <div className="container">
                <br />
                <br />
                <div className="section" id="horario makein">
                    
                    <h1>
                        <span id="titulo-makein">Horario de Makein</span>
                    </h1>
                    <table className="table-bordered">
                        <tbody>
                        <tr>
                            <th>Hora \ Día</th>
                            <th>Lun</th>
                            <th>Mar</th>
                            <th>Mie</th>
                            <th>Jue</th>
                            <th>Vie</th>
                        </tr>
                        <tr>
                            <td>7 - 8am</td>
                            <td></td>
                            <td className="react materia" rowSpan="2">
                                React.JS
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8 - 9am</td>
                            <td></td>
                            {/* <!-- react --> */}
                            <td></td>
                            <td></td>
                            <td className="redes materia" rowSpan="3">
                                Redes I
                            </td>
                        </tr>
                        <tr>
                            <td>9 - 10am</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- redes --> */}
                        </tr>
                        <tr>
                            <td>10 - 11am</td>
                            <td></td>
                            <td className="ingles materia" rowSpan="2">
                                Inglés 7/Minor
                            </td>
                            <td></td>
                            <td className="ingles materia" rowSpan="2">
                                Inglés 7/Minor
                            </td>
                            {/* <!-- redes --> */}
                        </tr>
                        <tr>
                            <td>11am - 12m</td>
                            <td></td>
                            {/* <!-- ingles --> */}
                            <td className="core materia" rowSpan="2">
                                Core II
                            </td>
                            {/* <!-- ingles --> */}
                            <td></td>
                        </tr>
                        <tr>
                            <td>12m - 1pm</td>
                            <td className="diferenciales materia" rowSpan="2">
                                Ecuaciones Diferenciales
                            </td>
                            <td></td>
                            {/* <!-- core II --> */}
                            <td className="diferenciales materia" rowSpan="2">
                                Ecuaciones Diferenciales
                            </td>
                            <td className="pensamiento materia" rowSpan="2">
                                Pensamiento Sistemico
                            </td>
                        </tr>
                        <tr>
                            <td>1 - 2pm</td>
                            {/* <!-- diferenciales --> */}
                            <td></td>
                            <td></td>
                            {/* <!-- diferenciales --> */}
                            {/* <!-- pensamiento --> */}
                        </tr>
                        <tr>
                            <td>2 - 3pm</td>
                            <td></td>
                            <td></td>
                            <td className="bases-de-datos materia" rowSpan="3">
                                Bases de Datos I
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3 - 4pm</td>
                            <td></td>
                            <td></td>
                            {/* <!-- bases de datos I --> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4 - 5pm</td>
                            <td></td>
                            <td></td>
                            {/* <!-- bases de datos I --> */}
                            <td></td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Fin del horario de makein 2023-1 --> */}
                <br />
                <br />

                {/* <!-- Horario de rayo 2023-1 --> */}
                <div className="section" id="horario rayo">
                    <h1>
                        <span id="titulo-rayo">Horario de Rayo</span>
                    </h1>
                    <table className="table-bordered">
                    <tbody>
                        <tr>
                            <th>Hora \ Día</th>
                            <th>Lun</th>
                            <th>Mar</th>
                            <th>Mie</th>
                            <th>Jue</th>
                            <th>Vie</th>
                        </tr>
                        <tr>
                            <td>8 - 9am</td>
                            <td className="fisiologia materia" rowSpan="2">
                                Fisiologia
                            </td>
                            <td className="fisiologia materia" rowSpan="3">
                                Fisiologia
                            </td>
                            <td className="digitales materia" rowSpan="2">
                                Digitales
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9 - 10am</td>
                            {/* <!-- fisiologia -->
                    <!-- fisiologia -->
                    <!-- digitales--> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10 - 11am</td>
                            <td></td>
                            {/* <!-- fisiologia --> */}
                            <td className="lab-digitales materia" rowSpan="2">
                                LAB. Digitales
                            </td>
                            <td></td>
                            {/* <!-- anatomia --> */}
                        </tr>
                        <tr>
                            <td>11am - 12m</td>
                            <td></td>
                            <td></td>
                            {/* <!-- lab digitales --> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12m - 1pm</td>
                            <td></td>
                            <td className="lab-biofisica materia" rowSpan="2">
                                LAB. Biofisica
                            </td>
                            <td></td>
                            <td></td>
                            <td className="biofisica materia" rowSpan="3">
                                Biofisica
                            </td>
                        </tr>
                        <tr>
                            <td>1 - 2pm</td>
                            <td></td>
                            {/* <!-- lab biofisica --> */}
                            <td className="electronica materia" rowSpan="3">
                                Electronica
                            </td>
                            <td className="diferenciales materia" rowSpan="3">
                                Ecuaciones Diferenciales
                            </td>
                            {/* <!-- biofisica --> */}
                        </tr>
                        <tr>
                            <td>2 - 3pm</td>
                            <td></td>
                            <td></td>
                            {/* <!-- electronica -->
                    <!-- diferenciales -->
                    <!-- biofisica --> */}
                        </tr>
                        <tr>
                            <td>3 - 4pm</td>
                            <td></td>
                            <td></td>
                            {/* <!-- electronica -->
                    <!-- diferenciales --> */}
                            <td className="lab-electronica materia" rowSpan="2">
                                LAB. Electronica
                            </td>
                        </tr>
                        <tr>
                            <td>4 - 5pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- lab electronica --> */}
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Fin del horario de rayo 2023-1 --> */}
                <br />
                <br />
                {/* <!-- Horario de Diego 2023-1 --> */}
                <div className="section" id="horario diego">
                    <h1>
                        <span id="titulo-diego">Horario de Diego</span>
                    </h1>
                    <table className="table-bordered">
                    <tbody>
                        <tr>
                            <th>Hora \ Día</th>
                            <th>Lun</th>
                            <th>Mar</th>
                            <th>Mie</th>
                            <th>Jue</th>
                            <th>Vie</th>
                        </tr>
                        <tr>
                            <td>8 - 9am</td>
                            <td></td>
                            <td className="construccion materia" rowSpan="2">
                                Materiales de Construcción
                            </td>
                            <td></td>
                            <td className="construccion materia" rowSpan="2">
                                Materiales de Construcción
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9 - 10am</td>
                            <td className="mecanica-suelo materia" rowSpan="2">
                                Mecánica de Suelo
                            </td>
                            {/* <!-- construccion --> */}
                            <td className="mecanica-suelo materia" rowSpan="2">
                                Mecánica de Suelo
                            </td>
                            {/* <!-- construccion --> */}
                            <td className="numericos materia" rowSpan="3">
                                Métodos Númericos
                            </td>
                        </tr>
                        <tr>
                            <td>10 - 11am</td>
                            {/* <!-- mecanica de suelo --> */}
                            <td></td>
                            {/* <!-- mecanica de suelo --> */}
                            <td className="lab-materiales materia" rowSpan="3">
                                LAB. Materiales
                            </td>
                            {/* <!-- numericos --> */}
                        </tr>
                        <tr>
                            <td>11am - 12m</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- lab materiales -->
                    <!-- numericos --> */}
                        </tr>
                        <tr>
                            <td>12m - 1pm</td>
                            <td></td>
                            <td className="core materia" rowSpan="2">
                                Core IV
                            </td>
                            <td></td>
                            {/* <!-- lab materiales --> */}
                            <td></td>
                        </tr>
                        <tr>
                            <td>1 - 2pm</td>
                            <td></td>
                            {/* <!-- core --> */}
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2 - 3pm</td>
                            <td></td>
                            <td className="ingles materia" rowSpan="2">
                                Inglés 7/Minor
                            </td>
                            <td className="lab-mecanica-suelo materia" rowSpan="3">
                                LAB. Mecánica de Suelo
                            </td>
                            <td className="ingles materia" rowSpan="2">
                                Inglés 7/Minor
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3 - 4pm</td>
                            <td></td>
                            {/* <!-- ingles -->
                    <!-- lab macanica de suelo -->
                    <!-- ingles --> */}
                            <td></td>
                        </tr>
                        <tr>
                            <td>4 - 5pm</td>
                            <td></td>
                            <td className="diseño-vias materia" rowSpan="2">
                                Diseño de Vías
                            </td>
                            {/* <!-- lab macanica de suelo --> */}
                            <td className="diseño-vias materia" rowSpan="2">
                                Diseño de Vías
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5 - 6pm</td>
                            <td></td>
                            {/* <!-- diseño vias --> */}
                            <td></td>
                            {/* <!-- diseño vias --> */}
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Fin del horario de diego 2023-1 --> */}
                <br />
                <br />
                {/* <!-- Horario de stanli 2023-1 --> */}
                <div className="section" id="horario stanli">
                    <h1>
                        <span id="titulo-stanli">Horario de Stanli</span>
                    </h1>
                    <table className="table-bordered">
                    <tbody>
                        <tr>
                            <th>Hora \ Día</th>
                            <th>Lun</th>
                            <th>Mar</th>
                            <th>Mie</th>
                            <th>Jue</th>
                        </tr>
                        <tr>
                            <td>7 - 8 m</td>
                            <td></td>
                            <td className="gramatica materia" rowSpan="2">
                                Gramática 4
                            </td>
                            <td></td>
                            <td className="gramatica materia" rowSpan="2">
                                Gramática 4
                            </td>
                        </tr>
                        <tr>
                            <td>8 - 9am</td>
                            <td></td>
                            {/* <!-- creacion --> */}
                            <td></td>
                            {/* <!-- creacion --> */}
                        </tr>
                        <tr>
                            <td>9 - 10am</td>
                            <td></td>
                            <td className="edicion-musical materia" rowSpan="2">
                                Edición Músical 1
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10 - 11am</td>
                            <td></td>
                            {/* <!-- edicion musical --> */}
                            <td className="guitarra materia" rowSpan="1">
                                Guitarra
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11am - 12m</td>
                            <td></td>
                            <td className="teclado materia" rowSpan="2">
                                Teclado 3
                            </td>
                            <td className="teoria materia" rowSpan="2">
                                Teoria 4
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>12m - 1pm</td>
                            <td></td>
                            {/* <!-- teclado -->
                    <!-- teoria --> */}
                            <td></td>
                        </tr>
                        <tr>
                            <td>1 - 2pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>2 - 3pm</td>
                            <td className="seminario materia" rowSpan="2">
                                Seminario 1
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>3 - 4pm</td>
                            {/* <!-- seminario --> */}
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>4 - 5pm</td>
                            <td className="historia-musica materia" rowSpan="2">
                                Historia de la Música 3
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>5 - 6pm</td>
                            {/* <!-- historia musica --> */}
                            <td></td>
                            {/* <!-- seminario --> */}
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                {/* <!-- Fin del horario de stanli 2023-1 --> */}
                <br />
                <br />
                {/* <!-- Horario de Santy 2023-1 --> */}
                <div className="section" id="horario santy">
                    <h1>
                        <span id="titulo-santy">Horario de Santy</span>
                    </h1>
                    <table className="table-bordered">
                    <tbody>
                        <tr>
                            <th>Hora \ Día</th>
                            <th>Lun</th>
                            <th>Mar</th>
                            <th>Mie</th>
                            <th>Jue</th>
                            <th>Vie</th>
                        </tr>
                        <tr>
                            <td>7 - 8am</td>
                            <td className="tresdbasico materia" rowSpan="3">
                                3D Básico
                            </td>
                            <td></td>
                            <td className="diseño materia" rowSpan="3">
                                Diseño y animación
                            </td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>8 - 9am</td>
                            {/* <!-- 3d basico --> */}
                            <td></td>
                            {/* <!-- 3d diseño y animacion --> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>9 - 10am</td>
                            {/* <!-- 3d basico --> */}
                            <td></td>
                            {/* <!-- 3d diseño y animacion --> */}
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>10 - 11am</td>
                            <td className="metodologia materia" rowSpan="2">
                                Metodologia de la Investigación
                            </td>
                            <td></td>
                            <td></td>
                            <td className="lab-materiales materia" rowSpan="3">
                                Dibujo Anatomico
                            </td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>11am - 12m</td>
                            {/* <!-- metodologia--> */}
                            <td></td>
                            <td></td>
                            {/* <!-- anatomico --> */}
                            <td></td>
                        </tr>
                        <tr>
                            <td>12m - 1pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- anatomico --> */}
                            <td className="guion materia" rowSpan="3">
                                Guión Técnico
                            </td>
                        </tr>
                        <tr>
                            <td>1 - 2pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- guion tecnico --> */}
                        </tr>
                        <tr>
                            <td>2 - 3pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- guin tecnico --> */}
                        </tr>
                        <tr>
                            <td>3 - 4pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td className="literatura materia" rowSpan="2">
                                Literatura
                            </td>
                        </tr>
                        <tr>
                            <td>4 - 5pm</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            {/* <!-- literatura --> */}
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
