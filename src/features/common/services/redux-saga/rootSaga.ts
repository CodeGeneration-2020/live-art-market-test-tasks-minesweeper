import { takeEvery } from "redux-saga/effects";
import { newGameWorker } from "../../../board/boardWorker";
import { SagaActions } from "../../types/actions";
import { checkBombWorker } from "../../../cell/cellWorker";

export function* rootSaga(): Generator {
  yield takeEvery(SagaActions.START_NEW_GAME, newGameWorker);
  yield takeEvery(SagaActions.BOMB_CHECK, checkBombWorker);
}
