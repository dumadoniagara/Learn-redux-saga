import { all, takeEvery, put, call } from 'redux-saga/effects';
import * as actions from '../actions';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/'
const request = axios.create({
   baseURL: API_URL,
   timeout: 1000
});
const PATH = 'comments';

const read = async (path) => {
   await request.get(path)
      .then(response => {
         return response.data
      })
      .catch((err) => { throw err })
}

function* loadComment() {
   try {
      const data = yield call(read, PATH);
      console.log('data di loadComment sagas:', data)
      yield put(actions.loadCommentSuccess(data));
   }
   catch (error) {
      console.log(error);
      yield put(actions.loadCommentFailure());
   }
}

export default function* rootSaga() {
   yield all([
      takeEvery('LOAD_COMMENT', loadComment)
   ]);
}