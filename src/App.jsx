import NavBar from "./components/NavBar/NavBar";
import "./index.css";
import Tienda from "./Pages/Tienda";
import Mujer from "./Pages/Mujer";
import Hombre from "./Pages/Hombre";
import Nino from "./Pages/Nino";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Tienda />}></Route>
        <Route path="/mujer" element={<Mujer />}></Route>
        <Route path="/hombre" element={<Hombre />}></Route>
        <Route path="/nino" element={<Nino />}></Route>
      </Routes>
    </>
  );
}

export default App;
