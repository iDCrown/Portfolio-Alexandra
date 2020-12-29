import React from 'react';
import PropTypes from 'prop-types';

// style 
import './image-card.scss';

const ImageCard = ({ url, title}) => (
    <div className="contentCard" >
      <img className="contentCard-image" src={url} alt={title} />
      <div className="contentCard-text">
        <div className="info">
          <p className="info-written">
            {title}
          </p>
        </div>
      </div>
    </div>
)

ImageCard.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default ImageCard;
