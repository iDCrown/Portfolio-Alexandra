import React from 'react';
import PropTypes from 'prop-types';

// components
import Carousel from '../../components/Core/carousel';
import renderRichText from '../../components/Base/RichText'

// style
import './project.scss'

const Project = ({ carousel, content, title, id }) => {
  const ContentText = renderRichText(JSON.parse(content.raw));
  return(
    <section id={id} className="project">
			<div className="project-carousel">
      <h3>PROJECTS</h3>
      <h1>{title}</h1>
        <Carousel images={carousel} />
      </div>
      <div className="project-contentext">
        {ContentText}
      </div>
    </section>
    
  )
}

Project.propTypes = {
  carousel: PropTypes.array,
  content: PropTypes.object,
  title: PropTypes.string,
  id: PropTypes.string.isRequired
}

export default Project;