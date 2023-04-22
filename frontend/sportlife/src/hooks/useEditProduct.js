import { useContext } from "react";
import { EditProductContext } from "../contexts/editProduct";

const useEditProduct = () => {
  return useContext(EditProductContext);
};

export default useEditProduct;
