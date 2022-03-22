import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { useStopwatch } from "react-timer-hook";
import { useDispatch, useSelector } from "react-redux";

import { Colors } from "../common/styles/colors";
import TopBar from "../topBar";
import createBoard from "./boardCreator";
import { ICell } from "../common/types";
import BoardFooter from "../footer";
import Cell from "../cell";
import { SagaActions } from "../common/types/actions";
import {
  setIsGameOver,
  setIsGameRunning,
  setNewLocations,
} from "../common/services/slice";
import { IGlobalState } from "../common/services/slice";
import MainModal from "../modal";

const useStyles = makeStyles({
  container: {
    boxShadow: "0px 0px 38px 9px rgba(0,0,0,0.45)",
    borderRadius: 20,
    backgroundColor: Colors.grey,
  },
  cellContainer: {
    display: "flex",
  },
  cellsContainer: {
    border: `1px solid ${Colors.black}`,
  },
});

const Board = () => {
  const styles = useStyles();
  const dispatch = useDispatch();

  const board = useSelector((state: IGlobalState) => state.board.locations);
  const isGameOver = useSelector(
    (state: IGlobalState) => state.board.isGameOver
  );
  const isGameRunning = useSelector(
    (state: IGlobalState) => state.board.isGameRunning
  );

  const { seconds, minutes, hours, start, pause, reset } = useStopwatch({
    autoStart: false,
  });

  useEffect(() => {
    const board = createBoard(10, 10);
    dispatch(setNewLocations(board));
    isGameOver && isGameRunning && pause();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isGameOver]);

  const updateBoard = (x: number, y: number) => {
    const newBoardValues = JSON.parse(JSON.stringify(board));
    newBoardValues[x][y].revealed = true;

    dispatch(setNewLocations([...newBoardValues]));
    dispatch({ type: SagaActions.BOMB_CHECK, x, y });
  };

  const onStart = () => {
    start();

    dispatch(setIsGameRunning(true));
    dispatch({ type: SagaActions.START_NEW_GAME });
  };

  const closeModal = () => {
    dispatch(setIsGameOver(false));
    reset(undefined, false);
  };

  const renderBoardRows = (row: ICell[], i: number) => {
    return (
      <div className={styles.cellContainer} key={i}>
        {row.map((singleCell, index) => {
          return (
            <Cell
              isGameRunning={isGameRunning}
              key={index}
              data={singleCell}
              updateBoard={updateBoard}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div className={styles.container}>
      <MainModal isModalVisible={isGameOver} closeModal={closeModal} />

      <TopBar seconds={seconds} minutes={minutes} hours={hours} />
      <div className={styles.cellsContainer}>{board.map(renderBoardRows)}</div>
      <BoardFooter
        onFooterButtonClick={onStart}
        isGameOver={isGameOver}
        isGameRunning={isGameRunning}
      />
    </div>
  );
};

export default Board;
