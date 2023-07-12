 import React from 'react';
// import { render } from 'react-dom';
// import {
//   ApolloClient,
//   InMemoryCache,
//   ApolloProvider,
//   useQuery,
//   gql
// } from "@apollo/client";
// const client = new ApolloClient({
//     uri: 'https://api.thegraph.com/subgraphs/name/sayedex/trdcfactory',
//     // headers:{
//     //     Authorization:'Apikey cavalero::stepzen.net+1000::ef7f48873e6d429c45434aecb010c3997ce5c66ef0552c8c86a8ef912b3c43a9'
//     // },
//     cache: new InMemoryCache(),
//     ssrMode: typeof window === 'undefined',
//   });



//   export default client;

import { ApolloClient, InMemoryCache, gql ,HttpLink} from "@apollo/client";

const isServer = typeof window === "undefined";
const windowApolloState = !isServer && window.__NEXT_DATA__.apolloState;
const GRAPHQL_LINK_URI = "https://api.thegraph.com/subgraphs/name/sayedex/herochain";
let CLIENT;

export function getApolloClient(forceNew) {
  if (!CLIENT || forceNew) {
    CLIENT = new ApolloClient({
      ssrMode: isServer,
      uri: "https://api.thegraph.com/subgraphs/name/sayedex/herochain",
      cache: new InMemoryCache().restore(windowApolloState || {}),

  
      
      /**
        // Default options to disable SSR for all queries.
        defaultOptions: {
          // Skip queries when server side rendering
          // https://www.apollographql.com/docs/react/data/queries/#ssr
          watchQuery: {
            ssr: false
          },
          query: {
            ssr: false
          }
          // Selectively enable specific queries like so:
          // `useQuery(QUERY, { ssr: true });`
        }
      */
    });
  }

  return CLIENT;
}


