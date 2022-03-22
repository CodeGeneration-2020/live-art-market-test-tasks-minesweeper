import React from "react";
import { makeStyles } from "@mui/styles";

import { Colors } from "../../styles/colors";

const useStyles = makeStyles({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: Colors.blue,
  },
});

const Container = ({ children }: { children: JSX.Element }) => {
  const styles = useStyles();

  return <div className={styles.container}>{children}</div>;
};

export default Container;
