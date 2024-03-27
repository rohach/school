import React from 'react';
import './newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="newsletter_container">
        <div className="dot1 dot"></div>
        <div className="dot2"></div>
        <div className="dot3"></div>
        <div className="newsletter_container_left">
          <div className="join_us">
            Join us <br /> and stay tuned!
          </div>
          <div className="newsletter_desc">
            Curation active learning ecosystem learning content management
            system lxd lxp rapid learning
          </div>
        </div>
        <div className="newsletter_container_right">
          <form action="">
            <div className="form_small">
              <input
                type="text"
                placeholder="Your name"
                className="name_input"
              />
              <input
                type="email"
                placeholder="Your email"
                className="email_input"
              />
            </div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Message"
              className="message_input"
            ></textarea>
            <div className="form_send">Send a message</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
