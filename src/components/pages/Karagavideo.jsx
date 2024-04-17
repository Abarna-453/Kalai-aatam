import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/WoxoWSn6slo"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 2"
          src="https://www.youtube.com/embed/U4cS5T3Bzb4"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/NBMt3QXwqLA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 4"
          src="https://www.youtube.com/embed/81rxk9aOehY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 5"
          src="https://www.youtube.com/embed/juIxCiG-hcw"
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
