import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/Rnjimy7Dl80"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 2"
          src="https://www.youtube.com/embed/dBqEG6dIifs"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/7ujyi9ZIBxU"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 4"
          src="https://www.youtube.com/embed/dRBpII7N2Ak"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 5"
          src="https://www.youtube.com/embed/dh6pCnL17c8"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
    </Carousel>
  );
};

export default VideoCarousel;
