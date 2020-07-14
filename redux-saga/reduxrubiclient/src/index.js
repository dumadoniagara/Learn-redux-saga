import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommentBox from './components/CommentBox';
import * as serviceWorker from './serviceWorker';

import rootReducer from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/todo';

const sagaMiddleware = createSagaMiddleware();
const enhancer = compose(applyMiddleware(sagaMiddleware));
const store = createStore(rootReducer, enhancer)

sagaMiddleware.run(rootSaga);

// kalo pake thunk tanpa pake sagaMiddleware;
// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <CommentBox />
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
