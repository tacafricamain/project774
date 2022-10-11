import type { NextPage } from 'next'
import Audience from '../components/HomepageComponents/Audience';
import Benefits from '../components/HomepageComponents/Benefits';
import Communities from '../components/HomepageComponents/Communities';
import Goals from '../components/HomepageComponents/Goals';
import HeroSection from '../components/HomepageComponents/HeroSection';
import Intro from '../components/HomepageComponents/Intro';

const Home: NextPage = ( ) => {
  return (
    <div className="">
      <HeroSection />
      <Intro />
      <Communities />
      <Audience />
      <Goals />
      <Benefits />
    </div>
  );
}

export default Home