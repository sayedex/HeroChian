import { InjectedConnector } from '@web3-react/injected-connector';
import { WalletConnectConnector } from '@web3-react/walletconnect-connector';
import { WalletLinkConnector } from '@web3-react/walletlink-connector';

const RPC_URLS = {
	1: 'https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
	4: 'https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4',
	5: 'https://goerli.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
	80001:"https://polygon-mumbai.g.alchemy.com/v2/V_3rqEvx3PWZLWiLXeLBdgi_2szMoNBF"
};

//token 0x8ee37adDD68906183FEf7CeC77f512Fc86e7C6CA

//metamask
export const injected = new InjectedConnector({
	supportedChainIds: [ 1, 3, 4, 5, 42 ,56,80001]
});


export const walletconnect = new WalletConnectConnector({
	rpc: {
		1: RPC_URLS[1],
		4: RPC_URLS[4],
		5: RPC_URLS[5],
		80001:RPC_URLS[80001]
	},
	qrcode: true,
	//pollingInterval: 15000
});


export function resetWalletConnector(connector:any) {
	if (connector && connector instanceof WalletConnectConnector) {
		connector.walletConnectProvider = undefined;
	}
}

//coinbase
export const walletlink = new WalletLinkConnector({
	url: RPC_URLS[4],
	appName: 'demo-app',
	supportedChainIds: [ 1, 4 ]
});