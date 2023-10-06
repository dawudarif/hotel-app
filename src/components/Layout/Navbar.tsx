import { Link } from 'react-router-dom';
import '../../styles/navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className='nav-brand flex-col'>
        <h4>Luxury</h4>
        <h6>hotels</h6>
      </div>
      <ul className='flex'>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/facilities'>Facilities</Link>
        </li>
        <li>
          <Link to='/rooms'>Rooms</Link>
        </li>
        <li>
          <Link to='/contact'>Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
