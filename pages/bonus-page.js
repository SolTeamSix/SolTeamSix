import { useState } from 'react';

import Layout from '../components/Layout';
import Countdown from '../components/Countdown';

export default function BonusPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Layout>
      <div className='flex flex-col relative'>
        <img
          src='/images/solteamsix.png'
          className='solteamsix mx-auto opacity-60 mt-36 px-4'
        />
        <p className='font-bold text-3xl text-center opacity-70 mx-auto px-4 w-full max-w-xs lg:max-w-2xl'>
          This is the Pre Sale page
        </p>
        <Countdown handleComplete={() => setIsActive(true)} />
      </div>
    </Layout>
  );
}
