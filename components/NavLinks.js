import { useRouter } from 'next/router';

import ConnectButton from '../components/ConnectButton';

const NavLinks = ({ onClose = null }) => {
  const router = useRouter();

  const hideList = router.asPath === '/bonus-page';

  return (
    <>
      {!hideList && (
        <ul className='flex flex-col lg:flex-row lg:absolute lg:top-1/2 lg:left-1/2 mt-10 lg:mt-0 links'>
          <li>
            <a
              href='#team'
              className='w-full px-2 mx-4 my-3 text-2xl font-bold opacity-70 hover:opacity-100'
              onClick={() => onClose && onClose()}
            >
              Our Team
            </a>
          </li>
          <li>
            <a
              href='#story'
              className='w-full px-2 mx-4 my-3 text-2xl font-bold opacity-70 hover:opacity-100'
              onClick={() => onClose && onClose()}
            >
              Story
            </a>
          </li>
          <li>
            <a
              href='#roadmap'
              className='w-full px-2 mx-4 my-3 text-2xl font-bold opacity-70 hover:opacity-100'
              onClick={() => onClose && onClose()}
            >
              Roadmap
            </a>
          </li>
          <li>
            <a
              href='#faq'
              className='w-full px-2 mx-4 my-3 text-2xl font-bold opacity-70 hover:opacity-100'
              onClick={() => onClose && onClose()}
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href='#charities'
              className='w-full px-2 mx-4 my-3 text-2xl font-bold opacity-70 hover:opacity-100'
              onClick={() => onClose && onClose()}
            >
              Charities
            </a>
          </li>
        </ul>
      )}
      <div className='flex lg:hidden mt-4 w-full justify-center'>
        <ConnectButton />
      </div>
    </>
  );
};

export default NavLinks;
