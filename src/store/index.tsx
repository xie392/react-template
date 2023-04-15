import { applyMiddleware, legacy_createStore, compose, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { UserStateInterface } from '#/store.user'

import user from './modules/user'

//在 localStorge 中生成 key 为root的值
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['user']
  // blacklist: ['']  //设置某个reducer数据不持久化，
}

// 如多个模合并
const reducer = combineReducers({
  user
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const PersistReducer = persistReducer(persistConfig, reducer)

const store = legacy_createStore(PersistReducer, composeEnhancers(applyMiddleware(thunk)))

const persistor = persistStore(store)

export interface Rootstate {
  user: UserStateInterface
}

export { store, persistor }
