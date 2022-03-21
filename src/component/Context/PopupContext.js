import React, { createContext, useState } from "react";

const PopupContext = createContext({
  closeModal: () => {},
  openModal: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
});

const PopupContextProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PopupContext.Provider
      value={{ openModal, closeModal, isModalOpen, setIsModalOpen }}
    >
      {children}
    </PopupContext.Provider>
  );
};

const PopupConsumer = PopupContext.Consumer;
export { PopupContextProvider, PopupContext, PopupConsumer };
