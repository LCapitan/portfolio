import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
import rootReducer from './reducers'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['lightModeOn']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

// let store = createStore(rootReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export default { store, persistor }