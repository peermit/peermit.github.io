---
layout: default
permalink: /usecases/
--- 

# Use-cases

This document serves as an introduction to some possible use-cases of
peermit and does not claim completeness. They can all be broken down to

* increased protection of funds
* convenient access to protected funds
* verification of authenticity of transactions
* distinction of *active* and *owner* permissions

For the sake of convenience, we describe how different partners make use
of our software.

* TOC
{:toc}

## Centralized Exchanges

As an exchange, you hold customer funds and are obligated to protect
them against malicious actors. As such you would setup **multiple
tiers** of protection for the *active* role of your accounts:

* **Tier 1**: This tier serves as a *hot-wallet* from which hourly/daily
  deposits and withdrawals are managed
* **Tier 2**: This tier is a multi-signature secured account using
  peermit that allows your employees to access some larger amount of
  funds for operations and that need authorization of the CFO/CEO by
  as implemented through peermit.
* **Tier 3**: Moving funds from accounts that are in this tier request
  extensive verification by means of a phone call as well as 2nd factor
  authentication by means of email, SMS, or minutely expiring
  single-authentication tokens (also referred to as *Google
  Authenticator*). Depending on the business practises, we recommend to
  keep at least 90% of your funds stored in tier 3.

In this setup, the exchange still has sole control over the funds (via
*active* roles) as well as full control over the actual account in case
the service goes out of operations or is inaccessible for a period of
time. We recommend to setup an *owner* role such that the board members
of your company have access M keys while only N of the board members
need to approve any transaction concerning your accounts.

## Decentralized Exchanges

Per definition, a decentralized exchange has no assets and does not
store customer funds. Still it has customers that enter the
decentralized exchange by means of your platform. In order to gain a
competitive advantage, your platform could be the one that offers the
most secure accounts by means of 2nd factor authentication.

In this case, the clients that make use of peermit are the customers of
your platform. They setup their accounts to use peermit through your
platform.

As a platform provider for a decentralized exchange you profit from
this service by asking for a fee.

The customer profits from secure account setups with a multitude of
features that are made available to them through the peermit software.

## Merchants

As a merchant that supports digital currencies you are already aware
that your employees don't need access to the digital cash register as
there is *no change*. However, in order to reverse transactions, you
might still need to give them access to be able to refund customers.

In this case, the merchant can setup an account that he fully controls
and that his employees can only spend from *if* the superior approves or
a certain 2nd factor (e.g. special refund key) is provided.

## Companies

As a company, you are probably have hundreds of accounts to keep an eye
on with only very few people having access to the actual funds.
Delegating this access is cumbersome with some banking institutions.
However, in Graphene&trade;-based blockchains, you could setup a
sophisticated set of hierarchically interconnected accounts that have
their own set of spending authorities while the CFO and CEO could have
access to all of these funds.

In order to make sure these setups cannot be exploited, we help you to
customize a hierarchy for your business with full or partial 2nd factor
requirements at any level of the hierarchy.

## Institutions

The *board* has ultimate control over everything relating to the
institute. Still, sub-units of it could have access to their own
budgets. On a regular basis, the budgets are moved around. These
budgets need to be approved by the board. Nowadays, this approval can be
given on the blockchain directly, reducing costs, time and offering an
everlasting audit trail.

Alternatively, the institute's lawyers can be the 2nd factors to those
transfers to give their final o.k.

## More

As you can see, the hierarchical account setups in combination with 2nd
factor offers a massive improvement of security of funds on a
blockchain. If you didn't find your use-case in this document, but want
to leverage peermit for your business, please [contact
us](mailto://info@peermit.com) so we can evaluate your needs and find
the perfect solution for you.
