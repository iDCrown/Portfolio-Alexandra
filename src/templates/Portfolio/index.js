import React from 'react';
import PropTypes from 'prop-types';

// components
import ImageCard from '../../components/Core/cards/ImageCard';

// style
import './portfolio.scss';

//icon
import icon from "../../assets/images/menu.svg"

const Portfolio = ({image, id, title}) => {
  console.log(image)
  return (
    <section id={ id } className="two">
      <div className="containerportfolio">
          <h1 className="containerportfolio-h1">{title}</h1>
          <img className="containerportfolio-icon" src={icon} alt="icon"/>
          <div className="containerCard">
            {
              image.map((img) => {
                return <ImageCard key={img.id} url={img.file.url} title={img.title}/>
              })
            }
          </div>
         
      </div>
    </section>
    )
}

Portfolio.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.array.isRequired,
}

export default Portfolio;