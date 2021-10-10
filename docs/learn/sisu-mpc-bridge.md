---
title: Sisu's Security Model
---
The entire Sisu network acts as a bridge for cross chain transfer. To build a decentralized trustless bridge, we need to solve 2 problems:

- All nodes in Sisu must agree to see the same transaction input and produces the same transaction output.
- Any transaction output must be signed by multi-party offchain. If a signing fails, the protocol is capable of identifying the culprits and executing proper penalty.

These are 2 completely separate problems and good architecture of a cross chain solution must reflect that.

In Sisu's architecture, there are 2 components that address these 2 problems: a consensus engine and a MPC engine. These 2 engines do their assigned tasks and communicate with each other through a thin layer of API. Replacing any of the component should not affect the work of the other.

## Consensus Engine

The first step in cross chain flow is to make unsure that everyone sees the same transaction input (request) sent to the gateway. If the network cannot agree on a transaction input, it cannot produce a transaction output or its signature.

It is important to note that each node can see the transaciton at different time. Some node records the transaction immediately while some other waits for a few blocks for the transaction become final. We even could have a malicious node that records incorrect transaction to the network.

In Sisu, a node can record a transaction it sees but it would be not process immediately. The recorded transaction is only processed when there are at least 2/3 nodes in the network accept that transaction. This is done by having each node casting a vote for each transction it sees.

Similarly, each transaction output must be agreed by the majority of the network before moving into signing phase. Nodes can run different version of the software and malicious actors can inject corrupted data. It's important that all nodes agree on how a transaction output looks like instead of assuming everyone will produce a deterministic output based on a single input.

## MPC Engine