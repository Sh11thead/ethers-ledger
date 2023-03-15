import { ethers } from "ethers";
import Eth from "@ledgerhq/hw-app-eth";
import { ResolutionConfig } from "@ledgerhq/hw-app-eth/lib/services/ledger";
export declare class LedgerSigner extends ethers.Signer {
    readonly path: string;
    readonly _eth: Promise<Eth>;
    _resolutionConfig: ResolutionConfig;
    constructor(provider?: ethers.providers.Provider, path?: string, resolutionConfig?: ResolutionConfig);
    _retry<T = any>(callback: (eth: Eth) => Promise<T>, timeout?: number): Promise<T>;
    getAddress(): Promise<string>;
    signMessage(message: ethers.utils.Bytes | string): Promise<string>;
    signTransaction(transaction: ethers.providers.TransactionRequest): Promise<string>;
    connect(provider: ethers.providers.Provider): ethers.Signer;
}
//# sourceMappingURL=ledger.d.ts.map