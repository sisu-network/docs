---
title: How is ZK-SNARK is used in Sisu?
---

To use a privacy feature in Sisu, users need to deposit a specific amount of token to one of our vaults contract address (or wallet address in the case of Bitcoin) with some memo.
You cannot hide this transaction from the public as most chains do not support transaction by default. However, withdrawing the token is only visible to you and the recipient.

Sisu network achieves this private transaction by using zk-SNARK and a [merkel tree](https://en.wikipedia.org/wiki/Merkle_tree). For anyone who deposits a token will generate a secret (*s*) and then locally compute 2 values: L = hash(s, 1) which is inclued in the memo of the deposit transaction and N = hash(s, 2) which the user keeps confidential.

The first hash L is added to the merkle tree managed off-chain by Sisu when the transaction takes place. To spend the deposit coin, the user submits the second hash N, current merkle root R and a new L'. Using zk-Snark, the network can verify that R is a valid root of L (but do not know exactly what it is) and dispatch the fund to the recipient. N is added to the nullifier list and can never spent again.

This is an oversimplification of what really happens but it gives you an overall picture. Even Sisu validators who process these transactions could not decipher who is sending coins to whom.

This not only works for cross-chain transactions but also in-chain transactions. With Sisu's universal private transaction, you can send BTC tokens privately to your friend. We will provide a dead-simply interface on the web for people to do private transactions without having/installing new wallets like many other privacy chains.
