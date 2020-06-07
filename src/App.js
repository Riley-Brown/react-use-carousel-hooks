import React from 'react';
import useCarousel from './hooks/useCarousel';

import doggo from './img/doggo1.jpg';
import doggo2 from './img/doggo2.jpg';
import doggo3 from './img/doggo3.jpg';

import previousSvg from './svg/previous.svg';
import nextSvg from './svg/next.svg';
import playSvg from './svg/play.svg';
import pauseSvg from './svg/pause.svg';

function App() {
  const imgs = [doggo, doggo2, doggo3];

  const { index, next, previous, pause, resume, isPaused } = useCarousel({
    dataArray: imgs,
    interval: 3000,
    allowArrowKeysNavigation: true
  });

  return (
    <div className="carousel-container">
      <img src={imgs[index]} alt="Good doggy" />
      <div className="carousel-controls">
        <button onClick={previous} aria-label="Previous">
          <img src={previousSvg} alt="Previous" />
        </button>
        {isPaused ? (
          <button onClick={resume} aria-label="Play">
            <img src={playSvg} alt="Play" />
          </button>
        ) : (
          <button onClick={pause} aria-label="Pause">
            <img src={pauseSvg} alt="Pause" />
          </button>
        )}
        <button onClick={next} aria-label="Next">
          <img src={nextSvg} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default App;
