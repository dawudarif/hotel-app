import { HomeExploreData } from '../../../data/HomeExploreData';

const HomeExplore = () => {
  return (
    <>
      <h4>All our room types are including complementary breakfast</h4>
      {HomeExploreData.map((item, i) => (
        <div key={i} className='flex home-item'>
          <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
            <button className='home-button'>Explore</button>
          </div>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </>
  );
};

export default HomeExplore;
