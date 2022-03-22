import React from "react";
import { makeStyles } from "@mui/styles";

import { Colors } from "../common/styles/colors";
import { ICell } from "../common/types";

interface ICellProps {
  data: ICell;
  updateBoard: (arg1: number, arg2: number) => void;
  isGameRunning: boolean;
}

const useStyles = makeStyles({
  block: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: 800,
    fontSize: 30,
    cursor: "pointer",
    width: "48px",
    height: "48px",
    border: "1px solid black",
    background: (props: any) =>
      !props.data.revealed ? Colors.white : Colors.yellow,
  },
});

const Cell = ({ data, updateBoard, isGameRunning }: ICellProps) => {
  const style = useStyles({ data });

  const onClickUpdate = () => {
    if (!isGameRunning) {
      return;
    }

    updateBoard(data.x, data.y);
  };

  return <button className={style.block} onClick={onClickUpdate} />;
};

export default Cell;
