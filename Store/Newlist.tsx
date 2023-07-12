import { createSlice, createAsyncThunk,PayloadAction } from '@reduxjs/toolkit'
import { QNFT } from '../typings';
type initialState ={
    AllListed:[];
    filter:any
}

const initialState: initialState={
AllListed:[],
filter:[]

}

enum filterItem {
    LowToHigh="lowprice",
    HighToLow="highprice",
    TokenID="tokenID",
    Search="Search"
  }


const Newlist = createSlice({
    name: 'Listed',
    initialState,
    reducers: {
        add_ALL(state,action:PayloadAction<[]>){
            state.AllListed= action.payload;
            state.filter = action.payload;
        },
        Search(state,action){
            const Search_sort =  state.AllListed.filter((Cel:QNFT)=>{
                return  Cel.tokenId.includes(action.payload)
            })
          
          state.filter = Search_sort

        },
      filter(state,action){
      switch(action.payload){

        //1st case
        case filterItem.LowToHigh:
      const Sort = state.AllListed.sort((a:QNFT,b:QNFT)=>{
        return a.currentAskPrice - b.currentAskPrice;
       })
      state.filter = Sort;
      break;
      //end case
     //another case
     case filterItem.HighToLow:
        const Sort_Low = state.AllListed.sort((a:QNFT,b:QNFT)=>{
            return b.currentAskPrice - a.currentAskPrice;
           })
           state.filter = Sort_Low;
           break;
      //end another case

      //another  case 

      case filterItem.TokenID:
        const Sort_tokenid = state.AllListed.sort((a:QNFT,b:QNFT)=>{
            return a.tokenId - b.tokenId;
           })
           state.filter = Sort_tokenid;
           break;

           default:
            state.filter= state.AllListed;
      }

      },
     
       

    },
  
 
});
export const { add_ALL,filter,Search} = Newlist.actions;
export default Newlist.reducer;





// const filter_low = Auction && Auction.slice().sort((a:any,b:any)=>{
//     return a.tokenId - b.tokenId;
    
//     });

//     const filter_Higt = Auction && Auction.slice().sort((a:any,b:any)=>{
//         return b.tokenId - a.tokenId;
        
//         })     