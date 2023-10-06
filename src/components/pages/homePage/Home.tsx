import '../../../styles/home.css';
import HomeExplore from './HomeExplore';
import mainImage from '../../../assets/main02.jpg';
import { BsArrowDownCircleFill } from 'react-icons/bs';
import Testimonials from './Testimonials';

const Home = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='home'>
      <div className='image-container'>
        <img src={mainImage} alt='main' />
        <div className='img-title'>
          <div>
            <h3>welcome to</h3>
            <h1>luxury</h1>
            <h2>hotels</h2>
            <h4>
              Book your stay and enjoy luxury redefined at the most affordable
              rates
            </h4>
          </div>
          <span className='home-btn flex-col'>
            <button>Book Now</button>
            <BsArrowDownCircleFill
              size={40}
              onClick={() => scrollToSection('home-details')}
            />
          </span>
        </div>
      </div>

      <div className='flex-col' id='home-details'>
        <HomeExplore />
      </div>

      <div className='testimonials flex-col'>
        <Testimonials />
      </div>
    </div>
  );
};

export default Home;
