import { useContext } from "react";
import { UserContext } from "../contexts/user";

const useUser = () => {
  return useContext(UserContext);
};

export default useUser;
