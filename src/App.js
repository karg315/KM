import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagPrincipal from "./PagPrincipal";
import Eventos from "./Eventos";
import Torneos from "./Torneos";
import Herramientas from "./Herramientas";
import Horarios from "./Horarios";
import Pokedex from "./herramientas/Pokedex";
import PokemonDetail from "./herramientas/PokemonDetail";
import TFifa2022 from "./torneos/TFifa2022";
import H2023I from "./horarios/H2023I";
import TFifa20231 from "./torneos/TFifa2023-1";
import TFifa20252 from "./torneos/TFifa2025-2";
import Table from "./tabla";

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
                    <Route path="/torneos/torneo-fifa-2023-1" element={<TFifa20231 />} />
                    <Route path="/torneos/torneo-fifa-2025-2" element={<TFifa20252 />} />
                    <Route path="/horarios" element={<Horarios />} />
                    <Route path="/horarios/2023-I" element={<H2023I />} />
                    <Route path="/herramientas" element={<Herramientas />} />
                    <Route path="/herramientas/pokedex" element={<Pokedex />} />
                    <Route path="/herramientas/pokemon/:id" element={<PokemonDetail />} />
                    <Route path="/tabla" element={<Table></Table>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;