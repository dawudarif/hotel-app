import { HomeExploreData } from '../../../data/HomeExploreData';

const HomeExplore = () => {
  return (
    <>
      {HomeExploreData.map((item, i) => (
        <div key={i} className='flex home-item'>
          <div>
            <h1>{item.title}</h1>
            <p>{item.text}</p>
          </div>
          <img src={item.img} alt={item.title} />
        </div>
      ))}
    </>
  );
};

export default HomeExplore;
