/* import React from "react";
import { PagPrincipal } from "./PagPrincipal";
import { Eventos } from "./Eventos";
import { Horarios } from "./Horarios";
import { Torneos } from "./Torneos";
import { Herramientas } from "./Herramientas";

/*import BotonCambioPestaña from "./BotonCambioPestaña";*/
/* 
function BotonCambioPestaña(props) {
    const cambiarPestaña = () => {
        props.cambiarPestaña(props.nombrePestaña);
    };

    return <button onClick={cambiarPestaña}>{props.nombrePestaña} 25 </button>;
}

export function Pestañas(props) {
    const { pestaña, cambiarPestaña } = props;

    function renderizarPestaña() {
        switch (pestaña) {
            case "eventos":
                return <Eventos />;
            case "torneos":
                return <Torneos />;
            case "horarios":
                return <Horarios />;
            case "herramientas":
                return <Herramientas />;
            default:
                return <PagPrincipal />;
        }
    }

    return (
        <div>
            <div>
                <BotonCambioPestaña
                    cambiarPestaña={cambiarPestaña}
                    pestaña="inicio"
                />
                <BotonCambioPestaña
                    cambiarPestaña={cambiarPestaña}
                    pestaña="eventos"
                />
                <BotonCambioPestaña
                    cambiarPestaña={cambiarPestaña}
                    pestaña="torneos"
                />
                <BotonCambioPestaña
                    cambiarPestaña={cambiarPestaña}
                    pestaña="horarios"
                />
                <BotonCambioPestaña
                    cambiarPestaña={cambiarPestaña}
                    pestaña="herramientas"
                />
            </div>
            {renderizarPestaña()}
        </div>
    );
}
 */