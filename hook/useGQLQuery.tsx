import React,{useEffect, useState,CSSProperties} from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
  NetworkStatus
} from "@apollo/client";



export const useGQLQuery = (query:any, variables:any, config = {}) => {
return useQuery(query,variables)
};
