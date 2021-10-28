import Countdown, { zeroPad } from 'react-countdown';

const renderCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className='countdown w-min mx-auto mt-8 rounded-xl py-2'>
      <p className='text-center text-5xl font-medium opacity-50'>
        {days}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}
      </p>
      <p className='text-center text-2xl font-medium'>TILL MINT</p>
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
