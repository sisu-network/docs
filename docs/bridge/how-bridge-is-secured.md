---
title: Bridge Security Models
---

Let's walk through some of the common cross chain solutions and their shortcomings before we discuss Sisu's approach.

To transfer assets cross chain, most solutions employ a gateway smart contract or wallet. This contract/wallet is the door of a chain: any assets going in/out of the contract has to go through this door.

Since a gateway contract is in charge of locking/unlocking assets, the security of the contract is one of the most important factors in cross chain communication. Here are a few common methods to secure this contract.

## On Chain Multi-signature
One of the most common solutions is to use on-chain multi-signature in a smart contract. The idea is that any transaction from this contract needs to get enough approval from a set of validators. Each validator cast its weighted or unweighted vote for a transaction. Once there is enough approval, the smart contract executes the target transaction.

This solution is fairly easy to implement as it only requires counting the number of votes for each transaction. The downside of on-chain multi-signature is its cost. You would need N on-chain approval transactions to unlock one single transaction. Imagine that each transaction requires 30 approval. This means it would cost 30 transaction fee to execute one single cross chain transfer. On expensive blockchain like Ethereum, this would add a heavy cost to a cross chain transfer.

**Pros**:
- Easy to implement.
- Gateway is secured by multi parties

**Cons**:
- Very expensive. Required N transaction on-chain to dispatch a single transaction

## Single Key Owner
Another common solution employed by many cross chain communication is to have a single owner of the gateway smart contract. This contract owner keeps the private key that controls the gateway. Any transaction from this contract only requires a single signature and hence fast and efficient.

The downside of this solution is obviously the sacrifice of decentralization. Since the contract has only one private key owner, this is a single point of failure of the cross chain communication process. If this key is hacked or the key holder acts maliciously, all the assets held by the gateway contract could be at risk.

What we want is a solution that is cheap (ideally one single transaction per cross chain transfer request) and decentralized (needs approval from multiple parties). This is where Sisu's solution fits in as it provides a cheaper and more decentralized solution for locking/unlocking assets from gateway smart contracts.

**Pros**:
- Easy to implement.
- Require only one transaction per request

**Cons**:
- Fragile solution due to single point of failure. The loss of the private key could put all assets locked in all chains at risk.

## Optimistic Bridge

Optimistic bridge is another type of bridge that was hailed to solve the trilemma of bridging problems. This approach triggers a merkle root update when someone initiates a cross chain transfer. This proof could be used to submit a destination chain contract, followed by a wait period (30 minutes - multiple hours) for any observer to prove fraud. When this window timeouts, the application is finalized and data could be consumed by the recipient.

While this approach sounds ideal, it has a number of issues:
- It's not fully extensible. It heavily relies on each participating chain to support Turing complete smart contract system. It's impossible to apply this approach for Bitcoin (by far still the king of crypto).
- Long wait time is often a barrier for real-time applications to operate.
- Complex contracts could be vulnerable to undiscovered bugs. The [$200M Nomad bridge hack](https://halborn.com/the-nomad-bridge-hack-a-deeper-dive/) originates from an uncaught corner case bug in the optimistic contract despite being audited heavily. The immutability of the contract makes it extremely hard to stop the attack even when the bug is disclosed. Threshold Signature or multisig approaches have much simpler contracts, easier to audit and hence less susceptible to severe bugs.

**Pros**:
- This bridging model requires minimum trust.
- Could be extended to general cross chain messages.

**Cons**:
- Does not work on Bitcoin as it requires the blockchain to fully support a Turing-complete execution machine.
- Very complex contract and much more prone to bugs ($200M [Nomad Hack](https://halborn.com/the-nomad-bridge-hack-a-deeper-dive/))
- Very high transaction fee due to on-chain proof verification.

## Hash Time-Locked Contract

Hash Time-Locked Contract (HTLC) bridge is similar to atomic swap. The idea is to let 2 parties exchange cryptographic hash before entering a transaction. A time frame is set for an atomic swap to take place. If a trade does not occur during that time frame, the deposited tokens could be returned to the original owner using the cryptographic hash.

**Pros**:
- Requires minimum trust through p2p trading
- Fast, economic transaction.
- Could work on Bitcoin and other chains with smart contracts.

**Cons**:
- Cannot be extended for general message exchange.
- Participants need to agree on the exchange rate which might require a third party service to decide.s
- No privacy
