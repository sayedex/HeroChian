import PropTypes from 'prop-types'
import { useRouter } from 'next/router'
import Main from '../../components/collection/Main';
import { useGQLQuery } from '../../hook/useGQLQuery';
import {NFT,GetNFTBYCOllection} from "../../graphql/Queries";
import { Buypage } from '../../components/LazyLoad/Buypage';
  // @ts-ignore
const index =() => {
  const router = useRouter()
  const { nft } = router.query
  const {data:collection_data, loading, networkStatus, error, refetch} = useGQLQuery(GetNFTBYCOllection,{
  variables: {
    id: nft && nft[0].toString(),
    tokenid:nft && nft[1]
  }
}
  )

if(loading){
  return <Buypage/>
}

console.log("collection_data",collection_data);

  console.log(error);
  
  return (<>   
{/* <Nftinfo/> */}
{!loading && collection_data  && <Main collection_data={collection_data?.collections} loading={loading}/> }

  </>
 

  )
}



export default index