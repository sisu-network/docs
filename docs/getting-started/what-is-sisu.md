---
sidebar_position: 1
title: What is Sisu?
---

Sisu is a blockchain network that aims to solve cross chain communication. Apps on Sisu can seamlessly transfer native or NFT tokens from one chain (e.g. Sisu) to another chain (e.g Ethereum).

### What problems is Sisu solving?

Blockchain world is fragmented. Everyone is living in their own chain. Cross chain communication is almost non-existent or very centralized.

Majority of token swapping transactions happen on centralized exchanges which require complicated KYC processes and are susceptible to hacking.

There are permissionless exchanges like Uniswap but most of them only swap token within a chain. For example, Uniswap does not have cross chain token swapping. When you swap Ethereum with Bitcoin, it takes your ETH and give you a "wrapped" version of Bitcoin. This wrapped token has similar value like Bitcoin but it is not a real Bitcoin. You cannot send that token on Bitcoin network.

Another common problem for NFT trading is lack of token transfer. Minting NFT on the Ethereum main chain is very expensive and many people cannot afford to mint on the ETH chain. It's intuitive to find another chain to mint NFT but your NFT is kept strictly on that chain and there is no option to transfer your NFT to Ethereum.

Cross chain communication is not solved well. The bottleneck is someone needs to hold a private key to sign a transaction in any chain. The key's holder becomes the weakest link in the system and vulnerable to hacking. Most exchange systems hold a single private key for their wallet and it is not uncommon to hear news about some exchange lost millions of dollars because their private key is lost or stolen.

### How can Sisu solve cross chain communication?

In the Sisu network, no one holds a chain's private key. When a transaction needs to be signed, a group of validators are chosen and coordinate to produce the signature for the transaction. Each validator node is responsible for producing a fraction of a signature. Through a complicated coordination process, a final signature is created after everyone contributes their signing part. No private key is assembled in the signing process.

This is a simplified explanation of what happens under the hood of Sisu. For more information, you can refer to our architecture doc to know more about it.

### What can you do with Sisu?

First, Sisu has its own Ethereum execution engine. Any smart contract that can be deployed on Ethereum will work on Sisu. Ethereum is by far the most popular chain for smart contracts. If you are familiar with Ethereum development, you can start working with Sisu right away.

Second, the decentralized token swapping on Sisu opens endless possibilities for you to build NFT or DeFi app. One example is to mint NFT on Sisu and then transfer and sell it on Ethereum if needed. You get the best of both worlds: cheap transaction cost on Sisu and great marketplace on Ethereum.

Or you can extend your DeFi farming strategies cross chain. You can take advantage of the price differences between various chains to your advantage and not limited to a single chain.
