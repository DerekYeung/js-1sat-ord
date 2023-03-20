/// <reference types="node" />
import { MAP } from "bmapjs/types/protocols/map";
import { P2PKHAddress, PrivateKey, Script, Transaction } from "bsv-wasm";
import { Buffer } from "buffer";
export type Utxo = {
    satoshis: number;
    txid: string;
    vout: number;
    script: string;
};
export type Inscription = {
    buffer: Buffer;
    contentType: string;
};
declare const buildInscription: (destinationAddress: P2PKHAddress, file: Buffer, mediaType: string, metaData?: MAP) => Script;
declare const createOrdinal: (utxo: Utxo, destinationAddress: string, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number | undefined, inscription: Inscription, metaData?: MAP) => Promise<Transaction>;
declare const sendOrdinal: (paymentUtxo: Utxo, ordinal: Utxo, paymentPk: PrivateKey, changeAddress: string, satPerByteFee: number, ordPk: PrivateKey, ordDestinationAddress: string, reinscription?: Inscription, metaData?: MAP) => Promise<Transaction>;
declare const createOrdinalTemplate: (destinationAddress: string, inscription: Inscription, metaData?: MAP) => Promise<Transaction>;
export { buildInscription, createOrdinal, sendOrdinal, createOrdinalTemplate };
