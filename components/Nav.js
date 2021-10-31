import { useEffect, useState } from 'react';
import NextLink from 'next/link';
import NextImage from 'next/image';

import ConnectButton from '../components/ConnectButton';
import HamburgerButton from '../components/HamburgerButton';
import NavLinks from '../components/NavLinks';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState('');

  const handleScroll = () => {
    if (window.scrollY >= 100) {
      setNavbar('scrolled');
    } else {
      setNavbar('');
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`flex flex-row items-center fixed top-0 left-0 w-full px-2 lg:px-6 z-10 ${navbar}`}
    >
      <div className='flex flex-row items-center justify-between w-full'>
        <NextLink href='/'>
          <a
            aria-label='Sol Team Six Logo'
            title='Sol Team Six Logo'
            className='flex justify-center logo'
          >
            <NextImage
              alt='Sol Team Six Logo'
              src='/images/logo.png'
              width={218}
              height={166}
            />
          </a>
        </NextLink>
        <div className='hidden lg:block'>
          <ConnectButton />
        </div>
        <HamburgerButton
          className='block lg:hidden'
          onClick={() => setIsOpen(true)}
        />
      </div>
      <div
        className={`absolute top-0 left-0 w-full h-screen bg-black ${
          isOpen ? 'opacity-50 block' : 'opacity-0 hidden'
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden
      />
      <div
        className={`absolute w-2/3 h-screen top-0 right-0 bg-black p-2 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <NavLinks onClose={() => setIsOpen(false)} />
      </div>
      <div className='hidden lg:block'>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Nav;
