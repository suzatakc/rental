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
            WebkitOverflowScrolling: "touch",
            // overflow: "hidden",
            marginBottom: "-20px",
            marginTop: "-20px",
          },
        }}
        isOpen={isModalOpen}
        onRequestClose={closeModal}
      >
        <div className="user-form">
          {" "}
          <UserForm />
        </div>
      </Modal>
    </div>
  );
};
