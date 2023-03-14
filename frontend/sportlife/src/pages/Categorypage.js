import styles from './Category.module.css'

import Header from '../components/home/header/Header'
import Category from '../components/category/Category'

export default function CategoryPage(){
	return(
		<div className={styles.container}>
			<Header />
			<Category />
		</div>
	)
}
