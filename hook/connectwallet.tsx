import { useWeb3React } from '@web3-react/core';
import { injected, walletconnect, resetWalletConnector, walletlink } from '../Helpers/connectors';




//meta mask connection

//web3react metamask


const connectMetamaskSimple = async (connector:any,walletname:any) => {
    try {
        await connector(walletname);
    } catch (ex) {
        console.log(ex);
    }
};

