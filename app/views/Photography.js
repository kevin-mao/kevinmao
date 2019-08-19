import React from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';

import Main from '../layouts/Main';

const Photography = () => (
  <Main>
    <Helmet title="Projects" />
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2><Link to="/projects">Photography</Link></h2>
          <p>COMING SOON but check out my <a href="https://www.instagram.com/kmaophotography/">instagram</a> for now</p>
        </div>
      </header>
    </article>
  </Main>
);

export default Photography;
