import React, { useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Helmet from 'react-helmet';
import Gallery from 'react-photo-gallery';
import Carousel, { Modal, ModalGateway } from 'react-images';

import Main from '../layouts/Main';
import photos from '../data/photos';


const Photography = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Main>
      <Helmet title="Photography" />
      <article className="post" id="projects">
        <header>
          <div className="title">
            <h2><Link to="/projects">Photography</Link></h2>
            <p>Follow me on <a href="https://www.instagram.com/kmaophotography/" target="_blank" rel="noopener noreferrer">Instragram</a>!</p>
          </div>
        </header>
        <Gallery photos={photos} direction="column" onClick={openLightbox} />
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={closeLightbox}>
              <Carousel
                showCloseButton
                backdropClosesModal
                currentIndex={currentImage}
                views={photos}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </article>
    </Main>
  );
};

export default Photography;
