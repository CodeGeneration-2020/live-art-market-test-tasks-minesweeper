import { eventChannel } from "redux-saga";

import { setIsGameOver, setIsGameRunning } from "../slice";
import { store } from "../index";

class WebSocketService {
  socket: WebSocket;

  constructor() {
    this.socket = new WebSocket(process.env.REACT_APP_SOCKET_URL || "");
  }

  public get socketGetter(): WebSocket {
    return this.socket;
  }

  initWebsocket() {
    return eventChannel(() => {
      this.socket.onopen = () => {
        console.log("opening...");
      };

      this.socket.onerror = (error) => {
        console.log("WebSocket error " + error);
      };

      this.socket.onmessage = (e) => {
        if (e.data.includes("lose")) {
          store.dispatch(setIsGameOver(true));
          store.dispatch(setIsGameRunning(false));
        }
      };

      const unsubscribe = () => {
        this.socket.close();
      };

      return unsubscribe;
    });
  }
}

const SocketService = new WebSocketService();
export { SocketService };