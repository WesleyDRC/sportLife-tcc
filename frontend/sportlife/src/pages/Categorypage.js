import styles from './Categorypage.module.css'

import Header from '../components/home/header/Header'
import Category from '../components/category/Category'
import Footer from '../components/home/footer/Footer'


export default function CategoryPage(){
	return(
		<div className={styles.container}>
			<Header />
			<Category />
			<Footer />
		</div>
	)
}
