const HamburgerButton = ({ ...props }) => {
  return (
    <button {...props} aria-label='Menu Button'>
      <div className='flex flex-col p-3' aria-hidden>
        <div className='w-8 h-1 bg-white mb-2' />
        <div className='w-8 h-1 bg-white mb-2' />
        <div className='w-8 h-1 bg-white' />
      </div>
    </button>
  );
};

export default HamburgerButton;
