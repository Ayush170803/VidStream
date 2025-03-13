// redux store as we will make the navigation slice to the whole youtube section so we need to make it available through the whole application/body so we use redux store.

import { configureStore } from "@reduxjs/toolkit";
import Appslice from './Appslice';
import Chatslice from './Chatslice';
import userReducer from './userSlice'

const Store = configureStore(
    {
            reducer:{
                app:Appslice,
                chat:Chatslice,
                user:userReducer
            }
    }
);

export default Store;