require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney arena oxygen foot filter crawl random essay hen light army gentle'; 
let testAccounts = [
"0x625052a98f064ee7e9b831e354e755dcacb96edee53cbdb54a2b2e3a29642dab",
"0x42a367891e84cd1e7874b3f67269e96227c64336e0034b4b19a2cff5a1c5bbb5",
"0x7e27fb0ad393cbe5a251c812f0e2a9d78e5c37d96ccbd7e5e5e8e4e9d7e2dc1e",
"0x1b05ff0fc0252b14ee370ee99d25c74fb85c74d5fc04156fbf0b206b3e31a241",
"0x39e24de6086652299bca25ab4ca52a8ea7aad8c0da0f2fdd8cba6588b950889e",
"0x8c7dfc3dce2f22bb963692e022db082cb55d4d38cbc29ce5935add82788a47ae",
"0xd9de74e9f84f28be46ce0bc0d0c117ded712ea5b06abb34023aaf74da95360e4",
"0x5ecdbd97cbac59c56934e6052d38784fe97699bc675659d7d6dc6910fa7ab694",
"0x01c19a649fa79528ab68971e7cf6180d4eba77ef4d47ca1cd606f2fd348d2931",
"0xeae172911fc5e6da58ff513f1de3407a0b60e1574a90c6fd0aa64de5ae394078"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

