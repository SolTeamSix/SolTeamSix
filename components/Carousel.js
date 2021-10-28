import NextImage from 'next/image';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className='mt-20 lg:mt-40'>
      <NextImage src='/images/nft1.png' width={427} height={476} />
      <NextImage src='/images/nft2.png' width={427} height={476} />
      <NextImage src='/images/nft3.png' width={427} height={476} />
      <NextImage src='/images/nft4.png' width={427} height={476} />
      <NextImage src='/images/nft5.png' width={427} height={476} />
    </Slider>
  );
};

export default Carousel;
