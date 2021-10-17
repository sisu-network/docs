---
title: Token Swap
---
There are 2 common models for token swapping cross chain: using wrapped tokens and building an AMM (automated market maker). There is a third model using atomic swap and hashed timelock contract but they are often tied to a few chains instead of a being a general solution.

## Wrapped Token Approach

This approach requires an ERC20 contract (or some equivalent contract) deployed on each chain. Each token swap is a 1:1 mapping from one chain to another chain. For example, you send 1 wrapped Dai token to gateway on chain A, you receive one wrapped Dai token on chain B. If you want to convert your wrapped token to another token, you can use other services inside a blockchain to do the task and hence we will not go into details here.

**Pros**:
- No slippage or impermanent loss when swapping
- Predictable output from each transaction
- Simple, easy to understand model and easy to track down issues.
- Can support unlimited number of token on theory.

**Cons**:
- Requires each chain to have a ERC20 (or something equivalent) to work. Does not work for Bitcoin without special logic
- Cannot convert into native token directly.
- Gateway might run out of tokens on destination chain.
- Gateway contract might run out gas to dispatch final transaction (needs constant monitoring)

## AMM Model
The AMM concept was introduced by Uniswap team on Ethereum main chain. The basic idea behind AMM is to retain a constant curve x * y = k where x is the supply and y is an exchange rate between 2 tokens. When someone buys a token A, the supply of A decreases and hence the exchange rate of A with B increases to keep the equilibrium. The increase in exchange rate disincentivies people to buy token A and incentivies buyer to buy token B.

<!-- ![Example of automated market maker](https://miro.medium.com/max/1015/1*y1ynWN09Z6k5XUxXBSEyPA.png) -->

<p align="center">
  <img src="https://miro.medium.com/max/1015/1*y1ynWN09Z6k5XUxXBSEyPA.png" alt="Example"/>
</p>

Some initial AMM contract often sufferse from [impermanent loss](https://academy.binance.com/en/articles/impermanent-loss-explained). This problem could be alleviated by using several approaches like using stablecoin pairs or having a flexible exchange ratio.

**Pros**:
- Swap native token cross chain. Do not require chain to have an ERC20 contract.
- No worry about the gateway runs out of token supply as the supply cannot go to 0.
- Very unlikely to run out of gas with native tokens coming into the pool.

**Cons**:
- Unpredictable output
- Use more complicated model compared to wrapped token approach.
- Might require lots of token pairs to make this work.
