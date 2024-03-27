import React, { useState } from 'react';
import './teachers.css';
import me from '../../Asstes/me.jpg';

const Teachers = () => {
  const [testimonialName, setTestimonialName] = useState('First');
  const [testimonialText, setTestimonialText] = useState('Testimonial 1 Text');

  const handleImageClick = testimonialNumber => {
    switch (testimonialNumber) {
      case 1:
        setTestimonialName('First');
        setTestimonialText('Testimonial 1 Text');
        break;
      case 2:
        setTestimonialName('Second');
        setTestimonialText('Testimonial 2 Text');
        break;
      case 3:
        setTestimonialName('Third');
        setTestimonialText('Testimonial 3 Text');
        break;
      case 4:
        setTestimonialName('Fourth');
        setTestimonialText('Testimonial 4 Text');
        break;
      case 5:
        setTestimonialName('Fifth');
        setTestimonialText('Testimonial 5 Text');
        break;
      case 6:
        setTestimonialName('Sixth');
        setTestimonialText('Testimonial 6 Text');
        break;
      default:
        setTestimonialText('');
    }
  };

  return (
    <section>
      <div className="teachers_container">
        <div className="teachers_container_left">
          <div className="teachers_heading">
            Our{' '}
            <span style={{ color: '#ff5500', fontWeight: 'bold' }}>
              Teachers
            </span>
          </div>{' '}
          <p className="teachers_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque eum
            amet, architecto repellat debitis suscipit, atque facere reiciendis
            ullam maxime dicta veniam fuga rerum ea quod dolorem qui tempora
            sit.
          </p>
          <div className="teachers_quote">
            <div className="techer_name">{testimonialName}</div>
            <p className="about_teacher">{testimonialText}</p>
          </div>
        </div>
        <div className="teachers_container_right">
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(1)}
            />
          </div>{' '}
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(2)}
            />
          </div>{' '}
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(3)}
            />
          </div>{' '}
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(4)}
            />
          </div>{' '}
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(5)}
            />
          </div>{' '}
          <div className="teacher_img">
            <img
              src={me}
              alt="teacherImage"
              className="teacher_image"
              onClick={() => handleImageClick(6)}
            />
          </div>{' '}
        </div>
      </div>
    </section>
  );
};

export default Teachers;
