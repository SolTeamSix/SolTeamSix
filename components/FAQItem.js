import { useState } from 'react';
import {
  Disclosure,
  DisclosurePanel,
  DisclosureButton,
} from '@reach/disclosure';

import ArrowIcon from '../icons/arrow.svg';

export const items = [
  {
    question: 'What is an NFT?',
    answer:
      'A non-fungible token (NFT) is a unit of data stored on a digital ledger, called a blockchain, that certifies a digital asset to be unique and therefore not interchangeable.',
  },
  {
    question: 'What is Sol Team Six?',
    answer:
      'Sol Team Six is a group 6000 uniquely generated operators (NFTs) commissioned to serve and protect the #solana ecosystem at all cost.',
  },
  {
    question: 'How are operators minted?',
    answer:
      'All operators and attributes are drawn by hand and algorithmically generated using custom code. There will be 100+ attributes including background, mask, eyes, mouth, weapon, hands, head, and more. Operators will be created using a smart contract deployed on the Solana blockchain. To ensure a smooth and safe launch this will be done using the Metaplex Candy Machine.',
  },
  {
    question: 'What is the cost to mint a Sol Team Six?',
    answer:
      'The current mint price is set at .8 SOL, price is subject to change due to market fluctuation.',
  },
  {
    question: 'What do I get with my Sol Team Six NFT?',
    answer:
      'Despite having the coolest profile picture on crypto twitter, you will be joining thousands of others in our wonderful community. You will be able to voice your opinion, vote on project development, participate in community only giveaways, and much more. You’ll also have full creative rights that come along with your NFT(s). You also get the heartwarming feeling of knowing that some of your Sol is helping benefit great charities!',
  },
  {
    question: 'What wallet can I use?',
    answer:
      'We recommend using the phantom browser extension to mint and store your NFTs. More questions? Join us on Twitter @SolTeamSix for further updates and support.',
  },
];

const FAQItem = ({ question, children }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className='flex flex-col w-full max-w-2xl mx-auto mt-14'>
      <Disclosure open={isOpen} onChange={() => setOpen(!isOpen)}>
        <DisclosureButton
          className='w-full mx-auto text-left text-2xl flex flex-row justify-center items-center focus:outline-none'
          aria-label={question}
        >
          <strong className='w-11/12'>{question}</strong>
          <ArrowIcon
            width={20}
            className={`ml-3 md:ml-6 transform ${
              isOpen ? 'rotate-180' : 'rotate-0'
            }`}
          />
        </DisclosureButton>
        <DisclosurePanel>
          <p className='text-center font-bold text-2xl mt-6'>{children}</p>
        </DisclosurePanel>
      </Disclosure>
    </div>
  );
};

export default FAQItem;
