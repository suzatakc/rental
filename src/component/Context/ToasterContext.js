import React, { createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToasterContext = createContext({
  successMessage: (str) => {},
  errorMessage: (str) => {},
});

const ToasterProvider = ({ children }) => {
  const successMessage = (str) => {
    toast.success(str);
  };

  const errorMessage = (str) => {
    toast.error(str);
  };
  return (
    <ToasterContext.Provider
      value={{
        successMessage,
        errorMessage,
      }}
    >
      <ToastContainer />
      {children}
    </ToasterContext.Provider>
  );
};

const ToasterConsumer = ToasterContext.Consumer;
export { ToasterProvider, ToasterContext, ToasterConsumer };
