import React from 'react';
import './Blog.css';
import me from '../../Asstes/geometry-bg.jpg';

const Blog = () => {
  return (
    <section>
      <div className="blog_container">
        <div className="blog_left">
          <div className="gallery_heading" style={{ marginBottom: '1rem' }}>
            Our{' '}
            <span
              style={{
                color: '#ff5500',
                fontWeight: 'bold',
              }}
            >
              {' '}
              Blogs
            </span>
          </div>
          <div className="first_blog">
            <div className="blog_image_first">
              <img src={me} alt="blog_image" className="blog_img_first" />
            </div>
            <div className="blog_inner">
              <div className="blog_date bd1">November 19, 2023</div>
              <div
                className="blog_title"
                style={{ fontSize: '1.3rem', fontWeight: 'bold' }}
              >
                A fun toddler coloring training on classroom
              </div>
              <div className="blog_desc">
                Beautiful branding for changes by Never Now in Australia.
                changes is a platform for open discussion in an inclusive and
                collaborative environment, providing the...
              </div>
              <div className="blog_readmore">Read more</div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="blog_right">
          {/* top */}
          <div className="blog_right_top">
            <div className="second_blog">
              <div className="blog_image">
                <img src={me} alt="blog_image" className="blog_img" />
              </div>
              <div className="blog_title btsm">
                <div className="blog_date_small bd1">November 19, 2023</div>A
                fun toddler coloring training on classroom
                <div className="blog_readmore">Read more</div>
              </div>
            </div>
            <div className="third_blog">
              <div className="blog_image">
                <img src={me} alt="blog_image" className="blog_img" />
              </div>
              <div className="blog_title btsm">
                <div className="blog_date_small bd2">November 19, 2023</div>A
                fun toddler coloring training on classroom
                <div className="blog_readmore">Read more</div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className="blog_right_bottom">
            <div className="fourth_blog">
              <div className="blog_image">
                <img src={me} alt="blog_image" className="blog_img" />
              </div>
              <div className="blog_title btsm">
                <div className="blog_date_small bd3">November 19, 2023</div>A
                fun toddler coloring training on classroom
                <div className="blog_readmore">Read more</div>
              </div>
            </div>
            <div className="fifth_blog">
              <div className="blog_image">
                <img src={me} alt="blog_image" className="blog_img" />
              </div>
              <div className="blog_title btsm">
                <div className="blog_date_small bd2">November 19, 2023</div>A
                fun toddler coloring training on classroom
                <div className="blog_readmore">Read more</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
