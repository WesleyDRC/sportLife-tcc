import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from "./FormLogin.module.css";
import Input from "./FormInput";
import useAuth from "../../hooks/useAuth";

export default function FormLogin() {
  const { SignIn } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    if (!email | !password) {
      setError("Preencha todos os campos");
      return;
    }

    const response = await SignIn(email, password);
    console.log(response);

    if (response) {
      setError(response);
      return;
    }

    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.formLogo}>
        <img src="https://i.imgur.com/lGlp8fZ.png" alt="Logo Sportlife" />
        <p>
          Sport<span>Life</span>
        </p>
      </div>
      <div className={styles.formLogin}>
        <form method="post" autoComplete="off" onSubmit={(e) => submit(e)}>
          <Input
            type="email"
            placeholder="Email"
            eye={false}
            value={email}
            onChange={(e) => [setEmail(e.target.value)]}
          />
          <Input
            type='password'
            placeholder="Senha"
            eye={true}
            value={password}
            onChange={(e) => [setPassword(e.target.value)]}
          />
          <div className={styles.formBtn}>
            <button type="submit">Entrar</button>
          </div>
          <div className={styles.formNotRegister}>
            <p>
              Não tem conta?{" "}
              <Link to="/register">
                <span>Registre-se</span>
              </Link>{" "}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
