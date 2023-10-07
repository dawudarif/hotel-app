import '../../../styles/contact.css';
import { BsArrowRight } from 'react-icons/bs';

const Contact = () => {
  return (
    <div className='contact'>
      <div className='contact-heading flex'>CONTACT-US</div>
      <div className='contact-head'>
        <h1> We are here for you</h1>
        <h5>
          At Luxury Hotels, we take our customers seriously. Do you have any
          enquiries, complaints or requests, please forward it to our support
          desk and we will get back to uou as soon as possible.
        </h5>
      </div>

      <div className='contact-details'>
        <div>
          <h4>497 Evergreen Rd. Roseville, CA 95673</h4>
          <span className='flex'>
            <h5>View Map</h5>
            <BsArrowRight size={20} />
          </span>
          <p>Phone: +44 345 678 903</p>
          <p>Email: luxury_hotels@gmail.com</p>
        </div>
        <form className='flex-col'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' />
          <label htmlFor='email'>Email</label>
          <input type='text' name='email' />
          <label htmlFor='message'>Message</label>
          <textarea name='message' rows={10} />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
