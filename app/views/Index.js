import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Typist from 'react-typist';
import Fade from 'react-reveal/Fade';
import { FaChevronDown } from "react-icons/fa";
import { Link as Scroll } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Main from '../layouts/Main';
import Header from '../components/Template/Header';
import Nav from '../components/Template/Nav';
import data from '../data/contact';

const Index = () => {
  const cursorProps = {
    show: false,
    blink: true,
    element: '|',
    hideWhenDone: false,
    hideWhenDoneDelay: 1000,
  }
  const [introduce, setIntroduce] = useState(false);

  return (
  <Main fullPage={true}>
    <section id="landing" >
      <div className='center col-sm center-block'>
        <Typist cursor={cursorProps} onTypingDone={() => { setIntroduce( () => true )}}>
          <h1>Hi there. <Typist.Delay ms={500} /> I'm Kevin Mao. </h1>
        </Typist>
        <Fade when={introduce} duration={1500}>
          <Scroll activeClass="active" to="launch" spy={true} smooth={true} offset={50} duration={500}>
              <FaChevronDown />
          </Scroll>
        </Fade>
      </div>
    </section>

    <section id="launch">
      <div className='row'>

      <div className='col-md'>
        <Link to="/" className="logo">
            <img src={`${BASE_PATH}/images/me.jpg`} alt="" />
        </Link>
      </div>

      <div className='col-md' style={{padding: '1em'}}>
        <section id="sidebar">
          <section id="intro">
            <header>
              <h2>Kevin Mao </h2>
              <br />
              <p><a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a></p>
              <ul style={{listStyleType: 'none'}}>
                <li><a href="https://www.linkedin.com/in/im-kevin-mao">Software Engineer</a></li>
                <li><a href="https://www.instagram.com/kmaophotography/">Photographer</a></li>
              </ul>
            </header>
          </section>

          <section id="footer">
            <ul className="icons">
              {data.map(s => (
                <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
              ))}
            </ul>
          </section>
        </section>

      </div>
      </div>
    </section>
  </Main>
  );
};

export default Index;
