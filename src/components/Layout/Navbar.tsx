import { Link } from 'react-router-dom';
import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';
import '../../styles/navbar.css';

const Navbar = () => {
  const [view, setView] = useState(false);

  return (
    <>
      <nav className='flex'>
        <main className='nav-wrapper'>
          <div className='nav-brand flex-col'>
            <h4>Luxury</h4>
            <h6>hotels</h6>
          </div>
          <ul className='flex navbar'>
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
          <div className='sandwich'>
            <AiOutlineMenu size={30} onClick={() => setView(!view)} />
          </div>
        </main>
      </nav>

      <div
        className={`mobile-nav ${view ? 'mobile-nav-show' : 'mobile-nav-hide'}`}
      >
        <MdClose
          size={35}
          onClick={() => setView(false)}
          className='close-icon'
        />
        <ul className='flex'>
          <li>
            <Link to='/' onClick={() => setView(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to='/facilities' onClick={() => setView(false)}>
              Facilities
            </Link>
          </li>
          <li>
            <Link to='/rooms' onClick={() => setView(false)}>
              Rooms
            </Link>
          </li>
          <li>
            <Link to='/contact' onClick={() => setView(false)}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
