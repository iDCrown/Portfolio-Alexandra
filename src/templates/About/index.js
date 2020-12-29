import React from 'react';
import PropTypes from 'prop-types'

// components
import renderRichText from '../../components/Base/RichText';

// style
import './about.scss'


const About = ({ id, title, subtitle, image }) => {
    return (
      <section id={ id } className="content-about">
        <div className="about">
          <h1 className="about-h1">{title}</h1>
          <h2 className="about-h2">{subtitle}</h2>
           
        </div>
        <div className="contentainer-image-about">
          <div className="content-image">
            <img src={image} alt="" className="about-image" />
          </div>
        </div>
      </section>
    )

}

About.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}

export default About; 