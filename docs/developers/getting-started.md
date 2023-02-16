---
title: Getting started
---
On each chain, we deploy a smart contract (vault contract) or a wallet address that acts as a gateway of that chain. To transfer a token or relay a message cross chain, you need to make a transaction to the vault contract/ wallet address. The data associated with the

## Swap tokens from EVM-based chains

You can easily swap tokens from EVM-based chains (Ethereum, Avalanche, Fantom, etc...) with a few lines of Javascript. The list of our Vault and token addresses are in the [contract addresses](../references/contracts.md).

When the Destination chain is also an EVM-based chain, use the `transferOut` function in the [vault contract](https://github.com/sisu-network/sisu/blob/master/contracts/eth/vault.sol) to do the token swap. You also need to import the [contract vault ABI](https://github.com/sisu-network/sisu/blob/master/contracts/eth/vault/Vault.abi) in your code.

The list of chain ids is in our [contract reference](../references/contracts.md).

```
const Web3 = require("web3");
const { abi } = require("./abi/vaultABI");
require("dotenv").config();
const web3 = new Web3("YOUR_CHAIN_RPC");

(async () => {
  const privateKey = process.env.PRIVATE_KEY;
  const vaultContract = process.env.VAULT_ADDRESS;
  const srcToken = process.env.ERC20_ADDRESS;
  const amount = BigInt(process.env.AMOUNT);
  const receiver = process.env.RECEIVER;
  const dstTestnetId = process.env.CHAIN_ID;

  const account = web3.eth.accounts.privateKeyToAccount("0x" + privateKey);
  let contract = new web3.eth.Contract(abi, vaultContract, {
    from: account.address,
    gas: "100000",
  });
  web3.eth.accounts.wallet.add(account);
  web3.eth.defaultAccount = account.address;

  contract.methods
    .transferOut(srcToken, dstTestnetId, receiver, amount)
    .send({ from: account.address }, function (err, res) {
      if (err) {
        console.log("An error occurred", err);
        return;
      }
      console.log("Hash of the transaction: " + res);
    });
})();
```
