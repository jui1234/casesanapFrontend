// store.js
// import { createStore } from 'redux';
// import authReducer from './services/reducer/authReducer';


// const store = createStore(authReducer);

// export default store;

import {configureStore} from "@reduxjs/toolkit"
import { authReducers } from "./services/reducer/authReducer";


const store = configureStore({
    reducer:{
        auth:authReducers,
    },
});

export default store;
