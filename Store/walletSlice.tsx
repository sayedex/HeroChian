import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'

type initialState ={
    userNFT:[],
    status: true | false,
    walletmodel:true | false,
    userFetchNFT:"IDLE" | "ERROR" | "LOADING",
    cardNFT:{}
}

const initialState: initialState={
    userNFT: [],
    status: false,
    walletmodel:false,
    userFetchNFT:"IDLE",
    cardNFT:{}
}

const WalletState = createSlice({
    name: 'wallet',
    initialState,
    reducers: {
        setOpenmodel(state,action:PayloadAction){
            state.walletmodel= true;
        },
        setOffmodel(state,action:PayloadAction){
            state.walletmodel= false;
        },
        addCard(state,action:PayloadAction<any>){
            state.cardNFT= action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(FetchuserNFT.pending, (state, action) => {
                state.userFetchNFT = "LOADING"
            })
            .addCase(FetchuserNFT.fulfilled, (state, action) => {
                state.userNFT = action.payload;
                state.userFetchNFT = "IDLE";
            })
            .addCase(FetchuserNFT.rejected, (state, action) => {
                state.userFetchNFT = 'ERROR';
            });
    },
 
});
export const { setOpenmodel,setOffmodel,addCard} = WalletState.actions;
export default WalletState.reducer;




// Thunks
  
  export const FetchuserNFT = createAsyncThunk('products/fetch', async (account:any) => {
    if(!account){
        return;
    }
    const options = {method: 'GET', headers: {Accept: 'application/json', 'X-API-Key': 'hfFDDgyJiGcA93sEfRWQF61kqPD66rc7etsRDlEjjOZxQ3LVNZKMYRyB2Na3vx6f'}};
    try{
        const res = await fetch(`https://deep-index.moralis.io/api/v2/${account}/nft?chain=mumbai&format=decimal`, options)
        const {result}  = await res.json();
        return result;
         
        }catch(e){

        }

       
    
    
});