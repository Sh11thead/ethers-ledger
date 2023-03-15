Ethers-Ledger
================

This is a fork of @anders-torbjornsen/hardware-wallets.

This only supports NodeJS, as for browsers metamask supports Ledger anyway.

Made some minor changes to skip the step of fetching information from the Ledger server to speed things up

Installation
=============

`npm install @juliankang/ethers-ledger`

API
===

```
import { LedgerSigner } from "@juliankang/ethers-ledger";

const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");
const path = `m/44'/60'/1'/0/0`;
const resolutionConfig = {nft: false, externalPlugins: false, erc20: false};
const signer = new LedgerSigner(provider, path, resolutionConfig);

```

License
=======

All ethers code is MIT License.

Each hardware wallet manufacturer may impose additional license
requirements so please check the related abstraction libraries
they provide.

All Firefly abstraction is also MIT Licensed.
