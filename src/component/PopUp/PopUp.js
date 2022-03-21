import { useContext } from "react";
import Modal from "react-modal";
import { PopupContext } from "../Context/PopupContext";
import { UserForm } from "../UserForm/UserForm";
import "./PopUp.scss";

export const PopUp = () => {
  const { isModalOpen, closeModal, setIsModalOpen } = useContext(PopupContext);
  return (
    <div className="pop-up-section">
      <Modal
        style={{ height: "auto" }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <UserForm />
      </Modal>
    </div>
  );
};
