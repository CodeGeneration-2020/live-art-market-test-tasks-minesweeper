import React, { useEffect } from "react";

import Board from "./features/board";
import { SocketService } from "./features/common/services/redux-saga/webSocketService";
import Container from "./features/common/components/container";

function App() {
  useEffect(() => {
    SocketService.initWebsocket();
  }, []);

  return (
    <Container>
      <Board />
    </Container>
  );
}

export default App;
