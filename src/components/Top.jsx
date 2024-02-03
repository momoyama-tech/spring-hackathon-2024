import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <ExampleCarouselImage text="First slide" 
        imageUrl="no1_a.png"
        />
        <Carousel.Caption>
          <h3>ようこそ桃山テック部春合宿2024サイトへ</h3>
          <p>　</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Second slide"
         imageUrl="no1_a.png"
          />
        <Carousel.Caption>
          <h3> </h3>
          <p> </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ExampleCarouselImage text="Third slide"
         imageUrl="s3.png"
        />
        <Carousel.Caption>
          <h3> </h3>
          <p>
             
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;