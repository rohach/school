import React from 'react';
import './right.css';
import classwork from '../../Asstes/classworks.webp';
import mind from '../../Asstes/mind.png';
import infra from '../../Asstes/infra.png';
import book from '../../Asstes/book.png';

const Right = () => {
  return (
    <div className="right_fit_container">
      <section>
        <div className="right_container">
          <div className="right_choice_left">
            <div className="right_choice_heading">
              Why Our Schools are the Right Fit for Your Child?
            </div>
            <div className="right_choice_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, hic et. Cumque temporibus aspernatur pariatur rem in
              autem aut ex.
            </div>
            <div className="right_choice_details">
              <div className="welltrained">
                <span>
                  <img src={mind} alt="smallIcon" className="small_icon" />
                </span>{' '}
                &nbsp; Well Trained Professionals
              </div>
              <div className="awesome">
                {' '}
                <span>
                  <img src={infra} alt="smallIcon" className="small_icon" />{' '}
                </span>{' '}
                &nbsp; Awesome Infra-Structure
              </div>
              <div className="international_lesson">
                {' '}
                <span>
                  <img src={book} alt="smallIcon" className="small_icon" />
                </span>{' '}
                &nbsp; International Lesson Patterns
              </div>
            </div>
          </div>
          <div className="right_choice_right">
            <img src={classwork} alt="classwork" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Right;
