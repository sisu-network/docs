---
sidebar_position: 3
title: Cross chain transfer flow
---

This section describes cross chain transfer flow through Sisu. We start with a common scenario of transferring a NFT from one chain to another chain. Let's call our chains to be chain A and chain B who both support smart contracts.

### The main flow
On each blockchain, there is a deployed contract called gateway contract. The deployment transaction of this contract is also managed by Sisu network using its distributed key signing process.

To transfer a NFT cross chain, a user first transfers NFT ownership to the gateway contract. On Ethereum-based chains, users need to approve the gateway contract to have the allowance to transfer target NFT to its address. The gateway contract then becomes the new owner of the NFT token or the token is "locked" at the contract until there is a request to release the token by Sisu network.

The Sisu network observes a cross chain transfer request when reading blocks in chain A and makes a raw transaction output to create a synthetic (or wrapped token) in chain B. This raw transaction is then signed distributedly by 80% of the network who are online and ready to sign. Sisu's implementation makes sure that malicious actors in the signing process who tries to delay the signing process will be identified and slashed their staking tokens.

After the group signing is completed, the final transaction is dispatched to the chain B by anyone in the network as they will all have the same final signature. The second gateway contract on chain B creates a synthetic asset that represents the token on chain A and "sends" that to the recipient address. On Ethereum-based chains, this is simply updating the storage to record that the recipient is the owner of the token.

The synthetic asset could be transferred within chain B like any other NFT. If the owner of this synthetic asset wants to transfer it to a new chain C, the synthetic asset is destroyed by Sisu network and a new synthetic is minted on chain C. If it is transferred to the original chain A, the gateway contract simply "releases" the locked token to the new owner. No new synthetic asset is created if the NFT is transferred back to its original chain.

### Gateway contract

Some chains like Bitcoin does not support Turing-complete smart contract and hence we cannot transfer tokens to Bitcoin. However, we can still exchange native tokens with Bitcoin using gateway wallet with similar mechanism described in the previous section.

Different types of blockchains might have different languages for their smart contracts. Here is an example of the transfer ERC20 token out of a chain:

```
    /**
    * @notice Transfers a real token outside network.
    * The caller has to make sure that it has approve enough tokens for this contract to withdraw
    * from the token contract.

    * @param assetAddr {Add purpose here}
    * @param toChain  {Add purpose here}
    * @param recipient  {Add purpose here}
    */
    function transferOutFromContract(
        address assetAddr,
        string memory toChain,
        string memory recipient,
        uint256 amount
    ) public {
        require(amount > 0, "Amount must be greater than 0");
        require(_allowedChain[toChain], "Chain not allowed");

        (bool success, ) = assetAddr.call(
            abi.encodeWithSignature(
                "transferFrom(address,address,uint256)",
                msg.sender,
                address(this),
                amount
            )
        );
        require(success, "Failed to transfer");
        emit TransferOutFromContract(
            assetAddr,
            toChain,
            recipient,
            amount,
            success
        );
    }
```
