import Hero from "../components/Hero/Hero";
import tendencias from "../components/assets/data.js";
import Cards from "../components/Cards/Cards.jsx";
import nuevacoleccion from "../components/assets/new_collections.js";

function Tienda() {
  return (
    <>
      <Hero />
      <Cards data={tendencias} titulo="Tendencias" />
      <Cards data={nuevacoleccion} titulo="Nueva colección" />
    </>
  );
}

export default Tienda;
