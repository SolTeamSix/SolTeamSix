import Countdown, { zeroPad } from 'react-countdown';

const renderCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='countdown w-min mx-auto opacity-70 mt-20'>
      <p className='text-center text-4xl font-black'>
        {days}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </p>
      <p className='text-center text-4xl font-black'>Till Mint</p>
    </div>
  );
};

const CustomCountdown = ({ handleComplete }) => {
  const startDate = parseInt(process.env.NEXT_PUBLIC_START_DATE, 10);

  return (
    <Countdown
      date={startDate}
      onMount={({ completed }) => completed && handleComplete()}
      onComplete={handleComplete}
      renderer={renderCounter}
    />
  );
};

export default CustomCountdown;
