import styles from './AdditionalInfos.module.css'

import AxiosRepository from '../../../repository/AxiosRepository';

import { useEffect, useState } from 'react';

import { useParams } from "react-router-dom";

export default function AdditionalInfos(){

	const [product, setProduct] = useState([]);
	let { id } = useParams();

	useEffect(() => {
    AxiosRepository.findOneProduct(id).then((resp) => {
      setProduct(resp.data);
    });
  }, [id]);
	return(
		<div className={styles.container}>
			<div>
				<p>Peso</p>
				<p>{product.weight}</p>
			</div>
			<hr/>
			<div>
				<p>Altura / Largura</p>
				<p>{product.height}/ {product.width}</p>
			</div>
			<hr/>
			<div>
				<p>Tamanho</p>
				<p>P, M , G, GG</p>
			</div>
			<hr/>
			<div>
				<p>Cor</p>
				<p>Preta</p>
			</div>
			<hr/>
		</div>
	)
}
