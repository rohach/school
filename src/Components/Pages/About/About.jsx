import React from 'react';
import './about.css';
import homeImg from '../../Asstes/kids.jpg';
import kindler from '../../Asstes/minor.png';
import elementry from '../../Asstes/elementry.png';
import middle from '../../Asstes/middle.png';

const About = () => {
  return (
    <section>
      <div className="gallery_heading" style={{ marginTop: '10rem' }}>
        About <span style={{ color: '#ff5500', fontWeight: 'bold' }}> Us</span>
      </div>
      <div className="about_container">
        <div className="about_container_left">
          <img src={homeImg} alt="Home Image" className="home_image" />
        </div>
        <div className="about_container_right">
          <div className="about_heading">Making a Mark Since 1993</div>
          <div className="about_desc">
            The Solidarity International Academy is the result of a vision and
            determination of a handful of missionaries from Nepal and abroad. A
            dream to establish a model education institution in Makawanpur was
            realised with the establishment of the school.The school has
            celebrated 25 glorious years of quality education.It strives to give
            the best education for all. The school is run by Solidarity Public
            Educational Trust. Currently there are 1700 students studying in the
            school. Over 1300 students have appeared for the SEE examinations.
            The school has a history of academically leading the district in
            Grade 8 and 10 examinations. At the same time the school runs a
            sponsorship scheme. 118 students study in the school with free
            boarding and school facilities.
          </div>
        </div>
      </div>
      <div className="about_details">
        <div className="kinder">
          <img
            src={kindler}
            alt="kindlerImage"
            className="about_details_image"
          />
          <div className="about_inner_div_heading">Kindler (3-6) Years</div>
          <p className="about_inner_div_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            quos iure, voluptate sit quia neque.
          </p>
          <div className="read_more rm1">Read More</div>
        </div>
        <div className="elimentry">
          <img
            src={elementry}
            alt="elementryImage"
            className="about_details_image"
          />
          <div className="about_inner_div_heading">Elementry School</div>
          <p className="about_inner_div_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            quos iure, voluptate sit quia neque.
          </p>
          <div className="read_more rm2">Read More</div>
        </div>
        <div className="middle">
          <img src={middle} alt="middleImage" className="about_details_image" />
          <div className="about_inner_div_heading">Middle (10-16) Years</div>
          <p className="about_inner_div_desc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente
            quos iure, voluptate sit quia neque.
          </p>
          <div className="read_more rm3">Read More</div>
        </div>
      </div>
    </section>
  );
};

export default About;
