import React from 'react';
import './events.css';
import events from '../../Asstes/events.png';

const Events = () => {
  return (
    <section>
      <div className="events_container">
        <div className="events_container_left">
          <div className="events_container_heading">
            Upcoming
            <span style={{ color: '#ff5500', fontWeight: 'bold' }}> Event</span>
          </div>
          <div className="event_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            maxime explicabo optio facere iusto veritatis, repellat vero impedit
            ea nisi.
          </div>
          <div className="event_image_container">
            <img src={events} alt="eventsImage" />
          </div>
        </div>
        <div className="events_container_right">
          <div className="event">
            <div className="date_time">
              <div className="event_date">
                <i className="fa-regular fa-calendar"></i> &nbsp;2022-12-30
              </div>
              <div className="event_time">
                <i className="fa-regular fa-clock"></i>&nbsp; 12:00
              </div>
            </div>
            <div className="event_heading">Explore Watercolor Illustration</div>
            <div className="event_location">
              <i className="fa-solid fa-location-dot location_icon"></i> 25
              Grafton St, Worcester
            </div>
          </div>
          <div className="event second_event">
            <div className="date_time">
              <div className="event_date">
                <i className="fa-regular fa-calendar"></i> &nbsp;2022-12-30
              </div>
              <div className="event_time">
                <i className="fa-regular fa-clock"></i>&nbsp; 12:00
              </div>
            </div>
            <div className="event_heading">Explore Watercolor Illustration</div>
            <div className="event_location">
              <i className="fa-solid fa-location-dot location_icon"></i> 25
              Grafton St, Worcester
            </div>
          </div>
          <div className="event">
            <div className="date_time">
              <div className="event_date">
                <i className="fa-regular fa-calendar"></i> &nbsp;2022-12-30
              </div>
              <div className="event_time">
                <i className="fa-regular fa-clock"></i>&nbsp; 12:00
              </div>
            </div>
            <div className="event_heading">Explore Watercolor Illustration</div>
            <div className="event_location">
              <i className="fa-solid fa-location-dot location_icon"></i> 25
              Grafton St, Worcester
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;
