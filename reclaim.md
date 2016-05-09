---
layout: default
permalink: /howto/reclaim/
title: Reclaiming Full Control Over The Your Secured Account
---

* toc
{:toc}

## What You Should Know

Since you as a customer of Peermit.com have ultimate control over your
account you can leave/migrate or opt-out of using our service at any
time **without** requiring our consent, agreement or approval.

This can be done because you have sole control over the **owner key** of
your account. With that key, you can reclaim full control over your
account easily by disabling second factor authentication.

### Permissions

* **Owner Permission**:

    This permission has administrative powers over the whole account and
    should be considered for *backup strategies*. Peermit never touches
    the owner permissions of your account!

* **Active Permission**:

    Allows to access funds and some account settings, but cannot change
    the owner permission and is thus considered the "online" permissions.
    These active permissions are used by Peermit to implement second
    factor authentication.

Both can be defined in the **Permissions** tab of your account using so called
*authorities* (see below) together with a so called *threshold* that has to be
exceeded in order for a transaction to be valid.

## Guide

Let's briefly show how to import your owner key to reclaim full control
over your account and disable second factor authentication.

### Import Your BrainKey

You need to use your brainkey to create a new wallet from it as a seed.
To do so, you enter the wallet management console, and click *new
wallet*.

![](/img/quickstart-new-wallet.png)

There, you will see the advanced option to provide a custom brain key:

![](/img/reclaim-customize-brainkey.png)

Provide the brain key from your notes

![](/img/reclaim-import-brainkey.png)

and create the new wallet.

### Disable Second Factor Authentication

The web wallet will automatically identify
and install your secured account (in our case *johndoe-secured*). As the
brainkey also installs the **owner key** for the secured account, we can
modify the account's permissions:

![](/img/quickstart-open-permissions.png)

To disable second factor authentication, enter the **2FA** tab and flip
the corresponding switch:

![](/img/reclaim-disable-2fa.png)

Don't forget to also **publish changes** to let the blockchain know
about your new account permissions!

![](/img/quickstart-2fa-publish-confirm.png)

After confirmation by the blockchain, Peermit's approval is no longer
required to spend from the secured account!
