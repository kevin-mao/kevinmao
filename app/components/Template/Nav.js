import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${BASE_PATH}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kevin Mao </h2>
        <p><a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a></p>
        <ul>
          <li><a href="https://www.linkedin.com/in/im-kevin-mao">Software Engineer</a></li>
          <li><a href="https://www.instagram.com/kmaophotography/">Photographer</a></li>
          <li>Adventurer</li>
        </ul>
      </header>
    </section>

    {/* <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Kevin. I like coding and photography.
        I am a <a href="https://engineering.columbia.edu/"> Columbia Engineering </a> student majoring
        in computer science and a software engineering intern at <a href="https://tulip.co/"> Tulip </a>.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section> */}

    <section id="footer">
      <ul className="icons">
        {data.map(s => (
          <li key={s.label}><a href={s.link}><FontAwesomeIcon icon={s.icon} /></a></li>
        ))}
      </ul>
      <p className="copyright">&copy; Kevin Mao <Link to="/">kevinmao.com</Link>.</p>
    </section>
  </section>
);

export default Nav;
