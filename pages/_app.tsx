import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React,{useEffect} from "react"
import NextNProgress from "nextjs-progressbar";
import {
  ApolloProvider,
} from "@apollo/client";
import { Provider } from 'react-redux';
import { Web3Provider } from '@ethersproject/providers';
import { Web3ReactProvider } from '@web3-react/core';
 import {client as sayed} from "../apollo-client/Newclint"
import toast, { Toaster } from 'react-hot-toast';
import store from '../Store/store'
// import client from "../apollo-client/apollo-client";
import Layout from '../Layout/Layout';
import { getApolloClient } from "../apollo-client/apollo-client";

function MyApp({ Component, pageProps }: AppProps) {
    //React-query clint 
  const client = getApolloClient();

  ///web3 react clint 
	const getLibrary = (provider:any) => {
		const library = new Web3Provider(provider, 'any');
		library.pollingInterval = 15000;
		return library;
	};


  return(<>
  <Provider store={store}>
  <Web3ReactProvider getLibrary={getLibrary}>
  <ApolloProvider client={sayed}>
    <Layout>
    <Component {...pageProps} />
    </Layout>  <Toaster/>  <NextNProgress />
    </ApolloProvider>
    </Web3ReactProvider>
  </Provider>
  </>)
}

export default MyApp

