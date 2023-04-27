import styles from './Category.module.css'
import Card from './components/Card'
import priceBRL from '../../utils/formatPrice'

import AxiosRepository from '../../repository/AxiosRepository'

import { useState, useEffect } from 'react'

export default function Category(props){
	const [products, setProducts] = useState([])
	useEffect(() => {
    AxiosRepository.findAll({ order: 'views' })
      .then(resp => {
        setProducts(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])
	return(
		<div className={styles.container}>
			{/* <Card link='https://i.imgur.com/pnoGRSq.png' name='Camisa preta nike' price='100,00' />
			<Card link='https://i.imgur.com/pnoGRSq.png' name='Camisa preta nike' price='100,00' />
			<Card link='https://i.imgur.com/pnoGRSq.png' name='Camisa preta nike' price='100,00' />
			<Card link='https://i.imgur.com/pnoGRSq.png' name='Camisa preta nike' price='100,00' /> */}
			{products && products.length > 0 && (
            products.map((item,i) => (
              <Card
                key={item.id}
                id = {products[i].id}
								src={products[i].imageMain}
								name={products[i].name}
                sexo={products[i].sexo}
                category={products[i].categories.name}
								price={priceBRL(products[i].price)}
              />
            ))
          )}
		</div>
	)
}
