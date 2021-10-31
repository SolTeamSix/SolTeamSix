import NextImage from 'next/image';

const Footer = () => {
  return (
    <footer className='mt-20 lg:mt-40 px-20 pb-10 flex flex-col justify-center items-center'>
      <div className='logo flex justify-center'>
        <NextImage
          alt='Sol Team Six Logo'
          src='/images/logo.png'
          width={218}
          height={166}
        />
      </div>
      <span className='font-semibold text-center text-xl'>
        Copyright © 2021 Sol Team Six. All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
