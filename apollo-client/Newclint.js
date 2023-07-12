import { ApolloClient, InMemoryCache, gql ,HttpLink,AsyncStorage} from "@apollo/client";
// import { persistCache } from 'apollo3-cache-persist';
import { offsetLimitPagination } from "@apollo/client/utilities";
const GRAPHQL_LINK_URI = "https://api.thegraph.com/subgraphs/name/sayedex/herochain";
const cache = new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          NFT: offsetLimitPagination(),
          Auction:offsetLimitPagination()
        },
      },
    },
  });
export const client = new ApolloClient({
    uri: GRAPHQL_LINK_URI,
    cache,
  });

  // persistCache({
  //   cache,
  //   storage: AsyncStorage,
  // }).then(() => {
  //   // Continue setting up Apollo Client as usual.
  // })