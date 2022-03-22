import React from "react";
import { makeStyles } from "@mui/styles";

import { Colors } from "../common/styles/colors";
import { IFooterButtonProps } from "../common/types";

const useStyles = makeStyles({
  button: {
    minWidth: "120px",
    height: "50px",
    color: (props: { isGameRunning: boolean, isGameOver: boolean}) =>
      props.isGameRunning || props.isGameOver ? Colors.grey : Colors.black,
    backgroundColor: Colors.white,
    border: "none",
    borderRadius: 20,
    cursor: "pointer",
    fontSize: "20px",
    padding: "0 10px",
  },
});

const FooterButton = ({
  onFooterButtonClick,
  isGameOver,
  isGameRunning,
}: IFooterButtonProps) => {
  const styles = useStyles({ isGameRunning, isGameOver });

  return (
    <button
      disabled={isGameRunning || isGameOver}
      onClick={onFooterButtonClick}
      className={styles.button}
    >
      <span>{isGameOver ? "Game is Over" : "Start a Game"}</span>
    </button>
  );
};

export default FooterButton;
