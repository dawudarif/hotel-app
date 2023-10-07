import '../../../styles/facilities.css';
import Hero from '../../common/Hero';
import mainImage from '../../../assets/main01.jpg';
import gymImage from '../../../assets/gym.png';
import spaImage from '../../../assets/spa.png';
import swimmingPoolImage from '../../../assets/swimming-pool.png';
import restaurantImage from '../../../assets/restaurant.png';
import laundryImage from '../../../assets/laundry.png';
import Testimonials from '../../common/Testimonials';

const Facilities = () => {
  const imagesArray = [
    gymImage,
    spaImage,
    swimmingPoolImage,
    restaurantImage,
    laundryImage,
  ];

  return (
    <div className='fa-page flex'>
      <div className='facilities-wrapper'>
        <Hero section='facilities' src={mainImage} />
        <div id='facilities' className='flex-col'>
          <h1>FACILITIES</h1>
          <h4>
            We want your stay at our lush hotel to be truly unforgettable.That
            is why we give special attention to all of your needs so that we can
            ensure an experience quite unique. Luxury hotels offers the perfect
            setting with stunning views for leisure and our modern luxury resort
            facilities will help you enjoy the best of all.
          </h4>
        </div>
        <div className='facility-images flex-col'>
          {imagesArray.map((img, i) => (
            <img src={img} alt='img' key={i} />
          ))}
        </div>
        <div className='testimonials flex-col'>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Facilities;
