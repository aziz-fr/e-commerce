import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState(false);
  const products = useSelector((state) => state.cart.products);

  const toggleMenu = () => {
    if (menu) {
      setMenu(!menu);
    }
  };
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img
              src={process.env.PUBLIC_URL + "/images/brand_logo.png"}
              alt="Flex Logo"
              height={40}
            />
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <ExpandMoreIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/1">
              Women
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/2">
              Men
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">
              Children
            </Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">
            Flex
          </Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">
              Homepage
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              About
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link className="link" to="/">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart />}
      <div className="mobile-menu">
        <div className="left">
          <Link className="item" to="/">
            <img
              src={process.env.PUBLIC_URL + "/images/brand_logo.png"}
              alt="Flex Logo"
              height={40}
            />
            <ExpandMoreIcon />
          </Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon />
            <PersonIcon />
            <FavoriteIcon />
            <div className="cart-icon" onClick={() => setOpen(!open)}>
              <ShoppingCartIcon />
              <span>{products.length}</span>
            </div>
          </div>

          <div className="menu-icons" onClick={() => setMenu(!menu)}>
            {menu ? (
              <CloseIcon className="icon" />
            ) : (
              <MenuIcon className="icon" />
            )}
          </div>
        </div>

        {menu && (
          <div className="menu-items">
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/products/1">
                Women
              </Link>
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/products/2">
                Men
              </Link>
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/products/3">
                Children
              </Link>
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <span>USD</span>
              <ExpandMoreIcon />
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/">
                About
              </Link>
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/">
                Contact
              </Link>
            </div>
            <div className="item" onClick={() => toggleMenu()}>
              <Link className="link" to="/">
                Stores
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
