require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid problem oppose venture stomach rival miss purse hundred light army general'; 
let testAccounts = [
"0xbd025c46640d9a08128c38506612fa5f5c6b87a5757939ded3d21c51641368fc",
"0xdab389bfeeb309d3e199dda94dffd56c385287cf4c84439644d412d9cfc68fc3",
"0x65102e28be2ffdff40048d93c671586d5ef5ed4c32fcc05dd199962dc327e263",
"0xdc6e39fbb273299b9875cafea41a6aa8ae32481c5b65c6673a8607fae058a6a5",
"0xc1cffb0c34b3cf9fb0f72fd59a1a801b877194a38f1f521963500c6f0e68f854",
"0xf04af5434fc1d22ffb3e0f0eb73ee31b76e4e96a933f0975267c1a0ad09fdebd",
"0x1e673292480a3d02886035afd411919c656dabe3eefc2724aa9f148e9e6907e5",
"0xb335a82451c9e151683499ca656743d89618c771bb7502f0a783b21c700b0647",
"0xd9a1316054a60d6cd08feadc1902deeed7615f9de3e88994e0dfdb6afe8e79f6",
"0xbce61e1c0f1d0257c722b6f66fdd3ec7f7d731436d8eb3f57240c0e07f722a16"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


