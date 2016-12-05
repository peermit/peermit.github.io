---
layout: default
permalink: /howto/usage/
title: Using your Secured Account
---

* toc
{:toc}

## What You Should Know

After properly setting up your account, you can't move funds from the
account directly but need to **propose a transfer** that needs to be
approved by 

* your **reference account** and
* the Peermit.com co-signer `secured-by-peermit`

Only after those approvals have been added to the proposal will the
transfer be executed and the funds actually be moved.

Note that this guide assume that you use your *regular* wallet that has
at least the **reference account** installed and that you have full
control over this account (i.e. that the account is not a
multi-signature secured account).

## Guide

Let us go through the process of proposing transfers briefly.

### Propose Transfer

If you want to transfer funds from the secured account to an other
arbitrary account, you will notice the following error message:

![](/img/usage-transfer-from.png)

The wallet will let you **propose** a transfer instead which takes the
following form:

![](/img/usage-propose.png)

You may notice that creating a transfer proposal is similar to a regular
transfer but it asked for a **propose from**-account. This account will
be used to create the proposal. It could be any account that you have
sufficient rights for (i.e. is **not** a multi-signature secured
account). You can use the *reference account* or any other account you
have available in your wallet.

![](/img/usage-propose-confirm.png)

After confirming the transaction, the proposal will be created on the
blockchain!

### Show Proposals

After the proposal has been confirmed by the network, you can find the
proposal by opening the overview page of your **secured account** (e.g.
`johndoe-secured`). You will be presented with a list of proposals for
that account

![](/img/usage-proposed-transactions.png)

and corresponding buttons to add your approval.

As you can imagine, anyone with an account can propose a transfer from
your account! Hence it is important for you to identify the correct
proposal and not approve malicious proposals!

### Approving Proposal

We now need to approve the proposal by the **reference account** which
can be done by clicking on **Approve**.

To add your approval, you need to provide

* one account that pays the small transaction fee and
* the **reference account** as approving account

![](/img/usage-approve-proposal.png)

### Second Factor Verification

Having added this approval, we also need another approval, e.g. from
Peermit. This approval will only be given by Peermit after verification
of the second factor scheme.

By checking the email address that you provided during setup of your
secured account, you will find an email that has been sent to you by
Peermit. It contains a verification link that brings you to the
following webpage and contains a secret verification token:

![](/img/usage-approve-peermit.png)

After providing this token and clicking **verify**, Peermit.com will see
your identity as verified and approve the corresponding proposal.
You can find the approval on the overview page of your secured account:

![](/img/usage-approved-peermit.png)

### Transfer Approved

If all required approvals (2 of 3) have been added, the transfer will be
executed on the blockchain and the funds will move:

![](/img/usage-approved.png)

Congratulations for succeeding your first Peermit-secured transfer by
approving an on-chain proposal!
