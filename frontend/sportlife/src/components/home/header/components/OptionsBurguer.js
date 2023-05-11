import styles from "./OptionsBurguer.module.css";

import useBurguer from "../../../../hooks/useBurguer";

import {useState} from "react"

import { Link } from "react-router-dom";

import { CgClose } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

import useCart from "../../../../hooks/useCart";

export default function OptionsBurguer() {
  const { manupilationCartOpen } = useCart();
  const { setOpenBurguer } = useBurguer();
	const [sportOpen, setSportOpen] = useState(false)

  function closeBurguer() {
    setOpenBurguer(false);
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  }

  function OpenMobileCart() {
    closeBurguer();
    manupilationCartOpen();
  }

	function modalOpen(){
		setSportOpen(!sportOpen)
	}

  return (
    <div className={styles.container}>
      <div className={styles.asideBurguer}>
        <header className={styles.headerBurguer}>
          <h2>Navegue pelo site</h2>
          <CgClose onClick={closeBurguer} />
        </header>
        <div className={styles.options}>
          <Link onClick={closeBurguer} to="/">
            Home
          </Link>
          <Link onClick={closeBurguer} to={`/sexo/masculino`}>
            Masculino
          </Link>
          <Link onClick={closeBurguer} to={`/sexo/feminino`}>
            Feminino
          </Link>
          <div className={styles.sportAndArrow}>
            <span onClick={modalOpen}>Esportes</span>
            <IoIosArrowDown className={sportOpen ? styles.notOpen : styles.rotate}/>
          </div>
          <div className={sportOpen ? styles.sportContainer : styles.none}>
            <Link onClick={closeBurguer} to="/esporte/futebol">Futebol</Link>
            <Link onClick={closeBurguer} to="/esporte/basquete">Basquete</Link>
            <Link onClick={closeBurguer} to="/esporte/volei">Vôlei</Link>
            <Link onClick={closeBurguer} to="/esporte/natacao">Natação</Link>
            <Link onClick={closeBurguer} to="/esporte/corrida">Corrida</Link>
            <Link onClick={closeBurguer} to="/esporte/tenis">Tênis</Link>
            <Link onClick={closeBurguer} to="/esporte/futsal">Futsal</Link>
            <Link onClick={closeBurguer} to="/esporte/lutas">Lutas</Link>
          </div>
          <Link onClick={closeBurguer}>Novidades</Link>
          <Link onClick={OpenMobileCart}>Meu Carrinho</Link>
        </div>
      </div>
    </div>
  );
}
