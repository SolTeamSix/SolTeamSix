import { PhantomWalletAdapter } from '@solana/wallet-adapter-phantom';

const PHANTOM_URL =
  'https://raw.githubusercontent.com/solana-labs/wallet-adapter/master/packages/wallets/icons';

export const getPhantomWallet = (config) => ({
  name: 'Phantom',
  url: 'https://www.phantom.app',
  icon: `${PHANTOM_URL}/phantom.svg`,
  adapter: () => new PhantomWalletAdapter(config),
});
