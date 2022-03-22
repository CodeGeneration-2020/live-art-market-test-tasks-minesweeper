import React from "react";
import { makeStyles } from "@mui/styles";

import { Colors } from "../common/styles/colors";
import FooterButton from "./footerButton";
import { IFooterButtonProps } from "../common/types";

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "80px",
    backgroundColor: Colors.lime,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
});

const BoardFooter = ({
  onFooterButtonClick,
  isGameOver,
  isGameRunning,
}: IFooterButtonProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <FooterButton
        isGameOver={isGameOver}
        onFooterButtonClick={onFooterButtonClick}
        isGameRunning={isGameRunning}
      />
    </div>
  );
};

export default BoardFooter;
