import boardCreator from "../boardCreator";

describe("boardCreator()", () => {
  const board = boardCreator(10, 10);
  it("board should contains 10 row with 10 items", () => {
    expect(board.every((row) => row.length === 10)).toBe(true);
  });

  it("every cell should not be revealed", () => {
    const board = boardCreator(10, 10);

    expect(board.every((row) => row.every(item => !item.revealed))).toBe(true);
  });
});
