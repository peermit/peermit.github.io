---
layout: default
permalink: /howto/setup/
title: Setting up Your Secured Account
---

* toc
{:toc}

## What You Should Know
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
to opt-out of Peermit's service at any time. This key will give ultimate
control over your account and allows to by-pass any security aspects
offered by Peermit. It serves as a backup key. We **highly recommend**
that you keep your owner key stored securely and thus advice our clients
to create an empty wallet with a new account specifically to setup and
manage the secured account (see below).

## Quick Setup

Now let's go through how to setup a new secured account using the web
wallet.

### Create a **new wallet**

We first create a new wallet that will contain the keys to our secured
account. After opening the settings, we enter the wallet management
console

![](/img/quickstart-open-walletmanagement.png)

and click on *new wallet*.

![](/img/quickstart-new-wallet.png)

We provide a secure passphrase and unique name for the new wallet that
will later contain our secured account.

![](/img/quickstart-create-new-wallet.png)

When using the new account later, we will **not** need to use the new
wallet but you can use your regular wallet as you will see in the [usage
guide](/howto/usage/).

### Backup your **brainkey** 

The next thing to do is to create a backup of your new wallet. We
**highly** recommend to follow the steps below as they will provide you
with ultimate control over the account we will create in the next step.

The brain key can be used to claim **ownership** authority for your
account and **bypass** Peermit's second factor authentication.

To backup the brainkey, you need to enter the wallet management console
and click on *backup brainkey*:

![](/img/quickstart-open-backup-brainkey.png)

The wallet will ask for your passphrase and show the plain text brain
key. It consists of 12 English words. Write them down on a sheet of
paper and store it securely!

![](/img/quickstart-brainkey.png)

The subsequent step will help you verify your backup.

### Register your **secured account**

We now create a new account in our wallet by clicking

![](/img/quickstart-open-create-new-account.png)

in the top navigation bar and providing a unique account name.

![](/img/quickstart-create-new-account.png)

After creating a new account, you will be brought to the account's
ownerview page.

### Fund your account

In order to complete the setup, we now need to fund the account with a
few BTS (less than 1 BTS) so that we can finish the setup of account
permissions. Since these permissions are stored on the blockchain, we
need to produce a certain kind of transaction that requires a very small
fee.

We reommend that you fund your account with a few dollars worth of BTS
first to complete the setup and gain confidence in the procedure for
spending funds from the account as described in [the usage
guide](/howto/usage).

### Peermit Setup

Now that we have a new funded account in a distinct wallet, and have
made a backup of the corresponding keys, we can enable second factor
authentication per email.

For this, we open the permissions tab of your new account.

![](/img/quickstart-open-permissions.png)

and go to the **2FA** tab.

Here, we will

* define a mail address as a second factor
* provide a reference account as a co-signer for transactions from your
  secured account
* and enable second factor authentication for your account.

First, we need to add a valid email address to your settings

![](/img/quickstart-2fa-register.png)

![](/img/quickstart-2fa-registered.png)

and register your account with Peermit. 

The reference account can then be provided in a distinct account
selection form. Make sure to click *Add* to active your reference
account.

![](/img/quickstart-2fa-reference-account.png)

By clicking the flip switch, you add second factor authentication to
your account.

![](/img/quickstart-2fa-enable.png)

**IMPORTANT**, non of the steps in this tab are permanent unless you
actually **publish** the changes to your account (i.e. activation of
2FA). In order to do so, please click the button below

![](/img/quickstart-2fa-publish.png)

and confirm the on-chain transaction. As you can see, this transaction
requires a small fee to be paid.

![](/img/quickstart-2fa-publish-confirm.png)

Once this transaction has been confirmed by the network, you have
successfully secured your account.

Congratulations and thank you for using Peermit.

Since we have created a backup of the brainkey, you may want to delete
the *secure* wallet which contains the secured account's owner key. You
can recover the wallet again at any time by providing the brain key
during creation of a new wallet, at any time.

You can now continue with the [Usage Guide](/howto/usage/) which will
use your regular (*default*) wallet to interact with your secured
account.
