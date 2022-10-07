import React from 'react';
import "./About.css";


const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About OverBooked</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src ='src/images/library-img.jpg' alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'> A bibliophile or bookworm is an individual who loves and frequently reads books. Here is a site for you;</h2>
            <p className='fs-17'>Inside a book's pages lie an amazing world where your guide is your imagination and the limit is how much time you can spare!</p>
            <p className='fs-17'>Here is a book club for those who are willing to explore and nature their reading habbits!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About