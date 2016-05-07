---
layout: default
permalink: /howto/setup/
title: Setting up Your Secured Account
---

Setting up a multi-signature secured account via Peermit.com requires

* a valid email address
* a second account (reference account) on the same blockchain (e.g. BitShares)

### Reference Account/Secured Account

A regular setup for using Peermit to secured your funds constitutes **two**
accounts:

* The **Secured Account** is your safety deposit box. Spending funds from this
  account will require your **and** Peermit's approval. The latter can be
  obtained by verifying the **second authentication factor**, e.g. by clicking a
  link in a mail that we send to your registration address.
* With the **Reference Account**, you define the second authority required to
  approve any proposal for transactions spending from your **secured account**.

### Account Settings

In order for Peermit to know how to reach you as a client and for the verification via
a second factor authentication, we need to provide us with your specific
account settings (e.g. mail address).

### secured-by-peermit

The active permissions of your *secured account* will be updated to consist of
your reference account, the existing public key and Peermit's authority named

    secured-by-peermit

Your active permissions will require at least two of these accounts to approve
a proposal before it can be executed by the blockchain.

The **owner key** of your account will not be changed or modified to allow you
to opt-out of Peermit's service at any time.

We **highly recommend** that you keep your owner key stored securely and thus
advice our clients to create an empty wallet with a new account specifically to
setup and manage the secured account.

## Quick Setup


