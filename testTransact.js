"use strict";

const {ethers} = require("ethers");
const {LedgerSigner} = require("./lib");

(async function () {
    const provider = new ethers.providers.JsonRpcProvider("https://rpc.ankr.com/eth_goerli");
    const path = `m/44'/60'/1'/0/0`;
    const resolutionConfig = {nft: false, externalPlugins: false, erc20: false};
    const signer = new LedgerSigner(provider, path, resolutionConfig);
    console.log(signer);
    console.log(await signer.getAddress());
    try {
        let tx = await signer.sendTransaction({
            to: "0xAaF147Cee92E94016e66C88355cDaE02AdD31b36",
            value: ethers.utils.parseEther("0.001")
        });
        console.log(tx);
        tx = await tx.wait();
        console.log(tx);
    } catch (error) {
        console.log("ERR", error);
    }
})();
