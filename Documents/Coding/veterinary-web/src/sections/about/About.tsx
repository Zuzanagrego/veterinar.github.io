import React from 'react';
import './About.css';

function About() {
  return (
    <section className='about-container'>
      <div className='about-sub flex'>
        <div className='about-sub-left'>
          <h2>Osvědčený veterinář</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptas dicta laudantium officiis sapiente doloribus libero velit
            rerum eius odio excepturi nisi asperiores, ipsam odit iusto tempore
            iure, placeat necessitatibus.
          </h3>
          <img src='sub-logo-1.png' className='sub-logo-img' />
        </div>
        <div className='about-sub-right'>
          <img src='sub-img-1.jpg' className='sub-img-img' />
        </div>
      </div>
      <div className='about-sub flex'>
        <div className='about-sub-left'>
          <img src='sub-img-2.jpg' className='sub-img-img' />
        </div>
        <div className='about-sub-right'>
          <h2>Bezstresové prostředí</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptas dicta laudantium officiis sapiente doloribus libero velit
            rerum eius odio excepturi nisi asperiores, ipsam odit iusto tempore
            iure, placeat necessitatibus.
          </h3>
          <img src='sub-logo-2.png' className='sub-logo-img' />
        </div>
      </div>
      <div className='about-sub flex'>
        <div className='about-sub-left'>
          <h2>Osvědčený veterinář</h2>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            voluptas dicta laudantium officiis sapiente doloribus libero velit
            rerum eius odio excepturi nisi asperiores, ipsam odit iusto tempore
            iure, placeat necessitatibus.
          </h3>
          <img src='sub-logo-3.png' className='sub-logo-img' />
        </div>
        <div className='about-sub-right'>
          <img src='sub-img-3.jpg' className='sub-img-img' />
        </div>
      </div>
    </section>
  );
}

export default About;
