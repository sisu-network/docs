---
title: Overview
---
Most cross chain solutions deploys a smart contract at each blockchain. This contract is a gateway that controls all transactions in and out of the chain. If a blockchain does not support full smart contract execution (like the case of Bitcoin), a wallet is used instead.

### Concepts

Some key concepts when learning about cross chain transaction:
- **Gateway**: This is the entry for all the transactions coming in and out of a blockchain. The gateway is usually a smart contract deployed on the chain or wallet in case the blockchain does not support smart contracts. The gateway is controlled by a bridge that is outside of each chain.
- **Bridge**: an entity (could be single or multiple parties) that observe and control gateways at various chains.
- **Transaction input (TxIn)**: a request that is sent to the gateway to initiate a cross chain transfer.
- **Transaction output (TxOut)**: a transaction produced by the bridge and sent to the gateway.

### Cross chain transaction life cycle

![Life cycle of a cross chain request](https://sisu-public.s3.amazonaws.com/images/Diagram+(2).jpg)

A cross chain transaction often goes through 4 different steps:
1. A sender initiates a request to the gateway contract on chain A. The request's input often contains destination chain, recipient on the destination chain and other data.
2. The bridge observes the transaction from scanning network's block and produces a transaction output based on the request's input. The bridge could directly produce the transaction output or route the request to another relayer to do that job.
3. The transaction output is dispatched to the second gateway on chain B.
4. Depending on the transaction, the gateway could update its internal state or invoke a final transaction to the recipient.
