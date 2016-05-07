---
layout: default
permlink: /help/permissions
title: What are Permissions
---

In Graphene-Based blockchains, each account is separated into several
*permissions*, such as

* **Owner Permission**: This permission has administrative powers over the whole account and should be considered for 'backup' strategies.
* **Active Permission**: Allows to access funds and some account settings, but cannot change the owner permission and is thus considered the "online" permissions.

Both can be defined in the `Permissions` tab of your account using so called
*authorities* (see below) together with a so called *threshold* that has to be
exceeded in order for a transaction to be valid.

### Authorities

An *authority* consists of one or many entities that authorize an action, such
as transfers or trades. They consist of one or several pairs of account names
or public keys with each having a *weight* associated with it. In order to
obtain a valid transaction, i.e. obtain sufficient authority, the sum of the
weights from signing the parties has to exceed the threshold as defined in the
permissions.
