import React from 'react';
import PropTypes from 'prop-types';

// style 
import './image-card.scss';

const ImageCard = ({ url, title, onClick, id }) => (
    <div className="contentCard" onKeyDown="" onClick={() => onClick(id)}>
      <img className="contentCard-image" src={url} alt="" />
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
  onClick: PropTypes.func.isRequired,
};

export default ImageCard;
