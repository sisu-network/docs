---
sidebar_position: 1
title: Using Truffle
---

Sisu is in Testnet Phase 1 with deployment URL `https://rpc.talon-1.network`. We will update the guideline when we get to Testnet Phase 2 or mainnet.

### Prerequisite

You need to have NodeJs installed on your machine to work with truffle.

- [Install NodeJs](https://nodejs.org/en/)

Once NodeJs is install, you can install truffle

```
npm install -g truffle
```

Type `truffle version` to verify the tool is installed correctly.

### Configure Truffle

Create your own truffle project using [their guideline](https://www.trufflesuite.com/docs/truffle/quickstart).

By default truffle will deploy your project to local [ganache](https://www.trufflesuite.com/ganache) which is a simulate ETH chain. To deploy your smart contract to Sisu network, you need to modify the file `truffle-config.js`

```
const HDWalletProvider = require("@truffle/hdwallet-provider");
const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 8545, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
  },

  talon1: {
    provider: () => new HDWalletProvider(mnemonic, `https://rpc.talon-1.network`),
    network_id: "*",
    timeoutBlocks: 20,
    skipDryRun: true,
  }
}
```

### Deploy Your Smart Contract

From your terminal, run the following command:

```
truffle deploy --network talon1
```
