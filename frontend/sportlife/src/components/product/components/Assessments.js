import styles from "./Assessments.module.css";

import CardAssessment from "./CardAssessment";

import { useState, useEffect, useRef } from "react";

import { useParams } from "react-router-dom";

import AxiosRepository from "../../../repository/AxiosRepository";

import useComment from "../../../hooks/useComment";

import AddComment from "./AddComment";

import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function Assessments() {
  const { manupilationCommentOpen, openComment } = useComment();

  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const [assessments, setAssessments] = useState([]);
  let { id } = useParams();

  useEffect(() => {
    AxiosRepository.findAssessmentProduct(id).then((resp) => {
      setAssessments(resp.data);
    });
  }, [id]);

  return (
    <div className={styles.container}>
      <div className={styles.texts}>
        <h1 className={styles.title}>
          Avaliações dos Clientes({assessments.length})
        </h1>
        <p onClick={manupilationCommentOpen} className={styles.addComent}>
          Adicionar um comentário
        </p>
      </div>
      <div className={styles.carousel}>
        <div className={styles.promotions} ref={carousel}>
          {assessments && assessments.length > 0 ? (
            assessments.map((item, i) => (
              <div className={styles.containerWidth} key={item.id}>
                <CardAssessment
                  key={item.id}
                  id={item.id}
                  star={item.stars}
                  user={item.user.firstName}
                  lastName={item.user.lastName}
                  comment={item.assessments}
                />
              </div>
            ))
          ) : (
            <p className={styles.notfound}>Não há avaliações deste produto</p>
          )}
        </div>
      </div>
      <div className={styles.arrows}>
        <IoIosArrowBack
          className={styles.arrowLeft}
          onClick={handleLeftClick}
        />
        <IoIosArrowForward
          className={styles.arrowRight}
          onClick={handleRightClick}
        />
      </div>
      {openComment && <AddComment id={id} />}
    </div>
  );
}
