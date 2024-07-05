import banner_women_img from "../components/assets/banner_women.png";
import data from "../components/assets/all_product";
import Cards from "../components/Cards/Cards";

function Mujer() {
  const filterdata = data.filter(
    (producto) => producto.id >= 1 && producto.id <= 12
  );

  return (
    <>
      <div className="mujer">
        <img
          src={banner_women_img}
          alt="banner_women_image"
          style={{ width: "100%" }}
        />
      </div>

      <Cards data={filterdata} titulo={"Mujer"} />
    </>
  );
}

export default Mujer;
