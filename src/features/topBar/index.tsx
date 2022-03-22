import React from "react";
import { makeStyles } from "@mui/styles";

import { Colors } from "../common/styles/colors";

interface ITopBarProps {
  hours: number;
  minutes: number;
  seconds: number;
}

const useStyles = makeStyles({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "60px",
    backgroundColor: Colors.lime,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: "24px",
    color: Colors.white,
  },
});

const TopBar = ({ hours, minutes, seconds }: ITopBarProps) => {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <p className={styles.title}>
        {hours} : {minutes} : {seconds}
      </p>
    </div>
  );
};

export default TopBar;
