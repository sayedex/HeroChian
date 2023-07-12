enum CountActionKind {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE',
}


enum filterItem {
  LowToHigh="lowprice",
  HighToLow="highprice",
  TokenID="tokenID"
}

type NFT ={
  id:any
tokenId:any
metadataUrl:any
currentAskPrice:any
}


type NFT_Metada = {

  
}

type Token ={
    id: ID!
name: String!
symbol: String!
decimals: number!
}

type User = {
    id: ID!
address: string!
pool: Pool
stakeAmount: number!
staketoken: Token!
}
type pool = {
    id: ID!
    Staketoken: Token
    rewardtoken: Token
    factoryad: string!
    reward: number!
    limit: number
    block: number!
    endBlock: number!
    timestamp: number!

}
 type Theme = 'light' | 'dark';
 type Connect = true | false;
 type Global = {
    theme: Theme;
    rstate:number
    address: string;
    changeTheme: (theme: Theme) => void;
    Web3:any
    connected:any
    connectedweb3:() =>void
    disconnectedweb3:()=>void
    ref:()=>void
    setMeta:any,
    NFT:any

  };

  type Display ={
width:number,

  }


  

  type Collection= {
    id: ID!
  
    name: string!

    symbol: string!

    active: Boolean!
  
    totalTrades: string!
    totalVolumeBNB: string!
  
    numberTokensListed: BigInt!

    nfts: nfts<number> | undefined 
  
   
    dayData: CollectionDayData!
  }
  type CollectionDayData = {
    id: ID!
  
    "Start date (timestamp)"
    date: Int!
  
    "Collection"
    collection: Collection!
  
    "Daily volume (in BNB)"
    dailyVolumeBNB: BigDecimal!
  
    "Daily unique trades"
    dailyTrades: BigInt!
  }

  type Propertis = {
    trait_type:any,
    value:any
  }


  export interface metaurl  {
    image:string,
    description:string,
    name:string,
    attributes:tair[]
  }
  type tair = {

trait_type: string,
value:string
  }

  type Bidder = {
    bidprice:number,
    bidowner:string,
    id:string
    bid:nfts
    timestamp:number
  }

   type Web3State = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    collection: any 

  }

  export interface nftdata {
    amount: string
block_number: string
block_number_minted: string
contract_type: "ERC721"
last_metadata_sync: string
last_token_uri_sync: string
metadata:string
name: string
owner_of: string
symbol: string
token_address:string
token_hash: string
token_id:string
token_uri:string,
image:string

  }


type Getuserinput =  {
  id:ID
}  

export interface metadata {
  image:any,
  token_id:any,
  name:any,
  description:any,
  contract:any
}


export interface QNFT {
  id: ID!
  tokenId: any
  otherId: string
  collection: Collection
  metadataUrl: any
  updatedAt: BigInt
  currentAskPrice: any
  currentSeller: string
  latestTradedPriceInBNB: string
  totalTrades: string
  askHistory: AskOrder[]
  newhistory:AskOrder[]
  transactionHistory:transactionHistory[]
  bidder: Bid[]
  isTradable: Boolean!

}

type AskOrder = {
  id: ID!
  block: any!
  timestamp: any!
  ontime: any!
  collection: Collection!
  nft: QNFT
  auctionenable:any
  askPrice: any
  orderType: OrderType!
  seller: Duser!

}

type transactionHistory = {
  id:ID
  TransactionName:string
  askPrice:any
  timestamp:any;
  buyer:Duser
}
type Duser = {
  id: ID!
  useraddress:String
}
enum OrderType  {
  New  = "New",
  Modify  = "Modify",
  Cancel = "Cancel",
}

type Bid ={
  id: ID!
  bidprice: any!
  tokenId:BigInt
  bidowner:any!
  ontime:BigInt
  timestamp:any!
  bid:QNFT!
  active:Boolean!

  }

  type Bidder = {
    id:ID
    active:boolean
    timestamp:any
    bidprice:any
    bidowner:any
    bid:{
      currentSeller:any
    }
  }
  type transactionHistory = {
    id:ID
    TransactionName:any
    askPrice:any
    timestamp:any
  }


  export interface GetNFTBYCOllection{
    id:ID,
    nfts:QNFT[]
    askHistory: AskOrder[]
    transactionHistory:transactionHistory[]
    bidder:Bidder
  }


  export interface Daydata {
    dailyVolumeBNB:number
    id:string
  }
  
  export interface GetFloorData {
    id:string
    dayData:Daydata[]
    nfts:QNFT[]
    numberTokensListed:number
    totalVolumeBNB:string,
  
  }