---
title: Architecture Overview
---

Sisu network consists of a decentralized network of validator nodes (could scale to hundreds) to secure each token or message transfer. A validator node has 3 main components:

1. **A consensus layer** based on Proof of Stake and Byzantine fault tolerance (BFT) consensus to let nodes to coordinate on what next action to take. To become a validator, a node needs to stake its Sisu tokens. A validator node is rewarded with Sisu tokens if it follows the network consensus and penalized when any malicious activity is detected.

  This consensus layer is also the brain of the network. It processes inputs provided from the observer and decides what next action to take.

2. ** Threshold Siganture Scheme ** for distributed key signing. No matter how large the network is there is always only signature produced per transaction, making Sisu's transaction significantly cheaper than on-chain multisign solutions while keeping it decentralized. More details of this approach is documented in our [MPC bridge](bridge/sisu-mpc-bridge.md) document.

3. ** An observer ** to watch all transactions on-chain and report to the consensus layer.

These technical choices are not random or "going by trend". The dev team takes a look at the pros and cons of many bridging approaches to come up with a solution choice that we are currently implementing. You can refer to the [Bridging Model](bridge/overview.md) doc to understand how and why we come up with the security model for Sisu bridge.
