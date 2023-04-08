import { useContext } from "react";
import { CartContext } from "../contexts/cart";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;
