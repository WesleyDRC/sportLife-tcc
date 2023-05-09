import styles from './CalcDelivery.module.css'

import useUser from '../../../hooks/useUser'
import useCart from "../../../hooks/useCart"

import { useEffect } from 'react'

import { Link } from 'react-router-dom'

export default function CalcDelivery () {
  const { address, getAddress } = useUser()
  const { setAddressee, addressee, setKey, checkCheckout} = useCart()

  useEffect(() => {
    async function loadingAddress () {
      await getAddress()
    }
    loadingAddress()
  }, [])

  const handleAddresseeChange = (event) => {
    setKey(Date.now());
    setAddressee(event.target.value);
    // checkCheckout({})
  };

  if (address === undefined || address === null) {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>ENTREGA</h1>
        <Link to='/user/address' className={styles.registerAddress}>
          CADASTRAR ENDEREÇO
        </Link>
      </div>
    )
  } else {
    return (
      <div className={styles.container}>
        <h1 className={styles.title}>ENTREGA</h1>
        <p className={styles.days}>Receber em até 14 dias</p>
        <div className={styles.infos}>
          <p className={styles.subTitle}>Endereço de entrega</p>
          <p>
            {address.road}, {address.number},
          </p>
          <p>
            {address.neighborhood}, {address.city},
          </p>
          <p>{address.state}</p>
        </div>
        <p className={styles.editAddress}>
          Endereço errado ?{' '}
          <span>
            <Link to='/user/address'>Edite aqui !</Link>
          </span>
        </p>
        <div className={styles.inputContainer}>
          <p>Destinatário: </p>
          <input
            className={styles.inputAddressee}
            type='text'
            placeholder='Digite seu nome...'
            value={addressee}
            onChange={handleAddresseeChange}
          />
        </div>
      </div>
    )
  }
}
