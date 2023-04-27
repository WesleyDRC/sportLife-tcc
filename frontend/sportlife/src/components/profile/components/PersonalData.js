import { Link } from "react-router-dom";
import { useEffect } from "react";

import styles from "./PersonalData.module.css";

import useUser from "../../../hooks/useUser";
import useAuth from "../../../hooks/useAuth";

import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export default function PersonalData() {
  const { user, getInfoUser } = useUser();
  const { authenticated } = useAuth();
  useEffect(() => {
    getInfoUser();
  }, [authenticated]);

  function manipulateGender(user) {
    if (user.gender == "M") return "Masculino";
    if (user.gender == "F") return "Feminino";
    return "";
  }

  return (
    <div>
      <h1>Dados Pessoais</h1>
      <div className={styles.container}>
        <div className={styles.subCont}>
          <div>
            <p className={styles.infoQuest}>Nome</p>
            <p className={`${styles.infoResponse}`}>{user.firstName}</p>
          </div>
          <div>
            <p className={styles.infoQuest}>Sobrenome</p>
            <p className={`${styles.infoResponse} ${styles.lastNameResponse}`}>
              {user.lastName}
            </p>
          </div>
        </div>
        <p className={styles.infoQuest}>Email</p>
        <p className={`${styles.infoResponse} ${styles.marginDetail}`}>
          {user.email}
        </p>
        <div className={styles.subCont}>
          <div>
            <p className={styles.infoQuest}>CPF</p>
            <p className={`${styles.infoResponse} ${styles.marginDetail}`}>
              {user.CPF}
            </p>
          </div>
          <div>
            <p className={styles.infoQuest}>Gênero</p>
            <p className={`${styles.infoResponse} ${styles.marginDetail}`}>
              {manipulateGender(user)}
            </p>
          </div>
          <div>
            <p className={styles.infoQuest}>Data de Nascimento</p>
            <p className={`${styles.infoResponse}`}>{user.dateBirth}</p>
          </div>
          <div>
            <p className={styles.infoQuest}>Telefone</p>
            <p className={`${styles.infoResponse}`}>{user.telephone}</p>
          </div>
        </div>
        <Link to="/user/edit">
          <p className={styles.edit}>EDITAR</p>
        </Link>
      </div>
      <ToastContainer
        position="top-right"
        style={{ fontSize: "1.4rem" }}
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  );
}
