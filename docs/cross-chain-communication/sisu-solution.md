---
sidebar_position: 2
title: Sisu's solution
---

Sisu uses some threshold signature scheme to do distributed key signing for any cross chain transaction. The transaction is signed off chain using a group of key signers before sending to the gateway smart contract. This mechanism makes sure that no single party can control the gateway smart contract while being efficient with transaction fee.

A group of transaction signers is randomly selected from a pool of nodes in Sisu network. This pool is often composed of the highest token holders in the network (though this might not always be true).

The downside of using distributed key signing off chain is that it requires more network communication and CPU usage compared to other cross chain solutions. This issue could be addressed by batching transactions since each signing process is independent from each other. We could improve the throughput by spawning more signing machines or leveraging the power of GPU.
