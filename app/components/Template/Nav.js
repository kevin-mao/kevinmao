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
        <ul className="icons">
          {data.map(s => (
            <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a></li>
          ))}
        </ul>
      </header>
    </section>
  </section>
);

export default Nav;
