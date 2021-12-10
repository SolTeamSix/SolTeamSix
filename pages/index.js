import { useEffect, useState } from 'react';
import NextImage from 'next/image';
import {
  useConnection,
  useAnchorWallet,
  useWallet,
} from '@solana/wallet-adapter-react';
import { ToastContainer, toast } from 'react-toastify';
import { promises as fs } from 'fs';
import path from 'path';

import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import RoadmapPhase, { phases } from '../components/RoadmapPhase';
import FAQItem, { items } from '../components/FAQItem';
import DiscordIcon from '../icons/discord.svg';
import TwitterIcon from '../icons/twitter.svg';
import {
  TREASURY,
  TX_TIMEOUT,
  CANDY_MACHINE_ID,
  CANDY_MACHINE_CONFIG,
} from '../utils/nfts';
import {
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from '../utils/candy-machine';

import 'react-toastify/dist/ReactToastify.css';

export default function Home({ wallets }) {
  const [isActive, setIsActive] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [isMinting, setIsMinting] = useState(false);

  const wallet = useAnchorWallet();
  const base58 = wallet?.publicKey?.toBase58();
  const { connection } = useConnection();
  const { connected } = useWallet();
  const [candyMachine, setCandyMachine] = useState();

  const handleMint = async () => {
    try {
      if (wallet && candyMachine.program) {
        setIsMinting(true);

        const mintTxId = await mintOneToken(
          candyMachine,
          CANDY_MACHINE_CONFIG,
          wallet.publicKey,
          TREASURY,
        );
        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          TX_TIMEOUT,
          connection,
          'singleGossip',
          false,
        );

        if (!status.err) {
          toast.success("Congratulations! You've got your own NFT!", {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        } else {
          toast.error('Mint failed! Please try again!', {
            position: toast.POSITION.BOTTOM_LEFT,
          });
        }
      }
    } catch (error) {
      let message = error.msg || 'Minting failed! Please try again!';

      if (!error.msg) {
        if (error.message.indexOf('0x138')) {
        } else if (error.message.indexOf('0x137')) {
          message = `SOLD OUT!`;
        } else if (error.message.indexOf('0x135')) {
          message = `Insufficient funds to mint. Please fund your wallet.`;
        }
      } else {
        if (error.code === 311) {
          message = `SOLD OUT!`;
        } else if (error.code === 312) {
          message = `Minting period hasn't started yet.`;
        }
      }

      toast.error(message, {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    } finally {
      setIsMinting(false);
    }
  };

  useEffect(() => {
    if (!wallet) return;

    (async () => {
      const { candyMachine, itemsRemaining, itemsAvailable, itemsRedeemed } =
        await getCandyMachineState(wallet, CANDY_MACHINE_ID, connection);

      console.log(`Total minted: ${itemsRedeemed}/${itemsAvailable}`);

      setIsSoldOut(itemsRemaining === 0);
      setCandyMachine(candyMachine);
    })();
  }, [wallet, connection]);

  return (
    <Layout>
      <div className='flex flex-col relative'>
        <div className='solteamsix mx-auto opacity-60 mt-36 px-4'>
          <NextImage
            alt='Sol Team Six Title'
            src='/images/solteamsix.png'
            width={800}
            height={447}
          />
        </div>
        <p className='font-bold text-3xl text-center opacity-70 mx-auto px-4 w-full max-w-xs lg:max-w-2xl'>
          1,006 uniquely generated operators commissioned to serve and protect
          the solana ecosystem at all cost.
        </p>
        {!isActive ? (
          <Countdown handleComplete={() => setIsActive(true)} />
        ) : connected ? (
          <button
            className='mint'
            onClick={handleMint}
            disabled={!isActive || !wallet || isSoldOut || isMinting}
            style={{
              opacity:
                !isActive || !wallet || isSoldOut || isMinting ? '0.8' : '1',
              cursor:
                !isActive || !wallet || isSoldOut
                  ? 'not-allowed'
                  : isMinting
                  ? 'progress'
                  : 'pointer',
            }}
          >
            {isSoldOut ? 'Sold Out!' : isMinting ? 'Minting...' : 'Mint Now'}
          </button>
        ) : (
          <p className='font-bold text-3xl text-center opacity-70 mx-auto px-4 w-full max-w-xs lg:max-w-2xl mt-8'>
            Please connect your wallet
          </p>
        )}
      </div>

      <Carousel />

      <div id='story' className='px-4 mt-20 lg:mt-40'>
        <p className='font-black text-center text-6xl'>The Story so far.</p>
        <div className='story w-full max-w-4xl mt-8 mx-auto p-8'>
          <p className='text-2xl font-bold text-center'>
            UH OH!
            <br />
            The story’s not finished yet! At the moment we are working with our
            community members to help get the story just right. We do not want
            to rush the process as the story will be the foundation for our
            comic book series! If you are interested in helping us create an
            epic storyline, join us on{' '}
            <a
              href='https://discord.gg/sTWdnq64'
              target='_blank'
              rel='noreferrer'
              className='text-blue-400'
            >
              Discord
            </a>{' '}
            and check out #story-submissions.
          </p>
        </div>
      </div>

      <div id='charities' className='px-4 mt-20 lg:mt-40'>
        <Title>Charities</Title>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-2xl mx-auto mt-14'>
          <a
            href='https://www.woundedwarriorproject.org'
            target='_blank'
            rel='noreferrer'
          >
            <NextImage
              alt='Wounded Warrior Project'
              src='/images/wwp.png'
              width={220}
              height={196}
            />
          </a>
          <p className='w-full max-w-xs text-2xl font-bold text-center mt-4 lg:mt-0'>
            Donation of 10% of total sales to Wounded Warrior Project, a non
            profit organization that supports soldiers who incur injuries
            (physical or mental), illnesses, or wounds, while in the line of
            duty during or after September 11, 2001.
          </p>
        </div>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-2xl mx-auto mt-14'>
          <a
            href='https://www.americasgoldstarfamilies.org'
            target='_blank'
            rel='noreferrer'
          >
            <NextImage
              alt="America's Gold Start Families"
              src='/images/agsf.png'
              width={245}
              height={138}
            />
          </a>
          <p className='w-full max-w-xs text-2xl font-bold text-center mt-4 lg:mt-0'>
            Donation of 10% of total sales to America’s Gold Star Families, A
            non profit organization that supports family and friends of soldiers
            who die in the line of duty. The organization provides honor and
            hope to the bereaved.
          </p>
        </div>
      </div>

      <div id='roadmap' className='px-4 mt-20 lg:mt-40'>
        <Title>Roadmap</Title>
        {phases.map((phase, i) => (
          <RoadmapPhase key={i} title={phase.title}>
            {phase.text}
          </RoadmapPhase>
        ))}
      </div>

      <div id='faq' className='px-4 mt-20 lg:mt-40'>
        <Title>FAQ</Title>
        {items.map((item, i) => (
          <FAQItem key={i} question={item.question}>
            {item.answer}
          </FAQItem>
        ))}
        <div className='flex flex-row justify-center items-center mt-10'>
          <a
            className='mr-4 discord'
            href='https://discord.gg/sTWdnq64'
            target='_blank'
            rel='noreferrer'
            aria-label='Discord'
          >
            <DiscordIcon width={40} />
          </a>
          <a
            className='ml-4 twitter'
            href='https://twitter.com/solteamsix'
            target='_blank'
            rel='noreferrer'
            aria-label='Twitter'
          >
            <TwitterIcon width={40} />
          </a>
        </div>
      </div>

      <div id='team' className='px-4 mt-20 lg:mt-40'>
        <p className='font-black text-center text-5xl'>Our Team</p>
        <div className='flex flex-col md:flex-row justify-center items-center mt-14'>
          <div className='flex flex-col justify-center items-center md:mr-4'>
            <NextImage
              alt='Admiral Juke'
              src='/images/nft2.png'
              width={359}
              height={400}
            />
            <span className='font-bold text-2xl mt-2'>Admiral Juke</span>
          </div>
          <div className='flex flex-col justify-center items-center mt-4 md:mt-0 md:mx-4'>
            <NextImage
              alt='Admiral Yojo'
              src='/images/nft4.png'
              width={359}
              height={400}
            />
            <span className='font-bold text-2xl mt-2'>Admiral Yojo</span>
          </div>
          <div className='flex flex-col justify-center items-center mt-4 md:mt-0 md:ml-4'>
            <NextImage
              alt='Admiral Hogie'
              src='/images/nft1.png'
              width={359}
              height={400}
            />
            <span className='font-bold text-2xl mt-2'>Admiral Hogie</span>
          </div>
        </div>
      </div>

      <ToastContainer />
    </Layout>
  );
}

export async function getStaticProps() {
  const dataDirectory = path.join(process.cwd(), 'data');
  const wallets = await fs.readFile(`${dataDirectory}/wallets.json`, 'utf8');

  return {
    props: {
      wallets: [JSON.parse(wallets)],
    },
  };
}
