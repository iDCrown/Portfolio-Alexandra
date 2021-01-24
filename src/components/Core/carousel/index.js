import React,{memo} from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import PropTypes from 'prop-types';

// style 
import './carousel.scss'

// style
import './carousel.scss';

const Carousel = ({ images = [] }) => {
  return (
    <div className="carousel">
      <AliceCarousel infinite autoPlay autoPlayInterval="4000" >
        {
          images.map((img, id) => {
            return(
              <img src={img.file.url} key={id} alt="" className="carousel-sliderimg"/>
            )
          })
        }
      </AliceCarousel>
    </div>
  )
}

Carousel.propTypes = {
  images: PropTypes.array,
}

export default memo(Carousel);