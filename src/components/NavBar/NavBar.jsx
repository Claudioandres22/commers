import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";
import { useState } from "react";

import { Link } from "react-router-dom";

function NavBar() {
  const [menu, setMenu] = useState("tienda");

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>EnLinea</p>
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          <Link to="/" style={{ textDecoration: "none" }}>
            Tienda {menu === "tienda" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("hombre")}>
          <Link to="/hombre" style={{ textDecoration: "none" }}>
            Hombre {menu === "hombre" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("mujer")}>
          <Link to="/mujer" style={{ textDecoration: "none" }}>
            Mujer {menu === "mujer" ? <hr /> : <></>}
          </Link>
        </li>
        <li onClick={() => setMenu("niños")}>
          <Link to="/nino" style={{ textDecoration: "none" }}>
            Niños {menu === "niños" ? <hr /> : <></>}
          </Link>
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="carrito" />
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  );
}
export default NavBar;
