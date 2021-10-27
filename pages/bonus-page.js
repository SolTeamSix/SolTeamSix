import { useState } from 'react';

import Layout from '../components/Layout';
import Countdown from '../components/Countdown';

export default function BonusPage() {
  const [isActive, setIsActive] = useState(false);

  return (
    <Layout>
      <div className='hero flex flex-col relative'>
        <h1 className='font-black text-center opacity-70 mt-36 md:mt-36 px-4'>
          Sol Team Six
        </h1>
        <p className='font-semibold text-xl text-center opacity-70 mx-auto mt-8 px-4 w-full max-w-xs lg:max-w-none'>
          This is the Pre Sale page
        </p>
        <Countdown handleComplete={() => setIsActive(true)} />
      </div>
    </Layout>
  );
}
