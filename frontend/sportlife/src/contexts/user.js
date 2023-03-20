import { createContext, useState, useEffect } from "react";
import { api } from "../services/api";
import AxiosRepository from "../repository/AxiosRepository";
import useAuth from '../hooks/useAuth'

export const UserContext = createContext({});

export const UserProvider = ({ children }) =>{
	const [user, setUser] = useState([]);
  const [address, setAddress] = useState([])
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

  const createAddress = async (city,cep,country,road,neighborhood,number,complement) => {
    try {
      return await AxiosRepository.createAddress(city,cep,country,road,neighborhood,number,complement);
    } catch (error) {
      console.log(error);
    }
  };

  const getAddress = async () => {
    try {
      const response = await AxiosRepository.getAddress();
      setAddress(response.data.userAddress)
    } catch (error) {
      console.log(error);
    }
  };

	return (
    <UserContext.Provider
      value={{
				getInfoUser,
				updateUser,
        createAddress,
        getAddress,
        address,
				user
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
