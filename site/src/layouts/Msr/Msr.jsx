import React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import './Msr.css';
import picture from '../../assets/images/MSRHeader.png';
import picture1 from '../../assets/images/Pic_1.jpg';
import p1 from '../../assets/images/1.png';
import p2 from '../../assets/images/2.png';
import p3 from '../../assets/images/3.png';
function Msr() {
  return (
    <div className='Msr'>
      <Nav title='Msr'></Nav>
      <div class='grid'>
        <div style={{ padding: '64px' }}>
          <div
            className='background'
            style={{ backgroundImage: `url('${picture}')` }}
          ></div>
        </div>

        <div className='text-container32'>
          is a topic that aims to help establish innovative approaches inside
          corporations. The mission of this thought is to inspire and showcase
          the need of a movement of individualistic cultures, social
          interdependence and innovative entrepreneurship. It is important for
          youth, primarly in developing countries to aspire for better
          revolutionary action in business seeking modern solutions as well as
          caring for social impact and integrity.
        </div>
      </div>
      <div class='grid'>
        <div
          className='background-image'
          style={{ backgroundImage: `url('${p1}')` }}
        ></div>
        <div className='text-container'>
          <h2>METAPROGETTO</h2>
          <br />
          <p>
            Metaprogetto is the intern Research and Development section of our
            company, where all of our projects are created. An interdisciplinary
            space where chefs, designers, communications experts and researchers
            work together in order to create innovative projects from a business
            , gastronomical and communicative stand point.
          </p>
        </div>
      </div>
      <div class='reverse-grid offset'>
        <div className='text-container'>
          <h2>METAPROGETTO</h2>
          <br />
          <p>
            Metaprogetto is the intern Research and Development section of our
            company, where all of our projects are created. An interdisciplinary
            space where chefs, designers, communications experts and researchers
            work together in order to create innovative projects from a business
            , gastronomical and communicative stand point.
          </p>
        </div>
        <div
          className='background-image'
          style={{ backgroundImage: `url('${p2}')` }}
        ></div>
      </div>
      <div class='grid offsetX2'>
        <div
          className='background-image'
          style={{ backgroundImage: `url('${p3}')` }}
        ></div>
        <div className='text-container'>
          <h2>METAPROGETTO</h2>
          <br />
          <p>
            Metaprogetto is the intern Research and Development section of our
            company, where all of our projects are created. An interdisciplinary
            space where chefs, designers, communications experts and researchers
            work together in order to create innovative projects from a business
            , gastronomical and communicative stand point.
          </p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default Msr;
