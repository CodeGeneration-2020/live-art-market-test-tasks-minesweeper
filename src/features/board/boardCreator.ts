import { ICell } from "../common/types";

const boardCreator = (row: number, col: number) => {
  let board: ICell[][] = [];

  for (let x = 0; x < col; x++) {
    let subRow: ICell[] = [];

    for (let y = 0; y < row; y++) {
      const newCell = {
        revealed: false,
        x: x,
        y: y,
        flagged: false,
      };

      subRow = [...subRow, newCell];
    }

    board = [...board, subRow];
  }

  return board;
};

export default boardCreator;
