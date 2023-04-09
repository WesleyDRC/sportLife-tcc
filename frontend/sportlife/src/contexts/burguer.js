import { createContext, useState } from "react";

export const BurguerContext = createContext({})

export const BurguerProvider = ({children}) => {
	const [openBurguer, setOpenBurguer] = useState(false)

    const manupilationBurguerOpen = () => {
        setOpenBurguer(true)
        document.documentElement.style.overflow = "hidden" ;
        document.body.scroll = "no";
    }

    const manupilationBurguerClose = () => {
        setOpenBurguer(false)
        document.documentElement.style.overflow = 'auto';
        document.body.scroll = "yes";
    }

    return (
        <BurguerContext.Provider
            value={{
				manupilationBurguerOpen, manupilationBurguerClose , openBurguer, setOpenBurguer
            }}
        >
            {children}
        </BurguerContext.Provider>
    )
}
