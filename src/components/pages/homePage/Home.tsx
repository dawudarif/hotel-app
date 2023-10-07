import '../../../styles/home.css';
import HomeExplore from './HomeExplore';
import mainImage from '../../../assets/main03.png';
import Testimonials from '../../common/Testimonials';
import Hero from '../../common/Hero';

const Home = () => {
  return (
    <main className='home'>
      <Hero section='home-details' src={mainImage} />
      <div className='flex-col' id='home-details'>
        <HomeExplore />
      </div>

      <div className='testimonials flex-col'>
        <Testimonials />
      </div>
    </main>
  );
};

export default Home;
