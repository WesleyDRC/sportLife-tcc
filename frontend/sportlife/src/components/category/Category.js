import styles from './Category.module.css'
import Card from './components/Card'

export default function Category(){
	return(
		<div className={styles.container}>
			<Card link='https://i.imgur.com/pnoGRSq.png' name='Camisa preta nike' price='R$100,00' />
		</div>
	)
}
