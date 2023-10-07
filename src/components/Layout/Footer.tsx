import { Link } from 'react-router-dom';
import { AiFillFacebook } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';
import '../../styles/footer.css';

const Footer = () => {
  const size = 25;

  return (
    <footer className='flex'>
      <div className='footer-brand flex-col'>
        <div>
          <h1>luxury</h1>
          <h2>hotels</h2>
        </div>
        <span>
          <p>497 Evergreen Rd. Roseville, CA 95673</p>
          <p>+44 345 678 903</p>
          <p>luxury_hotels@gmail.com</p>
        </span>
      </div>
      <div className='footer-links'>
        <ul className='flex-col'>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/'>Terms & Conditions</Link>
          </li>
        </ul>
      </div>
      <div className='footer-social flex-col'>
        <span>
          <AiFillFacebook size={size} />
          <p>Facebook</p>
        </span>
        <span>
          <FaTwitter size={size} />
          <p>X</p>
        </span>
        <span>
          <BsInstagram size={size} />
          <p>Instagram</p>
        </span>
      </div>
      <div className='newsletter flex-col'>
        <h2>Subscribe to Newsletter</h2>
        <div className='flex'>
          <input type='email' required placeholder='example@example.com' />
          <button>Submit</button>
        </div>
      </div>
      <div className='footer-box'></div>
    </footer>
  );
};

export default Footer;
