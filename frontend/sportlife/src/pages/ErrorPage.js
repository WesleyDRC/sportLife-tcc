import styles from './ErrorPage.module.css'
import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError();
    
    return (
        <div className={styles.errorPage}>
            <h1> Oops! </h1>
            <p> Desculpe, ocorreu um erro inesperado.</p>
            <p>
                <i> {error.statusText || error.message} </i>
            </p>
        </div>
    )
}
