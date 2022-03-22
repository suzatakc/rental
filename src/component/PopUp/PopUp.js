import { useContext } from "react";
import Modal from "react-modal";
import { PopupContext } from "../Context/PopupContext";
import { UserForm } from "../UserForm/UserForm";
import "./PopUp.scss";

export const PopUp = () => {
  const { isModalOpen, closeModal } = useContext(PopupContext);
  return (
    <div className="pop-up-section">
      <Modal
        style={{
          content: {
            border: 0,
            background: "white",
            overflow: "auto",
            WebkitOverflowScrolling: "touch",
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <UserForm />
      </Modal>
    </div>
  );
};
