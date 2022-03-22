import { SocketService } from "../common/services/redux-saga/webSocketService";

export function newGameWorker() {
  SocketService.socketGetter.send("new 1");
}
