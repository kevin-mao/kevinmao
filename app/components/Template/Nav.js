import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/home" className="logo">
        <img src={`${BASE_PATH}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Mao </h2>
        <p><a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a></p>
      </header>
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
    </section>

    {/* <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m a <a href="https://engineering.columbia.edu/" target="_blank" rel="noopener noreferrer"> Columbia Engineering </a> student (class of 2021) majoring
        in computer science. I like to explore NYC with my camera, rock climb, and code for a cause!
      </p>
    </section> */}

    {/* <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Kevin Mao <Link to="/">kevinmao.com</Link></p>
    </section> */}
  </section>
);

export default Nav;
