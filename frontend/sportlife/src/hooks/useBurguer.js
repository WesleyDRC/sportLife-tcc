import { useContext } from "react";
import { BurguerContext } from "../contexts/burguer";

const useBurguer = () => {
  return useContext(BurguerContext);
};

export default useBurguer;
