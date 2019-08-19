
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import data from '../data/contact';
import Header from '../components/Template/Header';

const Blurb = () => (
  <React.Fragment>
    {window.location.pathname === `${BASE_PATH}/home` && <Header /> }
    <section id="blurb">
      <div className="container">
        <div className="row" style={{ maxWidth: '50em' }}>

          <div className="col-8">
            <Link to="/home" className="logo">
              <img src={`${BASE_PATH}/images/me.jpg`} alt="" />
            </Link>
          </div>

          <div className="col-4" style={{ padding: '1em' }}>
            <header>
              {window.location.pathname === `${BASE_PATH}/home` && <h2>Kevin Mao</h2> }
              <p><a href="mailto:imkevinmao@gmail.com">imkevinmao@gmail.com</a></p>

            </header>
            <section className="blurb">
              <p>I&apos;m a computer science student (class of 2021) at
                <a href="https://engineering.columbia.edu/" target="_blank" rel="noopener noreferrer"> Columbia University </a>
               I like to explore NYC with my camera, rock climb, and code for a cause!
              </p>
              <ul className="actions">
                <li>
                  <Link to="/resume" className="button">Learn More</Link>
                </li>
              </ul>
            </section>

            <section id="footer">
              <ul className="icons">
                {data.map(s => (
                  <li key={s.label}><a href={s.link} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={s.icon} /></a></li>
                ))}
              </ul>
            </section>

          </div>
        </div>
      </div>
    </section>
  </React.Fragment>);

export default Blurb;
