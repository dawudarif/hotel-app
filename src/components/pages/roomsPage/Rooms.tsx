import '../../../styles/rooms.css';
import Hero from '../../common/Hero';
import mainImage from '../../../assets/head.jpg';
import RoomDetails from './RoomDetails';
import Testimonials from '../../common/Testimonials';

const Rooms = () => {
  return (
    <div className='rooms flex'>
      <Hero section='rooms' src={mainImage} />
      <div className='rooms-wrapper flex-col'>
        <div className='rooms-head flex-col' id='rooms'>
          <h1>ROOMS AND RATES</h1>
          <p>
            Each of our bright, light-flooded rooms come with everything you
            could possibly need for a comfortable stay. And yes, comfort isn't
            only objective, we also value good design, sleek contemporary
            furnishing complemented by the rich tones of nature's palette as
            visible from our rooms' sea-view windows and terraces.
          </p>
        </div>
        <RoomDetails />
        <div className='testimonials'>
          <Testimonials />
        </div>
      </div>
    </div>
  );
};

export default Rooms;
