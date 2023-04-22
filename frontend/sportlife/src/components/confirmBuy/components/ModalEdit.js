import styles from "./ModalEdit.module.css";

import { useState, useRef } from "react";

import useEditProduct from '../../../hooks/useEditProduct'

export default function ModalEdit(props) {
	const { manupilationEditProductClose } = useEditProduct()
  let [amount, setAmout] = useState(1);
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
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Edite a quantidade ou tamanho do seu produto</h1>
        <img src={props.url} />
        <p className={styles.name}>{props.name}</p>
        <form>
          <div className={styles.editForm}>
            <div className={styles.counterContainer}>
              <label className={styles.amountTitle}>Quantidade</label>
              <div className={styles.counter}>
                <button
                  type="button"
                  ref={subtract}
                  className={styles.sub}
                  onClick={subOne}
                >
                  {" "}
                  -{" "}
                </button>
                <p className={styles.amount}>{amount}</p>
                <button
                  type="button"
                  ref={add}
                  className={styles.add}
                  onClick={addOne}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
            </div>
            <div className={styles.sizeContainer}>
              <p>Tamanho</p>
              <div className={styles.sizes}>
                <p>PP</p>
                <p>P</p>
                <p>M</p>
                <p>G</p>
                <p>GG</p>
              </div>
            </div>
          </div>
          <div className={styles.buttons}>
						<button onClick={ manupilationEditProductClose } type='button' >Cancelar</button>
						<button type="submit" className={styles.saveEdits}>Salvar</button>
					</div>
        </form>
      </div>
    </div>
  );
}
