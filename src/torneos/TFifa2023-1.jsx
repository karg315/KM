import React, { useEffect, useState } from "react";
import { Navbar } from "../Navbar";
import { db } from "../firebase";
import {
    collection,
    doc,
    onSnapshot,
    getDocs,
    query,
    where,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./torneos.css";
import imgBarcelona from "../images/Barcelona.png";
import imgBayern from "../images/Bayern.png";
import imgLiverpool from "../images/Liverpool.png";
import imgManchester from "../images/Manchester_City.png";
import imgPSG from "../images/Paris.png";
import imgReal from "../images/Real_Madrid.png";
import { PacmanLoader } from "react-spinners";
import lineaTercerA from "../images/linea-tercer-a.png";
import lineaTercerB from "../images/linea-tercer-b.png";
import lineaFinalA from "../images/linea-final-a.png";
import lineaFinalB from "../images/linea-final-b.png";
import imgPiola from "../images/piola.png"

export default function TFifa20231() {
    const [resultados, setResultados] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();
    /* 
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc"); */

    /* xdxd
    Inician las nuevas funciones 
    xdxd */

    const [partidos, setPartidos] = useState([]);
    const [mostrarTablaCompleta, setMostrarTablaCompleta] = useState(false);

    const [golesEquipoLocalSemifinalA, setGolesEquipoLocalSemifinalA] =
        useState(null);
    const [golesEquipoLocalSemifinalB, setGolesEquipoLocalSemifinalB] =
        useState(null);
    const [golesEquipoVisitanteSemifinalA, setGolesEquipoVisitanteSemifinalA] =
        useState(null);
    const [golesEquipoVisitanteSemifinalB, setGolesEquipoVisitanteSemifinalB] =
        useState(null);

    const [golesEquipoLocalFinal, setGolesEquipoLocalFinal] = useState(null);
    const [golesEquipoLocalTercer, setGolesEquipoLocalTercer] = useState(null);
    const [golesEquipoVisitanteFinal, setGolesEquipoVisitanteFinal] =
        useState(null);
    const [golesEquipoVisitanteTercer, setGolesEquipoVisitanteTercer] =
        useState(null);

    useEffect(() => {
        const fetchPartidos = async () => {
            try {
                const partidosQuery = query(collection(db, "partidos"));
                const partidosSnapshot = await getDocs(partidosQuery);

                const partidosData = partidosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setPartidos(partidosData);
                setIsLoading(false);
            } catch (error) {
                console.log("Error al obtener los partidos:", error);
            }
        };

        fetchPartidos();
    }, []);

    const obtenerPartidosFaseEliminatoria = async (
        fase = null,
        equipo = null
    ) => {
        let partidosQuery = collection(db, "partidosFinales");

        if (fase) {
            partidosQuery = query(partidosQuery, where("fase", "==", fase));
        }

        const partidosSnapshot = await getDocs(partidosQuery);

        const golesEquipo = partidosSnapshot.docs.reduce((totalGoles, doc) => {
            const datosPartido = doc.data();
            const goles =
                equipo === "local"
                    ? parseInt(datosPartido.golesLocal) || 0
                    : parseInt(datosPartido.golesVisitante) || 0;
            return totalGoles + goles;
        }, 0);

        return golesEquipo;
    };

    const calcularTablaPosiciones = () => {
        const tabla = {};

        partidos.forEach((partido) => {
            const { equipoLocal, equipoVisitante, golesLocal, golesVisitante } =
                partido;

            // Verificar si el partido se ha jugado
            const partidoJugado = golesLocal !== "" && golesVisitante !== "";

            // Calcular datos del equipo local
            if (!tabla[equipoLocal]) {
                tabla[equipoLocal] = {
                    puntos: 0,
                    golesFavor: 0,
                    golesContra: 0,
                    partidosJugados: 0,
                    partidosGanados: 0,
                    partidosEmpatados: 0,
                    partidosPerdidos: 0,
                };
            }

            if (partidoJugado) {
                tabla[equipoLocal].partidosJugados += 1;
                tabla[equipoLocal].golesFavor += parseInt(golesLocal);
                tabla[equipoLocal].golesContra += parseInt(golesVisitante);

                if (parseInt(golesLocal) > parseInt(golesVisitante)) {
                    tabla[equipoLocal].puntos += 3;
                    tabla[equipoLocal].partidosGanados += 1;
                } else if (parseInt(golesLocal) === parseInt(golesVisitante)) {
                    tabla[equipoLocal].puntos += 1;
                    tabla[equipoLocal].partidosEmpatados += 1;
                } else {
                    tabla[equipoLocal].partidosPerdidos += 1;
                }
            }

            // Calcular datos del equipo visitante
            if (!tabla[equipoVisitante]) {
                tabla[equipoVisitante] = {
                    puntos: 0,
                    golesFavor: 0,
                    golesContra: 0,
                    partidosJugados: 0,
                    partidosGanados: 0,
                    partidosEmpatados: 0,
                    partidosPerdidos: 0,
                };
            }

            if (partidoJugado) {
                tabla[equipoVisitante].partidosJugados += 1;
                tabla[equipoVisitante].golesFavor += parseInt(golesVisitante);
                tabla[equipoVisitante].golesContra += parseInt(golesLocal);

                if (parseInt(golesVisitante) > parseInt(golesLocal)) {
                    tabla[equipoVisitante].puntos += 3;
                    tabla[equipoVisitante].partidosGanados += 1;
                } else if (parseInt(golesVisitante) === parseInt(golesLocal)) {
                    tabla[equipoVisitante].puntos += 1;
                    tabla[equipoVisitante].partidosEmpatados += 1;
                } else {
                    tabla[equipoVisitante].partidosPerdidos += 1;
                }
            }
        });

        return tabla;
    };

    const obtenerGolesLocal = (partidoId) => {
        const partido = partidos.find((p) => p.id === partidoId);

        if (partido) {
            return partido.golesLocal;
        }

        return null;
    };

    const obtenerGolesVisitante = (partidoId) => {
        const partido = partidos.find((p) => p.id === partidoId);

        if (partido) {
            return partido.golesVisitante;
        }

        return null;
    };

    const obtenerLogoEquipo = (equipo) => {
        switch (equipo) {
            case "Makein":
                return imgLiverpool;
            case "Rayo":
                return imgBayern;
            case "Diego":
                return imgBarcelona;
            case "Ayala":
                return imgReal;
            case "Stanli":
                return imgPSG;
            case "Santy":
                return imgManchester;
            default:
                return "";
        }
    };

    const obtenerSizeImg = (equipo) => {
        if (equipo === "Makein" || equipo === "Ayala") {
            return "logo-equipo-sm2";
        } else {
            return "logo-equipo-sm";
        }
    };

    const tablaPosiciones = calcularTablaPosiciones();

    // Ordenar la tabla de posiciones
    const equiposOrdenados = Object.entries(tablaPosiciones).sort(
        ([, datosA], [, datosB]) => {
            if (datosA.puntos !== datosB.puntos) {
                return datosB.puntos - datosA.puntos; // Ordenar por puntos de forma descendente
            } else {
                const diferenciaGolesA = datosA.golesFavor - datosA.golesContra;
                const diferenciaGolesB = datosB.golesFavor - datosB.golesContra;

                if (diferenciaGolesA === diferenciaGolesB) {
                    return datosB.golesFavor - datosA.golesFavor; // Ordenar por goles a favor de forma descendente
                } else {
                    return diferenciaGolesB - diferenciaGolesA; // Ordenar por diferencia de goles de forma descendente
                }
            }
        }
    );

    useEffect(() => {
        const obtenerGolesEquipoLocalSemifinalA = async () => {
            const golesEquipoLocalSemifinalA =
                await obtenerPartidosFaseEliminatoria("semifinalA", "local");
            setGolesEquipoLocalSemifinalA(golesEquipoLocalSemifinalA);
        };
        obtenerGolesEquipoLocalSemifinalA();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoLocalSemifinalB = async () => {
            const golesEquipoLocalSemifinalB =
                await obtenerPartidosFaseEliminatoria("semifinalB", "local");
            setGolesEquipoLocalSemifinalB(golesEquipoLocalSemifinalB);
        };
        obtenerGolesEquipoLocalSemifinalB();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoVisitanteSemifinalA = async () => {
            const golesEquipoVisitanteSemifinalA =
                await obtenerPartidosFaseEliminatoria(
                    "semifinalA",
                    "visitante"
                );
            setGolesEquipoVisitanteSemifinalA(golesEquipoVisitanteSemifinalA);
        };
        obtenerGolesEquipoVisitanteSemifinalA();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoVisitanteSemifinalB = async () => {
            const golesEquipoVisitanteSemifinalB =
                await obtenerPartidosFaseEliminatoria(
                    "semifinalB",
                    "visitante"
                );
            setGolesEquipoVisitanteSemifinalB(golesEquipoVisitanteSemifinalB);
        };
        obtenerGolesEquipoVisitanteSemifinalB();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoLocalFinal = async () => {
            const golesEquipoLocalFinal = await obtenerPartidosFaseEliminatoria(
                "final",
                "local"
            );
            setGolesEquipoLocalFinal(golesEquipoLocalFinal);
        };
        obtenerGolesEquipoLocalFinal();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoVisitanteFinal = async () => {
            const golesEquipoVisitanteFinal =
                await obtenerPartidosFaseEliminatoria("final", "visitante");
            setGolesEquipoVisitanteFinal(golesEquipoVisitanteFinal);
        };
        obtenerGolesEquipoVisitanteFinal();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoLocalTercer = async () => {
            const golesEquipoLocalTercer =
                await obtenerPartidosFaseEliminatoria(
                    "tercer-cuarto puesto",
                    "local"
                );
            setGolesEquipoLocalTercer(golesEquipoLocalTercer);
        };
        obtenerGolesEquipoLocalTercer();
    }, []);

    useEffect(() => {
        const obtenerGolesEquipoVisitanteTercer = async () => {
            const golesEquipoVisitanteTercer =
                await obtenerPartidosFaseEliminatoria(
                    "tercer-cuarto puesto",
                    "visitante"
                );
            setGolesEquipoVisitanteTercer(golesEquipoVisitanteTercer);
        };
        obtenerGolesEquipoVisitanteTercer();
    }, []);

    const obtenerFinalistaA = () => {
        if (golesEquipoLocalSemifinalA) {
            if (golesEquipoLocalSemifinalA > golesEquipoVisitanteSemifinalA) {
                return nombreEquipo(0);
            } else {
                return nombreEquipo(3);
            }
        }
    };

    const obtenerFinalistaB = () => {
        if (golesEquipoLocalSemifinalB) {
            if (golesEquipoLocalSemifinalB > golesEquipoVisitanteSemifinalB) {
                return nombreEquipo(1);
            } else {
                return nombreEquipo(2);
            }
        }
    };

    const obtenerTercerA = () => {
        if (golesEquipoLocalSemifinalA) {
            if (golesEquipoLocalSemifinalA < golesEquipoVisitanteSemifinalA) {
                return nombreEquipo(0);
            } else {
                return nombreEquipo(3);
            }
        }
    };

    const obtenerTercerB = () => {
        if (golesEquipoLocalSemifinalB) {
            if (golesEquipoLocalSemifinalB < golesEquipoVisitanteSemifinalB) {
                return nombreEquipo(1);
            } else {
                return nombreEquipo(2);
            }
        }
    };

    /* const golesEquipoVisitanteSemifinal = await obtenerPartidosFaseEliminatoria('semifinal', 'visitante');

    const golesEquipoLocalfinal = await obtenerPartidosFaseEliminatoria('final', 'local');

    const golesEquipoVisitantefinal = await obtenerPartidosFaseEliminatoria('final', 'visitante'); */

    const toggleMostrarTabla = () => {
        setMostrarTablaCompleta(!mostrarTablaCompleta);
    };

    const nombreEquipo = (posicion) => {
        return equiposOrdenados[posicion] ? equiposOrdenados[posicion][0] : "";
    };

    /* xdxd 
    Termina las nuevas funciones
    xdxd */

    /*     var [ptsMakein, setPtsMakein] = useState(0);
    var ptsRayo = 0;
    var ptsDiego = 0;
    var ptsAyala = 0;
    var ptsStanli = 0;
    var ptsSanty = 0;

    var gfMakein = 0;
    var gcMakein = 0;
    var gfRayo = 0;
    var gcRayo = 0;
    var gfDiego = 0;
    var gcDiego = 0;
    var gfAyala = 0;
    var gcAyala = 0;
    var gfStanli = 0;
    var gcStanli = 0;
    var gfSanty = 0;
    var gcSanty = 0;

    const darPuntos = () => { 
        if (
            parseInt(resultados.partido3[1]) > parseInt(resultados.partido3[0])
        ) {
            setPtsMakein(ptsMakein + 3);
        }
        if (
            parseInt(resultados.partido3[1]) ===
            parseInt(resultados.partido3[0])
        ) {
            setPtsMakein(ptsMakein + 1);
        }

        if (
            parseInt(resultados.partido6[0]) > parseInt(resultados.partido6[1])
        ) {
            setPtsMakein(ptsMakein + 3);
        }
        if (
            parseInt(resultados.partido6[0]) ===
            parseInt(resultados.partido6[1])
        ) {
            setPtsMakein(ptsMakein + 1);
        }

        if (
            parseInt(resultados.partido9[0]) > parseInt(resultados.partido9[1])
        ) {
            setPtsMakein(ptsMakein + 3);
        }
        if (
            parseInt(resultados.partido9[0]) ===
            parseInt(resultados.partido9[1])
        ) {
            setPtsMakein(ptsMakein + 1);
        }

        if (
            parseInt(resultados.partido12[0]) >
            parseInt(resultados.partido12[1])
        ) {
            setPtsMakein(ptsMakein + 3);
        }
        if (
            parseInt(resultados.partido12[0]) ===
            parseInt(resultados.partido12[1])
        ) {
            setPtsMakein(ptsMakein + 1);
        }

        if (
            parseInt(resultados.partido15[0]) >
            parseInt(resultados.partido15[1])
        ) {
            setPtsMakein(ptsMakein + 3);
        }
        if (
            parseInt(resultados.partido15[0]) ===
            parseInt(resultados.partido15[1])
        ) {
            setPtsMakein(ptsMakein + 1);
        }

        console.log(ptsMakein);
    };

    var data = [
        {
            logo: imgLiverpool,
            nombre: "Makein",
            puntos: ptsMakein,
            gf: gfMakein,
            gc: gcMakein,
            dg: gfMakein - gcMakein,
            size: "logo-equipo-sm2",
        },
        {
            logo: imgBayern,
            nombre: "Rayo",
            puntos: ptsRayo,
            gf: gfRayo,
            gc: gcRayo,
            dg: gfRayo - gcRayo,
            size: "logo-equipo-sm",
        },
        {
            logo: imgBarcelona,
            nombre: "Diego",
            puntos: ptsDiego,
            gf: gfDiego,
            gc: gcDiego,
            dg: gfDiego - gcDiego,
            size: "logo-equipo-sm",
        },
        {
            logo: imgReal,
            nombre: "Ayala",
            puntos: ptsAyala,
            gf: gfAyala,
            gc: gcAyala,
            dg: gfAyala - gcAyala,
            size: "logo-equipo-sm2",
        },
        {
            logo: imgPSG,
            nombre: "Stanli",
            puntos: ptsStanli,
            gf: gfStanli,
            gc: gcStanli,
            dg: gfStanli - gcStanli,
            size: "logo-equipo-sm",
        },
        {
            logo: imgManchester,
            nombre: "Santy",
            puntos: ptsSanty,
            gf: gfSanty,
            gc: gcSanty,
            dg: gfSanty - gcSanty,
            size: "logo-equipo-sm",
        },
    ];

    const handleSort = (column) => {
        if (sortBy === column) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(column);
            setSortOrder("asc");
        }
    };

    const sortedData = [...data].sort((a, b) => {
        if (sortOrder === "asc") {
            return a[sortBy] - b[sortBy];
        } else {
            return b[sortBy] - a[sortBy];
        }
    }); */

    /* Traer resultados de los partidos TcT 
    useEffect(() => {
        const fetchData = async () => {
            try {
                const docRef = doc(
                    collection(db, "torneo 2023 1"),
                    "628szdyyrtbYt5tjVnbo"
                );

                const unsubscribe = onSnapshot(docRef, (docSnapshot) => {
                    if (docSnapshot.exists()) {
                        const data = docSnapshot.data();

                        const arrayData = data.partidostct;

                        setResultados(arrayData);
                    } else {
                        console.log("El documento no existe");
                    }
                    setIsLoading(false);
                    darPuntos();
                });

                return () => {
                    // Detener la escucha de cambios cuando el componente se desmonte
                    unsubscribe();
                };
            } catch (error) {
                console.log("Error al obtener los datos:", error);
            }
        };

        fetchData();
    }, []); */

    return (
        <div className="Torneo-Fifa">
            <Navbar />
            <h2>Torneo FIFA Kartel de las Moritaz 2023-1</h2>
            <div className="container">
                {isLoading ? (
                    <PacmanLoader
                        color="blue"
                        size={150}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                ) : (
                    <div>
                        {/* Fecha 1 */}
                        <section id="fecha1">
                            <h3>Fecha 1</h3>
                            <div className="row justify-content-center">
                                {/* Partido 1 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBayern}
                                                            alt="Bayern"
                                                        />
                                                    </th>
                                                    <th className="Rayo">
                                                        Rayo
                                                    </th>

                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido01"
                                                        )}
                                                    </th>

                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>

                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido01"
                                                        )}
                                                    </th>

                                                    <th className="Stanli">
                                                        Stanli
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgPSG}
                                                            alt="PSG"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>

                                {/* Partido 2 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgManchester}
                                                            alt="Manchester City"
                                                        />
                                                    </th>
                                                    <th className="Santy">
                                                        Santy
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido02"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido02"
                                                        )}
                                                    </th>
                                                    <th className="Ayala">
                                                        Ayala
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgReal}
                                                            alt="Real Madrid"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>

                                {/* Partido 3 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBarcelona}
                                                            alt="Barcelona"
                                                            height="40px"
                                                            width="40px"
                                                        />
                                                    </th>
                                                    <th className="Diego">
                                                        Diego
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido03"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido03"
                                                        )}
                                                    </th>
                                                    <th className="Makein">
                                                        Makein
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgLiverpool}
                                                            alt="Liverpool"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="fecha2">
                            <h3>Fecha 2</h3>
                            <div className="row justify-content-center">
                                {/* Partido 4 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgManchester}
                                                            alt="Manchester City"
                                                        />
                                                    </th>
                                                    <th className="Santy">
                                                        Santy
                                                    </th>

                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido04"
                                                        )}
                                                    </th>

                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido04"
                                                        )}
                                                    </th>
                                                    <th className="Rayo">
                                                        Rayo
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBayern}
                                                            alt="Bayern"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 5 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgPSG}
                                                            alt="PSG"
                                                        />
                                                    </th>
                                                    <th className="Stanli">
                                                        Stanli
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido05"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido05"
                                                        )}
                                                    </th>
                                                    <th className="Diego">
                                                        Diego
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBarcelona}
                                                            alt="Barcelona"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 6 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgLiverpool}
                                                            alt="Liverpool"
                                                        />
                                                    </th>
                                                    <th className="Makein">
                                                        Makein
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido06"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido06"
                                                        )}
                                                    </th>
                                                    <th className="Ayala">
                                                        Ayala
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgReal}
                                                            alt="Real Madrid"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="fecha3">
                            <h3>Fecha 3</h3>
                            <div className="row justify-content-center">
                                {/* Partido 7 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgReal}
                                                            alt="Real Madrid"
                                                        />
                                                    </th>
                                                    <th className="Ayala">
                                                        Ayala
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido07"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido07"
                                                        )}
                                                    </th>
                                                    <th className="Diego">
                                                        Diego
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBarcelona}
                                                            alt="Barcelona"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 8 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgPSG}
                                                            alt="PSG"
                                                        />
                                                    </th>
                                                    <th className="Stanli">
                                                        Stanli
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido08"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido08"
                                                        )}
                                                    </th>
                                                    <th className="Santy">
                                                        Santy
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgManchester}
                                                            alt="Manchester City"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 9 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgLiverpool}
                                                            alt="Liverpool"
                                                        />
                                                    </th>
                                                    <th className="Makein">
                                                        Makein
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido09"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido09"
                                                        )}
                                                    </th>
                                                    <th className="Rayo">
                                                        Rayo
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBayern}
                                                            alt="Bayern"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="fecha4">
                            <h3>Fecha 4</h3>
                            <div className="row justify-content-center">
                                {/* Partido 10 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBarcelona}
                                                            alt="Barcelona"
                                                        />
                                                    </th>
                                                    <th className="Diego">
                                                        Diego
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido10"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido10"
                                                        )}
                                                    </th>
                                                    <th className="Santy">
                                                        Santy
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgManchester}
                                                            alt="Manchester"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 11 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgReal}
                                                            alt="Real Madrid"
                                                        />
                                                    </th>
                                                    <th className="Ayala">
                                                        Ayala
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido11"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido11"
                                                        )}
                                                    </th>
                                                    <th className="Rayo">
                                                        Rayo
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBayern}
                                                            alt="Bayern"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 12 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgLiverpool}
                                                            alt="Liverpool"
                                                        />
                                                    </th>
                                                    <th className="Makein">
                                                        Makein
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido12"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido12"
                                                        )}
                                                    </th>
                                                    <th className="Stanli">
                                                        Stanli
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgPSG}
                                                            alt="PSG"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section id="fecha5">
                            <h3>Fecha 5</h3>
                            <div className="row justify-content-center">
                                {/* Partido 13 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBayern}
                                                            alt="Bayern"
                                                        />
                                                    </th>
                                                    <th className="Rayo">
                                                        Rayo
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido13"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido13"
                                                        )}
                                                    </th>
                                                    <th className="Diego">
                                                        Diego
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgBarcelona}
                                                            alt="Barcelona"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 14 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgPSG}
                                                            alt="PSG"
                                                        />
                                                    </th>
                                                    <th className="Stanli">
                                                        Stanli
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido14"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido14"
                                                        )}
                                                    </th>
                                                    <th className="Ayala">
                                                        Ayala
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgReal}
                                                            alt="Real Madrid"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                                {/* Partido 15 */}
                                <div className="col-xxl-6">
                                    <div className="partido">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm2"
                                                            src={imgLiverpool}
                                                            alt="Liverpool"
                                                        />
                                                    </th>
                                                    <th className="Makein">
                                                        Makein
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesLocal(
                                                            "partido15"
                                                        )}
                                                    </th>
                                                    <th>
                                                        <strong>VS</strong>
                                                    </th>
                                                    <th className="resultado">
                                                        {obtenerGolesVisitante(
                                                            "partido15"
                                                        )}
                                                    </th>
                                                    <th className="Santy">
                                                        Santy
                                                    </th>
                                                    <th className="th-logo">
                                                        <img
                                                            className="logo-equipo-sm"
                                                            src={imgManchester}
                                                            alt="Manchester City"
                                                        />
                                                    </th>
                                                </tr>
                                            </thead>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/*                         
                        <section id="tabla-posiciones">
                            <h3>Tabla de posiciones</h3>

                            <table>
                                <thead>
                                    <tr>
                                        <th>Equipo</th>
                                        <th>Nombre</th>
                                        <th>PTS</th>
                                        <th>GF</th>
                                        <th>GC</th>
                                        <th>DG</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedData.map((row) => (
                                        <tr key={row.nombre}>
                                            <td>
                                                <img
                                                    className={row.size}
                                                    src={row.logo}
                                                    alt={row.nombre}
                                                />
                                            </td>
                                            <td className={row.nombre}>
                                                <strong>{row.nombre}</strong>
                                            </td>
                                            <td>{row.puntos}</td>
                                            <td>{row.gf}</td>
                                            <td>{row.gc}</td>
                                            <td>{row.dg}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section> */}

                        {/* Nueva tabla aaaaaaaaaaaaa */}
                        <section>
                            <h3>Tabla de posiciones</h3>
                            <div>
                                <table id="tabla-posiciones">
                                    <thead>
                                        <tr>
                                            {mostrarTablaCompleta ? (
                                                <>
                                                    <th className="th-logo2">
                                                        Logo
                                                    </th>
                                                    <th className="th-long">
                                                        Nombre
                                                    </th>
                                                    <th>PTS</th>
                                                    <th>GF</th>
                                                    <th>GC</th>
                                                    <th>DG</th>
                                                    <th>PJ</th>
                                                    <th>PG</th>
                                                    <th>PE</th>
                                                    <th>PP</th>
                                                </>
                                            ) : (
                                                <>
                                                    <th className="th-logo2">
                                                        Logo
                                                    </th>
                                                    <th className="th-long">
                                                        Nombre
                                                    </th>
                                                    <th className="th-sm">
                                                        PTS
                                                    </th>
                                                    <th className="th-sm">
                                                        DG
                                                    </th>
                                                </>
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {equiposOrdenados.map(
                                            ([equipo, datos]) => (
                                                <tr key={equipo}>
                                                    {mostrarTablaCompleta ? (
                                                        <>
                                                            <td>
                                                                <img
                                                                    className={obtenerSizeImg(
                                                                        equipo
                                                                    )}
                                                                    src={obtenerLogoEquipo(
                                                                        equipo
                                                                    )}
                                                                    alt={equipo}
                                                                />
                                                            </td>
                                                            <td
                                                                className={
                                                                    equipo
                                                                }
                                                            >
                                                                {equipo}
                                                            </td>
                                                            <td>
                                                                {datos.puntos}
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.golesFavor
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.golesContra
                                                                }
                                                            </td>
                                                            <td>
                                                                {datos.golesFavor -
                                                                    datos.golesContra}
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.partidosJugados
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.partidosGanados
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.partidosEmpatados
                                                                }
                                                            </td>
                                                            <td>
                                                                {
                                                                    datos.partidosPerdidos
                                                                }
                                                            </td>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <td>
                                                                <img
                                                                    className={obtenerSizeImg(
                                                                        equipo
                                                                    )}
                                                                    src={obtenerLogoEquipo(
                                                                        equipo
                                                                    )}
                                                                    alt={equipo}
                                                                />
                                                            </td>
                                                            <td className={equipo}>{equipo}</td>
                                                            <td>
                                                                {datos.puntos}
                                                            </td>
                                                            <td>
                                                                {datos.golesFavor -
                                                                    datos.golesContra}
                                                            </td>
                                                        </>
                                                    )}
                                                </tr>
                                            )
                                        )}
                                    </tbody>
                                    <caption></caption>
                                    {mostrarTablaCompleta ? (
                                        <caption>
                                            <small>
                                                PTS: Puntos
                                                <br />
                                                GF: Goles a favor
                                                <br />
                                                GC: Goles en contra
                                                <br />
                                                DG: Diferencia de gol
                                                <br />
                                                PJ: Partidos jugados
                                                <br />
                                                PG: Partidos ganados
                                                <br />
                                                PE: Partidos empatados
                                                <br />
                                                PP: Partidos perdidos
                                            </small>
                                        </caption>
                                    ) : (
                                        <caption>
                                            PTS: Puntos
                                            <br />
                                            DG: Diferencia de gol
                                        </caption>
                                    )}
                                </table>
                                <button
                                    type="button"
                                    className="btn btn-success mt-2"
                                    onClick={toggleMostrarTabla}
                                >
                                    {mostrarTablaCompleta
                                        ? "Mostrar 4 columnas"
                                        : "Mostrar tabla completa"}
                                </button>
                            </div>
                        </section>

                        <section id="fase-eliminatoria">
                            <h3>Semis y Final</h3>
                            <table id="tabla-eliminatoria">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th className="nombre">Llave A</th>
                                        <th className="res-final"></th>
                                        <th></th>

                                        <th></th>
                                        <th className="nombre"></th>
                                        <th className="res-final"></th>
                                        <th className="vs"></th>
                                        <th className="res-final"></th>
                                        <th className="nombre"></th>
                                        <th></th>

                                        <th></th>
                                        <th className="res-final"></th>
                                        <th className="nombre">Llave B</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan="15" height="20px"></td>
                                    </tr>
                                    {/* Semis Arriba */}
                                    <tr>
                                        <td className="borde logo-finales">
                                            <img
                                                className={obtenerSizeImg(
                                                    nombreEquipo(0)
                                                )}
                                                src={obtenerLogoEquipo(
                                                    nombreEquipo(0)
                                                )}
                                                alt={nombreEquipo(0)}
                                            />
                                        </td>
                                        {/* Logo */}
                                        <td
                                            className={
                                                nombreEquipo(0) + " borde"
                                            }
                                        >
                                            {nombreEquipo(0)}
                                        </td>
                                        {/* Nombre */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoLocalSemifinalA)
                                                ? golesEquipoLocalSemifinalA
                                                : ""}
                                        </td>
                                        {/* Resultado */}
                                        <td rowSpan="3" className="lineaFinal">
                                            <img
                                                src={lineaFinalA}
                                                alt=""
                                                width="40px"
                                                height="80px"
                                            />
                                        </td>{" "}
                                        {/* Espacio */}
                                        <td></td> {/* Logo */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Resultado Final A */}
                                        <td></td> {/* VS */}
                                        <td></td> {/* Resultado Final B */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Logo */}
                                        <td rowSpan="3" className="lineaFinal">
                                            <img
                                                src={lineaFinalB}
                                                alt=""
                                                width="40px"
                                                height="80px"
                                            />
                                        </td>{" "}
                                        {/* Espacio */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoLocalSemifinalB)
                                                ? golesEquipoLocalSemifinalB
                                                : "-"}
                                        </td>
                                        {/* Resultado */}
                                        <td
                                            className={
                                                nombreEquipo(1) + " borde"
                                            }
                                        >
                                            {nombreEquipo(1)}
                                        </td>
                                        {/* Nombre */}
                                        <td className="borde logo-finales">
                                            <img
                                                className={obtenerSizeImg(
                                                    nombreEquipo(1)
                                                )}
                                                src={obtenerLogoEquipo(
                                                    nombreEquipo(1)
                                                )}
                                                alt={nombreEquipo(1)}
                                            />
                                        </td>
                                        {/* Logo */}
                                    </tr>
                                    {/* Final */}
                                    <tr>
                                        <td></td> {/* Logo */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Resultado */}
                                        <td className="borde logo-finales">
                                            <img
                                                className={obtenerSizeImg(
                                                    obtenerFinalistaA()
                                                )}
                                                src={(obtenerLogoEquipo(
                                                    obtenerFinalistaA() ) ? obtenerLogoEquipo(
                                                        obtenerFinalistaA()) : imgPiola 
                                                )}
                                                alt=""
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                        <td
                                            className={
                                                obtenerFinalistaA() + " borde"
                                            }
                                        >
                                            {obtenerFinalistaA()}
                                        </td>{" "}
                                        {/* Nombre */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoLocalFinal)
                                                ? golesEquipoLocalFinal
                                                : "-"}
                                        </td>{" "}
                                        {/* Resultado Final A */}
                                        <td className="borde">VS</td> {/* VS */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoVisitanteFinal)
                                                ? golesEquipoVisitanteFinal
                                                : "-"}
                                        </td>{" "}
                                        {/* Resultado Final B */}
                                        <td
                                            className={
                                                obtenerFinalistaB() + " borde"
                                            }
                                        >
                                            {obtenerFinalistaB()}
                                        </td>{" "}
                                        {/* Nombre */}
                                        <td className="borde logo-finales">
                                            <img
                                                className={obtenerSizeImg(
                                                    obtenerFinalistaB()
                                                )}
                                                src={(obtenerLogoEquipo(
                                                    obtenerFinalistaB()
                                                )) ? obtenerLogoEquipo(
                                                    obtenerFinalistaB()) : imgPiola }
                                                alt=""
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                        <td></td> {/* Resultado */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Logo */}
                                    </tr>
                                    {/* Semis Abajo */}
                                    <tr>
                                        <td className="borde">
                                            <img
                                                className={obtenerSizeImg(
                                                    nombreEquipo(3)
                                                )}
                                                src={obtenerLogoEquipo(
                                                    nombreEquipo(3)
                                                )}
                                                alt={nombreEquipo(3)}
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                        <td
                                            className={
                                                nombreEquipo(3) + " borde"
                                            }
                                        >
                                            {nombreEquipo(3)}
                                        </td>
                                        {/* Nombre */}
                                        <td className="borde">
                                            {!isNaN(
                                                golesEquipoVisitanteSemifinalA
                                            )
                                                ? golesEquipoVisitanteSemifinalA
                                                : "-"}
                                        </td>
                                        {/* Resultado */}
                                        <td></td> {/* Logo */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Resultado Final A */}
                                        <td></td> {/* VS */}
                                        <td></td> {/* Resultado Final B */}
                                        <td></td> {/* Nombre */}
                                        <td></td> {/* Logo */}
                                        <td className="borde">
                                            {!isNaN(
                                                golesEquipoVisitanteSemifinalB
                                            )
                                                ? golesEquipoVisitanteSemifinalB
                                                : "-"}
                                        </td>{" "}
                                        {/* Resultado */}
                                        <td
                                            className={
                                                nombreEquipo(2) + " borde"
                                            }
                                        >
                                            {nombreEquipo(2)}
                                        </td>{" "}
                                        {/* Nombre */}
                                        <td className="borde">
                                            <img
                                                className={obtenerSizeImg(
                                                    nombreEquipo(2)
                                                )}
                                                src={obtenerLogoEquipo(
                                                    nombreEquipo(2)
                                                )}
                                                alt={nombreEquipo(2)}
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                    </tr>
                                    {/* Tercer y Cuarto */}
                                    <tr>
                                        <td></td> {/* Logo */}
                                        <td colSpan="3">
                                            <img
                                                src={lineaTercerA}
                                                alt=""
                                                height="40px"
                                                width="100%"
                                            />
                                        </td>
                                        <td className="borde">
                                            <img
                                                className={obtenerSizeImg(
                                                    obtenerTercerA()
                                                )}
                                                src={(obtenerLogoEquipo(
                                                    obtenerTercerA()) ? obtenerLogoEquipo(
                                                        obtenerTercerA()) : imgPiola 
                                                )}
                                                alt=""
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                        <td
                                            className={
                                                obtenerTercerA() + " borde"
                                            }
                                        >
                                            {obtenerTercerA()}
                                        </td>{" "}
                                        {/* Nombre */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoLocalTercer)
                                                ? golesEquipoLocalTercer
                                                : "-"}
                                        </td>{" "}
                                        {/* Resultado Final A */}
                                        <td className="borde">VS</td> {/* VS */}
                                        <td className="borde">
                                            {!isNaN(golesEquipoVisitanteTercer)
                                                ? golesEquipoVisitanteTercer
                                                : "-"}
                                        </td>{" "}
                                        {/* Resultado Final B */}
                                        <td
                                            className={
                                                obtenerTercerB() + " borde"
                                            }
                                        >
                                            {obtenerTercerB()}
                                        </td>{" "}
                                        {/* Nombre */}
                                        <td className="borde">
                                            <img
                                                className={obtenerSizeImg(
                                                    obtenerTercerB()
                                                )}
                                                src={(obtenerLogoEquipo(
                                                    obtenerTercerB()) ? obtenerLogoEquipo(
                                                        obtenerTercerB()) : imgPiola 
                                                )}
                                                alt=""
                                            />
                                        </td>{" "}
                                        {/* Logo */}
                                        <td colSpan="3">
                                            <img
                                                src={lineaTercerB}
                                                alt=""
                                                height="40px"
                                                width="100%"
                                            />
                                        </td>
                                        <td></td> {/* Logo */}
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}
