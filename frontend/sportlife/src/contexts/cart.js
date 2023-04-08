import { createContext, useState } from "react";

export const CartContext = createContext({})

export const CartProvider = ({children}) => {
	const [openCart, setOpenCart] = useState(false)

	const manupilationCartOpen = () => {
        setOpenCart(true)
        document.documentElement.style.overflow = "hidden" ;
        document.body.scroll = "no";
	}

    const manupilationCartClose = () => {
        setOpenCart(false)
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
	}

    return (
        <CartContext.Provider
            value={{
			    manupilationCartOpen, manupilationCartClose , openCart, setOpenCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
