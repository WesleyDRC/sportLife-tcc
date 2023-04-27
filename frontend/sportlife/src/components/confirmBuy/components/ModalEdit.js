import styles from './ModalEdit.module.css'

import { useState, useRef } from 'react'

import useEditProduct from '../../../hooks/useEditProduct'

import { useParams } from 'react-router-dom'

import useCart from '../../../hooks/useCart'

export default function ModalEdit (props) {
  const { manupilationEditProductClose } = useEditProduct()
  const { updateProductById } = useCart()

  let [amount, setAmout] = useState(props.quantity)
  let [size, setSize] = useState(props.size)

  const subtract = useRef()
  const add = useRef()

  const addOne = () => {
    setAmout(amount + 1)
  }

  const subOne = () => {
    if (amount === 1) {
      setAmout((amount = 1))
    } else {
      setAmout(amount - 1)
    }
  }

  const selectPP = () => {
    setSize('PP')
  }

  const selectP = () => {
    setSize('P')
  }

  const selectM = () => {
    setSize('M')
  }

  const selectG = () => {
    setSize('G')
  }

  const selectGG = () => {
    setSize('GG')
  }

  let teste = props.id
  
  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <h1>Edite a quantidade ou tamanho do seu produto</h1>
        <img src={props.url} />
        <p className={styles.name}>{props.name}</p>
        <div className={styles.editForm}>
          <div className={styles.counterContainer}>
            <label className={styles.amountTitle}>Quantidade</label>
            <div className={styles.counter}>
              <button
                type='button'
                ref={subtract}
                className={styles.sub}
                onClick={subOne}
              >
                -
              </button>
              <p className={styles.amount}>{amount}</p>
              <button
                type='button'
                ref={add}
                className={styles.add}
                onClick={addOne}
              >
                +
              </button>
            </div>
          </div>
          <div className={styles.sizeContainer}>
            <p className={styles.sizeTitle}>Tamanho</p>
            <div className={styles.sizes}>
              <p
                onClick={selectPP}
                className={size === 'PP' ? styles.select : styles.notSelect}
              >
                PP
              </p>
              <p
                onClick={selectP}
                className={size === 'P' ? styles.select : styles.notSelect}
              >
                P
              </p>
              <p
                onClick={selectM}
                className={size === 'M' ? styles.select : styles.notSelect}
              >
                M
              </p>
              <p
                onClick={selectG}
                className={size === 'G' ? styles.select : styles.notSelect}
              >
                G
              </p>
              <p
                onClick={selectGG}
                className={size === 'GG' ? styles.select : styles.notSelect}
              >
                GG
              </p>
            </div>
          </div>
        </div>
        <div className={styles.buttons}>
          <button onClick={manupilationEditProductClose} type='button'>
            Cancelar
          </button>
          <button
            onClick={() => updateProductById(teste, amount, size)}
            className={styles.saveEdits}
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
