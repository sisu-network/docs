---
sidebar_position: 1
title: Architect
---

### Overall architect

Sisu is a network designed for fast transaction execution and decentralized token swapping. The chain has 3 major components: a consensus engine using tendermint, an Ethereum execution engine and a decentralized signer TSS engine.

![](https://sisu-public.s3.amazonaws.com/images/Sisu-structure.jpg)

### Lifecycle of a Ethereum-based transaction

You can deploy a Ethereum-based transaction to Sisu by going through RPC endpoint (e.g. https://rpc.talon1.network for testnet 1) or by connecting to one of the node at port `1234` using Ethereum client. The logic for Sisu's execution engine is almost the same as original Ethereum's engine except the Proof of Work consensus in Ethereum is completely removed.

Ethereum-based transaction in Sisu is **finalized first before execution**. After the EVM engine receives a transaction from one of the client, it does basic validation check before passing it to Consensus engine. The consensus engine broadcasts the transaction to the Sisu network to vote if the transaction should be included in the block. If this is true, the consensus engine informs the EVM to execute the transaction and update its internal state.

![](https://sisu-public.s3.amazonaws.com/images/Sisu-ETH-transaction.jpg)