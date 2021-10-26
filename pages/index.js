import { useEffect, useState } from 'react';
import Head from 'next/head';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

import ConnectButton from '../components/ConnectButton';
import HamburgerButton from '../components/HamburgerButton';
import NavLinks from '../components/NavLinks';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import RoadmapPhase, { phases } from '../components/RoadmapPhase';
import FAQItem, { items } from '../components/FAQItem';
import DiscordIcon from '../icons/discord.svg';
import TwitterIcon from '../icons/twitter.svg';

export default function Home() {
  const router = useRouter();

  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState('');

  const title = 'Sol Team Six';
  const description =
    '6,000 uniquely generated operators commissioned to serve and protect the solana ecosystem at all cost.';
  const image = 'https://solteamsix.io/images/meta.png';

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
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='robots' content='index,follow' />
        <meta name='googlebot' content='index,follow' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, shrink-to-fit=no'
        />
        <meta property='og:site_name' content={title} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta property='og:type' content='website' />
        <meta property='og:image' content={image} />
        <meta property='og:image:url' content={image} />
        <meta property='og:image:secure_url' content={image} />
        <meta property='og:image:type' content='image/png' />
        <meta property='og:image:width' content='1200' />
        <meta property='og:image:height' content='628' />
        <meta
          property='og:url'
          content={`https://solteamsix.io${router.asPath}`}
        />
        <meta property='og:locale' content='en_US' />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@solteamsix' />
        <meta name='twitter:creator' content='@solteamsix' />
        <meta name='twitter:title' content={title} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
        <meta name='theme-color' content='#000000' />
        <link rel='canonical' href={`https://solteamsix.io${router.asPath}`} />
        <link rel='shortcut icon' href='/favicons/favicon.ico' />
        <link
          rel='icon'
          type='image/png'
          href='/favicons/favicon-32x32.png'
          sizes='32x32'
        />
        <link
          rel='icon'
          type='image/png'
          href='/favicons/favicon-16x16.png'
          sizes='16x16'
        />
        <link
          rel='apple-touch-icon'
          href='/favicons/apple-touch-icon.png'
          sizes='180x180'
        />
        <link rel='manifest' href={`/favicons/site.webmanifest`} />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300;400;500;600;700;800;900&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className='relative overflow-hidden'>
        <div className='bg' />
        <div className='fixed w-screen h-screen z-20 pointer-events-none'>
          <img
            src='/images/alien.png'
            className='hidden lg:block absolute bottom-10 left-0 alien'
            alt='Alien'
          />
          <img
            src='/images/human.png'
            className='hidden lg:block absolute top-7 right-0 human'
            alt='Human'
          />
        </div>

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
                <img src='/images/logo.png' alt='Sol Team Six Logo' />
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

        <div className='hero flex flex-col relative'>
          <h1 className='font-black text-center opacity-70 mt-36 md:mt-36 px-4'>
            Sol Team Six
          </h1>
          <p className='font-semibold text-xl text-center opacity-70 mx-auto mt-8 px-4 w-full max-w-xs lg:max-w-none'>
            6,000 uniquely generated operators commissioned to serve and protect
            the solana ecosystem at all cost.
          </p>
          <Countdown handleComplete={() => setIsActive(true)} />
        </div>

        <div id='story' className='px-4 mt-10 lg:mt-20'>
          <p className='font-black text-center text-4xl'>The Story so far.</p>
          <div className='story opacity-50 w-full max-w-4xl mt-8 mx-auto' />
        </div>

        <div id='charities' className='px-4 mt-20 lg:mt-40'>
          <Title>Charities</Title>
          <div className='flex flex-col lg:flex-row items-center justify-between w-full max-w-2xl mx-auto mt-14'>
            <a
              href='https://www.woundedwarriorproject.org'
              target='_blank'
              rel='noreferrer'
            >
              <img src='/images/wwp.png' alt='Wounded Warrior Project' />
            </a>
            <p className='w-full max-w-xs text-lg font-bold text-center mt-4 lg:mt-0'>
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
              <img src='/images/agsf.png' alt="America's Gold Start Families" />
            </a>
            <p className='w-full max-w-xs text-lg font-bold text-center mt-4 lg:mt-0'>
              Donation of 10% of total sales to America’s Gold Star Families, A
              non profit organization that supports family and friends of
              soldiers who die in the line of duty. The organization provides
              honor and hope to the bereaved.
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
              href='https://discord.gg/solteamsix'
              target='_blank'
              rel='noreferrer'
            >
              <DiscordIcon width={40} />
            </a>
            <a
              className='ml-4 twitter'
              href='https://twitter.com/solteamsix'
              target='_blank'
              rel='noreferrer'
            >
              <TwitterIcon width={40} />
            </a>
          </div>
        </div>

        <div id='team' className='px-4 mt-20 lg:mt-40'>
          <p className='font-black text-center text-4xl'>Our Team</p>
          <div className='flex flex-col md:flex-row justify-center items-center mt-14'>
            <div className='flex flex-col justify-center items-center md:mr-4'>
              <img
                src='/images/team1.png'
                className='team'
                alt='Fleet Admiral Juke'
              />
              <span className='font-bold'>Fleet Admiral Juke</span>
            </div>
            <div className='flex flex-col justify-center items-center mt-4 md:mt-0 md:ml-4'>
              <img
                src='/images/team2.png'
                className='team'
                alt='Fleet Admiral Yojo'
              />
              <span className='font-bold'>Fleet Admiral Yojo</span>
            </div>
          </div>
        </div>
      </main>

      <footer className='mt-20 lg:mt-40 px-20 pb-10 flex flex-col justify-center items-center'>
        <img src='/images/logo.png' alt='Sol Team Six Logo' className='logo' />
        <span className='font-semibold text-center'>
          Copyright © 2021 Sol Team Six. All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
