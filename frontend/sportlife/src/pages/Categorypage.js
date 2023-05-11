import styles from "./Categorypage.module.css";

import Header from "../components/home/header/Header";
import Category from "../components/category/Category";
import Footer from "../components/home/footer/Footer";

import AxiosRepository from "../repository/AxiosRepository";

import Loading from "../components/home/main/components/Loading";

import { useParams } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import { useEffect, useState } from "react";

export default function CategoryPage() {
  const [loading, setLoading] = useState(true);
  const [product, setProducts] = useState();
  let { name, esporte, brand, sexo } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (name != undefined) {
      setLoading(true);
      AxiosRepository.findAll({ filter: name })
        .then((resp) => {
          setProducts(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (esporte != undefined) {
      let sportSearch = "";
      switch (esporte.toLowerCase()) {
        case "casual":
          sportSearch = 1;
          break;
        case "basquete":
          sportSearch = 2;
          break;
        case "corrida":
          sportSearch = 3;
          break;
        case "futebol":
          sportSearch = 4;
          break;
        case "volei":
          sportSearch = 5;
          break;
        case "tenis":
          sportSearch = 6;
          break;
        case "futsal":
          sportSearch = 7;
          break;
        case "lutas":
          sportSearch = 8;
          break;
        case "natacao":
          sportSearch = 9;
          break;
        default:
          navigate("/404");
          break;
      }

      setLoading(true);
      AxiosRepository.findBySport({ categoryId: sportSearch })
        .then((resp) => {
          setProducts(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else if(brand != undefined){
      AxiosRepository.findByBrand({ brand : brand })
        .then((resp) => {
          setProducts(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }else if(sexo != undefined){
      let letra = ''
      switch(sexo){
        case 'masculino':
          letra = 'm'
          break;
        case 'feminino':
          letra = 'f'
          break;
        default:
          navigate("/404");
          break;
      }
      AxiosRepository.findBySex({ sexo : letra })
        .then((resp) => {
          setProducts(resp.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  } , [name, sexo, esporte]);
  return (
    <div className={styles.container}>
      <Header />
      {!loading ? (
        <Category products={product} loading={loading} />
      ) : (
        <Loading />
      )}
      <Footer />
    </div>
  );
}
