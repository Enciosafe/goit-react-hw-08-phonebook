import {contactsReducer} from "./contacts"
import {authReducer} from "./auth";
import {configureStore} from "@reduxjs/toolkit";
import {persistStore, persistReducer} from "redux-persist";
import storage from 'redux-persist/lib/storage'


const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token']
}

const store = configureStore({
    reducer: {
        auth: persistReducer(authPersistConfig, authReducer),
        contacts: contactsReducer,
    }
})



const persistor = persistStore(store)

export default {store, persistor}