---
sidebar_position: 2
custom_edit_url: null
title: Quick Start
---

# Developer Quick Start

## Deploy smart contract

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

## Note

IMPORTANT NOTE: Sisu network is still in active development. The dev testnet has been released and developers can do tokens transfer cross chain but it is subject to major update including data reset. When we get to stable testnet phase, the data will be kept permanently on-chain.

Please check our [timeline](/docs/more-info/timeline) for Sisu network's progress. We will give you full update and documentation when Testnet Phase 2 is launched.
