import styles from "./NavBar.module.css";

import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";

import { Link } from "react-router-dom";

import useCart from "../../../../hooks/useCart";
import useBurguer from "../../../../hooks/useBurguer";

import ShoppingCart from "./ShoppingCart";
import OptionsBurguer from "./OptionsBurguer";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import {GiBoxingGlove} from 'react-icons/gi'
import {GiSoccerBall} from 'react-icons/gi'
import {GiTennisRacket} from 'react-icons/gi'
import {GiBasketballBall} from 'react-icons/gi'
import {GiVolleyballBall} from 'react-icons/gi'
import {TbSwimming} from 'react-icons/tb'
import {GrRun} from 'react-icons/gr'
import {GiSoccerKick} from 'react-icons/gi'

export default function NavBar() {
  const [text, setText] = useState("");
  const [showBox, setShowBox] = useState(false)

  const { manupilationCartOpen, openCart } = useCart();
  const { manupilationBurguerOpen, openBurguer } = useBurguer();

  const navigate = useNavigate();

  let handleChange = (e) => {
    let inputValue = e.target.value.trim();

    if (inputValue.match(/[^a-zA-Z0-9\s]/)) {
      return;
    }

    setText(inputValue);
  };

  function handleKeyPress(event) {
    const keyCode = event.keyCode || event.which;
    const char = String.fromCharCode(keyCode);
    const regex = /^[a-zA-Z0-9\s]+$/;
    if (!regex.test(char)) {
      event.preventDefault();
    }

    if (event.key === "Enter") {
      if (text.trim() == "") return;

      navigate(`/filter/${text}`);
    }
  }

  function handleSearch() {
    if (text.trim() == "") return;
    if (text.match(/[^a-zA-Z0-9\s]/)) {
      return;
    }
    navigate(`/filter/${text}`);
  }

  function viewBox(){
    setShowBox(true)
  }

  function notBox(){
    setShowBox(false)
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
          <Link to={`/sexo/masculino`}>
            <p>Masculino</p>
          </Link>
          <Link to={`/sexo/feminino`}>
            <p>Feminino</p>
          </Link>
          <div onMouseOver={viewBox} className={styles.sport}>
            <p>Esportes</p>
            <div onMouseOut={notBox} className={showBox ? styles.sportsContainer : styles.none}>
              <Link to ='/esporte/futebol'>
                <div className={styles.sports}>
                  <div>
                    <GiSoccerBall />
                  </div>
                  <p>Futebol</p>
                </div>
              </Link>
              <Link to='/esporte/basquete'>
                <div className={styles.sports}>
                    <div>
                      <GiBasketballBall />
                    </div>
                  <p>Basquete</p>
                </div>
              </Link>
              <Link to='/esporte/volei'>
                <div className={styles.sports}>
                  <div>
                    <GiVolleyballBall />
                  </div>
                  <p>Vôlei</p>
                </div>
              </Link>
              <Link to='/esporte/natacao'>
                <div className={styles.sports}>
                  <div>
                    <TbSwimming />
                  </div>
                  <p>Natação</p>
                </div>
              </Link>
              <Link to='/esporte/corrida'>
                <div className={styles.sports}>
                  <div>
                    <GrRun />
                  </div>
                  <p>Corrida</p>
                </div>
              </Link>
              <Link to='/esporte/tenis'>
                <div className={styles.sports}>
                  <div>
                    <GiTennisRacket />
                  </div>
                  <p>Tênis</p>
                </div>
              </Link>
              <Link to='/esporte/futsal'>
                <div className={styles.sports}>
                  <div>
                    <GiSoccerKick />
                  </div>
                  <p>Futsal</p>
                </div>
              </Link>
              <Link to='/esporte/lutas'>
                <div className={styles.sports}>
                  <div>
                    <GiBoxingGlove />
                  </div>
                  <p>Lutas</p>
                </div>
              </Link>
            </div>
          </div>
          <p>Novidades</p>
        </div>
        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="Procurar . . ."
            onChange={handleChange}
            onKeyPress={handleKeyPress}
          />
          <button onClick={handleSearch}>
            <FaSearch
              onClick={handleSearch}
              className={styles.searchIconMobile}
            />
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
              <FaSearch className={styles.searchIconMobile} />
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
