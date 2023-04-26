import { useState, useRef, useEffect } from "react";

import { FaShoppingCart } from "react-icons/fa";

import styles from "./ProductInfos.module.css";

import AxiosRepository from "../../../repository/AxiosRepository";

import priceBRL from "../../../utils/formatPrice";

import { useParams } from "react-router-dom";

import useCart from "../../../hooks/useCart";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function ProductInfos() {
  const { addItem, size, setSize } = useCart();
  const [product, setProduct] = useState([]);
  let [amount, setAmout] = useState(1);
  let { id } = useParams();

  const subtract = useRef();
  const add = useRef();

  const addOne = () => {
    setAmout(amount + 1);
  };

  const subOne = () => {
    if (amount === 1) {
      setAmout((amount = 1));
    } else {
      setAmout(amount - 1);
    }
  };

  function selectPP() {
    setSize("PP");
  }

  function selectP() {
    setSize("P");
  }

  function selectM() {
    setSize("M");
  }

  function selectG() {
    setSize("G");
  }

  function selectGG() {
    setSize("GG");
  }

  useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <p className={styles.name}>{product.name}</p>
      <p className={styles.price}>
        {priceBRL(product ? product.price : "R$0,00")}
      </p>
      <p className={styles.color}>Cores</p>
      <div
        className={styles.ballCor}
        style={{ backgroundColor: product.colors }}
      ></div>
      <p className={styles.size}>Tamanhos</p>
      <div className={styles.sizesOptions}>
        <button onClick={selectPP}>
          <p className={size == "PP" ? styles.select : styles.noSelect}>PP</p>
        </button>
        <button onClick={selectP}>
          <p className={size == "P" ? styles.select : styles.noSelect}>P</p>
        </button>
        <button onClick={selectM}>
          <p className={size == "M" ? styles.select : styles.noSelect}>M</p>
        </button>
        <button onClick={selectG}>
          <p className={size == "G" ? styles.select : styles.noSelect}>G</p>
        </button>
        <button onClick={selectGG}>
          <p className={size == "GG" ? styles.select : styles.noSelect}>GG</p>
        </button>
      </div>
      <div className={styles.counterAndBuy}>
        <div className={styles.counter}>
          <button ref={subtract} className={styles.sub} onClick={subOne}>
            -
          </button>
          <p className={styles.amount}>{amount}</p>
          <button ref={add} className={styles.add} onClick={addOne}>
            +
          </button>
        </div>
      </div>
      <button
        onClick={() => addItem(id, amount, size)}
        className={styles.addCar}
      >
        <FaShoppingCart />
        <span>Adicionar ao carrinho</span>
      </button>
      <ToastContainer
        position="top-right"
				style={{fontSize:'1.4rem'}}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}
