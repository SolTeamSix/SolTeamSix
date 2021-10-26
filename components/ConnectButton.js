import {
  WalletModalProvider,
  WalletMultiButton,
} from '@solana/wallet-adapter-react-ui';

import '@solana/wallet-adapter-react-ui/styles.css';

const ConnectButton = () => {
  return (
    <WalletModalProvider>
      <WalletMultiButton className='connect' />
    </WalletModalProvider>
  );
};

export default ConnectButton;
