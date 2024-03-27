import React from 'react';
import './footer.css';
import img from '../../Asstes/event2.jpg';

const Footer = () => {
  return (
    <>
      <div className="footer_main_container">
        <section className="footer">
          <div className="footer_container">
            {/* Contact */}
            <div className="footer_contact">
              <div className="footer_contact_heading">Contact us</div>
              <div className="footer_contacts">
                <div className="footer_contact_desc">
                  <div className="footer_icon"></div>
                  <div>
                    <div className="footer_con">Call Us</div>
                    <div className="footer_small">+977 9876543210</div>
                  </div>
                </div>
                <div className="footer_contact_desc">
                  <div className="footer_icon"></div>
                  <div>
                    <div className="footer_con">Call Us</div>
                    <div className="footer_small">+977 9876543210</div>
                  </div>
                </div>
                <div className="footer_contact_desc">
                  <div className="footer_icon"></div>
                  <div>
                    <div className="footer_con">Call Us</div>
                    <div className="footer_small">+977 9876543210</div>
                  </div>
                </div>
              </div>
            </div>
            {/* Links */}
            <div className="footer_links_container">
              <div className="footer_contact_heading">Useful Links</div>
              <ul className="footer_ul_links">
                <li className="footer_links">
                  <i
                    className="fa-solid fa-minus"
                    style={{ color: 'skyblue', borderRadius: '10px' }}
                  ></i>{' '}
                  {''}
                  About Us
                </li>
                <li className="footer_links">
                  <i
                    className="fa-solid fa-minus"
                    style={{ color: 'skyblue', borderRadius: '10px' }}
                  ></i>{' '}
                  {''}
                  Our Classes
                </li>
                <li className="footer_links">
                  <i
                    className="fa-solid fa-minus"
                    style={{ color: 'skyblue', borderRadius: '10px' }}
                  ></i>{' '}
                  {''}
                  School Teachers
                </li>
                <li className="footer_links">
                  <i
                    className="fa-solid fa-minus"
                    style={{ color: 'skyblue', borderRadius: '10px' }}
                  ></i>{' '}
                  {''}
                  Recent Events
                </li>
                <li className="footer_links">
                  <i
                    className="fa-solid fa-minus"
                    style={{ color: 'skyblue', borderRadius: '10px' }}
                  ></i>{' '}
                  {''}
                  Our News
                </li>
              </ul>
            </div>
            {/* Blogs */}
            <div className="footer_blog">
              <div className="footer_blog_inner fbif">
                <div className="footer_blog_left">
                  <img src={img} alt="footer_image" className="footer_img" />
                </div>
                <div className="footer_blog_right">
                  <div className="footer_blog_heading">
                    This Long-Awaited Technology May Finally
                  </div>
                  <div className="footer_date">
                    {' '}
                    <i className="fa-regular fa-calendar footer_calendar"></i>{' '}
                    &nbsp;2022-12-30November 28, 2020
                  </div>
                </div>
              </div>
              <div className="footer_blog_inner">
                <div className="footer_blog_left">
                  <img src={img} alt="footer_image" className="footer_img" />
                </div>
                <div className="footer_blog_right">
                  <div className="footer_blog_heading">
                    This Long-Awaited Technology May Finally
                  </div>
                  <div className="footer_date">
                    {' '}
                    <i className="fa-regular fa-calendar footer_calendar"></i>{' '}
                    &nbsp;2022-12-30November 28, 2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Footer;
