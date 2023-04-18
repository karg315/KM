import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagPrincipal from "./PagPrincipal";
import Eventos from "./Eventos";
import Torneos from "./Torneos";
import Herramientas from "./Herramientas";
import Horarios from "./Horarios";
import Pokedex from "./herramientas/Pokedex";
import PokemonDetail from "./herramientas/PokemonDetail";
import TFifa2022 from "./torneos/TFifa2022";

function App() {
    const basename = process.env.PUBLIC_URL || '/';

    return (
        <div className="App">
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="/" element={<PagPrincipal />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/torneos" element={<Torneos />} />
                    <Route path="/torneos/torneo-fifa-2022" element={<TFifa2022 />} />
                    <Route path="/horarios" element={<Horarios />} />
                    <Route path="/herramientas" element={<Herramientas />} />
                    <Route path="/herramientas/pokedex" element={<Pokedex />} />
                    <Route path="/herramientas/pokemon/:id" element={<PokemonDetail />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;