import styles from "./NavBar.module.css";

import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import useCart from "../../../../hooks/useCart";
import useBurguer from "../../../../hooks/useBurguer";

import ShoppingCart from "./ShoppingCart";
import OptionsBurguer from "./OptionsBurguer";

import { useState } from "react";

import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const [text, setText] = useState("");

  const { manupilationCartOpen, openCart } = useCart();
  const { manupilationBurguerOpen, openBurguer } = useBurguer();

  let handleChange = (e) => {
    setText(e.target.value);
  };

	const navigate = useNavigate();

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      const text = event.target.value;
      navigate(`/filter/${text}`);
    }
  }

	function handleSearch(){
    navigate(`/filter/${text}`)
	}

  return (
    <div className={styles.container}>
      <div className={styles.navBar}>
        <div>
          <Link className={styles.logo} to="/">
            <img src="https://i.imgur.com/BUAhj3p.png" alt="Logo SportLife" />
            <p>SportLife</p>
          </Link>
        </div>
        <div className={styles.navOptions}>
          <p>Masculino</p>
          <p>Feminino</p>
          <p>Esportes</p>
          <p>Novidades</p>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Procurar . . ."
            onChange={handleChange}
						onKeyDown={handleKeyDown}
          />
          <button onClick={handleSearch}>
              <FaSearch onClick={handleSearch} className={styles.searchIconMobile} />{" "}
          </button>
          <FaHeart className={styles.icons} />
          <FaShoppingCart
            onClick={manupilationCartOpen}
            className={styles.icons}
          />
        </div>
      </div>
      <div className={styles.burguer}>
        <div>
          <Link className={styles.logoMobile} to="/">
            <img src="https://i.imgur.com/BUAhj3p.png" alt="Logo SportLife" />
          </Link>
        </div>

        <div>
          <input
            className={styles.searchBarMobile}
            type="text"
            placeholder="Procurar . . ."
            onChange={handleChange}
          />
          <button className={styles.searchButtonMobile}>
            <div onClick={handleSearch}>
              <FaSearch className={styles.searchIconMobile} />{" "}
            </div>
          </button>
        </div>
        <AiOutlineMenu
          onClick={manupilationBurguerOpen}
          className={styles.burguerIcon}
        />
      </div>
      {openCart && <ShoppingCart />}
      {openBurguer && <OptionsBurguer />}
    </div>
  );
}
