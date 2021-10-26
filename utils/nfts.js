import { PublicKey } from '@solana/web3.js';

export const TX_TIMEOUT = 30000;

export const TREASURY = new PublicKey(process.env.NEXT_PUBLIC_TREASURY);

export const CANDY_MACHINE_ID = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_ID,
);

export const CANDY_MACHINE_CONFIG = new PublicKey(
  process.env.NEXT_PUBLIC_CANDY_MACHINE_CONFIG,
);
