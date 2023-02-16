import { createStore, applyMiddleware, compose } from "redux";
import ThunkMiddleware from "redux-thunk";
import reducer from "./reducer";


const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  // esta linea es para conectar con la extension del navegador >>> REDUX DEVTOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(ThunkMiddleware))
);


export default store;