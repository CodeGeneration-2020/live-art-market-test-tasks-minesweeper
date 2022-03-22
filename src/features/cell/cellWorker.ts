import { SocketService } from "../common/services/redux-saga/webSocketService";

interface ICheckBombWorkerProps {
  type: string;
  x: number;
  y: number;
}

export function checkBombWorker({ x, y }: ICheckBombWorkerProps) {
  SocketService.socketGetter.send(`open ${x} ${y}`);
}
