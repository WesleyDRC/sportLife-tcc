import styles from './Assessments.module.css';

import CardAssessment from './CardAssessment';

import {useState, useEffect} from 'react'

import {useParams} from 'react-router-dom'

import AxiosRepository from '../../../repository/AxiosRepository'

export default function Assessments(){
	const [assessments, setAssessments] = useState([]);
	let { id } = useParams();

	useEffect(() => {
    AxiosRepository.findAssessmentProduct(id).then((resp) => {
			console.log(resp.data)
      setAssessments(resp.data);
    });
  }, []);

	return(
		<div className={styles.container}>
			<h1>Avaliações dos Clientes({assessments.length})</h1>
			{assessments && assessments.length > 0 ? (
            assessments.map((item,i) => (
              <CardAssessment
                id = {assessments[i].id}
								star ={assessments[i].stars}
								name={assessments[i].user.firstName}
								comment={assessments[i].assessments}
              />
            ))
          ) : (
            <p>
              <td className={styles.notfound}> Não há produtos em estoque </td>
            </p>
          )}
		</div>
	)
}
