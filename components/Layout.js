import Head from 'next/head';
import { useRouter } from 'next/router';

import Nav from './Nav';
import Footer from './Footer';

const Layout = ({ children }) => {
  const router = useRouter();

  const title = 'Sol Team Six';
  const description =
    '6,000 uniquely generated operators commissioned to serve and protect the solana ecosystem at all cost.';
  const image = 'https://solteamsix.io/images/meta.png';

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

        <Nav />

        {children}
      </main>

      <Footer />
    </>
  );
};

export default Layout;
