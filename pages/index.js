import { useState } from 'react';

import Layout from '../components/Layout';
import Countdown from '../components/Countdown';
import Title from '../components/Title';
import Carousel from '../components/Carousel';
import RoadmapPhase, { phases } from '../components/RoadmapPhase';
import FAQItem, { items } from '../components/FAQItem';
import DiscordIcon from '../icons/discord.svg';
import TwitterIcon from '../icons/twitter.svg';

export default function Home() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Layout>
      <div className='flex flex-col relative'>
        <img
          src='/images/solteamsix.png'
          className='solteamsix mx-auto opacity-60 mt-36 px-4'
        />
        <p className='font-bold text-3xl text-center opacity-70 mx-auto px-4 w-full max-w-xs lg:max-w-2xl'>
          6,000 uniquely generated operators commissioned to serve and protect
          the solana ecosystem at all cost.
        </p>
        <Countdown handleComplete={() => setIsActive(true)} />
      </div>

      <Carousel />

      <div id='story' className='px-4 mt-20 lg:mt-40'>
        <p className='font-black text-center text-5xl'>The Story so far.</p>
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
          <p className='w-full max-w-xs text-xl font-bold text-center mt-4 lg:mt-0'>
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
          <p className='w-full max-w-xs text-xl font-bold text-center mt-4 lg:mt-0'>
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
        <p className='font-black text-center text-5xl'>Our Team</p>
        <div className='flex flex-col md:flex-row justify-center items-center mt-14'>
          <div className='flex flex-col justify-center items-center md:mr-4'>
            <img
              src='/images/team1.png'
              className='team'
              alt='Fleet Admiral Juke'
            />
            <span className='font-bold text-xl'>Fleet Admiral Juke</span>
          </div>
          <div className='flex flex-col justify-center items-center mt-4 md:mt-0 md:ml-4'>
            <img
              src='/images/team2.png'
              className='team'
              alt='Fleet Admiral Yojo'
            />
            <span className='font-bold text-xl'>Fleet Admiral Yojo</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
