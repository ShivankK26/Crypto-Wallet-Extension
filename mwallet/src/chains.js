const Ethereum = {
    hex: '0x1',
    name: 'Ethereum',
    rpcUrl: 'https://1rpc.io/eth',
    ticker: "ETH"
};

const MumbaiTestnet = {
    hex: '0x13881',
    name: 'Mumbai Testnet',
    rpcUrl: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78',
    ticker: "MATIC"
};

export const CHAINS_CONFIG = {
    "0x1": Ethereum,
    "0x13881": MumbaiTestnet,
};