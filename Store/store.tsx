import { configureStore } from '@reduxjs/toolkit';
import WalletState from './walletSlice';
import Newlist from "./Newlist"


const store = configureStore({
    reducer: {
        wallet: WalletState,
        buyordernft:Newlist,

    },
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch =  typeof store.dispatch