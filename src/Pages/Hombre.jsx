import banner_mans_image from "../components/assets/banner_mens.png";
import { Card, Container, Grid } from "@mui/material";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Hombre() {
  const filterdata = data.filter(
    (producto) => producto.id >= 13 && producto.id <= 24
  );
  return (
    <>
      <div className="hombre">
        <img
          src={banner_mans_image}
          alt="banner_mans_image"
          style={{ width: "100%" }}
        />
      </div>
      <Cards data={filterdata} titulo={"Hombre"} />
    </>
  );
}
export default Hombre;
