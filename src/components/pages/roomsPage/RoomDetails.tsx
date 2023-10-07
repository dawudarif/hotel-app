import single from '../../../assets/single.jpg';
import double from '../../../assets/double.jpg';
import twin from '../../../assets/twin.jpg';
import { AiOutlinePlus } from 'react-icons/ai';

const rooms = [
  { img: single, price: 147, text: 'single room' },
  { img: double, price: 165, text: 'double room' },
  { img: twin, price: 180, text: 'twin room' },
];

const RoomDetails = () => {
  return (
    <div className='flex-col rooms-parent'>
      {rooms.map((room, i) => (
        <div key={i} className='single-room flex-col'>
          <img src={room.img} alt='room' />
          <h1>{room.text}</h1>
          <div className='room-details flex'>
            <span className='flex span-parent'>
              <span className='plus flex'>
                <AiOutlinePlus size={30} />
              </span>
              <p>VIEW ROOM DETAILS</p>
            </span>
            <button>${room.price} Avg/night</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RoomDetails;
