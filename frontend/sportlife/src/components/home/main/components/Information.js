import styles from './Information.module.css'

export default function Information(props){
	return(
		<div className={styles.container}>
			<p className={styles.icon}>{props.icon}</p>
			<p className={styles.title}>{props.titleInfo}</p>
			<p className={styles.details}>{props.details}</p>
		</div>
	)
}
