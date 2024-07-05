import banner_nino_img from "../components/assets/banner_kids.png";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Nino() {
  const filterdata = data.filter(
    (producto) => producto.id >= 25 && producto.id <= 36
  );

  return (
    <>
      <div className="hombre">
        <img
          src={banner_nino_img}
          alt="banner_nino_image"
          style={{ width: "100%" }}
        />
      </div>
      <Cards data={filterdata} titulo={"Niño"} />
    </>
  );
}

export default Nino;
