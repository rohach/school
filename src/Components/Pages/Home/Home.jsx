import React from 'react';
import './home.css';
import home from '../../Asstes/home.png';

const Home = () => {
  return (
    <section style={{ marginTop: '2rem' }}>
      <div className="home_container">
        <div className="home_left">
          <div className="home_heading">
            The Smarter Way to Learn {''}
            <span style={{ color: '#f37335', fontWeight: 'bold' }}>
              Anything
            </span>
          </div>

          <div className="home_description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            recusandae earum mollitia molestias reiciendis! Accusantium,
            reiciendis. Accusamus, quisquam iure qui rem ullam delectus eveniet
            perferendis exercitationem blanditiis aperiam accusantium et?
          </div>
        </div>
        <div className="home_right">
          <img src={home} alt="homeImage" />
        </div>
      </div>
    </section>
  );
};

export default Home;
