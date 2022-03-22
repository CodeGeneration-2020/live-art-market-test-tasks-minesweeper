export interface ICell {
  revealed: boolean;
  x: number;
  y: number;
  flagged: boolean;
}

export interface IFooterButtonProps {
  onFooterButtonClick: () => void;
  isGameOver: boolean;
  isGameRunning: boolean;
}
