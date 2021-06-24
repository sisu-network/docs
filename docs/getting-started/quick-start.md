---
sidebar_position: 2
custom_edit_url: null
title: Quick Start
---

### Developer Quick Start

Sisu is in Testnet Phase 1 where developers can deploy their smart contracts. If you are an Ethereum developer, you should have no problem deploying your app to Sisu.

#### 1) Acquire testnet native Ray token

You need to get Ray, an equivalent unit of Ethereum, from our testnet faucet. Visit our [testnet faucet](https://faucet.talon-1.network/) and enter your account address there. After successful submission, you should have 100 Ray in your wallet.

#### 2) Deploy smart contract from funded account

You can deploy your smart contract using popular Ethereum tools:

- [Using Truffle](/docs/deploy-smart-contracts/using-truffle)

You can connect to Sisu's EVM engine through a RPC link.

```
// Javascript

const Web3 = require('Web3')

const web3 = new Web3('https://faucet.talon-1.network/')

// You can start using web3 from now on.
```
