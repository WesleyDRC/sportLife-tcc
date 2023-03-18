import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import AxiosRepository from "../repository/AxiosRepository";
import useAuth from '../hooks/useAuth'

export const UserContext = createContext({});

export const UserProvider = ({ children }) =>{
	const [user, setUser] = useState([]);
	const { authenticated } = useAuth();

  useEffect(() => {
    getInfoUser();
  }, [authenticated]);
	const getInfoUser = async () => {
    try {
      const response = await api.get("/users/user");
      setUser(response.data.user[0]);
    } catch (error) {
      return error;
    }
  };

	const updateUser = async (firstName, lastName,CPF, gender, dateBirth, telephone) => {
    try {
      return await AxiosRepository.updateUser(firstName, lastName,CPF, gender, dateBirth, telephone);
    } catch (error) {
      console.log(error);
    }
  };

	return (
    <UserContext.Provider
      value={{
				getInfoUser,
				updateUser,
				user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
