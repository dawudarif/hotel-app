import { BsArrowDownCircleFill } from 'react-icons/bs';

interface HeroProps {
  src: string;
  section: string;
}

const Hero: React.FC<HeroProps> = ({ section, src }) => {
  const scrollToSection = (section: string) => {
    const sectionView = document.getElementById(section);
    if (sectionView) {
      sectionView.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='image-container flex'>
      <img src={src} alt='main' />
      <div className='img-title flex'>
        <div className='img-wrapper'>
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
              onClick={() => scrollToSection(section)}
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
