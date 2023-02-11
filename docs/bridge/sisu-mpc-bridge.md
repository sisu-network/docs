---
title: Sisu's Security Model
---
The entire Sisu network acts as a bridge for cross chain transfer. To build a decentralized trustless bridge, we need to solve 2 problems:

- All nodes in Sisu must agree to see the same transaction input and produce the same transaction output.
- Any transaction output must be signed by multi-party offchain. If a signing fails, the protocol is capable of identifying the culprits and executing proper penalties.

These are 2 completely separate problems and good architecture of a cross chain solution must reflect that.

In Sisu's architecture, there are 2 components that address these 2 problems: a consensus engine and a MPC engine. These 2 engines do their assigned tasks and communicate with each other through a thin layer of API. Replacing any of the components should not affect the work of the other.

## Consensus Engine

The first step in cross chain flow is to make unsure that everyone sees the same transaction input (request) sent to the gateway. If the network cannot agree on a transaction input, it cannot produce a transaction output or its signature.

It is important to note that each node can see the transaction at a different time. Some nodes record the transaction immediately while some others wait for a few blocks for the transaction to become final. We even could have a malicious node that records incorrect transactions to the network.

In Sisu, a node can record a transaction it sees but will not process immediately. The recorded transaction is only processed when there are at least 2/3 nodes in the network accepts that transaction. This is done by having each node casting a vote for each transaction it sees.

Similarly, each transaction output must be agreed by the majority of the network before moving into the signing phase. Nodes can run different versions of the software and malicious actors can inject corrupted data. It's important that all nodes agree on what a transaction output looks like instead of assuming everyone will produce a deterministic output based on a single input.

## MPC Engine
After the Consensus Engine agrees on the transaction output, it passes the data to MPC Engine for distributed key signing. Sisu chooses Threshold Signature Scheme(TSS) for distributed key signing. TSS has a number of advantages, including no key reconstruction and being resilient when some participating nodes are offline.

### What is Threshold Signature Scheme?

To explain in a simplified terms, TSS allows us to break a single private key into N pieces and give each node in the network of the key.

When the network needs to sign a transaction, each node creates a portion of the final signature using its part of the private key. They then exchange their signature parts and after several rounds of exchange, everyone has exactly the same final copy of the signature.

Unlike Shamir Secret Sharing, TSS does not reconstruct the private key during the signing process and hence the private key is leaked. The private key is not created during the key generation process either. Each node generates its own part of the key but the final private key remains unknown to the network.

What happens if some nodes are offline at the signing phase?

Another benefit of TSS is that it allows the t-of-n nodes singing models which requires only **any t** nodes out of n to be online at the signing phase. For example, if our TSS scheme is 15-of-20, we can tolerate up to any 5 nodes to be offline to produce a valid signature.

TSS supports both ECDSA and EDDSA, two cryptography schemes that are used by most networks. In theory, Sisu is capable of producing signature for any blockchain.
