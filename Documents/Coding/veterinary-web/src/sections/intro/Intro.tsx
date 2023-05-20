import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <section className='intro-container flex'>
      <div className='intro-div intro-div-left'>
        <img src='intro-img.png' />
      </div>
      <div className='intro-div intro-div-right'>
        <h1 className='intro-title'>Veterinářská péče jinak.</h1>
        <h3>
          Naše péče je Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Temporibus perspiciatis, quos reprehenderit mollitia atque provident!
          Placeat et perspiciatis odit quis?
        </h3>
        <button>Zjistit více</button>
        <p>Nebo nám zavolejte na: (+420) 467 728 829</p>
      </div>
    </section>
  );
}

export default Intro;
