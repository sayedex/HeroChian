import {gql} from "@apollo/client"




export const GetPool = gql`

query pools($factoryad: Bytes){
  pools(where: { factoryad: $factoryad }) {
    id
    Staketoken {
      name
      id
      symbol
      decimals
    }
    rewardtoken {
      name
      id
      symbol
      decimals
    }
    reward
    factoryad
    block
    endBlock
    timestamp
  }
}


`



//where: { address: $useradress })
export const GetUser = gql`

query Myquery($address: Bytes){
  users(where: { address: $address }){
  stakeAmount
  id
  address
  pool{
    Staketoken{
      name
      decimals
    }
    rewardtoken{
           name
      decimals
    }
  
  }
}

  }


`

export const GetUserAA = gql`

query users($address: string!) {
  users(where: { address: $useradress }){
  stakeAmount
  id
  address
  pool{
    Staketoken{
      name
      decimals
    }
    rewardtoken{
           name
      decimals
    }
  
  }
}

  }


`







export const GetSubredditbyid = gql`
query Myquery($topic:String!){

    getSubredditListByTopic(topic:$topic){
id
topic
created_at

    }

}
`

export const GetPost = gql`

query Myquery {
    getPostList{
body
created_at
id
image
title
subreddit_id
username
     commnents{
      created_at
      id
      text
      post_id
      username
    
    }
    subreddit {
      created_at
      id
      topic
      
    }
    votes{
      created_at
      id
      post_id
      upvote
      username
    }
    

    }
}

`

export const GetNFTBYCOllection = gql` 

query collections($id:Bytes,$tokenid:BigInt){
  collections(where:{id:$id}){
    id
    name
    nfts(where:{tokenId:$tokenid}){
      currentSeller
      id
      tokenId
      isTradable
      metadataUrl
      updatedAt
      currentAskPrice
      collection{
        id
      }

  askHistory{
    id
    askPrice
    orderType
    ontime
    timestamp
    seller{
      id
    }
  }
  # newhistory{
  #   id
  #   askPrice
  #   orderType
  #   ontime
  #   timestamp
  #   seller{
  #     id
  #   }
  # }
  
  transactionHistory{
      id
      TransactionName
      askPrice
      timestamp
      buyer{
        id
      }
      
      }
   
  bidder(where:{active:true}){
    id
    active
    timestamp
    bidprice
    bidowner
    bid{
      currentSeller
    }
  }    
    }
  }
}


`



export const NFT = gql`

query nft($first: Int $skip: Int $isauction:Int){

  nfts(first: $first skip: $skip ,where:{askHistory_:{auctionenable:$isauction},isTradable:true}){
    id
  tokenId
  metadataUrl
  currentAskPrice
  bidder{
    id
    bidprice
    bidowner
    timestamp
    active
    
  }
  collection{
    id
    
  }
  askHistory{
    auctionenable
    seller{
      id
    }
  }
}
    

    }


`




export const Auction = gql`

query nft($first: Int $skip: Int $isauction:Int){

  nfts(first: $first skip: $skip ,where:{askHistory_:{auctionenable:$isauction},isTradable:true}){
    id
  tokenId
  metadataUrl
  currentAskPrice
  bidder{
    id
    bidprice
    bidowner
    timestamp
    active
    
  }
  collection{
    id
    
  }
  askHistory{
    auctionenable
    seller{
      id
    }
  }
}
    

    }


`


export const GetCOllection = gql` 

query collections($id:Bytes $first: Int $skip: Int){
  collections(where:{id:$id}){
    id
    totalVolumeBNB
    numberTokensListed
    nfts(first: $first ,skip: $skip){
      id
      tokenId
      metadataUrl
      updatedAt
      currentAskPrice
  askHistory{
    id
    seller{
      id
    }
  }
  collection{
    id
    
  }
  bidder{
    id
    bidprice
    bidowner
  }    
    }
  
  }
}


`
//collection_:{id:"0x83263784d1ee858826b1372f40114f807aa79dff"}}

export const Get_collection_NFT = gql`

query nfts($id:Bytes,$first: Int $skip: Int){

  nfts( first: $first skip: $skip where:{isTradable:true collection_:{id:$id}}){
    id
  tokenId
  metadataUrl
  currentAskPrice
  collection{
    id
    
  }
  askHistory{
    auctionenable
  }

}
    

    }


`



export const FetchUserdatas = gql` 

query dusers($input:String){
  dusers(where:{useraddress:$input}){
    useraddress
    id
    askOrderHistory(where:{nft_:{isTradable:true}}){
    id
    auctionenable
    nft{
          id
      tokenId
      metadataUrl
      updatedAt
      isTradable
      currentAskPrice
      askHistory{
        auctionenable
      }
      collection{
    id
    
  }
    }
  }
  
    }
 
  
}


`

export const FetchUser_BID = gql`

query bids($input:String){
  bids(where:{bidowner:$input,bid_:{isTradable:true}}){
  id
  bidowner
  bid{
   id
      tokenId
      metadataUrl
      updatedAt
      isTradable
      currentAskPrice
      askHistory{
        auctionenable
      }
      collection{
    id
    
  }
  }
}

}


`



export const GET_USER = gql` 

query askOrders($id:Bytes){
  askOrders(where:{seller_:{id:"0xB9c9a6dc679892ECEE90da41597d194EeA43b910"}}){
    id
    # numberTokensListed
nft{
id
}
seller{
  id
}
    }
 
  
}


`

export const GET_FLOOR = gql` 

query collections($id:Bytes){
  collections(where:{id:$id}){
    id
   numberTokensListed
   totalVolumeBNB
nfts(first:1 orderBy:currentAskPrice orderDirection:asc ){
  metadataUrl
  currentAskPrice
id
}
dayData{
      id
      dailyVolumeBNB
    }


    }
 
  
}


`


// call auction
export const nfts = gql`

query nfts($first: Int $skip: Int $isauction:Int){

  nfts( first: $first skip: $skip  orderBy: updatedAt, orderDirection: desc where:{askHistory_:{auctionenable:$isauction},isTradable:true}){
    id
  tokenId
  metadataUrl
  currentAskPrice
  collection{
    id
    
  }

}
    

    }


`

export const RecentSell = gql`

query transactions{

  transactions( first: 20 ,orderBy:timestamp){
    id
    nft{
      id
  tokenId
  metadataUrl
  currentAskPrice
  collection{
    id
    
  }
    }
  }
}



`





export const TopNFT = gql`

query nfts($first: Int){

  nfts( first:$first  orderBy: updatedAt, orderDirection: desc){
    id
  tokenId
  updatedAt
  metadataUrl
  currentAskPrice
  askHistory{
    auctionenable
  }
  collection{
    id
    
  }

}
    

    }


`

export const HighestVolumeCollections= gql`

query collections($first: Int){

  collections(first:$first orderBy:totalVolumeBNB orderDirection:desc){
  id
  totalVolumeBNB
  numberTokensListed
  name
  symbol
  nfts(first:1){
    id
    metadataUrl
  }
}
    

    }


`

export const Hotcollection_A= gql`

query collections($first: Int){

  collections(first:$first orderBy:numberTokensListed orderDirection:desc){
  id
  totalVolumeBNB
  numberTokensListed
  name
  symbol
  nfts(first:1){
    id
    metadataUrl
  }
}
    

    }


`

