---
sidebar_position: 1
title: Pre-requisite
---

Let's walk through some of the common cross chain solutions and their shortcomings before we discuss Sisu's cross chain solution.

To transfer assets cross chain, most solutions employ a gateway smart contract or wallet. This contract/wallet is the door of a chain: any assets going in/out of the contract has to go through this door.

Since a gateway contract is in charge of locking/unlocking assets, the security of the contract is one of the most important factors in cross chain communication. Here are a few common methods to secure this contract.

## On chain multi-signature
One of the most common solutions is to use on-chain multi-signature in a smart contract. The idea is that any transaction from this contract needs to get enough approval from a set of validators. Each validator cast its weighted or unweighted vote for a transaction. Once there is enough approval, the smart contract executes the target transaction.

This solution is fairly easy to implement as it only requires counting the number of votes for each transaction. The downside of on-chain multi-signature is its cost. You would need N on-chain approval transactions to unlock one single transaction. Imagine that each transaction requires 30 approval. This means it would cost 30 transaction fee to execute one single cross chain transfer. On expensive blockchain like Ethereum, this would add a heavy cost to a cross chain transfer.

## Single owner of the gateway contract
Another common solution employed by many cross chain communication is to have a single owner of the gateway smart contract. This contract owner keeps the private key that control the gateway. Any transaction from this contract only requires a single signature and hence fast and efficient.

The downside of this solution is obviously the sacrifice of decentralization. Since the contract has only one private key owner, this is a single point of failure of the cross chain communication process. If this key is hacked or the key holder acts maliciously, all the assets held by the gateway contract could be at risk.

What we want is a solution that is cheap (ideally one single transaction per cross chain transfer request) and decentralized (needs approval from multiple parties). This is where Sisu's solution fits in as it provides a cheaper and more decentralized solution for locking/unlocking assets from gateway smart contracts.



