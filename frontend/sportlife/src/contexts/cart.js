import { createContext, useState } from "react";

import AxiosRepository from '../repository/AxiosRepository'

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
	const [openCart, setOpenCart] = useState(false)

	const manupilationCartOpen = () => {
        window.scrollTo(0, 0);
        setOpenCart(true)
        document.documentElement.style.overflow = "hidden" ;
        document.body.scroll = "no";
	}

    const manupilationCartClose = () => {
        setOpenCart(false)
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
	}

    const addItem = async (productId, quantity, size) => {
        try{
            manupilationCartOpen()
            await AxiosRepository.addItemCart(productId, quantity, size)
        }catch(error){
            console.log(error)
        }
    }

    const getCartUser = async () => {
        try {
            return await AxiosRepository.getCartUser();
        } catch (error) {
        console.log(error);
        }
    }

    return (
        <CartContext.Provider
            value={{
			    manupilationCartOpen, manupilationCartClose , openCart, setOpenCart, addItem, getCartUser
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
