
import { createStore } from "redux";
import rootReducer from "./reducers/index";
import { persistStore, persistReducer } from 'redux-persist'
import storage from "@react-native-async-storage/async-storage"

// now creating store
const persistConfig = {

    key: 'root',
 
    storage: storage
}
const persistedReducer = persistReducer(persistConfig, rootReducer)
const store=createStore(persistedReducer)
console.log('Initial State',store.getState());
store.subscribe(()=>console.log('Initial State using subscribe',store.getState()));

export const persistor = persistStore(store)
export default store;


// import { createStore } from "redux";
// import rootReducer from "./reducers/index";
// import { persistStore, persistReducer } from 'redux-persist'
// import AsyncStorage from '@react-native-community/async-storage'
// // now creating store
// const persistConfig = {

//     key: 'persistedReducer',
 
//     storage: AsyncStorage
// }
// const store=createStore(rootReducer)

// store.subscribe(()=>console.log('Initial State using subscribe',store.getState()));
// const persistedReducer = persistReducer(persistConfig, simpleCounterReducer)

// const store = createStore(persistedReducer)

// let persistor = persistStore(store)

// export {store, persistor}

// export default store;