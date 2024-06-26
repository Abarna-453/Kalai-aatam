import React from 'react';
import { Carousel } from 'react-bootstrap';

const VideoCarousel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <iframe
          title="Video 1"
          src="https://www.youtube.com/embed/JWhA3ldZcyY"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 2"
          src="https://www.youtube.com/embed/KCLQ_NR3RmI"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 3"
          src="https://www.youtube.com/embed/Ft7MjyglZT0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 4"
          src="https://www.youtube.com/embed/ErtbifqxJwA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style={{ backgroundColor: 'white', width: '100%', height: '310px' }}
        ></iframe>
      </Carousel.Item>
      <Carousel.Item>
        <iframe
          title="Video 5"
          src="https://www.youtube.com/embed/livZO3BYe5U"
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
