import React, { useEffect, useState } from "react";
import { collection, query, getDocs } from "firebase/firestore";
import { db } from "./firebase";

const Table = () => {
    const [partidos, setPartidos] = useState([]);

    useEffect(() => {
        const fetchPartidos = async () => {
            try {
                const partidosQuery = query(collection(db, "partidos20252"));
                const partidosSnapshot = await getDocs(partidosQuery);

                const partidosData = partidosSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                setPartidos(partidosData);
            } catch (error) {
                console.log("Error al obtener los partidos:", error);
            }
        };

        fetchPartidos();
    }, []);

    const calcularTablaPosiciones = () => {
        // Inicializar la tabla de posiciones
        const tablaPosiciones = {};
        const equipos = [
            "Makein",
            "Rayo",
            "Diego",
            "Stanli",
            "Santy",
        ];

        equipos.forEach((equipo) => {
            tablaPosiciones[equipo] = {
                puntos: 0,
                golesFavor: 0,
                golesContra: 0,
            };
        });

        // Calcular la tabla de posiciones basada en los resultados de los partidos
        partidos.forEach((partido) => {
            console.log(partido)

            const equipoLocal = partido.equipoLocal;
            const equipoVisitante = partido.equipoVisitante;
            const golesLocal = parseInt(partido.golesLocal);
            const golesVisitante = parseInt(partido.golesVisitante);

            // Actualizar los puntos, goles a favor y en contra de los equipos
            if (golesLocal > golesVisitante) {
                tablaPosiciones[equipoLocal].puntos += 3;
            } else if (golesLocal < golesVisitante) {
                tablaPosiciones[equipoVisitante].puntos += 3;
            } else {
                tablaPosiciones[equipoLocal].puntos += 1;
                tablaPosiciones[equipoVisitante].puntos += 1;
            }

            tablaPosiciones[equipoLocal].golesFavor += golesLocal;
            tablaPosiciones[equipoLocal].golesContra += golesVisitante;
            tablaPosiciones[equipoVisitante].golesFavor += golesVisitante;
            tablaPosiciones[equipoVisitante].golesContra += golesLocal;
        });

        return tablaPosiciones;
    };

    const tablaPosiciones = calcularTablaPosiciones();

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Equipo</th>
                        <th>Puntos</th>
                        <th>Goles a favor</th>
                        <th>Goles en contra</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(tablaPosiciones).map(([equipo, datos]) => (
                        <tr key={equipo}>
                            <td>{equipo}</td>
                            <td>{datos.puntos}</td>
                            <td>{datos.golesFavor}</td>
                            <td>{datos.golesContra}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;

/* import React, { useState } from "react";

const data = [
    { id: 1, nombre: "John", edad: 25 },
    { id: 2, nombre: "Jane", edad: 30 },
    { id: 3, nombre: "Alice", edad: 28 },
];

const Table = () => {
    const [sortBy, setSortBy] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");

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
    });

    return (
        <table>
            <thead>
                <tr>
                    <th onClick={() => handleSort("id")}>ID</th>
                    <th onClick={() => handleSort("nombre")}>Nombre</th>
                    <th onClick={() => handleSort("edad")}>Edad</th>
                </tr>
            </thead>
            <tbody>
                {sortedData.map((row) => (
                    <tr key={row.id}>
                        <td>{row.id}</td>
                        <td>{row.nombre}</td>
                        <td>{row.edad}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table; */
