import React from "react";
import { makeStyles } from "@mui/styles";
import Modal from "react-modal";

import { Colors } from "../common/styles/colors";

interface IMainModalProps {
  isModalVisible: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "400px",
    height: "400px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: Colors.grey,
  },
};

const useStyles = makeStyles({
  title: {
    textAlign: "center",
    fontSize: "28px",
    color: Colors.lime,
  },
  button: {
    width: "80px",
    height: "30px",
    marginBottom: "30px",
    border: "none",
    borderRadius: 10,
    cursor: "pointer",
    backgroundColor: Colors.white,
  },
});

const MainModal = ({ isModalVisible, closeModal }: IMainModalProps) => {
  const styles = useStyles();

  return (
    <Modal
      isOpen={isModalVisible}
      onRequestClose={closeModal}
      style={customStyles as Modal.Styles}
      shouldCloseOnEsc
      ariaHideApp={false}
    >
      <h2 className={styles.title}>Game Over!</h2>
      <button className={styles.button} onClick={closeModal}>
        <span>Close</span>
      </button>
    </Modal>
  );
};

export default MainModal;
