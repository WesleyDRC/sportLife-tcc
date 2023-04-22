import { createContext, useState } from "react";

export const EditProductContext = createContext({});

export const EditProductProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);

  const manupilationEditProductOpen = () => {
    setOpenModal(true);
    document.documentElement.style.overflow = "hidden";
    document.body.scroll = "no";
  };

  const manupilationEditProductClose = () => {
    setOpenModal(false);
    document.documentElement.style.overflow = "auto";
    document.body.scroll = "yes";
  };

  return (
    <EditProductContext.Provider
      value={{
        manupilationEditProductOpen,
        manupilationEditProductClose,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </EditProductContext.Provider>
  );
};
