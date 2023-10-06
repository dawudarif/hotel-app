import { useState } from 'react';
import { GrLinkNext, GrLinkPrevious } from 'react-icons/gr';
import { TestimonialsData } from '../../../data/Testimonials';

const Testimonials = () => {
  const [textIndex, setTextIndex] = useState(0);
  const size = 30;

  const handleNext = () => {
    if (textIndex === TestimonialsData.length - 1) {
      return;
    } else {
      setTextIndex((prev) => prev + 1);
    }
  };
  const handlePrev = () => {
    if (textIndex === 0) {
      return;
    } else {
      setTextIndex((prev) => prev - 1);
    }
  };

  return (
    <>
      <h1>Testimonials</h1>
      <div className='testimonial-body flex-col'>
        <h2>"{TestimonialsData[textIndex].text}"</h2>
        <h4>
          {TestimonialsData[textIndex].author},{' '}
          {TestimonialsData[textIndex].country}
        </h4>

        <div>
          <button onClick={handlePrev} disabled={textIndex === 0}>
            <GrLinkPrevious size={size} />
          </button>
          <button
            onClick={handleNext}
            disabled={textIndex === TestimonialsData.length - 1}
          >
            <GrLinkNext size={size} />
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
