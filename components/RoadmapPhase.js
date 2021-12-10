export const phases = [
  {
    title: 'Phase 1 - Launch Sol Team Six',
    text: 'Launch 1,006 uniquely generated Operators to serve and protect the metaverse! Only on Solana! Launching on December 9th, 2021!',
  },
  {
    title: 'Phase 2 - SOLD OUT! - Just the beginning',
    text: 'Shortly after minting has concluded Sol Team Six will go live on exchanges where you can buy/sell operators. To show our appreciation and dedication, our team will be pledging 20% of all sales to the ops stash. This will be used for community giveaways, collaborations, and further project development. Lastly we will be donating over 20% of all sales to military non-profit organizations.',
  },
  {
    title: 'Phase 3 - Comic Book',
    text: 'Sol Team Six NFT holders will have access to monthly comic book subscriptions including giveaways and exclusive content. The comic will be much more than just a story. While we continue to develop our NFT utility the comic book will reveal upcoming airdrops and developments of the project!',
  },
  {
    title: 'Phase 4 - Companions, Armoury, and Black Market',
    text: 'Operators will be provided with the necessary tools to serve and protect. All token holders will receive unique NFT companions (1:1) to provide assistance when it is needed most. NFT holders will also be air-dropped weapons and awards which can be displayed in their Armoury! To make each and every armoury unique we will be releasing hundreds of different weapons and accessories all with different rarities to show off on your socials. Customize your armoury by selling and trading your weapons on our very own Black Market. The Black Market will offer a wide variety of weapons and accessories to upgrade your armoury. Weapons will be supplied courtesy of the Arms Dealer.',
  },
];

const RoadmapPhase = ({ title, children }) => {
  return (
    <div className='flex flex-col w-full max-w-2xl mx-auto mt-14'>
      <p className='mx-auto text-center font-bold text-2xl px-2 pb-1 rounded-lg phase'>
        {title}
      </p>
      <p className='text-center font-bold text-2xl mt-6'>{children}</p>
    </div>
  );
};

export default RoadmapPhase;
