---
layout: default
permalink: /security/
title: Security Aspects
---

For Peermit, security of customer funds is our top priority. For that reasons
we have developed a sophisticated scheme that ensures:

* Fund in a secured account cannot be spend by Peermit
* Transactions from a secured account need **two** signatures (ours and yours)
* The client ultimate control over his account and its funds
* Clients can opt-out at **any time** by means of their backup key (**owner key**)
* If a proposed transaction from a secured account is not verified by Peermit
  **or** the client, funds will not move (of course)

### Cryptography

Peermit makes use of [Elliptic Curve Cryptography
(ECC)](https://en.wikipedia.org/wiki/Elliptic_curve_cryptography) with *public*
and *private* keys.

### Further Security Measures

* Communication with the API is encrypted via SSL
* Client Settings can only be modified by the **owner** of an account
* The **owner key** of Peermit's account is stored offline and never touched an
  internet-connected device
* The **active key** is used for approving proposals initiated and verified by clients.
* The **active key** of Peermit will be rotated on a regular basis to ensure
  that a compromised key cannot sign future proposals.
* Peermit's security scheme allows combination with other security schemes with
  additional required authorities offered by 3rd parties

## Open Source

Since we have made substantial modifications to the web wallet that have access
to clients' private keys, the source of these patches have been released
publicly which allows audits by independent security experts. The sources can
be found on [github.com/peermit](https://github.com/peermit/graphene-ui).

## Fishing

Peermit will **never** ask you for any of your keys! These are *private* keys
and must be kept confidential!
