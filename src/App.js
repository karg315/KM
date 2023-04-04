
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PagPrincipal from "./PagPrincipal";
import Eventos from "./Eventos";
import Torneos from "./Torneos";
import Herramientas from "./Herramientas";
import Horarios from "./Horarios";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<PagPrincipal />} />
                    <Route path="/eventos" element={<Eventos />} />
                    <Route path="/torneos" element={<Torneos />} />
                    <Route path="/horarios" element={<Horarios />} />
                    <Route path="/herramientas" element={<Herramientas />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;