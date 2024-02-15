import Carousel from './carousel';
// import Card from '@/app/(home)/card';
import Card from '../../app/(home)/card';

import AchivementCard from './AchivementCard';
import Gallery from './Gallery';
import MobileAppIntro from './mobileAppIntro';
import MobileAddUsingStep from './mobileAppUsingStep';
export default function Home() {
  return (
    <>
      <Carousel />
      {/* <Ticker /> */}
      <Card />
      <Gallery />
      <AchivementCard />
      <MobileAppIntro />
      <MobileAddUsingStep />
    </>
  );
}
