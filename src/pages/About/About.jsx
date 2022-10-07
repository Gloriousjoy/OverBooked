import React from 'react';
import "./About.css";
import bookShelf from "../../images/bookShelf"

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About OverBooked</h2>
            <p className='fs-17'>Inside a book's pages lie an amazing world where your guide is your imagination and the limit is how much time you can spare!</p>
            <p className='fs-17'>Here is a book club for those who are willing to explore and nature your reading habbits!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About