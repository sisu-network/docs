---
title: Architecture Overview
---

Sisu network consists of a decentralized network of validator nodes (could scale to hundreds) to secure each token or message transfer. A validator node has 3 main components:


<p align="center">
  <img src="https://user-images.githubusercontent.com/510036/218599627-7e091312-746c-41e3-b3f7-158a0010be03.png"  width="250" height="250"/>
</p>

1. **A consensus layer** based on Proof of Stake and Byzantine fault tolerance (BFT) consensus to let nodes to coordinate on what next action to take. To become a validator, a node needs to stake its Sisu tokens. A validator node is rewarded with Sisu tokens if it follows the network consensus and penalized when any malicious activity is detected.

  This consensus layer is also the brain of the network. It processes inputs provided from the observer and decides what next action to take.

<p align="center">
  <img width="600" alt="Screen Shot 2023-02-13 at 3 51 38 PM" src="https://user-images.githubusercontent.com/510036/218600584-026b6252-8c6c-43c2-9121-4967731389a7.png"/>
</p>

2. ** Threshold Siganture Scheme ** for distributed key signing. No matter how large the network is there is always only signature produced per transaction, making Sisu's transaction significantly cheaper than on-chain multisign solutions while keeping it decentralized. More details of this approach is documented in our [MPC bridge](bridge/sisu-mpc-bridge.md) document.

<p align="center">
  <img width="200" alt="Screen Shot 2023-02-13 at 3 51 38 PM" src="https://user-images.githubusercontent.com/510036/218600981-47b4d98c-675b-4c9c-9f75-42239b9be10a.png"/>
</p>

3. ** An observer ** to watch all transactions on-chain and report to the consensus layer.

These technical choices are not random or "going by trend". The dev team takes a look at the pros and cons of many bridging approaches to come up with a solution choice that we are currently implementing. You can refer to the [Bridging Model](bridge/overview.md) doc to understand how and why we come up with the security model for Sisu bridge.
